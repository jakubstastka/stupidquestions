import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';


interface Question {
  id: string;
  created: string;
  question: string;
  answer: string;
}

interface QuestionsProps {
  questions: Question[];
}

const Questions: NextPage<QuestionsProps> = ({ questions }) => {
  return (
    <div className='px-2'>
      <div className='grid grid-grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pt-12 gap-5'>
          {questions.map((question) => (
            <div className='h-full' key={question.id}>
              <Link href={`/questions/${question.id}`}>
                <div className='flex flex-col space-y-3 border-2 p-2 border-yellow-600 bg-gray-200 hover:bg-yellow-300 text-yellow-800 rounded-md justify-between h-full'>
                  <div>
                    <div>{question.question}</div>
                  </div>
                  <div className='text-gray-500 text-sm font-thin'>
                    Přidáno: {format(new Date(question.created), 'd. M. yyyy')}
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<QuestionsProps> = async () => {
  const res = await fetch(`${process.env.API_URL}/questions`);
  const questions: Question[] = await res.json();

  return {
    props: {
      questions,
    },
  };
};

export default Questions;

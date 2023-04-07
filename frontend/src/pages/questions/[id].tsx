import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

type QuestionProps = {
  id: string;
  question: string;
  answer: string;
};

type QuestionPageProps = {
  question: QuestionProps;
};

export default function QuestionPage({ question }: QuestionPageProps) {
  const router = useRouter();

  // Type guard to ensure that the `id` property exists
  if (!router.query.id) {
    return <div>Načítám...</div>;
  }

  const { id } = router.query;

  return (
    <div className='px-44 pt-10 space-y-3'>
        <div className='text-xl text-yellow-800'>{question.question}</div>
        <div className='text-yellow-700'>{question.answer}</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<QuestionPageProps> = async (context) => {
  const { id } = context.query;
  const res = await fetch(`http://localhost:8000/api/questions/${id}/`);
  const question = await res.json();

  return {
    props: {
      question,
    },
  };
};

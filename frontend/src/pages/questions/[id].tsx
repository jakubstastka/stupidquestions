import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from 'react-icons/bs';

type QuestionProps = {
  id: string;
  question: string;
  answer: string;
  score: number;
};

type QuestionPageProps = {
  question: QuestionProps;
};

export default function QuestionPage({ question }: QuestionPageProps) {
  const router = useRouter();

  const baseApi = process.env.API_URL

  const handleScoreUpdate = async (scoreAction: string) => {
    
    const response = await fetch(`${baseApi}/questions/${question.id}/score?score_action=${scoreAction}`, {
      method: 'PATCH',
    });

    if (!response.ok) {
      console.log(response)
      throw new Error('Network response was not ok');
    }

    const scoreElement = document.getElementById(`question-${question.id}-score`);
    if (scoreElement) {
      const currentScore = parseInt(scoreElement.innerText);
      const newScore = scoreAction === 'increment' ? currentScore + 1 : currentScore - 1;
      scoreElement.innerText = newScore.toString();
  }
  };

  const handleThumbsUp = async () => {
    console.log("thumb up!")
    await handleScoreUpdate('increment');
  };

  const handleThumbsDown = async () => {
    await handleScoreUpdate('decrement');
  };

  // Type guard to ensure that the `id` property exists
  if (!router.query.id) {
    return <div>Načítám...</div>;
  }

  const { id } = router.query;

  return (
    <div className='p-3 md:px-44 pt-10 space-y-3 spaces-y-10'>

      <div>
          <div className='text-xl text-yellow-800'>{question.question}</div>
          <div className='text-yellow-700'>{question.answer}</div>
      </div>

      <div className='text-sm text-gray-500 pt-12 space-y-6'>
        <div>Tato otázka má skóre <span id={`question-${question.id}-score`}>{question.score}</span> </div>
        <div className='flex flex-col space-y-3'>
          <div className='flex flex-row space-x-3' onClick={handleThumbsUp}>
              <div><BsFillHandThumbsUpFill className='text-xl text-emerald-600'/></div>
              <div>Skvělá otázka</div>
            </div>
          <div className='flex flex-row space-x-3' onClick={handleThumbsDown}>
            <div><BsFillHandThumbsDownFill className='text-xl text-red-600' /></div>
            <div>Hrozná otázka</div>
          </div>
        </div>
      </div>
    </div>

  );
}

export const getServerSideProps: GetServerSideProps<QuestionPageProps> = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${process.env.API_URL}/questions/${id}/`);
  const question = await res.json();

  return {
    props: {
      question,
    },
  };
};

import { useState } from 'react';

const apiUrl = process.env.API_URL

export default function AskYourQuestion() {
  const [question, setQuestion] = useState('');
  const [isFormSent, setIsFormSent] = useState(false);

  console.log("api url", apiUrl)


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const response = await fetch(`${apiUrl}/questions/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    if (response.ok) {
      setIsFormSent(!isFormSent)
    } else {
      // Error handling
    }

  };
  

  return (
    <div className='flex flex-col items-center justify-center pt-10 space-y-3 p-3'>
      <div className='text-2xl text-yellow-600'>Položte svoji blbou otázku!</div>
      {!isFormSent && (
        <form onSubmit={handleSubmit}>
        <div>
          <textarea
            className='h-48 w-96 rounded-md border-2 border-yellow-700 text-left text-top align-text-top'
            id="question"
            name="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
        </div>
        <div className='flex justify-center pt-3'>
            <button type="submit" className='bg-yellow-600 text-white px-4 py-2 rounded-md'>Submit</button>
        </div>
      </form>
      )}
      {isFormSent && (
        <div className='text-yellow-600'>Vaše otázka byla odeslána do našeho systému. Brzy se na ni podíváme a třeba na ni i odpoví umělá inteligence!</div>
      )}
      
    </div>
  );
}

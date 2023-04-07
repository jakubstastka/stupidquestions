import Link from 'next/link';
import React from 'react';


export default function NavBar() {
  return (
    <div className='text-lg font-light text-yellow-500 flex flex-row justify-center text-center space-x-5 pt-8'>
        <div className='hover:underline'>
            <Link href="/ask-your-question">
                Položit blbou otázku
            </Link>
        </div>
        <div className='hover:underline'>
            <Link href="/what-and-why">
                Co jsou blbý otázky
            </Link>
        </div>
        <div className='hover:underline'>
            <Link href={'https://stastka.org'}>
                Kdo tohle vytvořil
            </Link>
        </div>
    </div>
  );
}
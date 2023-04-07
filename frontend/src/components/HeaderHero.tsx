import Link from 'next/link';
import React from 'react';
import { BsFillQuestionSquareFill } from 'react-icons/bs';


export default function HeaderHero() {
  return (
    <div className='space-y-5'>
        <Link href="/">
            <div className='text-6xl md:text-9xl text-yellow-500 flex flex-col md:flex-row justify-center items-center space-x-5 pt-3'>
                <div><BsFillQuestionSquareFill /></div>
                <div>Blbý otázky</div>
            </div>
        </Link>
        <div className='flex text-blue-300 text-xl justify-center'>
            <div className='font-thin italic'>Občas je prostě nutný se zeptat.</div>
        </div>
    </div>
  );
}





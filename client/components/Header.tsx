import React from 'react';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (<header className={'drop-shadow-lg h-20 bg-emerald-300 flex'}>
    <div
      className={'flex flex-row w-2/12 content-center items-center justify-center'}>
      <p className={'text-2xl text-white font-semibold'}>Recipes App</p></div>
    <div className={'flex flex-row'}>
      <div
        className={'flex justify-items-center items-center mx-6 hover:bg-emerald-500 px-4'}>
        <Link href={'/recipes'}><p className={'text-lg text-white'}>Overview</p>
        </Link></div>
      <div
        className={'flex justify-items-center items-center mx-6 hover:bg-emerald-500 px-4'}>
        <Link href={'/add-recipe'}><p className={'text-lg text-white'}>Add
          Recipe</p></Link></div>
    </div>
  </header>);
};
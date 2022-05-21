import React from 'react';
import {Header} from './Header';

// @ts-ignore
export const Page = ({children}) => {
  return  (
    <div className="h-screen">
      <Header/>
      {children}
    </div>
  )
}
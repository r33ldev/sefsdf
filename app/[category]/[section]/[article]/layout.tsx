
import { Qparams } from '@/types';
import React from 'react'

interface pageProps {
  params: Qparams["params"];
  children: React.ReactNode;
}

export default function layout({children}: pageProps) {
  return (
    <div>
        {children}
    </div>
  )
}

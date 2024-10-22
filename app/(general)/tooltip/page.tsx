'use client';

import Link from 'next/link';
import React from 'react';
import { Tooltip } from 'react-tooltip';

const TooltipPage: React.FC = () => {
  return (
    <div className='text-center p-10'>
      <h1 className='text-4xl mb-6'>Ejemplo de Tooltip en Next.js</h1>

      <main className='flex items-center justify-center gap-4 mb-10'>
        <button
          className='bg-blue-500 text-white px-4 py-2 mb-8 rounded-md'
          data-tooltip-id='my-tooltip'
          data-tooltip-content='Hello to you too!'
          data-tooltip-place='top'
        >
          Tooltip top
        </button>

        <button
          className='bg-blue-500 text-white px-4 py-2 mb-8 rounded-md'
          data-tooltip-id='my-tooltip'
          data-tooltip-content='Hello to you too!'
          data-tooltip-place='bottom'
        >
          Tooltip bottom
        </button>
        <Tooltip id='my-tooltip' />
      </main>
      <Link href='/'>Regresar</Link>
    </div>
  );
};

export default TooltipPage;

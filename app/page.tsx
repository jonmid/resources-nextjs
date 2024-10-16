import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex items-center justify-center w-screen h-screen bg-cyan-200'>
      <ol className='p-10 space-y-3 bg-white rounded-xl shadow-2xl'>
        <li className='text-body-color flex gap-x-3 items-center text-base hover:text-indigo-700'>
          <span className='bg-indigo-600 flex px-3 py-1 items-center justify-center rounded text-base text-white'>
            1
          </span>
          <Link href='/video'>Example Video</Link>
        </li>
        <li className='text-body-color flex gap-x-3 items-center text-base hover:text-indigo-700'>
          <span className='bg-indigo-600 flex px-3 py-1 items-center justify-center rounded text-base text-white'>
            2
          </span>
          <Link href='/background'>Example Background</Link>
        </li>
        <li className='text-body-color flex gap-x-3 text-base hover:text-indigo-700'>
          <span className='bg-indigo-600 flex px-3 py-1 items-center justify-center rounded text-base text-white'>
            3
          </span>
          <Link href='/gradient'>Example Gradient</Link>
        </li>
        <li className='text-body-color flex gap-x-3 text-base hover:text-indigo-700'>
          <span className='bg-indigo-600 flex px-3 py-1 items-center justify-center rounded text-base text-white'>
            4
          </span>
          <Link href='/three'>Example Three</Link>
        </li>
      </ol>
    </main>
  );
}

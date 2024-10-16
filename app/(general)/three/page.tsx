import ThreeScene from '@/app/components/ThreeScene';
import Link from 'next/link';

const ThreePage: React.FC = () => {
  return (
    <div>
      <h1 className='text-center text-4xl mb-4'>
        <a
          href='https://www.youtube.com/watch?v=UMqNHi1GDAE&ab_channel=freeCodeCamp.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          TUTORIAL Three.js
        </a>
      </h1>
      <p className='text-center mb-4'>
        <Link href='/'>Regresar</Link>
      </p>
      <ThreeScene />
    </div>
  );
};

export default ThreePage;

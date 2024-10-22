'use client';

import Tabs from '@/app/components/Tabs';

const Home: React.FC = () => {
  return (
    <div className='p-10'>
      <h1 className='text-4xl mb-4 text-center'>
        Ejemplo de Tabs con Next.js y TypeScript
      </h1>
      <Tabs />
    </div>
  );
};

export default Home;

import BackgroundImage from '@/app/components/BackgroundImage';
import Link from 'next/link';

const Background: React.FC = () => {
  return (
    <BackgroundImage imageUrl='https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
      <article className='p-10 text-center bg-white rounded'>
        <h1 className='text-4xl'>Tu contenido aquí</h1>
        <p className='mb-4'>Esta es una página con una imagen de fondo.</p>
        <Link href='/'>Regresar</Link>
      </article>
    </BackgroundImage>
  );
};

export default Background;

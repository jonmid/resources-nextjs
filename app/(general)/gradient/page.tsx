import GradientBackground from '@/app/components/GradientBackground';
import Link from 'next/link';

const Gradient: React.FC = () => {
  return (
    <GradientBackground>
      <div className='text-white p-10'>
        <h1 className='text-4xl'>Contenido con Gradiente de Fondo</h1>
        <p className='mb-4'>
          Este es un ejemplo de fondo con gradiente utilizando Tailwind CSS.
        </p>
        <Link href='/'>Regresar</Link>
      </div>
    </GradientBackground>
  );
};

export default Gradient;

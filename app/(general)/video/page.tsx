import Link from 'next/link';
import YouTubeEmbed from '@/app/components/YouTubeEmbed';

const Video: React.FC = () => {
  return (
    <div className='w-screen h-screen bg-cyan-200'>
      <Link href='/'>Regresar</Link>
      <YouTubeEmbed videoId='CLkxRnRQtDE' />
    </div>
  );
};

export default Video;

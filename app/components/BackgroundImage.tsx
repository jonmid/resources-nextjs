interface BackgroundImageProps {
  imageUrl: string;
  children?: React.ReactNode;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  children,
}) => {
  return (
    <div
      className='flex items-center justify-center w-full h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;

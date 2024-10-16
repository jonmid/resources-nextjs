interface GradientBackgroundProps {
  children?: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
}) => {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
      {children}
    </div>
  );
};

export default GradientBackground;

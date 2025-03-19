import Image from 'next/image';
import AboutMe from '../../components/AboutMeCard';

const HomePage: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: 'black ',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        src="/image/shine.png" 
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <AboutMe />
    </div>
  );
};

export default HomePage;

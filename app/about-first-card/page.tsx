import Image from 'next/image';
import AboutMeCard from '../../components/AboutMeFirstCard'; 


const Home: React.FC = () => {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      backgroundColor: 'black',
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image 
        src="/image/shine.png" 
        alt="Background" 
        layout="fill" 
        objectFit="cover" 
      />
    <div

    >
      <AboutMeCard />  
    </div>
    </div>
  );
};

export default Home;




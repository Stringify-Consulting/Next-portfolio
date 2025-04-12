import ProjectCard from '@/components/ProductCard';
import imageScene from '@/public/image/Scene 12 1 (1).png'

const HomePage: React.FC = () => {
  return (
    <div style={{
        backgroundColor: 'black',
        position: 'absolute',
          inset: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: "4.9",
          overflow: "hidden"
           
}}>
       
      <ProjectCard title="NEXT PROJECT" projectTitle='Real Estate Website' description='Redesign' imageSrc={imageScene}/>
    </div>
  );
};

export default HomePage;

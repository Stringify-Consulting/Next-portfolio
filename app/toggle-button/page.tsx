import ToggleButton from '../../components/ToggleButton';

const HomePage: React.FC = () => {
  return (
    <div style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
    
    }}>
      
      <ToggleButton />
    </div>
  );
};

export default HomePage;


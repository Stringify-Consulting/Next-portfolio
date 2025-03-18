import ImageCardComponent from '../../components/ImageCardStructure'; 

const MyPage: React.FC = () => {
  return (
    <div style={{
      backgroundColor: 'black',
    }}>
      <h1>Dynamic Image Cards</h1>

      <ImageCardComponent
        src="/image/scene 18(first image).png"
        alt="First Image"
        width={1272}
        height={705}
      />

      <ImageCardComponent
        src="/image/shot(second image).png"
        alt="Second Image"
        width={1272}
        height={705}
      />

    </div>
  );
};

export default MyPage;

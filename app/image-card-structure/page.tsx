import ImageCardComponent from '../../components/ImageCardStructure'; 
import Head from 'next/head';

const MyPage: React.FC = () => {
  return (
    <>
    <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=0.5, user-scalable=yes" />
</Head>
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
    </>
  );
};

export default MyPage;

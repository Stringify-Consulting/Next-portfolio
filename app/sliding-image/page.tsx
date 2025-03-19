import SlidingImageComponent from '@/components/SlidingImageCards';

const images = [
  {
    src: "/image/Frame 53.png",
    alt: "First Image",
    width: 390,
    height: 500,
  },
  {
    src: "/image/Frame 53.png",
    alt: "Second Image",
    width: 390,
    height: 500,
  },
  {
    src: "/image/Frame 53.png",
    alt: "Third Image",
    width: 390,
    height: 500,
  },
  {
    src: "/image/Frame 53.png",
    alt: "Third Image",
    width: 390,
    height: 500,
  },
  {
    src: "/image/Frame 53.png",
    alt: "Third Image",
    width: 390,
    height: 500,
  },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Image Carousel</h1>
      <SlidingImageComponent images={images} />
    </div>
  );
};

export default HomePage;

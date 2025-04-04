import HomePageCard from '@/components/HomePageCard';

const images = [
  { src: '/image/Rock Realty Homepage 1.png', alt: 'Light Theme Homepage' },
  { src: '/image/Rock Realty Homepage 2.png', alt: 'Dark Theme Homepage' },
];

export default function Home() {
  return <HomePageCard images={images}/>;
}
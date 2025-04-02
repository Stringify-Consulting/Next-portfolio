import React from 'react';
import MenuSlider from '@/components/SliderImage';  // Adjust path based on your project structure

const menuItems = [
  {
    src: '/image/Menu Page 1.png',
    alt: 'Light Theme Homepage',
    title: 'MENU',
  },
  {
    src: '/image/Sidebar Cart Page 1.png',
    alt: 'Dark Theme Homepage',
    title: 'SIDEBAR CART',
  },
  {
    src: '/image/shopping_cart.png',
    alt: 'Another Menu',
    title: 'CART',
  },
  {
    src: '/image/checkout.png',
    alt: 'Another Menu',
    title: 'CHECKOUT',
  },
  {
    src: '/image/success page.png',
    alt: 'Another Menu',
    title: 'SUCCESS PAGE',
  },
  {
    src: '/image/Track your order page.png',
    alt: 'Another Menu',
    title: 'TRACK YOUR ORDER',
  },
];

const MenuSliderPage: React.FC = () => {
  return <MenuSlider items={menuItems} />;
};

export default MenuSliderPage;

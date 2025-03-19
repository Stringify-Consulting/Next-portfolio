"use client";
import Image from 'next/image';
import { RxPerson, RxHome, RxDesktop, RxCopy } from "react-icons/rx";
import styles from './SlideBar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      {/* Vertical Line */}
      <div className={styles.line}></div>

      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/image/LAJ Logo 3.png"
          alt="Logo"
          width={24}
          height={24}
        />
      </div>

      {/* Sidebar Icons */}
      <div className={styles.icons}>
        <RxHome className={styles.icon} />
        <RxPerson className={styles.icon} />
        <RxDesktop className={styles.icon} />
      </div>

      {/* Copy Icon */}
      <div className={styles.icons}>
        <RxCopy className={`${styles.icon} ${styles.copyIcon}`} />
      </div>
    </div>
  );
};

export default Sidebar;

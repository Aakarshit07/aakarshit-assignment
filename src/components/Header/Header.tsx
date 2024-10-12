import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import LOGO from "../../../public/assets/Vector.png";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { BsBagHeart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerNavContainer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src={LOGO} alt='logo' width={28} height={28}/>
          </div>
          <div className={styles.logo}>LOGO</div>
          <div className={styles.nav}>
            <HiOutlineMagnifyingGlass className={styles.icon} />
            <CiHeart className={styles.icon} />
            <BsBagHeart className={styles.icon} />
            <FaRegUser className={styles.icon} />
            <div>ENG <FaChevronDown className={styles.icon}/></div>
          </div>
        </div>
        <div className={styles.navLinks}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>Shop</li>
              <li className={styles.navItem}>Skills</li>
              <li className={styles.navItem}>Stories</li>
              <li className={styles.navItem}>About</li>
              <li className={styles.navItem}>Contact Us</li>
              <li className={styles.navItem}>Join Us</li>
            </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

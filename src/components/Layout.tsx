import React from 'react';
import { Outlet } from "react-router-dom";
import styles from './MyComponent.module.scss';
import { CustomLink } from './CustomLink';

const setActive = ({ isActive }: { isActive: boolean }) => isActive ? styles.active : '';

const Layout:React.FC = () => {
  return (
    <>
    <header className={styles.header}>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
    </header>
    <Outlet />
    <footer>
      <h1>FOOTER</h1>
    </footer>
    </>
  )
};

export { Layout };
// components/Main.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Main = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/') {
      document.body.classList.add('main-bg');
    } else if (router.pathname === '/about') {
      document.body.classList.add('main-bg');
    } else if (router.pathname === '/blog') {
      document.body.classList.add('main-bg');
    } else {
      document.body.classList.remove('main-bg');
    }
  }, [router.pathname]);

  return <main>{children}</main>;
};

export default Main;

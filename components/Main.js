// components/Main.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Main = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the route is the main route ("/")
    if (router.pathname === '/') {
      // Add a class to the body element
      document.body.classList.add('main-bg');
    } else {
      // Remove the class if not on the main route
      document.body.classList.remove('main-bg');
    }
  }, [router.pathname]);

  return <main>{children}</main>;
};

export default Main;

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAutoScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);
};

export default useAutoScrollTop;
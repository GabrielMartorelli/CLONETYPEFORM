/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from 'react';

import { Container } from './styles';
import { useViewportScroll, useTransform } from 'framer-motion';



const Header: React.FC = () => {
  const {scrollYProgress} = useViewportScroll()
  
  const headerY = useTransform(scrollYProgress,[0.188, 0.198] , ['0%', '-100%'] );

  return (
    <Container style={{y: headerY}}/>
  );
};

export default Header;

import { ReactNode } from 'react';
import { Container } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container disableGutters maxWidth={false}>
      {children}
    </Container>
  );
};

export default Layout;

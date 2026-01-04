import { Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import Styles from './styles';
import { Box, Container } from '@mui/material';

export const App = () => {
  return (
    <>
      <Styles />
      <Layout>
        <Header />
        <Container>
          <Box sx={{ py: 2 }}>
            <Outlet />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

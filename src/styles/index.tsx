import { CssBaseline, GlobalStyles } from '@mui/material';

const Styles = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            padding: '0',
          },
        }}
      />
    </>
  );
};

export default Styles;

import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useGetCustomerQuery } from '../../graphql/generated';
import Loading from '../../components/Loading';

interface PersonalDataForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  phonePrefix?: string;
  phoneNumber?: string;
}

const PersonalData = () => {
  const { data, loading } = useGetCustomerQuery({
    variables: {
      where: {
        id: process.env.REACT_APP_CUSTOMER_ID,
      },
    },
  });

  const handleFormSubmit = (values: PersonalDataForm) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Položka je povinná'),
    lastName: Yup.string().required('Položka je povinná'),
    email: Yup.string().email().required('Položka je povinná'),
    phonePrefix: Yup.string().required('Položka je povinná'),
    phoneNumber: Yup.string().required('Položka je povinná'),
  });

  if (loading) {
    return (
      <Stack direction="column" spacing={2}>
        <Typography variant="h6">Osobní údaje</Typography>
        <Loading />
      </Stack>
    );
  }

  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h6">Osobní údaje</Typography>
      <Formik<PersonalDataForm>
        initialValues={{
          firstName: data?.getCustomer?.name as string,
          lastName: data?.getCustomer?.surname as string,
          email: data?.getCustomer?.email as string,
          phoneNumber: data?.getCustomer?.phone as string,
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form>
            <Grid container gap={2}>
              <Grid size={{ xs: 12, sm: 5 }}>
                <FormControl fullWidth>
                  <FormLabel>Jméno</FormLabel>
                  <TextField
                    name="firstName"
                    size="small"
                    fullWidth
                    value={values['firstName']}
                    error={!!errors['firstName']}
                    helperText={errors['firstName']}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 5 }}>
                <FormControl fullWidth>
                  <FormLabel>Příjmení</FormLabel>
                  <TextField
                    name="lastName"
                    size="small"
                    fullWidth
                    value={values['lastName']}
                    error={!!errors['lastName']}
                    helperText={errors['lastName']}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 5 }}>
                <FormControl fullWidth>
                  <FormLabel>E-mail</FormLabel>
                  <TextField
                    type="email"
                    name="email"
                    size="small"
                    fullWidth
                    value={values['email']}
                    error={!!errors['email']}
                    helperText={errors['email']}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 5 }}>
                <FormControl fullWidth>
                  <FormLabel>Telefon</FormLabel>
                  <Grid container>
                    <Grid size={{ xs: 4 }}>
                      <TextField
                        name="phonePrefix"
                        size="small"
                        fullWidth
                        sx={{ pr: 1 }}
                        value={values['phonePrefix']}
                        error={!!errors['phonePrefix']}
                        helperText={errors['phonePrefix']}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                      <TextField
                        name="phoneNumber"
                        size="small"
                        fullWidth
                        value={values['phoneNumber']}
                        error={!!errors['phoneNumber']}
                        helperText={errors['phoneNumber']}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ display: { sm: 'none' } }}>
                <Stack gap={1}>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    onClick={() => handleSubmit()}
                  >
                    ULOŽIT
                  </Button>
                  <Button color="primary" variant="text" fullWidth>
                    Změnit heslo
                  </Button>
                </Stack>
              </Grid>
              <Grid
                size={{ sm: 10 }}
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                <Stack direction="row" gap={1}>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => handleSubmit()}
                  >
                    ULOŽIT
                  </Button>
                  <Button color="primary" variant="text">
                    Změnit heslo
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default PersonalData;

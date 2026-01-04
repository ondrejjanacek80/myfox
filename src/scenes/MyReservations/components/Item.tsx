import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Stack,
} from '@mui/material';
import { Calendar } from '../../../graphql/generated';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface ItemProps {
  data: Calendar;
}

const Item = ({ data }: ItemProps) => {
  const address = [
    data.shop?.address?.street || '',
    data.shop?.address?.city || '',
    data.shop?.address?.zip || '',
  ];

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid size={{ xs: 3 }}>logo</Grid>
          <Grid size={{ xs: 9 }}>
            <Stack direction="column" spacing={2}>
              {data.shop && (
                <Box sx={{ lineHeight: 1.2 }}>
                  <strong>{data.shop?.name}</strong>
                  <br />
                  <small>{address.filter((a) => !!a).join(', ')}</small>
                  <br />
                  <small>
                    tel:{' '}
                    <a href={`tel:${data.shop.phone}`}>{data.shop.phone}</a>
                  </small>
                </Box>
              )}
              <Stack direction="row" spacing={1}>
                <Button size="small" color="primary" variant="contained">
                  Trasa
                </Button>
                <Button size="small" color="primary" variant="contained">
                  Zavolat
                </Button>
                <IconButton size="small" color="primary">
                  <MoreHorizIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Item;

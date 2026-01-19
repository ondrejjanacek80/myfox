import { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import Loading from '../../components/Loading';
import {
  Calendar,
  CalendarState,
  useListCalendarsQuery,
} from '../../graphql/generated';
import Item from './components/Item';

const MyReservations = () => {
  const { data, loading } = useListCalendarsQuery({
    variables: {
      where: {
        state: {
          equals: CalendarState.Open,
        },
      },
    },
  });

  const filteredCalendarItems: Calendar[] = useMemo(
    () =>
      ((data?.listCalendars || [])
        ?.filter((c) => !!c)
        .filter((_, index: number) => index < 20) as Calendar[]) || [],
    [data],
  );

  if (loading) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6">Moje rezervace</Typography>
        <Loading />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">Moje rezervace</Typography>
      {filteredCalendarItems.map((c: Calendar) => (
        <Item key={c.id} data={c} />
      ))}
    </Box>
  );
};

export default MyReservations;

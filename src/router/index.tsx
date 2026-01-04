import { createBrowserRouter } from 'react-router-dom';
import MyReservations from '../scenes/MyReservations/MyReservations';
import PersonalData from '../scenes/PersonalData/PersonalData';
import { ROUTES } from '../constants';
import { App } from '../App';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.MY_RESERVATIONS,
        element: <MyReservations />,
      },
      {
        path: ROUTES.PERSONAL_DATA,
        element: <PersonalData />,
      },
    ],
  },
]);

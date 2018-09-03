import { shape, bool, string } from 'prop-types';

const authShape = shape({
  loggedIn: bool,
  user: shape({
    fname: string,
    lname: string,
    email: string,
  }),
});

export default authShape;

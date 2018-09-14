import { shape, arrayOf, string } from 'prop-types';

export const lodgeShape = shape({
  _id: string,
});

export const arrayOfLodges = arrayOf(lodgeShape).isRequired;

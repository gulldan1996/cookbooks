import { createSelector } from 'reselect';

const rootSelector = state => state;

export const getRecipe = createSelector(
  rootSelector,
  ({ recipes }) => recipes
);

export const reloading = createSelector(
  rootSelector,
  ({ reloading }) => reloading
);

export const filteredHistory = createSelector(
  rootSelector,
  ({ filteredHistory }) => filteredHistory
);

export const getFormState = createSelector(
  rootSelector,
  ({ form }) => form
);

export const getFormUpdate = createSelector(
  rootSelector,
  ({ formUpdate }) => formUpdate
);

export const location = createSelector(
  rootSelector,
  ({ location }) => location
);

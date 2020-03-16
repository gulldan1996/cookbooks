export const ACTION_TYPE = {
  LOAD: "LOAD_RECIPE",
  HANDLER_INPUT: "HANDLER_INPUT",
  RESET_INPUT: "RESET_INPUT",
  HISTORY_LOCATION: "HISTORY_LOCATION",
  RELOADING: "RELOADING",
  RECIPE_MODIFY: "RECIPE_MODIFY",
  HISTORY_INPUT_HANDLER: "HISTORY_INPUT_HANDLER",
  HISTORY_LOAD: "HISTORY_LOAD",
  HANDLER_HISTORY_ID: "HANDLER_HISTORY_ID"
};

export const recipeLoading = load => ({
  type: ACTION_TYPE.LOAD,
  load
});

export const historyRecipeLoading = load => ({
  type: ACTION_TYPE.HISTORY_LOAD,
  load
});

export const handlerInput = e => ({
  type: ACTION_TYPE.HANDLER_INPUT,
  e
});

export const historyInputHandler = e => ({
  type: ACTION_TYPE.HISTORY_INPUT_HANDLER,
  e
});

export const historyHandlerId = id => ({
  type: ACTION_TYPE.HANDLER_HISTORY_ID,
  id
});

export const resetInput = () => ({
  type: ACTION_TYPE.RESET_INPUT
});

export const historyLocation = e => ({
  type: ACTION_TYPE.HISTORY_LOCATION,
  location: e.location.pathname
});

export const recipeReloading = () => ({
  type: ACTION_TYPE.RELOADING
});

export const recipeModify = id => ({
  type: ACTION_TYPE.RECIPE_MODIFY,
  id
});

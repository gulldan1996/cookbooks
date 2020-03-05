export const ACTION_TYPE = {
  LOAD: "LOAD_RECIPE",
  INPUT_HANDLER: "INPUT_HANDLER",
  RESET_INPUT: "RESET_INPUT",
  HISTORY_LOCATION: "HISTORY_LOCATION",
  RELOADING: "RELOADING",
  MODIFY_RECIPE: "MODIFY_RECIPE",
  HISTORY_INPUT_HANDLER: "HISTORY_INPUT_HANDLER",
  LOAD_HISTORY: "LOAD_HISTORY",
  HISTORY_HANDLER_ID: "HISTORY_HANDLER_ID"
};

export const loadingRecipe = load => ({
  type: ACTION_TYPE.LOAD,
  load
});

export const loadingHistoryRecipe = load => ({
  type: ACTION_TYPE.LOAD_HISTORY,
  load
});

export const inputHandler = e => ({
  type: ACTION_TYPE.INPUT_HANDLER,
  e
});

export const historyInputHandler = e => ({
  type: ACTION_TYPE.HISTORY_INPUT_HANDLER,
  e
});

export const historyHandlerId = id => ({
  type: ACTION_TYPE.HISTORY_HANDLER_ID,
  id
});

export const resetInput = () => ({
  type: ACTION_TYPE.RESET_INPUT
});

export const historyLocation = e => ({
  type: ACTION_TYPE.HISTORY_LOCATION,
  location: e.location.pathname
});

export const reloadingRecipe = () => ({
  type: ACTION_TYPE.RELOADING
});

export const modifyRecipe = id => ({
  type: ACTION_TYPE.MODIFY_RECIPE,
  id
});

import { ACTION_TYPE } from "./actions";
import { date } from "../constant/date";

export const initialState = {
  recipes: [],
  historyRecipes: [],
  form: {
    name: "",
    description: "",
    data: date
  },
  formUpdate: {
    name: "",
    description: ""
  },
  reloading: true,
  historyId: null,
  location: "Recipe List",
  filteredHistory: null
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE.LOAD: {
      return {
        ...state,
        recipes: action.load,
        reloading: true
      };
    }

    case ACTION_TYPE.HISTORY_LOAD: {
      return {
        ...state,
        historyRecipes: action.load,
        reloading: true
      }
    }

    case ACTION_TYPE.HANDLER_INPUT: {
      const { name, value } = action.e.target;
      action.e.persist();

      return {
        ...state,
        form: {
          ...state.form,
          [name]: value
        }
      };
    }

    case ACTION_TYPE.RESET_INPUT: {
      return {
        ...state,
        form: {
          name: "",
          description: "",
          data: date
        },
        reloading: false
      };
    }

    case ACTION_TYPE.HISTORY_LOCATION: {
      let { location } = action;
      let result;

      if (location === "/") result = "Recipe List";
      if (location === "/create") result = "Create recipe";
      if (location === "/modify/:id") result = "";
      if (location === "/previous") result = "Previous recipes";

      return {
        ...state,
        location: result
      };
    }

    case ACTION_TYPE.RELOADING: {
      return {
        ...state,
        reloading: false
      };
    }

    case ACTION_TYPE.HISTORY_INPUT_HANDLER: {
      const { name, value } = action.e.target;
      action.e.persist();

      return {
        ...state,
        formUpdate: {
          ...state.formUpdate,
          [name]: value
        }
      }
    }

    case ACTION_TYPE.RECIPE_MODIFY: {
      const recipeFilteredOnModify = state.recipes.filter(item => item._id === action.id);
      const { name, description, _id } = recipeFilteredOnModify[0];

      return {
        ...state,
        formUpdate: {
          name,
          description,
          _id
        }
      };
    }

    case ACTION_TYPE.HANDLER_HISTORY_ID: {
      const historyRecipeFiltered = state.historyRecipes
        .filter(i => i.recipeId === action.id)
        .sort((a,b) => a.date.localeCompare(!b.date))

      return {
        ...state,
        filteredHistory: historyRecipeFiltered
      }
    }

    default:
      return state;
  }
}

import { ACTION_TYPE } from "./actions";
import { date } from "../constant/date";

export const initialState = {
  recipe: [],
  historyRecipe: [],
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
        recipe: action.load,
        reloading: true
      };
    }

    case ACTION_TYPE.LOAD_HISTORY: {
      return {
        ...state,
        historyRecipe: action.load,
        reloading: true
      }
    }

    case ACTION_TYPE.INPUT_HANDLER: {
      const name = action.e.target.name;
      const value = action.e.target.value;
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
      let loc = action.location;
      let result;

      if (loc === "/") result = "Recipe List";
      if (loc === "/create") result = "Create recipe";
      if (loc === "/modify/:id") result = "";
      if (loc === "/previous") result = "Previous version page";

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
      const name = action.e.target.name;
      const value = action.e.target.value;
      action.e.persist();

      return {
        ...state,
        formUpdate: {
          ...state.formUpdate,
          [name]: value
        }
      }
    }

    case ACTION_TYPE.MODIFY_RECIPE: {
      const filtered = state.recipe.filter(item => item._id === action.id);
      const { name, description, _id } = filtered[0];

      return {
        ...state,
        formUpdate: {
          name,
          description,
          _id
        }
      };
    }

    case ACTION_TYPE.HISTORY_HANDLER_ID: {
      const filtered = state.historyRecipe
        .filter(i => i.recipeId === action.id)
        .sort((a,b) => a.date.localeCompare(b.date))
        .reverse()

      return {
        ...state,
        filteredHistory: filtered
      }
    }

    default:
      return state;
  }
}

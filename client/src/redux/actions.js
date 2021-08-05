import { SET_TOOLS, SET_FILTER } from "./action_types.js";

export const setTools = function (tools) {
  return {
    type: SET_TOOLS,
    payload: {
      tools,
    },
  };
};

export const setFilter = function (field, value) {
  return {
    type: SET_FILTER,
    payload: {
      field: field,
      value: value,
    },
  };
};

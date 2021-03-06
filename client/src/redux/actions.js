import {
  SET_TOOLS,
  SET_FILTER,
  SET_OPTIONS,
  SET_ADMIN_DETAIL,
  DELETE_TOOL,
} from "./action_types.js";

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

export const setOptions = function (options) {
  return {
    type: SET_OPTIONS,
    payload: {
      options: options,
    },
  };
};

export const setAdminDetail = function (tool) {
  return {
    type: SET_ADMIN_DETAIL,
    payload: {
      tool: tool,
    },
  };
};

export const deleteTool = function (tool) {
  return {
    type: DELETE_TOOL,
    payload: {
      tool: tool,
    },
  };
};

import getFilteredTools from "../../utils/filterTools";
import {
  SET_TOOLS,
  SET_FILTER,
  SET_OPTIONS,
  SET_ADMIN_DETAIL,
  DELETE_TOOL,
} from "../action_types";

const initialState = {
  tools: [],
  filteredTools: [],
  filters: {
    name: [],
    description: [],
    url: [],
    category: [],
    sub_category: [],
    demographic: [],
    language: [],
    company: [],
    cost_low: [],
    cost_high: [],
    cost_classroom: [],
  },
  options: {},
  adminDetailTool: null,
};

function main(state = initialState, action) {
  switch (action.type) {
    case SET_TOOLS: {
      const { tools } = action.payload;
      const filteredTools = getFilteredTools(tools, state.filters);
      return {
        ...state,
        tools: tools,
        filteredTools: filteredTools,
      };
    }

    case SET_FILTER: {
      const { field, value } = action.payload;
      const newFilters = { ...state.filters, [field]: value };
      const filteredTools = getFilteredTools(state.tools, newFilters);
      return {
        ...state,
        filters: newFilters,
        filteredTools: filteredTools,
      };
    }

    case SET_ADMIN_DETAIL: {
      const { tool } = action.payload;
      return {
        ...state,
        adminDetailTool: tool,
      };
    }

    case SET_OPTIONS: {
      const { options } = action.payload;
      return {
        ...state,
        options: options,
      };
    }

    case DELETE_TOOL: {
      const { tool } = action.payload;
      const toolId = state.tools.indexOf(tool);
      return {
        ...state,
        tools: [
          ...state.tools.slice(0, toolId),
          ...state.tools.slice(toolId + 1),
        ],
      };
    }

    default:
      return state;
  }
}

export { main };

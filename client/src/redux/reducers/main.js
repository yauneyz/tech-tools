import { SET_TOOLS, SET_FILTER, SET_OPTIONS } from "../action_types";

const initialState = {
  tools: [],
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
    //amazon_url: "",
    //msrp: "",
    //curriculum: "",
  },
  options: {},
};

function main(state = initialState, action) {
  switch (action.type) {
    case SET_TOOLS: {
      const { tools } = action.payload;
      return {
        ...state,
        tools: tools,
      };
    }

    case SET_FILTER: {
      const { field, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [field]: value },
      };
    }

    case SET_OPTIONS: {
      const { options } = action.payload;
      return {
        ...state,
        options: options,
      };
    }

    default:
      return state;
  }
}

export { main };

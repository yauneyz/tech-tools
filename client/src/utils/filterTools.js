import { dollarToFloat } from "./conversions";

function filterIncludes(key, values) {
  /*
   * Here the {key} is the card's value for a particular field.
   * {values} is the list of all allowed values, usually taken from a multi-select
   */
  if (!key) {
    key = "";
  }

  key = key.toLowerCase();
  values = values.map((value) => value.toLowerCase());

  // No filters applied means we're good
  if (values.length === 0) {
    return true;
  }

  // Search through each allowed value to see if one matches the key
  let match = false;
  values.forEach((value) => {
    if (key.includes(value)) {
      match = true;
    }
  });

  // Don't match the filter
  return match;
}

function getFilteredTools(toolsToFilter, filtersToApply) {
  // Numeric filter

  // Filter the tools
  let filteredTools = toolsToFilter.filter((tool) => {
    for (const [key, value] of Object.entries(filtersToApply)) {
      if (key === "cost_low" || key === "cost_high") {
        let toolVal = tool[key];

        const [min, max] = value;
        if (typeof toolVal == "undefined") {
          toolVal = 0;
        }

        if (toolVal < min || toolVal > max) {
          return false;
        }
      } else {
        if (!filterIncludes(tool[key], value)) {
          return false;
        }
      }
    }
    return true;
  });

  return filteredTools;
}

export default getFilteredTools;

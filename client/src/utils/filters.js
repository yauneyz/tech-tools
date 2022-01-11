import TextFilter from "../components/TextFilter";
import SelectFilter from "../components/SelectFilter";
import CostFilter from "../components/CostFilter";
import AvailableFilter from "../components/AvailableFilter";

const filters = {
  name: <TextFilter name="name" displayName="Name" key="name" />,
  category: (
    <SelectFilter name="category" displayName="Category" key="category" />
  ),
  sub_category: (
    <SelectFilter
      name="sub_category"
      displayName="Sub-Category"
      key="sub_category"
    />
  ),
  demographic: (
    <SelectFilter
      name="demographic"
      displayName="Demographic"
      key="demographic"
    />
  ),
  language: (
    <SelectFilter
      name="language"
      displayName="Programming Language"
      key="language"
    />
  ),
  compatible_os: (
    <SelectFilter
      name="compatible_os"
      displayName="Compatible OS"
      key="compatible_os"
    />
  ),
  cost_low: (
    <CostFilter name="cost_low" displayName="Lowest Cost" key="cost_low" />
  ),
  cost_high: (
    <CostFilter name="cost_high" displayName="Highest Cost" key="cost_high" />
  ),

  available: <AvailableFilter />,
};

export default filters;

import mongoose from "mongoose";

const newTool = {
  _id: mongoose.Types.ObjectId(),
  name: "",
  description: "",
  url: "",
  category: "",
  sub_category: "",
  compatible_os: "",
  demographic: "",
  language: "",
  company: "",
  cost_low: "",
  cost_high: "",
  cost_classroom: "",
  msrp: "",
  title_image: "",
  action_image: "",
};

export default newTool;

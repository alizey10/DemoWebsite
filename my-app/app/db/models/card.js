import mongoose from "mongoose";

export default mongoose.models.Card || mongoose.model("Card", {
  display: String,
  title: String,
});


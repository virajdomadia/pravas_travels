import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
      enum: ["new", "contacted", "resolved"],
      default: "new",
    },
  },
  { timestamps: true }
);

export const InquiryModel =
  mongoose.models.Inquiry || mongoose.model("Inquiry", inquirySchema);

import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    id: String,
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["domestic", "international"],
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    perfectForCouples: {
      type: Boolean,
      default: false,
    },
    bestTimeToVisit: String,
    featured: {
      type: Boolean,
      default: false,
    },
    highlights: [String],
    itinerary: [
      {
        day: Number,
        title: String,
        description: String,
      },
    ],
    inclusions: [String],
    exclusions: [String],
    gallery: [String],
    faq: [
      {
        question: String,
        answer: String,
      },
    ],
  },
  { timestamps: true }
);

export const PackageModel =
  mongoose.models.Package || mongoose.model("Package", packageSchema);

import mongoose from "mongoose";

const programSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    trainerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trainer",
      required: true,
    },
    programs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Program",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Program = mongoose.model("Program", programSchema);

export default Program;

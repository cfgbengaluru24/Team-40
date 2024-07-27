import mongoose from "mongoose";

const knowledgeItemSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
    },
    { _id: false }
);

const knowledgeSchema = mongoose.Schema(
    {
        programId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Program",
            required: true,
            unique: true,
        },
        knowledge: [knowledgeItemSchema],
    },
    {
        timestamps: true,
    }
);

const Knowledge = mongoose.model("Knowledge", knowledgeSchema);

export default Knowledge;
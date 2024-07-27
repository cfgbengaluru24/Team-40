import mongoose from "mongoose";


const programSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        trainerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Trainer', 
            required: true,
        },
        userIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
    },
    {
        timestamps: true,
    }
);


const Program = mongoose.model('Program', programSchema);

export default Program;

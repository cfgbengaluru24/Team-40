import express from "express";
import Knowledge from "../models/knowledgeModel.js";

const router = express.Router();

router.post("/add", async (req, res) => {
    const { programId, faqs } = req.body;

    try {
        // Find or create the knowledge document for the program
        let knowledge = await Knowledge.findOne({ programId });

        if (!knowledge) {
            knowledge = new Knowledge({ programId, knowledge: faqs });
        } else {
            knowledge.knowledge = knowledge.knowledge.concat(faqs);
        }

        await knowledge.save();

        res.status(200).json({ message: "FAQs added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to add FAQs", error });
    }
});

export default router;
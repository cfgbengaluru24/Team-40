import express from 'express';
import Program from '../models/pgmModel.js';

const router = express.Router();

router.post('/add', async (req, res) => {
    const { name, trainerId, userIds } = req.body;

    try {
        const program = new Program({
            name,
            trainerId,
            userIds,
        });

        const createdProgram = await program.save();
        res.status(201).json(createdProgram);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

router.get('/get-programs', async (req, res) => {
    try {
        const programs = await Program.find({});
        res.json(programs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;

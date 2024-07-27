import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();


router.post('/add', async (req, res) => {
    const { name, location, business, income, trainer_id } = req.body;

    try {
        const user = new User({
            name,
            location,
            business,
            income,
            trainer_id,
            isAssigned: false, 
        });

        const createdUser = await user.save();
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);

        if (user) {
            await user.remove();
            res.json({ message: 'User removed' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/fetch', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;


import express from 'express';
import { user } from '../db-utils/model.js';
import {v4} from 'uuid';
import bcrypt from 'bcrypt';
import  Jwt from 'jsonwebtoken';


const userRouter=express.Router();

userRouter.post('/register', async (req, res) => {
    try {
        const { email, password, about, hobbie,name} = req.body;

        const existingUser = await user.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ msg: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new user({ password: hashedPassword, email, id: v4(), about, hobbie,name });

        await newUser.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ msg: 'Error registering user' });
    }
});


userRouter.post('/login', async function (req, res) {
    try {
        const payload = req.body;
        const userdata = await user.findOne({ name: payload.name });

        if (userdata) {
            const compare = await bcrypt.compare(payload.password, userdata.password);

            if (compare) {
                // Create a JWT token
                const token = Jwt.sign({ name: payload.name }, process.env.JWT_SECRET, { expiresIn: '1d' });
               
                    
                res.send({token});
            } else {
                res.status(401).send({ message: "Invalid password" });
            }
        } else {
            res.status(404).send({ message: "User is not found" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: "Error in login" });
    }
});


  


export default userRouter;
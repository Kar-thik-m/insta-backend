import express from "express";
import { data, user} from "../db-utils/model.js";
import { user } from "../db-utils/model.js";
import { v4 } from "uuid";
const IdataRouter = express.Router();

IdataRouter.post('/upload', async (req, res) => {
  try {
    const payload = req.body;
    const uploadData = new data({ ...payload, id: v4() });
    await uploadData.save();
    res.status(200).json({ message: 'Data uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

IdataRouter.get('getalluser/:userId', async (req, res) => {
  try {
    const profileuserId = req.params.userId;
    const userdata = await user.find({ profileuserId},{profileUrl:1,profileuserId:1});
    const data=await data.find({})
    req.send(getalldata);
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: 'Error' });
  }
});

export default IdataRouter;


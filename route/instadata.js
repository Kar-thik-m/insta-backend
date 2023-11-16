import express from "express";
import { data } from "../db-utils/model.js";
import { v4 } from "uuid";
const IdataRouter = express.Router();

IdataRouter.post('/upload', async (req, res) => {
  try {
    const payload = req.body;
    const uploadData=new data({...payload,id:v4()});
    await uploadData.save();
    res.status(200).json({ message: 'Data uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

IdataRouter.get('/getall', async (req, res) => {
    try {
      const getalldata = await data.find({ });
      res.json(getalldata);
    } catch (err) {
      console.error(err);
      res.status(500).send({ msg: 'Error' });
    }
  });
export default IdataRouter;


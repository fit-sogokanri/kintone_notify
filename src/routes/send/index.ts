import express from "express"

export const router = express.Router();

router.post('/', async (req, res) => {
    console.log(await req.body)
    return res.status(200).send({"message": "reached"});
})
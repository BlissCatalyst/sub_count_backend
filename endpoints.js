const express = require("express");
const axios = require("axios");

const router = express.Router();

// GET *****************************************************
router.get("/", async (req, res) => {
    try {
        const subs = await axios({
            method: "get",
            url: "https://www.googleapis.com/youtube/v3/channels",
            params: {
                key: process.env.YOUTUBE_KEY,
                part: "statistics",
                // TODO: CHANGE TO DYNAMIC IDs
                id: "UCJwnN8Kmor1p97kEY_j4OLg"
            }
        });

        res.status(200).json(subs.data);
    } catch (err) {
        console.log(err);
    }
});

// POST ****************************************************
// UPDATE **************************************************
// DELETE **************************************************

module.exports = router;

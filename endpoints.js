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
                // marquesbrownlee MarkiplierGAME TheMusicifyer bulldogquist
                forUsername: "MarkiplierGAME"
            }
        });
        res.status(200).json(subs.data);
    } catch (err) {
        console.log(err);
        res.status(503).json(err.data);
    }
});

// POST ****************************************************
// Might need to make another post request to get another page
// using YouTube's "pageToken" optional parameter.
router.post("/channelSearch", async (req, res) => {
    try {
        const searchResults = await axios({
            method: "get",
            url: "https://www.googleapis.com/youtube/v3/channels",
            params: {
                key: process.env.YOUTUBE_KEY,
                part: "snippet",
                type: "channel",
                q: req.body.query
            }
        });
        res.status(202).json(searchResults.data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err.data);
    }
});
// UPDATE **************************************************
// DELETE **************************************************

module.exports = router;

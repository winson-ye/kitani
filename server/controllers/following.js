import Following from "../models/following.js";

export const getFollowing = async (req, res) => {
    try {
        const { id } = req.params;
        
        const followeeList = await Following.findOne({ follower: id });

        if (!followeeList) {
            res.status(200).json({ follower: '', followees: [] });
        } else {
            res.status(200).json(followeeList);
        }

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addFollowee = async (req, res) => {
    const { id } = req.params;

    const followeeList = await Following.findOne({ follower: id });

    if (!followeeList) {
        const newFolloweeList = new Following({ follower: id, followees: req.body });
        await newFolloweeList.save();
        res.status(201).json(newFolloweeList);
    } else {
        if (followeeList.followees.find((element) => element.followeeId === req.body.followeeId)) {
            const newFolloweeList = new Following({ follower: id, followees: req.body });
            res.status(400).json(newFolloweeList);
        } else {
            followeeList.followees.push(req.body);
            const updatedFolloweeList = await Following.findOneAndUpdate({ follower: id }, { followees: followeeList.followees }, { new: true });
            res.status(200).json(updatedFolloweeList);
        }
    }
}
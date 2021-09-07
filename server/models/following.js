import mongoose from 'mongoose';

const followingSchema = mongoose.Schema({
    follower: String,
    followees: [{
        followeeName: String,
        followeeId: String
    }]
});

const Following = mongoose.model('following', followingSchema);

export default Following;
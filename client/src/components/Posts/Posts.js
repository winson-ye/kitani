import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

const Posts = () => {

    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;
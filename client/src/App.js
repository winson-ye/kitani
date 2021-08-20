import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import SignIn from './components/SignIn/SignIn';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <SignIn />
    )
}

export default App;
const reducer = (following = { follower: '', followees: [] }, action) => {
    switch (action.type) {
        case 'FETCH_ALL_FOLLOWEES':
            return action.payload;
        case 'ADD_TO_FOLLOWEES':
            return action.payload;
        default:
            return following;
    }
}

export default reducer;
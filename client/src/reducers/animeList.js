const reducer = (anime = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_ANIME':
            return action.payload;
        case 'ADD_TO_ANIME_LIST':
            return [ ...anime, action.payload ];
        case 'UPDATE_ANIME_LIST':
            return action.payload;
        default:
            return anime;
    }
}

export default reducer;
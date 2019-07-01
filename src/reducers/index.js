const initialState = {
    books: [],
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_REQUESTED':
            console.log('BOOKS_REQUESTED state', state);
            console.log('BOOKS_REQUESTED action', action);

            return {
                books: [],
                loading: true
            };

        case 'BOOKS_LOADED':
            console.log('BOOKS_LOADED state', state);
            console.log('BOOKS_LOADED action', action);

            return {
                books: action.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default reducer;

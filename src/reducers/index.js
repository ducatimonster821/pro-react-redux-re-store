const initialState = {
    books: [],
    loading: true,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_REQUESTED':
            console.log('BOOKS_REQUESTED state', state);
            console.log('BOOKS_REQUESTED action', action);

            return {
                books: [],
                loading: true,
                error: null
            };

        case 'BOOKS_LOADED':
            console.log('BOOKS_LOADED state', state);
            console.log('BOOKS_LOADED action', action);

            return {
                books: action.payload,
                loading: false,
                error: null
            };

        case 'BOOKS_ERROR':
            return {
                books: [],
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};

export default reducer;

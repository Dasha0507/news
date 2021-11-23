const initialState = {
    news: [],  
    isLoaded: false 
}


const news = (state = initialState, action) => {
    if(action.type === 'SET_NEWS')
    {
        return {
            ...state,
            news: action.payload
        }
    }
    return state;
}

export default news;
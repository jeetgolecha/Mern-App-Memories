//REducer is a function, that accepts a state and a action and based on thr action type, it performs some logic

const Reducer = (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE': 
            return posts.map((post) => post._id === action.payload._id ? action.payload : post); 
        case 'DELETE': 
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}

export default Reducer;
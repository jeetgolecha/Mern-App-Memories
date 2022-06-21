import * as api from '../api';

//Action creators are functions that return actions
// api.fetchPosts()
// Thunk allows us to use one more arrow function uisng redux

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch(err) {
        console.log(err.message);
    }

    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action);
}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data});
    } catch(err) {
        console.log(err.message);
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);

        dispatch({type: 'UPDATE', payload: data});

    } catch(err) {
        console.log(err.message);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: 'DELETE', payload: id});
    } catch(err) {
        console.log(err);
    }
}

// export default getPosts;


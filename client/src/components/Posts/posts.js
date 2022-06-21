// Here we have to fetch the data from the global redux store
import { useSelector } from "react-redux";

import React from "react";
import Post from "./Post/post";
import useStyles from './styles';

import {Grid, CircularProgress} from '@material-ui/core'; 

// useSelector is a function that takes the current state as an argument and returns whatever data you want from it and it allows you to store the return values inside a variable within the scope of you functional components instead of passing down as props.

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts);
    console.log(posts.type);
    // posts = posts.toArray();
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
}

export default Posts;

// If we don't use redux, we have to pass the props to the deepest child component
// as we are doing here
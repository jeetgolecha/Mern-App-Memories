import React, {useEffect, useState} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';


import {useDispatch} from 'react-redux';
import Posts from "./components/Posts/posts";
import Form from "./components/Forms/form";
import memories from './images/memories.png';
import useStyles from './styles';
import {getPosts} from './actions/posts';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    // give [currentId, dispatch] instead of just [dispatch] for auto update without refresh, but this does not work.
    
    return(
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;

// This is the parent component that holds the posts and the Form
// we pass the parameters in forms and accept those as props in the child component
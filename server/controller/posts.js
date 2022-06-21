import mongoose from "mongoose";
import postMessage from "../model/postMessage.js";

export const getPosts = async (req, res) => {
    res.send('Working!');
    try {
        const postMessages = await postMessage.find();
        //console.log(postMessages);
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    //res.send('Post creation!');
    const post = req.body;
    const newPost = new postMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch(error) {
        res.status(409).json({message: error.message});
    }
}


//Param is to get the param from the url
// we rename the id to _id
export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    if(mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with given ID');
    }

    const updatedPost = await postMessage.findByIdAndUpdate(_id, { ...post, _id}, {new: true});
    res.json(updatedPost);

}

export const deletePost = async(req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No post with given ID');
    }

    await postMessage.findByIdAndRemove(id);

    res.json({message: 'Post deleted successfully'});
}
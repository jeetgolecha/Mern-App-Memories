import express from "express";
import { getPosts, createPost, updatePost, deletePost } from "../controller/posts.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);


//Patch is used for updating existing documents
router.patch('/:id', updatePost);

router.delete('/:id', deletePost);

export default router;
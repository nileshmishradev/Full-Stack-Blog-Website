import express from 'express';
import { addBlog, addComment, DeleteBlogbyId, generateContent, getAllBlog, getBlogbyId, getBlogComments, togglePublish } from '../controllers/BlogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';
const blogRouter = express.Router();// imp

blogRouter.post("/add" ,upload.single('image'),auth ,  addBlog)
blogRouter.get("/all" ,getAllBlog)
blogRouter.post("/delete" ,auth ,DeleteBlogbyId)
blogRouter.post("/toggle" ,auth ,togglePublish)
blogRouter.post("/add-comment" ,addComment)
blogRouter.post("/comments" , getBlogComments)
blogRouter.post("/generate" ,auth, generateContent)
blogRouter.get("/:blogID" ,getBlogbyId)





export default blogRouter;

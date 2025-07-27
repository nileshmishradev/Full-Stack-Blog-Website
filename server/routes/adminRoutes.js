import express from 'express';
import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from '../controllers/admincontroller.js';
import auth from '../middleware/auth.js';

const adminRouter = express.Router();// imp

adminRouter.post("/login" , adminLogin)
adminRouter.get("/comments",auth , getAllComments)
adminRouter.get("/blogs",auth , getAllBlogsAdmin)
adminRouter.post("/delete-comments",auth , deleteCommentById)
adminRouter.post("/approve-comments",auth , approveCommentById)
adminRouter.get("/dashboard",auth , getDashboard)


export default adminRouter;
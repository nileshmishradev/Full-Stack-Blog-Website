import Blog from "../models/Blog.js";
import imagekit from "../configs/imagekit.js";
import fs from 'fs';
import Comment from '../models/Comment.js'
import main from "../configs/gemini.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.nilesh
    );
    const imageFile = req.file;

    // Check if all fields are present
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
        file: fileBuffer,
        fileName: imageFile.originalname, // name of image will be originalname
        folder: "blog" // folder to store all image
    });


    // optimaizing image
    const optimizedImageUrl = imagekit.url({
    path : response.filePath,
    transformation : [
        {quality : 'auto' }, // image will comperess automatically
        {format : 'webp' },// convert to morden format
       { width : "1280"} // width resizing
   ]
    });

    const image  = optimizedImageUrl;

    await Blog.create({title, subTitle, description, category,image, isPublished})
    res.json({success:true , message : "Blog added successfully"})
  } catch (error) {
    res.json({ success: false, message: "Blog added successfully bro" });
  }
      
};

export const getAllBlog =async (req,res)=>{
  try{
    const blog = await Blog.find({isPublished:true})
    res.json({success:true,blog})
  }catch(error){
    res.json({success:false,message:error.message})
  }
}

export const getBlogbyId =async (req,res)=>{
  try{
    const {blogID} = req.params
    const blog = await Blog.findById(blogID)
   
    if(!blog){
      return res.json({success:false , message:"Blog not Found"})
    }
     res.json({success:true,blog})
  }catch(error){
    res.json({success:false,message:error.message})
  }
}

export const DeleteBlogbyId = async (req, res) => {
  try {
    const { id } = req.body;
    await Blog.findByIdAndDelete(id);

    // Delete all comments associated with the blog
    await Comment.deleteMany({ blog: id });

    res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}
export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: 'Blog status updated' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// comments 

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body; // blog containg id of the blog where  that comment will be adding
    await Comment.create({ blog, name, content });
    res.json({ success: true, message: 'Comment added for review' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

// give the blog that  by blogid and who isapproved filed is true 
export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({ blog: blogId, isApproved: true }).sort({ createdAt: -1 });
    res.json({ success: true, comments });
  } catch (error) {i8ghy
    res.json({ success: false, message: error.message });
  }
}

export const generateContent = async (req, res)=>{
try {
const { prompt } = req.body;
const content = await main(prompt + " Generate a blog content for this topic in simple text format");
res.json({success: true, content});
} catch (error) {
res.json({success: false, message: error.message});
}
}
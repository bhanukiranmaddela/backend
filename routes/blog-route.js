import expres from "express";
import { addBlog, getAllBlogs } from "../controller/blog-controller.js";
const blogRouter = expres.Router();
blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);

export { blogRouter };

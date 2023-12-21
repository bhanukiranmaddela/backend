import expres from "express";
import { addBlog, getAllBlogs, updateBlog } from "../controller/blog-controller.js";
const blogRouter = expres.Router();
blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id",updateBlog)

export { blogRouter };

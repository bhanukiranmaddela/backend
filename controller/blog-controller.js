import Blog from "../model/blog.js";

const getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (e) {
    console.log(e, "blog error");
  }
  if (!blogs) {
    return res.status(404).json({ msg: "not found blogs" });
  }
  return res.status(200).json(blogs);
};

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  const blog = new Blog({
    title,
    description,
    image,
    user,
  });
  try {
   await blog.save();
  } catch (e) {
    console.log(e, "blog add error-27");
  }
  return res.status(200).json({ blog });
};

export { getAllBlogs };

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

export const updateBlog = async (req, res, next) => {
  let id = req.params.id;
  console.log(id,req.body ,"IIIIIIIIIIII");
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(id, {
      title:req.body.title,
      description:req.body.description,
    });
  } catch (e) {
    console.log("blog update error ",e)
  }
  if(!blog){
    res.status(500).json({"msg":"Unable to update the blog"})
  }
  return res.status(200).json({blog})
};

export { getAllBlogs };

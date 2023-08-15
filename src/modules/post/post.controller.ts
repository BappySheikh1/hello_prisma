import { Request, Response } from "express";
import { PostService } from "./post.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await PostService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "Post Created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getAllPost = async (req: Request, res: Response) => {
  try {
    const options = req.query;
    const result = await PostService.getAllPost(options);
    res.send({
      success: true,
      message: "Post retrieved successfully",
      total: result.total,
      data: result.data,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSinglePost = async (req: Request, res: Response) => {
  const result = await PostService.getSinglePost(parseInt(req.params.id));
  res.send({
    success: true,
    message: "single post retrieve successfully",
    data: result,
  });
};

const updatePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;
    const result = await PostService.updatePost(id, data);

    res.send({
      success: true,
      message: "Updated post retrieve successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const deletePost = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await PostService.deletePost(id);

    res.send({
      success: true,
      message: "single post delete successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  insertIntoDB,
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
};

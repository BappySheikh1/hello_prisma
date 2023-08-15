import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User Create a successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "Profile Created/updated successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getUsers =async (req: Request, res: Response) => {
    try {
        const result = await UserService.getUsers()
        res.send({
            success: true,
            message: "user's get successfully",
            data: result,
          });
    } catch (error) {
        res.send(error)
    }
}
const getSingleUser =async (req: Request, res: Response) => {
    try {
        const result = await UserService.getSingleUser(parseInt(req.params.id))
        res.send({
            success: true,
            message: "user's get successfully",
            data: result,
          });
    } catch (error) {
        res.send(error)
    }
}


export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsers,
  getSingleUser,
};

import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.routes";
import { CategoryRouter } from "./modules/category/category.route";
import { PostRoutes } from "./modules/post/post.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/category", CategoryRouter);
app.use("/api/v1/post", PostRoutes);

export default app;

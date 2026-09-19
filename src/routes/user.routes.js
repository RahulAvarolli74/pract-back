import { Router } from "express";
import {registerUser} from "../controllers/user.controllers.js"

const router=Router();
// define routes and endpoints here 

router.route("/register").post(registerUser);

export default router;
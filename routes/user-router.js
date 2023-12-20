import  express  from "express";
import {getAllUsers, login, signUp} from "../controller/userController.js";


const router = express.Router();

router.get("/",getAllUsers)
router.post("/signup",signUp)
router.post("/login",login)
export {router};

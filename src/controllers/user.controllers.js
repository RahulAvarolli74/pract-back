import router from "../routes/user.routes.js";
import {asyncHandler} from "../utils/asyncHandler.js"
// import user from "../models/user.models.js"

const registerUser= asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:"Teri ma ka bh**da"
    })
})

export {registerUser};
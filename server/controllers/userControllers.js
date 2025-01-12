import User from "../models/userModel.js";


const register = async (req,res) =>{
    try {
        const {name , email , password , phoneNumber , role , jobseeker , recruiter} = req.body;


    const user = await User.findOne({email})


    const userData = {
        name,
        email,
        password,
        phoneNumber,
        role
    }


    const newUser = await User.create(userData)
    console.log(newUser)

    res.status(201 , {msg:"user regester successfully"})
    } catch (error) {
        console.log(error)
    }

}


export {register}



var User = require("../models/userModel");

async function createUser(email: string, password: string, role: string, phoneNumber: string): Promise < string > {
    let result: string = "";
    const user = new User({
        Email: email,
        Password: password,
        Role: role,
        PhoneNumber: phoneNumber
    });
   
    const emailExist: any = await User.exists({
        Email:email
    }); //check if user exists or not to prevent multiple entries
  
    if (emailExist === false) {
         
        await user.save(function (err: Error) {

            if (!err) {
                result = "User Saved correctly"
            } else {
                throw new Error("error in DB user is not saved");
            }

        });
    } else {
        throw new Error("This Email Exists");
    }
    return result;
}

async function getUsers(req:any,res:any): Promise < any > {

    let result: typeof User;
    const PAGE_SIZE = 5;
        const page = parseInt(req.query.page || "0");
        const total = await User.countDocuments({});
    result = await User.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);
    res.json({
        totalPages: Math.ceil(total / PAGE_SIZE),
        result,
      });
    return result;
}


module.exports = {
    createUser,
    getUsers
}
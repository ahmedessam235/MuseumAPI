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
        result = "This Email already exists"
    }
    return result;
}

async function getUsers(): Promise < any > {

    let result: typeof User;

    result = await User.find({}, function (err: any, users: any) {

    });

    return result;

}

module.exports = {
    createUser,
    getUsers
}
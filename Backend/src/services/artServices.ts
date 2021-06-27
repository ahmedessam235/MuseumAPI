var Art = require("../models/artModel");

// async function createUser(email: string, password: string, role: string, phoneNumber: string): Promise < string > {
//     let result: string = "";
//     const user = new User({
//         Email: email,
//         Password: password,
//         Role: role,
//         PhoneNumber: phoneNumber
//     });
   
//     const emailExist: any = await User.exists({
//         Email:email
//     }); //check if user exists or not to prevent multiple entries
    
//     if (emailExist === false) {
         
//         await user.save(function (err: Error) {

//             if (!err) {
//                 result = "User Saved correctly"
//             } else {
//                 throw new Error("error in DB user is not saved");
//             }

//         });
//     } else {
//         throw new Error("This Email Exists");
//     }
//     return result;
// }

async function getArt(): Promise <typeof Art > {

    let result: typeof Art;

    result = await Art.find({}, function (err: any, users: any) {

    });

    return result;

}

module.exports = {
    getArt
}
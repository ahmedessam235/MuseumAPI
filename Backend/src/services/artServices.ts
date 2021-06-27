var Art = require("../models/artModel");

async function addArt(picture: string, artist: string, description: string): Promise < string > {
    let result: string = "";
    const art = new Art({
        Picture: picture,
        Artist: artist,
        Description: description
    });
    await art.save(function (err: Error) {

        if (!err) {
            result = "Art Added Correctly"
        } else {
            throw new Error("error in DB art is not saved");
        }

    });

    return result;
}

async function updateArt(picture: string, artist: string, description: string, ID: string): Promise < string > {
    let result: string = "";


    result = await Art.updateOne({
        _id: ID
    }, 
       { $set: {Picture:picture,Artist:artist,Description:description}}
    );

    return result;
}
async function deleteArt(ID:string): Promise < typeof Art > {

    let result: typeof Art;

    result = await Art.remove({_id:ID}, function (err: any, data: any) {
     if(err){
         console.log(err);
         
     }
    });
    console.log(result,"after delete");
    

    return result;

}

async function getArt(): Promise < typeof Art > {

    let result: typeof Art;

    result = await Art.find({}, function (err: any, users: any) {

    });

    return result;

}

module.exports = {
    getArt,
    addArt,
    updateArt,
    deleteArt
}
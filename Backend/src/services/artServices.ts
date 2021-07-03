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
    }, {
        $set: {
            Picture: picture,
            Artist: artist,
            Description: description
        }
    });

    return result;
}
async function deleteArt(ID: string): Promise < typeof Art > {

    let result: typeof Art;
    result = await Art.deleteOne({
        _id: ID
    }, function (err: any, data: any) {
        if (err) {
            console.log(err, "error");
            throw new Error("error in deleteing user");
        }
    });
    return result;

}

async function getArt(req:any,res:any): Promise < typeof Art > {

    let result: typeof Art;
    const PAGE_SIZE = 5;  // specifying the page number
    const page = parseInt(req.query.page || "0"); //getting the page number from querysent from Front End
    const total = await Art.countDocuments({});  //count the total number of doucments in the collection
    result = await Art.find({})
    .limit(PAGE_SIZE)    //using mongoose to limit the repsonse to fit the desired number requested
    .skip(PAGE_SIZE * page);  //skipping the rest of the data
    res.json({
        totalPages: Math.ceil(total / PAGE_SIZE),
        result,
      });
    return result;
}

module.exports = {
    getArt,
    addArt,
    updateArt,
    deleteArt
}
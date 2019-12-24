Hall = require('../../models/hall')

exports.addHall = async (req, res) => {

    const hallName=await Hall.findAll({
        where:{
            name:req.body.name
        }
    });
    if(hallName.length!=0){return res.send({message:'there is already a hall with this name'})};
    if(req.body.numOfRows<=0 || req.body.numOfColumns<=0){return res.send({message:'please choose valid number of seats'})};

    const hall = new Hall(req.body);
    const result = await user.save();
    
    return res.send({message:'hall registered successfully'})

} 

exports.deleteHall = async (req,res) => {
    const hall = await Hall.findAll({
        where:{
            id:req.params.hallId
        }
    });
    if(hall.length==0) return res.send({message:'hall doesn\'t exist'})
    await hall[0].destroy();
    return res.send({message:'hall deleted successfully'});
}

exports.getHalls = async (req,res )=> {
    const halls = await Hall.findAll();
    return res.send(halls);
}

exports.getHallName = async (req,res)=>{
    const hall =await Hall.findAll({
        where:{
            name:req.body.name
        }
    });
    return res.send(hall[0].id);
}


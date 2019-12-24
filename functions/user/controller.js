User = require('../../models/user')

exports.addUser = async (req, res) => {

    const userName=await User.findAll({
        where:{
            username:req.body.username
        }
    });
    const userEmail=await User.findAll({
        where:{
            email:req.body.email
        }
    });
    if(userName.length!=0){return res.send({message:'username already registered'})};
    if(userEmail.length!=0){return res.send({message:'email already registered'})};

    const user = new User(req.body);
    const result = await user.save();
    
    return res.send({message:'user registered successfully'})

} 

exports.deleteUser = async (req,res) => {
    const user = await User.findAll({
        where:{
            id:req.params.userId
        }
    });
    if(user.length==0) return res.send({message:'user doesn\'t exist'})
    await user[0].destroy();
    return res.send({message:'user deleted successfully'});
}

exports.getUsers = async (req,res )=> {
    const users = await User.findAll();
    return res.send(users);
}

exports.getUserEmail = async (req,res)=>{
    const user =await User.findAll({
        where:{
            email:req.body.email
        }
    });
    if(user.length==0) return res.send({message:'user doesn\'t exist'})
    return res.send(user[0]);
}

exports.getUserName = async (req,res)=>{
    const user =await User.findAll({
        where:{
            username:req.body.username
        }
    });
    if(user.length==0) return res.send({message:'user doesn\'t exist'})
    return res.send(user[0]);
}

exports.changeUser = async (req,res)=>{
    const user = await User.findAll({
        where:{
            id:req.params.userId
        }
    });
    if(user.length==0) return res.send({message:'user doesn\'t exist'})
    user[0].role = req.body.role;
    await user[0].save();
    return res.send({message:'role changed successfully'})
}
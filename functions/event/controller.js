Event = require('../../models/event')
Hall = require('../../models/hall')
Reservation = require('../../models/reservation')

exports.addEvent = async (req, res) => {

    const eventName=await Event.findAll({
        where:{
            name:req.body.name
        }
    });
    const hall = await Hall.findAll({
        where:{
            id:req.body.hallId
        }
    });
    if(eventName.length!=0){return res.send({message:'event name already registered'})};
    if(hall.length==0){return res.send({message:'hall ID not registered'})};

    const event = new Event(req.body);
    const result = await event.save();
    
    return res.send({message:'event registered successfully'})

}

exports.editEvent = async (req, res) => {

    const eventName=await Event.findAll({
        where:{
            name:req.body.name
        }
    });
    const hall = await Hall.findAll({
        where:{
            id:req.body.hallId
        }
    });
    if(eventName.length!=0){return res.send({message:'event name already registered'})};
    if(hall.length==0){return res.send({message:'hall ID not registered'})};

    const event = await Event.findAll({
        where:{
            id:req.params.eventId
        }
    });
    if(event.length==0) return res.send({message:'event doesn\'t exist'})
    
    event = req.body;
    const result = await event.save();
    
    return res.send({message:'event registered successfully'})

}

exports.getEmptySeats = async (req,res) => {
    const reses = await Reservation.findAll({
        where:{
            eventId:req.params.eventId
        }
    });
    var seats = [];
    reses.forEach(element => {
        seats = seats.concat(element.seats);
    });
    var complete_seats = [];
    if(reses.length==0) return res.send([])
    const hall = await Hall.findAll({
        where:{
            hallId:reses[0].hallId
        }
    });
    const N = hall.numOfRows * hall.numOfColumns;

    for (var i = 1; i <= N; i++) {
        complete_seats.push(i);
    }

    complete_seats = complete_seats.filter( function( el ) {
        return !seats.includes( el );
      } );
    return res.send(complete_seats);
}


exports.deleteEvent = async (req,res) => {
    const event = await Event.findAll({
        where:{
            id:req.params.eventId
        }
    });
    if(event.length==0) return res.send({message:'event doesn\'t exist'})
    await event[0].destroy();
    return res.send({message:'event deleted successfully'});
}

exports.getEvents = async (req,res )=> {
    const events = await Event.findAll();
    return res.send(events);
}

exports.getEventName = async (req,res)=>{
    const event =await Event.findAll({
        where:{
            name:req.body.name
        }
    });
    if(event.length==0) return res.send({message:'event doesn\'t exist'})
    return res.send(event[0].id);
}


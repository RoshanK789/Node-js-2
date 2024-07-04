const rooms=[{
    seats_available:"3",
    amenities:"Ac,wifi",
    priceperhour:"200",
    id:"1",
    roomname:"Normal",
    bookedstatus:"Booked"
},
{
    seats_available:"3",
    amenities:"Ac,wifi,heater,food",
    priceperhour:"300",
    id:"2",
    roomname:"super Luxury",
    bookedstatus:"Booked"
},
{
    seats_available:"3",
    amenities:"Ac,heater",
    priceperhour:"300",
    id:"3",
     roomname:"Normal",
     bookedstatus:"NA"
},
{
    seats_available:"3",
    amenities:"Ac,wifi,heater",
    priceperhour:"400",
    id:"4",
    roomname:"luxury",
    bookedstatus:"NA"
},
{
    seats_available:"3",
    amenities:"Ac",
    priceperhour:"100",
    id:"5",
    roomname:"Budget",
    bookedstatus:"NA"
}
];
const booking=[
    {
        customername:"chandran",
        date:"2024/06/28",
        starttime:"9.00 am",
        endtime:"9.00 pm",
        Room_id:"1",
        status:"booked"
    },
    {
        customername:"Goutham",
        date:"2024/06/28",
        starttime:"9.00 am",
        endtime:"9.00 pm",
        Room_id:"2",
        status:"booked"
    },
    {
        customername:"saravana",
        date:"2024/06/28",
        starttime:"9.00 am",
        endtime:"9.00 pm",
        Room_id:"3",
        status:"pending"
    },
    {
        customername:"Arun",
        date:"2024/06/28",
        starttime:"9.00 am",
        endtime:"9.00 pm",
        Room_id:"4",
        status:"pending"
    },
    {
        customername:"Sharen",
        date:"2024/06/18",
        starttime:"9.00 am",
        endtime:"9.00 pm",
        Room_id:"5",
        status:"pending"
    }
];
const booking_history=[
    {
        customername:'sharen',
        bookeddate:["2020/07/20","2024/10/27"],
        roomid:["1,5"],
        starttime:"9.00 am",
        endtime:"9.00 pm"
    },
    {
        customername:'Venki',
        bookeddate:["2020/07/20"],
        roomid:["3"],
        starttime:"9.00 am",
        endtime:"9.00 pm"
    }
    , 
    {
        customername:'Prem',
        bookeddate:["2020/07/20"],
        roomid:["4"],
        starttime:"9.00 am",
        endtime:"9.00 pm"
    }
]

//! creating a room with given details:
export const create=(req,res)=>
    {
        const {seats_available,amenities,priceperhour,id,bookedstatus}=req.body;
        const newroom={
            id:id,
            amenities:amenities,
            seats_available:seats_available,
            priceperhour:priceperhour,
            bookedstatus:bookedstatus

        };
        rooms.push(newroom);

        res.status(200).json({message:"pushed successfully",data:newroom})
    };

//! Booking a room

        export const Bookingaroom=(req,res)=>
            {
                        const {customername,date,starttime,endtime,Room_id}=req.body;
                        const newroom={
                            customername:customername,
                            date:date,
                            starttime:starttime,
                            endtime:endtime,
                            Room_id:Room_id
                
                        };
                       
                        const roomdetails = rooms.find((ele) => ele.id == Room_id); //4 ===4
                    if (!roomdetails) {
                      return res.status(404).send("Employee Not Found");
                    }
                    if(roomdetails.bookedstatus!="NA")
                        {
                            return res.status(404).send("Room is not available");
                        }
                        else{
                             
                        booking.push(newroom);
                            res.status(200).json({message:"Room Booked successfully",data:newroom})
                        } 
                      
                        
            }

//! List all rooms with booked data:

export const get = (req, res) => {
    const roomdetails=rooms.filter((ele)=>ele.bookedstatus=="Booked")
    
    res.status(200).json({ data:roomdetails});
  };

//! List all customer with booked data

export const getcustomerbookeddetails=(req,res)=>
{
    const bookingdetails=booking.filter((ele)=>ele.status=="booked")
    res.status(200).json({ data:bookingdetails});
}

//! list how many times a same customer booked a room:

export const  customerhistory=(req,res)=>
{
    
    const customerhistory=booking_history
    res.status(200).json({ data:customerhistory});
   
}
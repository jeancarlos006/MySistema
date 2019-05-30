var mongoose = require("mongoose");
const User = require("./models/User");

class Controller{
    constructor(){
         this.connect();
    }
    async connect(){
        try{
            await mongoose.connect("mongodb+srv://losorio98:osorio2019@cluster0-0mtsj.mongodb.net/Ortografia?retryWrites=true", {useNewUrlParser: true})
            console.log('connected!')
        } catch(e){
            console.error(e);
        }

    }
    getUser(res){
        User.find({}, (err, users)=>{
            if(err) throw err;

            res.send({status:200, users: users})
        })

    }


}
exports.controller = new Controller();


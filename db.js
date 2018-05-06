const mongoose = require('mongoose');

//Schema placement here
const Schema = mongoose.Schema;


const Restaurant= new Restaurant({
    _id: String,
    food: Number,
    decor: Number,
    service: Number,
    michelin: Number,
});


//Registering model
mongoose.model('Restaurant', Restaurant);

mongoose.connect('mongodb://localhost/restaurants');

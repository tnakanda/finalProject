const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://restaurants:ait@ds115350.mlab.com:15350/restaurants', (err, database) => {
    if (err) return console.log(err);
    db = database.db('restaurants');
    //require('./app/routes')(app, database);
    app.listen(process.env.PORT || 3000, () => {
        console.log('listening on 3000')
    })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

/*Ensuring that we have access to the static directories and their files*/
app.use("/images", express.static(__dirname + "/images"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/public", express.static(__dirname + "/public"));
app.use("/views", express.static(__dirname + "/views"));
app.get('/', (req, res) => {
    db.collection('restaurants').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('index.ejs', {restaurants: result})
    })
})

app.post('/restaurants', (req, res) => {
    db.collection('restaurants').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('Your restaurant has been added to the database@')
        res.redirect('/')
    })
})

app.put('/restaurants', (req, res) => {
    db.collection('restaurants')
        .findOneAndUpdate({_id: 'Le Bernardin'}, {
            $set: {
                _id: req.body._id,
                food: req.body.food,
                decor: req.body.decor,
                service: req.body.service,
                michelin: req.body.michelin
            }
        }, {
            sort: {_id: -1},
            upsert: true
        }, (err, result) => {
            if (err) return res.send(err)
            res.send(result)
        })
})

app.delete('/restaurants', (req, res) => {
    db.collection('restaurants').findOneAndDelete({_id: req.body._id}, (err, result) => {
        if (err) return res.send(500, err)
        res.send('Your restaurant was deleted!')
    })
})
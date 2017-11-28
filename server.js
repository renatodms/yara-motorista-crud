//imports
var app = require('express')(),
    http = require('http').Server(app),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

//config
app.use(bodyParser.json({ type: 'application/json' }));
require('./router.js')(app);

//mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/yaradb', {
    useMongoClient: true,
})
.then(() => {

    //listen
    var port = process.env.PORT || 7666;
    http.listen(port, () => {
        console.log('CRUD');
        console.log('port: %d', port);
    });

})
.catch(err => console.log(err));
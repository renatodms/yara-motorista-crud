//imports
var motorista = require('./controller/controllerMotorista.js');

//router
module.exports = (app) => {

    //motorista manipulation
    app.get     ('/:email', motorista.getByEmail);
    app.post    ('/', motorista.add);
    app.delete  ('/', motorista.remove);

}
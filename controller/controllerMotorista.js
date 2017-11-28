//imports
var Motorista = require('../model/motorista.js');

//[GET]
exports.getByEmail = (req, res) => {
    console.log(req.params);

    Motorista.findOne({ email: req.params.email }, (err, data) => {
        if(err) res.status(500).send({ err: err, message: 'Erro interno do sistema.' });
        else {

            if(!data) res.status(404).send({ message: 'Usuário não encontrado.' });
            else{

                console.log({ motorista: data, message: 'Sucesso.' });
                res.status(200).send({ motorista: data, message: 'Sucesso.' });

            }

        }
    });
}

//[POST]
exports.add = (req, res) => {
    console.log(req.body);

    new Motorista({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }).save((err) => {
        if(err) res.status(500).send({ err: err, message: 'Erro interno do sistema.' });
        else{

            console.log({ message: 'Sucesso.' });
            res.status(200).send({ message: 'Sucesso.' });

        }
    });
}

//[DELETE]
exports.remove = (req, res) => {
    console.log(req.body);

    Motorista.findOne({ email: req.body.email, senha: req.body.senha }, (err, data) => {
        if(err) res.status(500).send({ err: err, message: 'Erro interno do sistema.' });
        else {

            if(!data) res.status(404).send({ message: 'Usuário não encontrado.' });
            else{

                data.remove((err) => {
                    if(err) res.status(500).send({ err: err, message: 'Erro interno do sistema.' });
                    else {

                        console.log({ message: 'Sucesso.' });
                        res.status(200).send({ message: 'Sucesso.' });

                    }
                });

            }

        }
    });
}
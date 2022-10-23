//Cria a constante Contato que importa o módulo Contato da pasta src/models
const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
};


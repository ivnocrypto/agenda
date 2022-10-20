exports.paginaInicial = (req, res) => {
<<<<<<< HEAD
    res.render('index', {
        titulo: 'Este será o título da página',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
=======
     res.render('index');
>>>>>>> 6aa9b3875be7b277f07f80dd2d8e0cb1e2572a8a
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
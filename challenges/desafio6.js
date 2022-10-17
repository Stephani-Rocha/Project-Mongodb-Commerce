db.produtos.find({ curtidas: { $gte: 10, $lte: 100 } }, { nome: 1, curtidas: 1, _id: 0 });

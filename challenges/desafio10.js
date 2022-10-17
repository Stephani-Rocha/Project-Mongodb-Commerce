db.produtos.find({
    valoresNutricionais: 
    { $elemMatch: { tipo: "calorias", proteínas: { $lte: 30, $gte: 40 } } } }, { nome: 1, _id: 0 });
db.produtos.find({
    valoresNutricionais: 
    { $elemMatch: { tipo: "calorias", proteínas: { $gte: 30, $lte: 40 } } } }, { nome: 1, _id: 0 });
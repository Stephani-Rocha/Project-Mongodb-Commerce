db.produtos.updateMany({ nome: { $eq: "Big Mac" } }, { $unset: { curtidas: "" } });
db.produtos.find({}, { nome: 1, curtidas: 1, _id: 0 });
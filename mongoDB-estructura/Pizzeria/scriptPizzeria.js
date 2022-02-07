db = connect( 'mongodb://localhost/Pizzeria');
db.createCollection('Botiga');
db.createCollection('Categoria');
db.createCollection('Clients');
db.createCollection('Comandes');
db.createCollection('Empleat');
db.createCollection('Localitat');
db.createCollection('Productes');
db.createCollection('Provincia');


db.Botiga.insertOne(
  [{"idBotiga": 1,
"adreça":"vigo, 32",
"codiPostal":08870,
"codiLocalitat":2,
"codiProvincia":"08",
}]);

db.Categoria.insertOne(
  [{"idCategoria": 1,
"nom" : "Margarita",
  }]
);
db.Categoria.insertOne(
  [{"idCategoria": 2,
"nom" : "4 Quesos",
}]);

db.Clients.insertOne(
  [{
    "idClient" : 1,
    "nom" : "joan ramon",
    "cognoms" : "Oller Silvestre",
    "adreça":"jesus",
    "codiPostal":08870,
    "codiLocalitat":2,
    "codiProvincia":"08",
    "telefon":"666777666"
  }]
);

db.Comandes.insertOne([{
  "idComanda": 1,
  "dataHora": "03/02/2022 14:33:00",
  "tipusRepartiment": "domicili",
  "quantitatPizzes": 2,
  "quantitatHamburgeses": 0,
  "quantitatBegudes": 1,
  "preuTotal":50,
  "idclient":1,
  "idproducte":1,
  "idBotiga":1
}]);

db.Empleat.insertOne([{
  "idempleat":1,
  "nom":"joan ramon",
  "cognoms":"Oller Silvestre",
  "nif":"46125534T",
  "telefon":"666777666",
  "role":"Repartidor",
  "nomRepartidor":"joan",
  "dataHoraLliurament": "05/02/2022 13:30",
  "idBotiga":1
}]);

db.Localitat.insertOne([{
  "codiLocalitat" : "2704",
  "nomLocalitat" : "Sitges"
}]);

db.Productes.insertOne(
  [{
    "idProducte": 1,
    "nom": "Hamburguesa",
    "descripcio": "Hamburguesa",
    "imatge": "https://th.bing.com/th/id/R.ee35c5dc2b3e94f05f7b1c2ebfd5a735?rik=uT2CEipbxw90uA&riu=http%3a%2f%2fcocinachic.net%2fwp-content%2fuploads%2f2014%2f02%2ffotos-de-Hamburguesa-americana.jpg&ehk=CVgs6efqyu%2b98r3m%2b7OHUZyiRZDeqfdmu0I7n0MhyT0%3d&risl=&pid=ImgRaw&r=0",
    "preu": 4
  }]
);

db.Productes.insertOne(
  [{
    "idProducte": 2,
    "nom": "Beguda Coca-Cola",
    "descripcio": "Coca-Cola",
    "imatge": "https://www.cruzverde.com.co/dw/image/v2/BDPM_PRD/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw3ac185e0/images/large/74532-1-BEBIDA-GASEOSA-COCA-COLA-FCO-X-600ML.jpg?sw=1000&sh=1000",
    "preu": 3
  }]
);

db.Provincia.insertOne(
  [{
    "codiProvincia" : "08",
    "nomProvincia" : "Barcelona"
  }]
);
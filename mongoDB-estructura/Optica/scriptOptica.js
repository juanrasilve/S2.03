db = connect( 'mongodb://localhost/Optica');
db.createCollection('Clients');
db.createCollection('Empleat');
db.createCollection('Marca');
db.createCollection('TipusMuntura');
db.createCollection('Proveidor');
db.createCollection('Ulleres');

db.Clients.insertOne([{
    "nom" : "joan ramon",
    "adreçapostal":"gibraltar",
    "telefon":42,
    "email":2,
    "dataRegistre":"01/01/2022",
    "clientRecomanat":"Pep"
  }]
);

db.Empleat.insertOne([{
    "id_empleat":1,
    "nombre" : "Joan",
    "apellido": "Gomez"
  }]);

db.Marca.insertOne([{
    "id_marca":1,
    "descripcio" : "INDO",
    "id_proveidor":1
  }]);
  
db.Proveidor.insertOne([{
    "nom" : "indo",
    "adreça" :{
      "carrer":"gibraltar",
      "numero":42,
      "pis":2,
      "porta":1,
      "ciutat":"Barcelona",
      "codiPostal":"08025",
      "pais":"España"
      } ,
    "telefon" : "666999666",
    "fax" : "666999667",
    "NIF" :"46125534T"
  }]);

  db.TipusMuntura.insertOne([{
    "id_tipo_montura":1,
    "descripcio" : "Pasta"
  }]);

  db.Ulleres.insertOne([{
    "graduacion_izq":0.5,
    "graduacion_der" : 0.5,
    "color_montura":"marrón",
    "color_cristal":"transaprente",
    "precio":50,
    "id_tipo_montura":1,
    "id_marca":1,
    "id_client":1,
    "id_empleat":1
  }]);

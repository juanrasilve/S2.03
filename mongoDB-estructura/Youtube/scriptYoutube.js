db = connect( 'mongodb://localhost/Youtube');
db.createCollection('Canal');
db.createCollection('Comentari');
db.createCollection('Estat');
db.createCollection('Etiqueta');
db.createCollection('PlayList');
db.createCollection('Publica');
db.createCollection('RegistreComentariUsu');
db.createCollection('RegistreUsuarisVideo');
db.createCollection('Usuari');
db.createCollection('Video');

db.Canal.insertOne(
  [{
    "idCanal":1,
    "nom":"Principal",
    "descripcio":"Principal",
    "dataCreacio":"06/02/2022",
    "idUsuari":1
  }]);

db.Comentari.insertOne(
  [{
    "idComentari":1,
    "textComentari":"Me encanta",
    "dataHora":"06/02/2022 14:15:00",
    "like":12,
    "dislike":4,
    "idVideo":1,
    "idEstat":1,
    "idUsuari":1
  }]
);

db.Estat.insertOne(
  [{
    "idEstat":1,
    "descripcio":"Public"
  }]);

db.Etiqueta.insertOne(
  [{
    "idEtiqueta":1,
    "nomEtiqueta":"Aventuras Tom",
    "idVideo":1
  }]
);

db.PlayList.insertOne([{
  "idPlayList":1,
  "nom":"Lista1",
  "dataCreacio":"06/02/2022",
  "idEstat":1
}]);

db.Publica.insertOne([{
  "idPublica":1,
  "usuari":1,
  "dataHora":"06/02/2022 13:55:00"
}]);

db.RegistreComentariUsu.insertOne([{
  "idRegistreComentariUsu":1,
  "clicksLikes":10,
  "clicksDislikes":5,
  "dataHora":"06/02/2022 14:10:00",
  "idUsuari":1,
  "idComentari":1
}]);

db.RegistreUsuarisVideo.insertOne(
  [{
    "idRegistre":1,
    "clickLikes": 10,
    "clickDislikes":4,
    "dataHora":"06/02/2022 13:50",
    "idUsuari":"1",
    "idVideo":1
  }]
);

db.Usuari.insertOne(
  [{
    "idUsuari": 1,
    "email": "juanrasilve@yahoo.es",
    "password": "Admin",
    "nomUsuari":"Joan",
    "datanaixement":"2/02/2000",
    "sexe":1,
    "pais":"ES",
    "codiPostal":"08870",
    "idPublica":1
  }]
);

db.Video.insertOne(
  [{
    "idVideo":1,
    "titol": "Las aventuras de Tom",
    "descripcio": "Las aventuras de Tom",
    "tamany":2000,
    "nomarxiu":"aventurasTom",
    "durada":2,
    "imatge":"",
    "numReproduccions":30,
    "likes":10,
    "dislikes":3,
    "idUsuari":1,
    "idEstat":1
  }]
);



Meteor.publish('Entradas', function () {
  return Entradas.find();
});

Meteor.publish('Comentarios', function () {
  return Comentarios.find();
});

Meteor.publish('EntradasByName', function (name) {
    return Entradas.findOne({_title:"name"});
});

Meteor.publish('ComentariosByName', function (name) {
    return Comentarios.find({_entrada_id:Entradas.findOne({_title:"name"})._id});
});

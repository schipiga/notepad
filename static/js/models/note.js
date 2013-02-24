define(['backbone'], function(BB){
  
  var NoteModel = BB.Model.extend({
    defaults: {
      title: 'Title',
      description: 'description'
    }
  });

  return NoteModel;
});

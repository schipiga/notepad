define(['backbone', 'models/note'], function(BB, NoteModel){

  var NotesCollection = BB.Collection.extend({
    model: NoteModel,

    initialize: function(){
      var model1 = new NoteModel;
      var model2 = new NoteModel;
      this.add([model1, model2]);
    }
  });

  return NotesCollection;
});

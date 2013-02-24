define(['jquery',
        'underscore',
        'backbone',
        'text!templates/note.html',
        'collections/notes'], function($,
                                 _,
                                 BB,
                                 NoteTemplate,
                                 NotesCollection){
  
  var NotesView = BB.View.extend({
    el: $('#notes'),

    initialize: function(){
    },

    render: function(){
      this.$el.html(this.compose);
    },

    events: {
      'click .note': 'showMessage'
    },

    showMessage: function(){
      this.navigate("show");
    },

    compose: function(){
      var html = '', collection = new NotesCollection; 
      _.each(collection.models, function(note){
        html += '<div class="note">' + _.template(NoteTemplate, { note: note.toJSON() }) + '</div>';
      });
      return html;
    }
  });

  return NotesView;
});

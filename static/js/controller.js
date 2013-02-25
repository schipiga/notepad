define(['backbone', 'router', 'views/notes'], function(BB, Router, NotesView){

  var initialize = function(){
    var router = new Router;

    router.on('route:index', function(){
      var notes_view = new NotesView;
      notes_view.render();
    });

    router.on('route:show', function(){
      alert('a');
    });

    BB.history.start();
  };

  return {
    initialize: initialize
  };
});

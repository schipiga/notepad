define(['backbone', 'views/notes'], function(BB, NotesView){

  var AppRouter = BB.Router.extend({
    routes: {
      '': 'index',
      'show': 'showNote'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    
    app_router.on('route:index', function(){
      var notes_view = new NotesView;
      
      notes_view.render();
    });

    app_router.on('route:show', function(){
      alert('a');
    });

    BB.history.start();
  };

  return {
    initialize: initialize
  };
});

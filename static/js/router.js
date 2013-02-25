define(['backbone'], function(BB){
  var Router = BB.Router.extend({
    routes: {
      '': 'index',
      'show': 'showNote'
    }
  });

  return Router;
});

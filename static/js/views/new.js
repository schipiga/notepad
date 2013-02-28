define(['jquery',
        'backbone',
        'text!templates/form.html'], function($,
                                              BB,
                                              FormTemplate){

  var NewView = BB.View.extend({
    el: $("#form"),

    events: {
      "click #save": 'closeForm'
    },

    closeForm: function(e){
      e.preventDefault();
      this.$el.html('');
    },

    render: function(){
      this.$el.html(FormTemplate);
    }
  });

  return NewView;
});

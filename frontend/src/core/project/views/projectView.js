define(function(require){

  var Backbone = require('backbone');
  var Handlebars = require('handlebars');
  var BuilderView = require('coreJS/app/views/builderView');

  var ProjectView = BuilderView.extend({

    tagName: 'div',

    className: 'project',

    events: {
      'click div.projectDetail' : 'viewProject',
      'click .project-delete-link' : 'deleteProject'
    },

    viewProject: function(event) {
      event.preventDefault();
      Backbone.history.navigate('#project/view/'+this.model.get('_id'), {trigger: true});
    },

    deleteProject: function(event) {
      event.preventDefault();
      if (confirm('Are you sure you want to delete this project?')) {
        if (this.model.destroy()) {
          this.remove();       
        }
      }
    }
    
  }, {
    template: 'project'
  });

  return ProjectView;

});
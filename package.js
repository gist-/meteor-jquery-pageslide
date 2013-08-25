Package.describe({
  summary: "jQuery pageslide repackaged for Meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files('lib/jquery-pageslide/jquery.pageslide.js','client');
});

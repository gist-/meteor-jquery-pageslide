try {
  Package.describe({
    summary: "jQuery pageslide repackaged for Meteor"
  });

  Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files('lib/jquery-pageslide/jquery.pageslide.js','client');
  });
}
catch (err) {
  console.log("Error while trying to load a package: " + err.message);
};

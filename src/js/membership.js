import '../css/membership.css';

(function() {
  // add download function
  window.downloadYomail = function(ext) {
    var url =
      'http://winupgrade-1251063063.file.myqcloud.com/download/' +
      version +
      '/YoMailSetup.' +
      ext;
    window.location = url;
  };
})();

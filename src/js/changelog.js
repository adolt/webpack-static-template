import '../css/changelog.css';

(function() {
  var nav = document.getElementById('nav');
  if (nav && nav.children.length) {
    var lis = Array.prototype.slice.call(nav.children);
    var selectPlatform = function(e) {
      var winLogSection = document.getElementById('win-logs');
      var macLogSection = document.getElementById('mac-logs');
      var iosLogSection = document.getElementById('ios-logs');
      var androidLogSection = document.getElementById('android-logs');
      switch (e.target.innerText) {
        case 'Windows':
          winLogSection.classList.remove('hide');
          macLogSection.classList.add('hide');
          iosLogSection.classList.add('hide');
          androidLogSection.classList.add('hide');
          break;
        case 'Mac':
          winLogSection.classList.add('hide');
          macLogSection.classList.remove('hide');
          iosLogSection.classList.add('hide');
          androidLogSection.classList.add('hide');
          break;
        case 'iOS':
          winLogSection.classList.add('hide');
          macLogSection.classList.add('hide');
          iosLogSection.classList.remove('hide');
          androidLogSection.classList.add('hide');
          break;
        case 'Android':
          winLogSection.classList.add('hide');
          macLogSection.classList.add('hide');
          iosLogSection.classList.add('hide');
          androidLogSection.classList.remove('hide');
          break;
      }
      lis.forEach(function(li) {
        li.classList.remove('active');
      });
      e.target.classList.add('active');
    };
    lis.forEach(function(li) {
      li.addEventListener('click', selectPlatform);
    });
  }

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

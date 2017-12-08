import '../css/home.css';

const introImg = [
  require('assets/p1.png'),
  require('assets/p2.png'),
  require('assets/p3.png')
];
const pcImg = {
  Windows: require('assets/Windows.exe.png'),
  Mac: require('assets/Mac.dmg.png')
};
const mobileQR = {
  iOS: 'http://cloudresource-1251063063.costj.myqcloud.com/image/iphone-qr.png',
  Android:
    'http://cloudresource-1251063063.costj.myqcloud.com/image/yomail-android.png'
};
(function() {
  // change introduce image
  var indicator = document.getElementsByClassName('indicator')[0];
  var introPic = document.getElementById('intro-pic');
  var slider = document.getElementById('intro-slider');
  if (indicator && introPic && slider) {
    var lis = Array.prototype.slice.call(indicator.children);
    var swipeTo = (function() {
      var last = 0;
      return function(index) {
        introPic.classList.remove('fadein');
        introPic.classList.add('opacity-0');
        setTimeout(function() {
          introPic.src = introImg[index];
          introPic.onload = function() {
            slider.classList.remove('bg-' + last);
            slider.classList.add('bg-' + index);
            introPic.classList.remove('opacity-0');
            introPic.classList.add('fadein');
            lis[last].classList.remove('active');
            lis[index].classList.add('active');
            last = index;
          };
        }, 1000);
      };
    })();
    var swipeTimer = (function() {
      var cnt,
        intervalId = null;
      return {
        start: function(start) {
          cnt = start || 0;
          intervalId = setInterval(function() {
            swipeTo(++cnt % 3);
          }, 5000);
        },
        clear: function() {
          clearInterval(intervalId);
        }
      };
    })();
    lis.forEach(function(li, index) {
      li.addEventListener('click', function() {
        swipeTimer.clear();
        swipeTo(index);
        swipeTimer.start(index);
      });
    });
    swipeTimer.start();
  }

  // change download section
  var platforms = document.getElementsByClassName('platform');
  if (platforms) {
    var desktop = document.getElementsByClassName('desktop')[0];
    var mobile = document.getElementsByClassName('mobile')[0];
    var desktopListener = function(type) {
      return function() {
        desktop.classList.remove('hide');
        mobile.classList.add('hide');
        desktop.children[0].src = pcImg[type];
        desktop.children[0].alt = type + '版下载';
      };
    };
    var mobileListener = function(type) {
      return function() {
        mobile.classList.remove('hide');
        desktop.classList.add('hide');
        var title = document.getElementById('mobile-platform');
        var qr = document.getElementById('mobile-qr');
        var apk = document.getElementById('download-android-apk');
        title.innerText = type;
        qr.src = mobileQR[type];
        apk.style = type === 'iOS' ? 'display: none;' : '';
      };
    };
    platforms[0].addEventListener('click', desktopListener('Windows'));
    platforms[1].addEventListener('click', desktopListener('Mac'));
    platforms[2].addEventListener('click', mobileListener('iOS'));
    platforms[3].addEventListener('click', mobileListener('Android'));
  }

  // set footer year
  var year = document.getElementById('year');
  var date = new Date();
  year.innerText = date.getFullYear();

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

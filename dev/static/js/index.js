function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    //- Mac OS
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';

      let logo = document.querySelector('.header__logo')
      let delProductBtn = document.querySelectorAll('.info__delete-prodect-btn')
      let secureIcon = document.querySelector('.info__secure-icon')

      logo.classList.add('logo-Mac')
      secureIcon.classList.add('icon-secure-Mac')

      delProductBtn.forEach(element => {
          element.classList.add('delete-product-Mac')
      });
      

    } 

    //- iOS
    else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';

    
    } 
    //- Windows
    else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';


     

    } 
    
    //- Android
    else if (/Android/.test(userAgent)) {
      os = 'Android';

      
    } 
    
    //- Linux
    else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }
  
  alert(getOS())
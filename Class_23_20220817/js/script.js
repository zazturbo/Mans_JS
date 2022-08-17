// const apps = {
//   Android: "https://play.google.com/",
//   iOS: "https://www.apple.com/store",
// };

// const platform = () => {
//   let userAgent = navigator.userAgent || navigator.vendor || window.opera;
//   if (/windows phone/i.test(userAgent)) return "Windows Phone";
//   if (/android/i.test(userAgent)) return "Android";
//   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
//   return null;
// };

// const redirect = () => {
//   let os = platform();
//   if (os in apps) {
//     location.replace(apps[os]);
//   } else {
//     const message = document.querySelector(".message");
//     message.innerText = "Your OS is not supported";
//   }
// };

// redirect();

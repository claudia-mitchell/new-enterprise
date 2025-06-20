document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("goNext");

  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "pages/page2.html";
    });
    
  }
  
});





if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('✅ Service Worker registered:', registration.scope);
      })
      .catch(error => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
}




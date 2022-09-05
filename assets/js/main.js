$(document).ready(function() {
    $('.menu-mobile a').click(function(e) {
       e.preventDefault(); // is required
       closeNav();
  
        setTimeout(() => {
           const nextPage = e.currentTarget.href;
          window.location.href = nextPage;
        },1000) // set the time here in milliseconds    
    })
  });
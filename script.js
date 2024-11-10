
  document.getElementById("form").addEventListener("submit", function(event) {
    
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm-email").value;
    const errorMessage = document.getElementById("errorMessage");

    
    if (email !== confirmEmail) {
      event.preventDefault();  
      alert('Emails do not match!');
    } else {
      errorMessage.style.display = "none"; 
    }
  });


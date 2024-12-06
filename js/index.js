// signupp pageee handlingg
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

 name = document.getElementById('name').value;
 email = document.getElementById('email').value;
 password = document.getElementById('password').value;

  if (localStorage.getItem(email)) {
      alert("Email is already registered. Please choose a different one.");
      return;
  }

 emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
  }


 user = { name, email, password };
  localStorage.setItem(email, JSON.stringify(user));
});

// Login page handelingg
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
  event.preventDefault();

 email = document.getElementById('loginEmail').value;
 password = document.getElementById('loginPassword').value;


 user = JSON.parse(localStorage.getItem(email));

  if (user && user.password === password) {
 
      localStorage.setItem('loggedIn', email);
      window.location.href = 'index.html'; 
  } else {
      alert("Invalid email or password ,Please try again.");
  }
});

// Home page handleingg
if (window.location.pathname.includes('index.html')) {
 loggedInEmail = localStorage.getItem('loggedIn');
  if (loggedInEmail) {
     user = JSON.parse(localStorage.getItem(loggedInEmail));
      document.getElementById('userName').textContent = user.name;
  } else {
  
      window.location.href = 'login.html';
  }

  // logout Handeling
  document.getElementById('logoutButton').addEventListener('click', function() {
      localStorage.removeItem('loggedIn'); 
      window.location.href = 'login.html'; 
  });
}

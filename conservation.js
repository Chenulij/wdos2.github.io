function local() {
    fetch('conservation.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('ConservationData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
      })
 }
   
 local() 


const Alpine = require('alpinejs');

// newsletter subscription
function newsletterSubscription() {
    
    Alpine.data('newsletter', () => ({
        email: '',
        subscribe() {
            // Get existing subscriptions from localStorage 
            let subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || [];
            
            subscriptions.push(this.email);
            
            localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
           
            this.email = '';
          
            alert('Thank you for subscribing!');
        }
    }));
}

newsletterSubscription();


const isAdmin = checkAdminAuthentication();


const adminLink = document.getElementById('adminLink');

if (isAdmin) {
    adminLink.style.display = 'inline'; 
}

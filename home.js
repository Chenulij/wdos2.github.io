function local() {
    fetch('home.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('HomeData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
      })
 }
   
 local() 
 
 


function local() {
    fetch('yala.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('YalaData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
      })
 }
   
 local() 
 
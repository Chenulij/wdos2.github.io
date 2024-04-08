function local() {
    fetch('leopard.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('LeopardData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
      })
 }
   
 local()
function local() {
    fetch('wilpattu.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('WilpattuData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
      })
 }
   
 local()
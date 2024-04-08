function local() {
    fetch('animal.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('AnimalData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
      })
 }
   
 local() 

 
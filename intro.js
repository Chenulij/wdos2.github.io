function local() {
    fetch('intro.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('IntroData', JSON.stringify(data));
          console.log('Data stored in localStorage successfully!');
      })
 }
   
 local()
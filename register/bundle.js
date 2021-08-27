const form = document.querySelector('#register');

//listen for submit event

form.addEventListener('submit', (event) => {
    // disable default action
        event.preventDefault();
  
    // configure a request
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '127.0.0.1:8080/user/add');
  
  let data = new FormData(form);
   
    xhr.responseType = 'json';        
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  
    // listen for `load` event
    xhr.onload = () => {
    console.log(xhr.responseText);
    }
    });





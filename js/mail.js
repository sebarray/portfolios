let mail =document.getElementById('email')


mail.addEventListener('click', ()=>{

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "message": document.getElementById('mensaje').value,
  "name": document.getElementById('mail').value
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://mailgo.herokuapp.com/mail", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  Swal.fire(
    'Genial!',
    'Muchas gracias por contactarme!',
    'success'
  )
})
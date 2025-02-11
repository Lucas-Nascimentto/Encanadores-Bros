

const form = document.querySelector('.formulario');
const mascara = document.querySelector('.formulario-mascara');

function entrarEmContato(){
    form.style.left = '40%';
    mascara.style.visibility = 'visible';
    form.style.top = '34.5%';
 

}

function semMascara(){
     mascara.style.visibility = 'hidden';
      form.style.left = '-80%';
}
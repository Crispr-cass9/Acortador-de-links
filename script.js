const acortarEnlace = async (urlLarga) => {
    
    try {
      const respuesta = await fetch(`https://is.gd/create.php?format=json&url=${urlLarga}`);
      const datos = await respuesta.json();
  
      return datos.shorturl
    
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };
  
// Uso del ejemplo
//console.log(acortarEnlace('https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G'))

let btn_acortar = document.querySelector('#contenedor-input-btn button')
let entrada_usuario = document.querySelector('#entrada-link')
let contenedor_todos_links = document.querySelector('#seccion-links-acortados')

btn_acortar.addEventListener('click',async ()=>{
    enlace_acortado = await acortarEnlace(entrada_usuario.value)
    console.log(enlace_acortado);
    
    let contenedor = document.createElement('div')
    contenedor.setAttribute('class', 'contenedor-link-acortado')

    let h3 = document.createElement('h3')
    h3.setAttribute('class', 'link-original')
    h3.textContent = entrada_usuario.value

    let resultado_copiar = document.createElement('div')
    resultado_copiar.setAttribute('class', 'resultado-copiar')

    let a = document.createElement('a')
    a.setAttribute('class', 'link-acortado')
    a.textContent = enlace_acortado

    let btn = document.createElement('button')
    btn.setAttribute('class', 'btn-copiar')
    btn.textContent = 'Copy'

    resultado_copiar.appendChild(a)
    resultado_copiar.appendChild(btn)

    contenedor.appendChild(h3)
    contenedor.appendChild(resultado_copiar)
    contenedor_todos_links.appendChild(contenedor)

})
document.addEventListener('DOMContentLoaded',function(){
    const nombre = document.querySelector('.nombre__input');
    const segundoNombre = document.querySelector('.segundoNombre__input');
    const apellido = document.querySelector('.apellido__input');
    const segundoApellido = document.querySelector('.segundoApellido__input');
    const correo = document.querySelector('.correo__input');
    const confirmaCorreo = document.querySelector('.confirmaCorreo__input');
    const usuario = document.querySelector('.usuario__input');
    const contrasena= document.querySelector('.contrasena__input');
    const confirmaContrasena = document.querySelector('.confirmaContrasena__input');
    const tarjetaCredito = document.querySelector('.tarjetaCredito__input');
    const formulario = document.querySelector('.formulario');

    // exoresiones regulares
    const regexName = /^[a-zA-Z\s]+$/; // para validar nombres y apellidoss
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // para validar email
    const regextel = /^\(\d{3}\) \d{3}-\d{4}$/; //para validar telefono
    const regexTCredito = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/; //tarjeta de credito




    nombre.addEventListener('blur',validar);
    segundoNombre.addEventListener('blur',validar);
    apellido.addEventListener('blur',validar);
    segundoApellido.addEventListener('blur',validar);
    correo.addEventListener('blur',validar);
    confirmaCorreo.addEventListener('blur',validar);
    usuario.addEventListener('blur',validar);
    contrasena.addEventListener('blur',validar);
    confirmaContrasena.addEventListener('blur',validar);
    tarjetaCredito.addEventListener('blur',validar);

    function validar(e){
        const padre = e.target.parentElement;
        const nombre = e.target.id;
        const valorInput = e.target.value.trim();
        
        if(!(e.target.classList.contains('segundoNombre__input') || 
            e.target.classList.contains('segundoApellido__input'))){

            if(valorInput===''){
                mostrarAlerta(`*El campo ${nombre} no puede estar vacío`, padre);
                return;          
            }
            
            if((nombre === 'email' ||nombre ==='confirmaEmail' ) && !validarEmail(valorInput)){
                mostrarAlerta('email inválido', padre);
                return
            }
                
            limpiarHTML(padre);
            };
    }   

    //-----------------------0---------------------------------
    function mostrarAlerta(mensaje, referencia){
        const alerta = referencia.querySelector('.campo-vacio');
        if(alerta){
            alerta.remove();
        }

        const campoVacio = document.createElement('P');
        campoVacio.textContent= mensaje;
        campoVacio.classList.add('campo-vacio')
        campoVacio.setAttribute('id', 'campo-vacio');
        referencia.appendChild(campoVacio);
    }

    function limpiarHTML(referencia){
        const alerta = referencia.querySelector('.campo-vacio');
         if (alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){
        const resultado = regexEmail.test(email);
        return resultado;
    }

})

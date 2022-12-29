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
        
        if(!(e.target.classList.contains('segundoNombre__input') || e.target.classList.contains('segundoApellido__input'))){
            if(valorInput===''){             
                crearElementoHTML(`*El campo ${nombre} no puede estar vacío`, padre);
            } // fin if valorInput
        
        } // fin if principal

        // multiplesValidaciones(nombre,valorInput,padre);
    
    }  // fin funcion validar

    function crearElementoHTML(mensaje, referencia){
        const mensajeError = referencia.querySelector('.campo-vacio');
        if (mensajeError){
            mensajeError.remove();
        }
        const campoVacio = document.createElement('P');
        campoVacio.textContent= mensaje;
        campoVacio.setAttribute('class', 'campo-vacio')
        campoVacio.setAttribute('id', 'campo-vacio');
        referencia.appendChild(campoVacio);
    }

    // function multiplesValidaciones(nombreId, valorCampo,padre_){
    //     switch(nombreId){
    //         case  'nombre':
    //             let resultado = regexName.test(valorCampo);
    //             if(!resultado){
    //                 crearElementoHTML('Ingresa un nombre válido', padre_)
    //             }

    //         case 'segundoNombre':
    //             resultado = regexName.test(valorCampo);
    //             if(!resultado){
    //             menError= 'Ingresa un nombre valido';
    //             }
    //             return menError;
    //             break;
            
    //         case 'apellido':
    //             resultado = regexName.test(valorCampo);
    //            return resultado;
    //             break;
    //         case 'segundoApellido':
    //             resultado = regexName.test(valorCampo);
    //            return resultado;
    //             break;
    //         case 'email':
    //             resultado = regexEmail.test(valorCampo);
    //            return resultado;
    //             break;
    //         default:
    //             console.log('defaul')
            
            
         

       // } //fin switch
   // } //fin funcion validar

        
            
            
            
        
        // if (nombre === "nombre"){
        //     expresionRegularNombreYApellido(valorInput);
        // }


    
    
    // function expresionRegularNombreYApellido(dato){
    //     const prompt = /^[a-zA-Z\s]+$/;
    //     console.log(prompt.test(dato));
    // }

    
      













    



})

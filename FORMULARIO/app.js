document.addEventListener('DOMContentLoaded',function(){
    const objetoFormulario = {
        // nombre:'',
        // apellido:'',
        // correo:'',
        // usuario:'',
        // contrasena:'',
        // tarjeta:'',
    }



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
    const regexNombre = /^[a-zA-Z\s]+$/; // para validar nombres y apellidoss
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // para validar email
    const regexUserName = /^[a-z0-9_]{8,}$/
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
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
            } else {

                if(nombre === 'nombre') {
                    if (!validarNombre(valorInput)){
                        mostrarAlerta('Ingrese un nombre válido', padre);
                    } else {
                        limpiarHTML(padre);
                    }
                }
                
                if(nombre === 'apellido') {
                    if (!validarNombre(valorInput)){
                        mostrarAlerta('Ingrese un apellido válido', padre);
                    } else {
                        limpiarHTML(padre);
                    }
                }

                if(nombre === 'email') {
                    if (!validarEmail(valorInput)){
                        mostrarAlerta('Ingrese un email válido', padre);
                    } else {
                        limpiarHTML(padre);
                    }
                }

                if(nombre === 'confirmacionEmail') {
                    const padreValue = padre.previousElementSibling.firstElementChild.value;
                    if (valorInput!== padreValue){
                        mostrarAlerta('Digite el mismo email', padre);
                    } else {
                        limpiarHTML(padre);
                    }
                }

                if(nombre ==='usuario'){
                    if(!validarUserName(valorInput)){
                        mostrarAlerta('Debe tener al menos: 8 caracteres, letras minúculas, numeros, y guión bajo', padre);
                    } else {
                         limpiarHTML(padre);
                    }
                }

                if(nombre ==='password'){
                    if(!validarPassword(valorInput)){
                        mostrarAlerta('Debe tener al menos: 8 caracteres, una miniscula, una mayúscula, un número y un caracter especial', padre);
                    } else {
                         limpiarHTML(padre);
                    }
                }
                if(nombre === 'confirmacionPassword') {
                    const padreValue = padre.previousElementSibling.firstElementChild.value;
                    if (valorInput!== padreValue){
                        mostrarAlerta('Digite la misma contraseña', padre);
                    } else {
                        limpiarHTML(padre);
                    }
                }
                if(nombre === 'tarjeta') {
                    if(!validarTarjeta(valorInput)){
                        mostrarAlerta('Ingrese una tarjeta de crédito válida', padre);
                    } else {
                         limpiarHTML(padre);
                    }
                }

            }
        }
        objetoFormulario[nombre] = valorInput.toLowerCase();
        comprobarObjetoFormulario()
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
    function comprobarObjetoFormulario(){
        console.log(Object.values(objetoFormulario).includes(''));
    }




    // -------- validaciones de inputs porexpresiones regualares-----

     function validarNombre(nombre){
        const resultado = regexNombre.test(nombre);
        return resultado;
    }
    function validarEmail(email){
        const resultado = regexEmail.test(email);
        return resultado;
    }

    function validarUserName(userName){
        const resultado = regexUserName.test(userName);
        return resultado;
    };
    function validarPassword(password){
        const resultado = regexPassword.test(password);
        return resultado;
    };
    
    function validarTarjeta(tc){
        const resultado = regexTCredito.test(tc);
        return resultado
    }
})

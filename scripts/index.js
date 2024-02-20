/*
Alfonso Reviejo Valle
https://github.com/alfonn13/PracticaEvaluableU5_DWEC-DIW
*/

const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const mensaje = document.querySelector('#mensaje');
const enviar = document.querySelector('#enviar');
const errores = document.querySelector('#errores');

let mensajesError = [];

const validar = e => {
    e.preventDefault();
    
    mensajesError = [];

    // Nombre como campo obligatorio (si es verdadero hace el push)
    nombre.value.trim().length === 0 && mensajesError.push('El campo nombre es obligatorio');
    
    // Caracteres del nombre validos
    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombre.value.trim()) && mensajesError.push('El campo nombre solo puede contener letras y espacios en blanco');

    // Apellido como campo obligatorio
    apellido.value.trim().length === 0 && mensajesError.push('El campo apellido es obligatorio');
    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(apellido.value.trim()) && mensajesError.push('El campo apellido solo puede contener letras y espacios en blanco');

    // Email valido   
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(correo.value.trim()) && mensajesError.push('El Correo debe tener el formato correcto');

    // Telefono valido
    !/^\d{7,14}$/.test(telefono.value.trim()) && mensajesError.push('El campo telefono solo puede contener números y debe tener entre 7 y 14 dígitos');
            
    // Mensaje como campo obligatorio
    mensaje.value.trim().length < 10 && mensajesError.push('Mensaje muy corto');
    
    if (mensajesError.length === 0 && confirm('¿Desea enviar el formulario?')) {
        formulario.submit();
    } else if (mensajesError.length > 0) {
        errores.innerHTML = mensajesError.join('<br> <br>'); 
    }
}

formulario.addEventListener('submit', validar);
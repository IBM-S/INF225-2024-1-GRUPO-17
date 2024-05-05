// -----------------------------------------------------------------------------
//
// Movimientos de los botones de la página de login
//
// Desarrollado por: Alessandro Cintolesi
//                   Ignacio Muñoz
//                   Benjamin Pavez
//
// Fecha Inicio: 27-04-2024
//
// Fecha Ultima Modificacion: 02-05-2024
//
//
// Este código fuente representa una parte del proyecto de Analisis y Diseño de
// Software (INF-236) e Ingenieria de Software (INF-225), para mas informacion
// revisar el README en GitHub.
//
// El código fuente se distribuye con la esperanza de que sea útil,
// pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
// APTITUD PARA UN PROPÓSITO PARTICULAR.
//
//
// DESCRIPCIÓN:
// Movimientos de los botones de la página de login
//
// -----------------------------------------------------------------------------
import $ from 'jquery';

// Delegación de eventos para los botones en .info-item y .container-form
$(document).on("click", ".info-item .btn", function(){
    console.log("Click en el botón de .info-item");
    $(".container").addClass("log-in").removeClass("sign-up");
    $(".container-form.sign-up").css({
        "height": "550px", // Ajuste de altura automático del formulario de registro
        "width": "550px", // Ajuste de ancho del formulario de registro
        "margin-top": "-95px" // Ajuste de margen superior del formulario de registro
    });
});

$(document).on("click", ".container-form .btn", function(){
    console.log("Click en el botón de .container-form");
    $(".container").removeClass("log-in").addClass("sign-up");
    $(".container-form.sign-up").css({
        "height": "", // Restablecer la altura del formulario de registro
        "min-height": "", // Restablecer la altura mínima del formulario de registro
        "width": "", // Restablecer el ancho del formulario de registro
        "margin-top": "" // Restablecer el margen superior del formulario de registro
    });
});

function valida_envia() {
    if (document.fvalida.nombre.value.length == 0) {
    alert("Tiene que escribir su nombre")
    document.fvalida.nombre.focus()
    return 0;}

    if (document.fvalida.lastname.value.length == 0) {
        alert("Tiene que escribir su apellido")
        document.fvalida.lastname.focus()
        return 0;}
    
    if (document.fvalida.address.value.length == 0) {
        alert("Tiene que escribir su dirección")
        document.fvalida.address.focus()
        return 0;}

        edad = document.fvalida.edad.value
        edad = validarEntero(edad)
        document.fvalida.edad.value = edad
    if (edad == "") {
        alert("Tiene que introducir un número entero en su edad.")
        document.fvalida.edad.focus()
        return 0;
    } else {
        if (edad < 18) {
            alert("Debe ser mayor de 18 años.")
            document.fvalida.edad.focus()
            return 0;
        }
    }
    ident = document.fvalida.ident.value
    ident = validarEntero(ident)
    document.fvalida.ident.value = ident
    if (ident == "") {
        alert("Tiene que introducir se número de documento.")
        document.fvalida.ident.focus()
        return 0;
    }
    if (document.fvalida.city.value.length == 0) {
        alert("Escriba su ciudad")
        document.fvalida.city.focus()
        return 0;}

    postal = document.fvalida.postal.value
    postal = validarEntero(postal)
    document.fvalida.postal.value = postal
    if (postal == "") {
        alert("Tiene que introducir su código postal.")
        document.fvalida.postal.focus()
        return 0;
    }   

    telefono = document.fvalida.telefono.value
    telefono = validarEntero(telefono)
    document.fvalida.telefono.value = telefono
    if (telefono  == "") {
        alert("Tiene que introducir su telefono.")
        document.fvalida.telefono.focus()
        return 0;
    } 

    mail = document.fvalida.mail.value
    mail = validarEmail(mail)
    document.fvalida.mail.value = mail
    if (mail == "") {
        alert("Tiene que introducir su email.")
        document.fvalida.mail.focus()
        return 0;
    }
        
}
function validarEntero(valor) {
    valor = parseInt(valor)
    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }   
}

function validarEmail(valor) {
    if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(valor)){;
    } else {
     alert("La dirección de email es incorrecta.");
     return ""
    }
  }
    
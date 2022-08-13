//archivo para crear lógica de cambio de páginas

function cambioLogin(){
    location.href="./home-login.html"
}

function cambioHome(){
    location.href="./index.html"
}

function addProduct(){
    location.href="./agregaProducto.html"
}

function loginValidation(){
    return true;
}

function logIn(){
        if(loginValidation()){
            location.href="./productos_admin.html"
        }
}

function cambioAllproducts(){
    location.href="./productos.html"
    console.log("click")
}
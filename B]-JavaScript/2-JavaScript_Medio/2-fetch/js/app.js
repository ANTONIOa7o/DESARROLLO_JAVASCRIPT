/*
                    =========
                      Fetch
                    =========
            Un método, directo que nos permite, desde la configuracion de js 'realizar
            llamadas' al servidor. 
            Porqué?:
            1- Crear orden, establecer la comunicacion
            2- Nutrir de basta informacion al usuario
            3- Actualizacion a tiempo real
            *Sintaxis:
            let promesa = fetch(url,[opciones]).then(item => {item.metodo})
            *Definimos:
                -url:la conexion directa de acceso a los datos
                -opciones: parámetros opcionales, peticion get, post como se descargarán los contenidos
                -.then(): 'la promesa' que nos entrega un object response, asociado al formato json
                -item, en esa promesa, será la carga de un new array()
*/
/*target ↓*/
document.getElementById('api').addEventListener('click', cargarApi);

function cargarApi() {
    fetch('https://picsum.photos/v2/list').then(traer => traer.json()).then(imagenes => {
        console.log(imagenes)
        /*
        Template string, plantillas literales, 
        viene a simplificar la conjugacion de string con las variables y otros elementos
        Caracteristicas:
        i. Cambia la estructura a comillas inversas ``, por la necesidad, de otras comillas trabajamos las ''
        ii. simbolo ${} absorve el elemento(variable/funcion) sin necesidad de concaternarlo al string
        iii.{} será entendido como argumentos de la funcion
        */
        let html = ``;

        imagenes.forEach((imagen) => {
            html += `
    <ul class="list-group">
    <li class="list-group-item list-group-item-action">
    <h5 class"display-3">Autor:${imagen.author}</h5> <br>
    <img src="${imagen.download_url}" /> <br>
    <a class="btn btn-outline-primary" href="${imagen.url}" >Descarga</a>  <br>
    </li>
    </ul>
    `;

        });
        document.getElementById('resultado').innerHTML = html;
    });
}
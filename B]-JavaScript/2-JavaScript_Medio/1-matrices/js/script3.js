var arrayImagenes =new Array(
    "https://picsum.photos/id/17/300/300.jpg" ,//0
    "https://picsum.photos/id/18/300/300.jpg" ,//1
    "https://picsum.photos/id/28/300/300.jpg" ,//2
    "https://picsum.photos/id/57/300/300.jpg" ,//3
    "https://picsum.photos/id/81/300/300.jpg" ,//4
    "https://picsum.photos/id/136/300/300.jpg" //5

)
let i = 1
function carrusel(){
    document.getElementById('fotos').src = arrayImagenes[i];
    if(i < arrayImagenes.length-1){
        i++
    }else{
        i = 0
    }
}
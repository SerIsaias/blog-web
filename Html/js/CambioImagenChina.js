/* Creamos una funcion para cambiar las imagenes del html China*/ 
const imagenesChina=[
   "/Img/Img_china/imagen_de_china",
   "/Img/Img_china/imagen_de_china_2.jpeg",
   "/Img/Img_china/imagen_de_china_1.jpeg"
];

let indexChina=0;
const divImagenesChina=document.getElementById("imagenesChina");
function imagenChina(){
   divImagenesChina.src=imagenesChina[indexChina];
}

setInterval(()=>{
   indexChina=(indexChina+1)%imagenesChina.length;
   imagenChina();
}, 5000);

imagenChina();


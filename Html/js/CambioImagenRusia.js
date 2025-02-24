let indexRusia=0;
/*Cambio imagen rusia */
const imagenesRusia=[
    "/Img/Img_Rusia/Img_1.jpeg",
    "/Img//Img_Rusia/Img_2.jpeg",
    "/Img/Img_Rusia/Img_3.jpeg"
 ];
 const divimagenesRusia= document.getElementById("imagenesRusia");
 function ImagenRusia(){
 divimagenesRusia.src=imagenesRusia[indexRusia];
 }
 setInterval(()=>{
    indexRusia=(indexRusia+1)%imagenesRusia.length;
    ImagenRusia();
    },5000)
 
 ImagenRusia();
var btn = document.getElementById("btn");
var body = document.getElementsByTagName("body")[0];
var color = 0;
btn.onclick = function(){

    colors =["red","gray", "black","blue", "yellow", "green", "purple","orange" ];
    body.style.background =  colors[color++];
 if( color >= colors.length)
     color = 0;
}
// btn.onclick =function(){
//     var r = Math.floor(Math.random()*256);
//     var g = Math.floor(Math.random()*256);
//     var b = Math.floor(Math.random()*256);
//      body.style.background = "rgb(${r},${g},${b})";
// }//colors.length - 8it 
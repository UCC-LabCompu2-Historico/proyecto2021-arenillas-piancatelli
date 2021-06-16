function Funciones(id, value) {

    A = document.getElementById("LadoA").value;
    B = document.getElementById("LadoB").value;
    H = document.getElementById("LadoH").value;

    alfa = document.getElementById("Anguloalfa").value;
    beta = document.getElementById("AnguloBeta").value;
    tita = document.getElementById("AnguloTita").value;


    if (H=='') {
        if(A<=0 || B<=0){
            alert("Los datos ingresados son invalidos");
            Reinicio();
        }else {
            H = Math.sqrt(A * A + B * B)

            document.datos.LadoH.value = H;
        }
    }
    if (B=='') {
        if(A>=H || A<=0 || H<=0){
            alert("Los datos ingresados son invalidos");
            Reinicio();
        }else {
            B = Math.sqrt(H * H - A * A)

            document.datos.LadoB.value = B;
        }
    }
    if (A=='') {
        if(B>=H || B<=0 || H<=0){
            alert("Los datos ingresados son invalidos");
            Reinicio();
        }else {
            A = Math.sqrt(H * H - B * B)
            document.datos.LadoA.value = A;
        }
    }


}
function Reinicio(id, value){

    document.datos.LadoA.value = null;
    document.datos.LadoB.value = null;
    document.datos.LadoH.value = null;
    document.datos.AnguloBeta.value = null;
    document.datos.AnguloTita.value = null;
    document.datos.Anguloalfa.value = null;
}

function dibujartriangulo(){
    alert("ENTRO");
    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#bcc932"
    ctx.beginPath();
    ctx.moveTo(200,200);
    ctx.lineTo(50, 200);
    ctx.lineTo(200, 50);
    ctx.closePath();
    ctx.fill();
}
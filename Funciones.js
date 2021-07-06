function Funciones(id, value) {

    A = document.getElementById("LadoA").value;
    B = document.getElementById("LadoB").value;
    H = document.getElementById("LadoH").value;
    angalfa = document.getElementById("Anguloalfa").value;
    angbeta = document.getElementById("AnguloBeta").value;



    if (H=='' && angalfa=='' && angbeta=='') {
        if(A<=0 || B<=0){
            alert("Los datos ingresados son invalidos");
            Reinicio();
        }else {
            H = Math.sqrt(A * A + B * B)
            angbeta = 180/Math.PI*Math.atan(A/B);
            angalfa= 180/Math.PI*Math.atan(B/A);


            document.datos.LadoH.value = H.toFixed(2);
            document.datos.AnguloBeta.value = angbeta.toFixed(2);
            document.datos.Anguloalfa.value = angalfa.toFixed(2);
        }
    }
    if (B=='' && angalfa=='' && angbeta=='') {
        if (A <= 0 || H <= 0) {
            alert("Los datos ingresados son invalidos");
            Reinicio();
        } else {

            c = (H * H - A * A)
            if (c <= 0) {
                alert("A no puede ser mayor que H");
                Reinicio();
            } else {
                B = Math.sqrt(c)
                angbeta = 180/Math.PI * Math.asin(A / H);
                angalfa = 180/Math.PI * Math.acos(A / H);

                document.datos.LadoB.value = B.toFixed(2);
                document.datos.AnguloBeta.value = angbeta.toFixed(2);
                document.datos.Anguloalfa.value = angalfa.toFixed(2);
            }
        }
    }
    if (A=='' && angalfa=='' && angbeta=='') {
        if (B <= 0 || H <= 0) {
            alert("Los datos ingresados son invalidos");
            Reinicio();
        } else {
            c = (H * H - B * B)
            if (c <= 0) {
                alert("B no puede ser mayor que H");
                Reinicio();
            } else {
                A = Math.sqrt(c)
                angbeta = 180/Math.PI * Math.acos(B / H);
                angalfa = 180/Math.PI * Math.asin(B / H);

                document.datos.LadoA.value = A.toFixed(2);
                document.datos.AnguloBeta.value = angbeta.toFixed(2);
                document.datos.Anguloalfa.value = angalfa.toFixed(2);
            }
        }
    }
    if(B=='' && H=='' && angalfa==''){
        angbeta = angbeta*Math.PI/180
        H = A/Math.sin(angbeta);
        B = A/Math.tan(angbeta);
        angalfa = 180-angbeta*180/Math.PI-90;

        document.datos.LadoH.value = H.toFixed(2);
        document.datos.LadoB.value = B.toFixed(2);
        document.datos.Anguloalfa.value = angalfa.toFixed(2);
    }

    if(B=='' && angbeta=='' && H=='' ){
        angalfa = angalfa*Math.PI/180
        H = A/Math.cos(angalfa);
        B = Math.tan(angalfa)*A;
        angbeta = 180 - angalfa*180/Math.PI - 90;

        document.datos.LadoH.value = H.toFixed(2);
        document.datos.LadoB.value = B.toFixed(2);
        document.datos.AnguloBeta.value = angbeta.toFixed(2);

    }

    if(A=='' && angalfa=='' && H==''){
        angbeta = angbeta*Math.PI/180
        A = Math.tan(angbeta)*B;
        H = B/Math.cos(angbeta);
        angalfa = 180-angbeta*180/Math.PI-90;

        document.datos.LadoA.value = A.toFixed(2);
        document.datos.LadoH.value = H.toFixed(2);
        document.datos.Anguloalfa.value = angalfa.toFixed(2);
    }

    if(A=='' && angbeta=='' && H==''){
        angalfa = angalfa*Math.PI/180
        A = B/Math.tan(angalfa);
        H = B/Math.sin(angalfa);
        angbeta = 180-angalfa*180/Math.PI-90;

        document.datos.LadoA.value = A.toFixed(2);
        document.datos.LadoH.value = H.toFixed(2);
        document.datos.AnguloBeta.value = angbeta.toFixed(2);
    }

    if(A=='' && angalfa=='' && B==''){
        angbeta = angbeta*Math.PI/180
        B = Math.sin(angbeta)*H;
        A = Math.cos(angbeta)*H;
        angalfa = 180-angbeta*180/Math.PI-90;

        document.datos.LadoB.value = B.toFixed(2);
        document.datos.LadoA.value = A.toFixed(2);
        document.datos.Anguloalfa.value = angalfa.toFixed(2);
    }
    if(A=='' && angbeta== '' && B==''){
        angalfa = angalfa*Math.PI/180
        B = Math.sin(angalfa)*H;
        A = Math.cos(angalfa)*H;
        angbeta = 180-angalfa*180/Math.PI-90;

        document.datos.LadoB.value = B.toFixed(2);
        document.datos.LadoA.value = A.toFixed(2);
        document.datos.AnguloBeta.value = angbeta.toFixed(2);


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






function dibujartrian(){

    var canvas = document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");


var yMax = canvas.height;
var margen = 5;
ctx.fillStyle = "#000000";
ctx.fillRect(0, yMax-40-margen, 40, 40)

}

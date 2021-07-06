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


            document.datos.LadoH.value = H;
            document.datos.AnguloBeta.value = angbeta;
            document.datos.Anguloalfa.value = angalfa;
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

                document.datos.LadoB.value = B;
                document.datos.AnguloBeta.value = angbeta;
                document.datos.Anguloalfa.value = angalfa;
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

                document.datos.LadoA.value = A;
                document.datos.AnguloBeta.value = angbeta;
                document.datos.Anguloalfa.value = angalfa;
            }
        }
    }
    if(B=='' && H=='' && angalfa==''){
        angbeta = angbeta*0.0174533
        H = A/Math.sin(angbeta);
        B = A/Math.tan(angbeta);
        angalfa = 180-angbeta*180/Math.PI-90;

        document.datos.LadoH.value = H;
        document.datos.LadoB.value = B;
        document.datos.Anguloalfa.value = angalfa;
    }

    if(B=='' && angbeta=='' && H=='' ){
        angalfa = angalfa*0.0174533
        H = A/Math.cos(angalfa);
        B = Math.tan(angalfa)*A;
        angbeta = 180 - angalfa*180/Math.PI - 90;

        document.datos.LadoH.value = H;
        document.datos.LadoB.value = B;
        document.datos.AnguloBeta.value = angbeta;

    }

    if(A=='' && angalfa=='' && H==''){
        angbeta = angbeta*0.0174533
        A = Math.tan(angbeta)*B;
        H = B/Math.cos(angbeta);
        angalfa = 180-angbeta*180/Math.PI-90;

        document.datos.LadoA.value = A;
        document.datos.LadoH.value = H;
        document.datos.Anguloalfa.value = angalfa;
    }

    if(A=='' && angbeta=='' && H==''){
        angalfa = angalfa*0.0174533
        A = B/Math.tan(angalfa);
        H = B/Math.sin(angalfa);
        angbeta = 180-angalfa*180/Math.PI-90;

        document.datos.LadoA.value = A;
        document.datos.LadoH.value = H;
        document.datos.AnguloBeta.value = angbeta;
    }

    if(A=='' && angalfa=='' && B==''){
        angbeta = angbeta*0.0174533
        B = Math.sin(angbeta)*H;
        A = Math.cos(angbeta)*H;
        angalfa = 180-angbeta*180/Math.PI-90;

        document.datos.LadoB.value = B;
        document.datos.LadoA.value = A;
        document.datos.Anguloalfa.value = angalfa;
    }
    if(A=='' && angbeta== '' && B==''){
        angalfa = angalfa*0.0174533
        B = Math.sin(angalfa)*H;
        A = Math.cos(angalfa)*H;
        angbeta = 180-angalfa*57.2958-90;

        document.datos.LadoB.value = B;
        document.datos.LadoA.value = A;
        document.datos.AnguloBeta.value = angbeta;


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
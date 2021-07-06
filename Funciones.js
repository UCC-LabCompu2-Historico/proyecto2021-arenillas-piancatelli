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






function dibujar() {
    animar();
}


/**
 * La funcion aqui abajo realiza la animacion del triangulo correspondiente a los datos ingresados/calculados.
 * El dibujo animado se hace sobre un canvas
 * @method animar
 */
var chequeoB=0;
var chequeoA=0;
var mov=0;
var mov1=0;

function animar() {

    if (contador == 1) {

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        canvas.width = canvas.width
        var base = parseInt(document.getElementById("LadoB").value);
        var altura = parseInt(document.getElementById("LadoA").value);
        var flag = 1;

        var Xmedia = ((canvas.width / 2) - 120);
        var Ymedia = ((canvas.height / 2) + 50);

        var animacion = requestAnimationFrame(animar);

        context.beginPath();
        context.moveTo(Xmedia, Ymedia);
        mov = Xmedia + chequeoB;
        mov1 = Ymedia - chequeoA;

        if (chequeoB != base) {
            context.clearRect(0, 0, canvas.width, canvas.height);

            context.lineTo(mov, Ymedia);
            chequeoB += (1 / 4);

        }

        if (chequeoA != altura && chequeoB == base) {
            context.moveTo(mov, Ymedia);
            context.lineTo(mov, mov1);
            chequeoA += 1 / 4;
        }

        if (chequeoA == altura && chequeoB == base) {
            context.moveTo(mov, mov1);
            context.lineTo(Xmedia, Ymedia);
            chequeoA += 1 / 4;
            cancelAnimationFrame(animacion);
        }

        //Contorno
        context.lineWidth = 2;
        context.strokeStyle = '#000000';
        context.lineCap = "round";
        context.stroke();
    }

}





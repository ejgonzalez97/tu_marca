
$(document).ready(function () {
    $('#preguntas_1').css("display","none");
    $('#preguntas_2').css("display","none");
    $('#preguntas_3').css("display","none");
    $('#preguntas_4').css("display","none");

});
$("#pregunta1").change(function(b){

    $('#preguntas_1').css("display","none");
    $('#preguntas_2').css("display","none");
    $('#preguntas_3').css("display","none");
    $('#preguntas_4').css("display","none");

    var pregunta1=$("#pregunta1").val();

    if(pregunta1=="1"){
        $('#preguntas_1').css("display","block");

    }
    if(pregunta1=="2"){
        $('#preguntas_2').css("display","block");

    }
    if(pregunta1=="3"){
        $('#preguntas_3').css("display","block");

    }
    if(pregunta1=="4"){
        $('#preguntas_4').css("display","block");

    }
	
   
});

function generarResultado(){


 var pregunta1=$("#pregunta1").val();

        var array_respuestas= [];
        $("#preguntas_"+pregunta1+" select").each(function(index){
            var valor = $(this).val();

            if(valor!='Seleccione'){
                array_respuestas.push($(this).val())
               // console.log($(this).val());

            }else{
                //alert("Por favor llene todo el formulario.");

            }
            
        });

        var contador1=0;
        var contador2=0;
        var contador3=0;

        array_respuestas.forEach(function(respuesta, index) {
           // console.log(respuesta)
            if(respuesta=="1"){
                contador1++;
            }
            if(respuesta=="2"){
                contador2++;
            }
            if(respuesta=="3"){
                contador3++;
            }

        });

        if(pregunta1=="1"){
                
            if(contador1>=2){
                
                swal("BUFÓN!", "BUFÓN", "success");

            }else if(contador2>=2){
                swal("AMANTE!", "AMANTE", "success");

            }else if(contador3>=2){
                swal("AMIGO!", "AMIGO", "success");

            }else{

                swal("Resultado no concluyente!", "Resultado no concluyente", "warning");

            }
        }else if(pregunta1=="2"){

            if(contador1>=2){
                
                swal("INOCENTE!", "INOCENTE", "success");

            }else if(contador2>=2){
                swal("EXPLORADOR!", "EXPLORADOR", "success");

            }else if(contador3>=2){
                swal("SABIO!", "SABIO", "success");

            }else{

                swal("Resultado no concluyente!", "Resultado no concluyente", "warning");

            }

        }
        else if(pregunta1=="3"){

            
            if(contador1>=2){
                
                swal("HÉROE!", "HÉROE", "success");

            }else if(contador2>=2){
                swal("MAGO!", "MAGO", "success");

            }else if(contador3>=2){
                swal("REBELDE!", "REBELDE", "success");

            }else{

                swal("Resultado no concluyente!", "Resultado no concluyente", "warning");

            }

        }
        else if(pregunta1=="4"){

            if(contador1>=2){
                
                swal("CUIDADOR!", "CUIDADOR", "success");

            }else if(contador2>=2){
                swal("CREADOR!", "CREADOR", "success");

            }else if(contador3>=2){
                swal("GOBERNANTE!", "GOBERNANTE", "success");

            }else{

                swal("Resultado no concluyente!", "Resultado no concluyente", "warning");

            }

        }else{
            swal("Seleccione la respuesta para la pregunta 1.")
        }


}
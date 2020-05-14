
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
                
                swal("BUFÓN!", "El bufón: Marcas frescas, divertidas y cómicas: OREO, Fanta.", "success");

            }else if(contador2>=2){
                swal("AMANTE!", "El amante: Son marcas pasionales, seductoras y que buscan complacer a sus público estableciendo relaciones emocionales fuertes: Martini, Victoria´s Secret.", "success");

            }else if(contador3>=2){
                swal("AMIGO!", "El hombre corriente: Apuestan por la modestia, la humildad y un posicionamiento de conexión a través de la empatía: Ebay, IKEA.", "success");

            }else{

                swal("Resultado no concluyente!", "Resultado no concluyente", "warning");

            }
        }else if(pregunta1=="2"){

            if(contador1>=2){
                
                swal("INOCENTE!", "El inocente: Estas marcas transmiten simplicidad, optimismo y felicidad: Mcdonalds, Disney.", "success");

            }else if(contador2>=2){
                swal("EXPLORADOR!", "El explorador: Marcas auténticas, descaradas e independientes: Red Bull, Jeep.", "success");

            }else if(contador3>=2){
                swal("SABIO!", "El sabio: Apuestan por el conocimiento, el análisis y el crecimiento como pilares en su posicionamiento: Google, HP.", "success");

            }else{

                swal("Resultado no concluyente!", "Resultado no concluyente", "warning");

            }

        }
        else if(pregunta1=="3"){

            
            if(contador1>=2){
                
                swal("HÉROE!", "El héroe: Marcas valientes, decididas en sus propuestas y que pretenden hacer del mundo un mejor lugar: Amazon, Nike.", "success");

            }else if(contador2>=2){
                swal("MAGO!", "El mago: Marcas imaginativas, carismáticas, seguras y rompedoras: Intel, Absolut.", "success");

            }else if(contador3>=2){
                swal("REBELDE!", "El forajido: Marcas que cuestionan el mundo, y muestran una actitud de cambio y desafío hacia el status-quo: Diesel, Desigual.", "success");

            }else{

                swal("Resultado no concluyente!", "Resultado no concluyente", "warning");

            }

        }
        else if(pregunta1=="4"){

            if(contador1>=2){
                
                swal("CUIDADOR!", "El cuidador: Son marcas seguras de sí mismas, que transmiten confianza y bienestar a sus públicos: Danone, Nestlé.", "success");

            }else if(contador2>=2){
                swal("CREADOR!", "El creador: Son líderes en innovación, diseño e investigación, siempre un paso por delante en su categoría: Apple, LEGO.", "success");

            }else if(contador3>=2){
                swal("GOBERNANTE!", "El gobernante: Son marcas que anhelan el liderazgo en sus mercados, y muestran un carácter de superioridad respecto a su competencia: Mercedez, Rolex.", "success");

            }else{

                swal("Resultado no concluyente!", "Resultado no concluyente", "warning");

            }

        }else{
            swal("Seleccione la respuesta para la pregunta 1.")
        }


}

criar arquivo html

        lampada.html

criar um html 5 basico

        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>

criar um titulo 

        <body>
        <h1>Acenda a lampada</h1>  
        </body>
        </html>

adicionar imagens

     <body>
     <h1>Acenda a lampada</h1>  
     <img src="img/apagada.jpg" id="luz" onmousemove="acendeLampada()" onmouseout="apagarLampada()" onclick="quebrarLampada()"/>      
     </body>
     </html>

ativar eventos de interação atraves de evento Html 

     <!DOCTYPE html>
     <html lang="en">
     <head>
     <title>Document</title>

     <script>
         function acendeLampada(){
            alert("fadsfasd");   ;
         }  

fazendo chamada do objeto   

     <body>
     <h1>Acenda a lampada</h1>  
     <img src="img/apagada.jpg" id="luz" onmousemove="acendeLampada()"/>      
     </body>

para alterar um objeto tem que dar uma identificação 

     <body>
     <h1>Acenda a lampada</h1>  
     <img src="img/apagada.jpg" id="luz" onmousemove="acendeLampada()"/>      
     </body>
    </html>

comando para acender a lampada no lugar do alert

     <meta charset="UTF-8">
     <title>Document</title>

     <script>
         function acendeLampada(){
            document.getElementById("luz").src = "img/acessa.jpg"    ;
         }

document.getElementById

     manipula objeto atraves do seu id
     .src altera o proprio src
     
criar function para apagar a lampada

     <head>
     <meta charset="UTF-8">
     <title>Document</title>
     <script>
         function acendeLampada(){
            document.getElementById("luz").src = "img/acessa.jpg"    ;
         }

         function apagarLampada(){
            document.getElementById("luz").src = "img/apagada.jpg"    ;
         }

chamando o document.getElementById

     <img src="img/apagada.jpg" id="luz" onmousemove="acendeLampada()" onmouseout="apagarLampada()"/>   

criar functio para quebrar a lamapada

     <!DOCTYPE html>
     <html lang="en">
     <head>
     <meta charset="UTF-8">
     <title>Document</title>
     <script>
         function acendeLampada(){
            document.getElementById("luz").src = "img/acessa.jpg"    ;
         }
         function apagarLampada(){
            document.getElementById("luz").src = "img/apagada.jpg"    ;
         }

         function quebrarLampada(){
            document.getElementById("luz").src = "img/quebrada.jpg"    ;
         }
     </script>

chamando o document.getElementById

      <img src="img/apagada.jpg" id="luz" onmousemove="acendeLampada()" onmouseout="apagarLampada()" onclick="quebrarLampada()"/>      

criar arquivo para refatorar o codigo

     <!DOCTYPE html>
     <html lang="en">
     <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script>
         function mudaLampada(){
            document.getElementById("luz").src = "img/acessa.jpg"    ;
         }
     </script>
     </head>

mudar a chamada 

    <body>
    <h1>Acenda a lampada</h1>  
    <img src="img/apagada.jpg" id="luz" onmousemove="mudaLampada()" onmouseout="mudaLampada()" onclick="mudaLampada()"/>      
    </body>
    </html>

Passar parametro

    <body>
    <h1>Acenda a lampada</h1>  
    <img src="img/apagada.jpg" id="luz" onmousemove="mudaLampada(1)" onmouseout="mudaLampada(2)" onclick="mudaLampada(3)"/>      
    </body>
    </html>  

recebendo os parametros passado 

    <script>
         function mudaLampada(Tipo){
            document.getElementById("luz").src = "img/acessa.jpg"    ;
         }
    </script>

fazer a verificação do parametro

        <script>
        function mudaLampada(Tipo){

             if(tipo == 1){
                 arquivo = "img/acessa.jpg";
             }
             if(tipo == 2){
                 arquivo = "img/apagada.jpg";
             }

            document.getElementById("luz").src = "img/acessa.jpg"    ;
        }
        </script>
        </head>

trocar o parametro src 

      <body>
      <h1>Acenda a lampada</h1>  
      <img src="img/apagada.jpg" id="luz" onmousemove="mudaLampada(1)" onmouseout="mudaLampada(2)" onclick="mudaLampada(3)"/>      
      </body>

resultado 

     <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
         function mudaLampada(Tipo){
             if(tipo == 1){
                 arquivo = "img/acessa.jpg";
             }
             if(tipo == 2){
                 arquivo = "img/apagada.jpg";
             }
             if (tipo == 3){
                 arquivo = "img/quebrada.jpg";
             }
             
            document.getElementById("luz").src = arquivo;
         }
            </script>
        </head>
        <body>
            <h1>Acenda a lampada</h1>  
            <img src="img/apagada.jpg" id="luz" onmousemove="mudaLampada(1)" onmouseout="mudaLampada(2)" onclick="mudaLampada(3)"/>      
        </body>
        </html>
    

resultado

    <!DOCTYPE html>
    <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script>
         function acendeLampada(){
            document.getElementById("luz").src = "img/acessa.jpg"    ;
         }
         function apagarLampada(){
            document.getElementById("luz").src = "img/apagada.jpg"    ;
         }
         function quebrarLampada(){
            document.getElementById("luz").src = "img/quebrada.jpg"    ;
         }
     </script>
        </head>
        <body>
            <h1>Acenda a lampada</h1>  
            <img src="img/apagada.jpg" id="luz" onmousemove="acendeLampada()" onmouseout="apagarLampada()" onclick="quebrarLampada()"/>      
        </body>
        </html>


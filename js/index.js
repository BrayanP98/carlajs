const elemento = document.getElementById('empezar');




var p_mensaje = document.getElementById('div_mensaje');
var container= document.getElementById('container');
var Div_juego= document.getElementById('juego');
Div_juego.style="display:none"


elemento.addEventListener('mouseenter', function() {
    // Aquí puedes realizar la acción que desees cuando el cursor entra en el elemento
    elemento.textContent = 'Empieza a aprender';
    elemento.style='background: rgb(72, 225, 6);color:white;';
    p_mensaje.style="opacity: 1; transition: 1s ease-in;"
  });
  elemento.addEventListener('mouseleave', function() {
    // Aquí puedes realizar la acción que desees cuando el cursor sale del elemento
    elemento.style='background: yellow;';
    elemento.textContent = 'Empezar';
    p_mensaje.style="opacity: 0; transition: 1s ease-in;"
  });
  var next_modules=document.getElementById("next_module")
  var last_modules=document.getElementById("last_module");
  var over_button=document.getElementById("over_button")
  var DivLast_button=document.getElementById("DivLast_button");
  elemento.onclick=start_mult
  function start_mult(){
  
    let main_title= document.getElementById("main_title");
    main_title.style="display:none"
    over_button.style.display="block"
    
container.innerHTML=""

var title_mod1= document.createElement("h2");
title_mod1.id="title_module"
title_mod1.innerHTML="Modulo1 Multiplicacion"
var mod1= document.createElement("div")
mod1.id="content"

var mod1_p= document.createElement("p")
mod1_p.innerHTML="<h3>Que es la multiplicacion?</h3><br>La multiplicación es una forma de sumar varios números iguales de manera más rápida. Por ejemplo, si tenemos 3 grupos de 4 manzanas, podemos usar la multiplicación para saber cuántas manzanas hay en total. En este caso, sería 3 x 4, que es igual a 12. Esto significa que hay 12 manzanas en total en los 3 grupos."+
"<br><br>La multiplicación es una operación matemática fundamental que tiene varias partes o componentes clave. Aquí están las partes esenciales de una multiplicación:"+
"<br><br><b>Multiplicando:</b> El multiplicando es el primer número en una operación de multiplicación. Es el número que se está multiplicando por otro número. Por ejemplo, en la multiplicación 5 x 3, '5' es el multiplicando."
+"<br><br>Multiplicador: El multiplicador es el segundo número en una operación de multiplicación. Es el número por el cual se está multiplicando el multiplicando. En la multiplicación 5 x 3, '3' es el multiplicador."
+"<br><br>Producto: El producto es el resultado de una multiplicación. Es el número que obtenemos al multiplicar el multiplicando por el multiplicador. En el caso de 5 x 3, el producto es igual a 15. Es el número que representa la cantidad total o el resultado de la multiplicación."
+"<br><br>Signo de multiplicación: El signo de multiplicación se representa con el símbolo 'x' o' *'. Se utiliza para indicar que los números que lo rodean se están multiplicando. Por ejemplo, en la expresión 5 x 3, el signo de multiplicación es 'x'."
var mod1_img= document.createElement("img");

mod1_img.id="img_mod1"
mod1_img.setAttribute("src", "https://cdn0.unprofesor.com/es/posts/3/8/0/el_multiplicando_83_1_600.jpg");

mod1.appendChild(mod1_p)
mod1.appendChild(mod1_img)
container.appendChild(title_mod1)
container.appendChild(mod1)
container.appendChild(DivLast_button)
container.appendChild(over_button)


container.style="flex-direction: column;"
container.style="background:yellow;border-radius: 10px; overflow-y: scroll; height: 660px"
  }


  
   

    var pasarelaMod1={
        "multiplicacion":{
           "teoria": function(){
              
                var content= document.getElementById('content');
                content.innerHTML=""
                var mod_ejemTitle= document.createElement("h3");
                mod_ejemTitle.innerHTML="Tablas de multiplicar."

            
                var mod1_p=document.createElement("p");
                var mod_imgTabl=document.createElement("img");
                mod1_p.innerHTML="Las tablas de multiplicar son un conjunto de multiplicaciones predefinidas que muestran los resultados de multiplicar números específicos por los números del 1 al 10 (o más, dependiendo de la extensión de la tabla). Estas tablas son fundamentales en matemáticas y se utilizan para aprender y recordar las multiplicaciones básicas de manera rápida y efectiva."
                mod_imgTabl.setAttribute("src"," https://www.hseducacion.com/wp-content/uploads/2022/03/repaso-tablas-de-multiplicar.png")
                content.appendChild(mod_ejemTitle)
                content.appendChild(mod1_p)
                content.appendChild(mod_imgTabl)
                mod_imgTabl.style=" width:90%;  height:450px;"
                /*var mod_ejem= document.createElement("div");
                mod_ejem.id="mod_ejem"
               
              
                mod_ejem.appendChild(mod_ejemTitle)*/
                var cuerpo= document.getElementById('cuerpo');
                cuerpo.style=" background:rgba(218, 11, 11, 0.429);"
                container.style="background: rgba(218, 11, 11, 0.429);"
            },
            "ejercicios1":function(){

                var num1=["",5,8,9,"",12,"",4]
                var num2=[1,4,8,6,3,3,8,9]
               
                var content= document.getElementById('content');
                content.innerHTML=""
                
                var mod_ejemTitle= document.createElement("h3");
                var mod_ejemDescript= document.createElement("p");
                mod_ejemDescript.innerHTML="Realiza los siguientes ejercicios."
                mod_ejemTitle.innerHTML="Ejercicios";
                content.appendChild(mod_ejemTitle)
                content.appendChild(mod_ejemDescript)
                var div_exercices= document.createElement("div");
                div_exercices.className="div_exercices"
                var cont=0
                for(let i=0;i<num1.length;i++){
                    var div_exercice1= document.createElement("div");
                    div_exercice1.className="div_exercice1"
                   
                        var inputdiv_exercice1= document.createElement("input");
                        inputdiv_exercice1.className="rta_input"
                        inputdiv_exercice1.id="rta_input"+i
                       
                    
                        if(num1[i]==""){
                            var aleatorio = Math.random()*20;
                            var numAleat= Math.floor(aleatorio)
                           
                            var operacion=num2[i]*numAleat
                            var Pdiv_exercice1= document.createElement("p");
                            var rtaMult= document.createElement("a");
                            rtaMult.className="rtaMult"
                            rtaMult.id="rtaMult"+i
                            Pdiv_exercice1.innerHTML="x"+" "+num2[i]+""+"="
                            rtaMult.innerHTML=operacion
                            div_exercice1.appendChild(rtaMult) 
                            div_exercice1.appendChild(Pdiv_exercice1)

                             div_exercice1.appendChild(inputdiv_exercice1)
                             inputdiv_exercice1.addEventListener("keyup", function(){
                               
                               
        
                                var rta_Mult=document.getElementById("rtaMult"+i).innerHTML;
                                var rtaUser=document.getElementById("rta_input"+i);
                                var rtaUserInt=parseInt(rtaUser.value)
                                var rta_MultInt=parseInt(rta_Mult)
                                var total=rtaUserInt*num2[i];
                                
                                
                                if(total==rta_MultInt){
                                    
                                   
                                    rtaUser.style.background="rgb(47, 255, 0)"
                                    
        
        
                                }else{
                                    rtaUser.style.background="red"
                                }
                               
                            
                            })
                        }else{
                            let numAleat=5;
                            let operacion=num2[i]*numAleat
                            var Pdiv_exercice1= document.createElement("p");
                            Pdiv_exercice1.innerHTML=num1[i]+" "+"x"+"  "+num2[i]+""+"="
                            
                            
                             div_exercice1.appendChild(inputdiv_exercice1)
                             div_exercice1.appendChild(Pdiv_exercice1)
                             inputdiv_exercice1.addEventListener("keyup", function(){
                                if(cont==7){
                                    alert("felicidades completaste el reto")
        
                                    console.log(cont)
                                }else{
        
                                
                                var rtaUser=document.getElementById("rta_input"+i);
                                var rtaUserInt=parseInt(rtaUser.value)
        
                                var total=num1[i]*num2[i];
                                
                                if(rtaUserInt==total){
                                    cont=cont+1;
                                   
                                    rtaUser.style.background="rgb(47, 255, 0)"
                                    
        
        
                                }else{
                                    rtaUser.style.background="red"
                                }
                               
                            }
                            })
                        }      
                    div_exercices.appendChild(div_exercice1)
                    
                }


                content.appendChild(div_exercices)
               div_exercices.style="width=100%; display:flex; flex-direction:row; flex-wrap:wrap"


               var cuerpo= document.getElementById('cuerpo');
                cuerpo.style=" background:rgb(47, 255, 68, 0.48);"
                container.style="background:rgb(47, 255, 68);"
                
                

            },
            "propiedades":function(){
                var content= document.getElementById('content');
                content.innerHTML=""
                content.style="overflow: hidden;  overflow-y: scroll;"
                var mod_ejemTitle= document.createElement("h2");
                mod_ejemTitle.innerHTML="Propiedades de la Multiplicacion"
                var mod_propP1= document.createElement("p");
                var mod_propP2= document.createElement("p");
                var mod_propP3= document.createElement("p");
                var mod_propP4= document.createElement("p");
                var h3_propiedades1= document.createElement("h3");
                var h3_propiedades2= document.createElement("h3");
                var h3_propiedades3= document.createElement("h3");
                var h3_propiedades4= document.createElement("h3");
                h3_propiedades1.innerHTML="Propiedad conmutativa:"
                h3_propiedades2.innerHTML="Propiedad Asociativa:"
                h3_propiedades3.innerHTML="Propiedad distributiva:"
                h3_propiedades4.innerHTML="Propiedad de factor común:"
                mod_propP1.innerHTML="\nLa propiedad conmutativa de la multiplicación establece que cambiar el orden de los factores no altera el producto. Aquí hay un ejemplo:"
               +"<br><br>4 x 3 = 3 x 4"+"<br><br>Observa cómo ambos productos son  12, aún cuando hemos alterado el orden."+
               "<br><br>Aquí hay otro ejemplo con más factores:"+"<br><br>1 x  3  x  4 = 4  x  3  x  2 x  1"
                
               mod_propP2.innerHTML="La propiedad asociativa de la multiplicación establece que cambiar la forma en que agrupamos los factores no cambia el valor del producto. Aquí hay un ejemplo:"+
               "<br><br>(2 x 3) x 4 = 2 x ( 3 x 4)"+"<br><br>Recuerda que el paréntesis nos dice qué debemos hacer primero. Así es cómo evaluamos el lado izquierdo:"
              + "<br><br>( 2 x 3 ) x 4" +"<br><br>6 x 4"+"<br><br>=24"+"<br><br>Y así es cómo evaluaríamos el lado derecho:"+
               "<br><br>2 x ( 3 x 4)"+"<br><br>2 x 12"+"<br><br> = 24"+"<br><br>Observa que ambos lados son iguales a  aún cuando del lado izquierdo primero multiplicamos el y el , y del lado derecho primero multiplicamos el  y el ."
              
              
               mod_propP3.innerHTML="La multiplicación de un número por una suma es igual a la suma de las multiplicaciones de dicho número por cada uno de los sumandos."+
               +"Pongamos un ejemplo: 2 x (3 + 5)"+"Según la propiedad distributiva"+" <br><br>2 x (3 + 5) será igual a 2 x 3 + 2 x 5"
               +"<br><br>Comprobemos si esto es cierto."+"<br><br>2 x (3 + 5) = 2 x 8 = 16"+"<br><br>2 x 3 + 2 x 5 = 6 + 10 = 16"+
               "<br>Ambas nos dan como resultado 16, por lo que queda demostrada la propiedad distributiva de la multiplicación."
               mod_propP4.innerHTML="Es el proceso inverso a la propiedad distributiva. Si varios sumandos tienen un factor común, podemos transformar la suma en producto extrayendo dicho factor."+
               "<br>Pongamos un ejemplo de sacar factor común. Si tenemos la operación (2 x 7) + (3 x 7), que tiene como factor común el 7, podríamos transformar esta operación en 7 x (2 + 3)"+
               "<br><br>Comprobemos que da el mismo resultado:"+"<br><br>(2 x 7) + (3 x 7) = 14 + 21 = 35<br><br> 7 x (2 + 3) = 7 x 5 = 35"
               content.appendChild(mod_ejemTitle)
               content.appendChild(h3_propiedades1)

                content.appendChild(mod_propP1)
                content.appendChild(h3_propiedades2)
                content.appendChild(mod_propP2)
                content.appendChild(h3_propiedades3)
                content.appendChild(mod_propP3)
                content.appendChild(h3_propiedades4)
                content.appendChild(mod_propP4)
            },
            "ejercicios2":function(){
                var content= document.getElementById('content');
                content.innerHTML="";
                content.style="overflow: hidden;  "
                var mod_ejemTitle= document.createElement("h3");
                var mod_ejemDescript= document.createElement("p");
                mod_ejemTitle.innerHTML="Ejercicios";
                mod_ejemDescript.innerHTML="Responde las siguientes preguntas basado en lo aprendido."
                content.appendChild(mod_ejemTitle);
                content.appendChild(mod_ejemDescript);
                var div_exercices2= document.createElement("div");
                var div_exercices2_1= document.createElement("div");
                var div_exercices2_2= document.createElement("div");
                var div_exercicesMain= document.createElement("div");
                div_exercicesMain.style="display:flex; flex-direction:row; gap:10px; flex-wrap:wrap; justify-content: center;" 
                div_exercices2.className="div_exercices2",
                div_exercices2_1.className="div_exercices2";
                div_exercices2_2.className="div_exercices2"
                div_exercicesMain.className="div_exercicesSub"
                var Title_exercice1= document.createElement("h4");

                //PREGUNTA NUMERO 1
                Title_exercice1.innerHTML="¿Cuál de los siguientes es un ejemplo de la propiedad conmutativa de la multiplicación?"
                
               
               //respuesta A
                var RtaA_div_exercices2= document.createElement("div");
                RtaA_div_exercices2.className="Rta_div_exercices"
                var InputA_div_exercices2= document.createElement("input");
                InputA_div_exercices2.setAttribute("type","checkbox")
                var PA_div_exercices2= document.createElement("p");
                PA_div_exercices2.innerHTML=" 3 x 5 = 5 x 3"
                RtaA_div_exercices2.appendChild(InputA_div_exercices2)
                RtaA_div_exercices2.appendChild(PA_div_exercices2);
                
                //respuesta B

                var RtaB_div_exercices2= document.createElement("div");
                RtaB_div_exercices2.className="Rta_div_exercices"
                var InputB_div_exercices2= document.createElement("input");
                InputB_div_exercices2.setAttribute("type","checkbox")
                var PB_div_exercices2= document.createElement("p");
                PB_div_exercices2.innerHTML=" 2 x 6 = 4 x 3"
                RtaB_div_exercices2.appendChild(InputB_div_exercices2)
                RtaB_div_exercices2.appendChild(PB_div_exercices2)
               
               
                div_exercices2.appendChild(Title_exercice1)
                
                div_exercices2.appendChild(RtaA_div_exercices2)
                div_exercices2.appendChild(RtaB_div_exercices2)
                
               
                div_exercicesMain.appendChild(div_exercices2);

                 //PREGUNTA NUMERO 2
                var Title_exercice2= document.createElement("h4");
                Title_exercice2.innerHTML="¿Cuál de los siguientes es un ejemplo de la propiedad asociativa de la multiplicación?"
                div_exercices2_1.appendChild(Title_exercice2); 
                //respuesta A
                 var RtaA_div_exercices2_1= document.createElement("div");
                 RtaA_div_exercices2_1.className="Rta_div_exercices"
                 var InputA_div_exercices2_1= document.createElement("input");
                 InputA_div_exercices2_1.setAttribute("type","checkbox")
                 var PA_div_exercices2_1= document.createElement("p");
                 PA_div_exercices2_1.innerHTML=" 3 x 5 x 7 = 5 x 3 x 7"
                 RtaA_div_exercices2_1.appendChild(InputA_div_exercices2_1)
                 RtaA_div_exercices2_1.appendChild(PA_div_exercices2_1);
                 
                 //respuesta B
 
                 var RtaB_div_exercices2_1= document.createElement("div");
                 RtaB_div_exercices2_1.className="Rta_div_exercices"
                 var InputB_div_exercices2_1= document.createElement("input");
                 InputB_div_exercices2_1.setAttribute("type","checkbox")
                 var PB_div_exercices2_1= document.createElement("p");
                 PB_div_exercices2_1.innerHTML=" 2 x 6 x 5 = 2 x (6 x 5)"
                 RtaB_div_exercices2_1.appendChild(InputB_div_exercices2_1)
                 RtaB_div_exercices2_1.appendChild(PB_div_exercices2_1)
                
                 div_exercices2_1.appendChild(RtaA_div_exercices2_1)
                 div_exercices2_1.appendChild(RtaB_div_exercices2_1)
                div_exercicesMain.appendChild(div_exercices2_1);

                
                
               

                div_exercicesMain.appendChild(div_exercices2_2);
                var Title_exercice3= document.createElement("h4");
                Title_exercice3.innerHTML="¿Cuál de los siguientes es un ejemplo de la propiedad de factor comun de la multiplicación?"
                div_exercices2_2.appendChild(Title_exercice3);
                content.appendChild(div_exercicesMain);
                container.style="background:rgb(47, 255, 68);"
            }
            
        },
        

    }
    var pasarelaMod2={
        "division":{
            "teoria":function(){
            
                var content= document.getElementById('content');
                content.innerHTML=""
               

                var mod_ejemTitle= document.createElement("h3");
                mod_ejemTitle.innerHTML="Que es la division?"
                
               
                var mod1_p=document.createElement("p");
                var mod1_p2=document.createElement("p");
                var mod_imgTabl=document.createElement("img");
                mod1_p.innerHTML="La división es una operación matemática que consiste en repartir una cantidad en partes iguales. "+

                "<br>Antes de aprender a dividir y entender cómo hacerlo, tenemos que conocer muy bien los términos de la división, cada uno con una función y una tarea distinta dentro de la división."
                mod_imgTabl.setAttribute("src","./img/partes-division.png")
                mod1_p2.innerHTML="Como puedes ver en esta imagen, los términos de la división son 4: dividendo, divisor, cociente y resto. Pero, ¿en qué consiste cada uno?"+
                "<br><br><li>El dividendo es la cantidad que se va a repartir. En este ejemplo es 85.</li>"+
                "<br><li>El divisor es las partes en las que se reparte. En el ejemplo, 4.</li>"+
               "<br><li>El cociente es la cantidad que toca a cada parte. En el ejemplo es 21.</li>"+
                "<br><li>El resto es la cantidad que sobra cuando repartimos la cantidad en partes iguales. En el ejemplo de la imagen es 1.</li>"
                content.appendChild(mod_ejemTitle)
                content.appendChild(mod1_p)
                content.appendChild(mod_imgTabl)
                content.appendChild(mod1_p2)
                mod_imgTabl.style=" width:90%;  height:450px;"
               
                /*var mod_ejem= document.createElement("div");
                mod_ejem.id="mod_ejem"
               
              
                mod_ejem.appendChild(mod_ejemTitle)*/
                var cuerpo= document.getElementById('cuerpo');
                cuerpo.style=" background:rgba(218, 11, 11, 0.429);"
                container.style="background: rgba(218, 11, 11, 0.429);"
                content.style="overflow-y: scroll;"
                
                
            }, "teoria2":function(){
                var content= document.getElementById('content');
                content.innerHTML=""

                var mod_ejemTitle= document.createElement("h3");
                mod_ejemTitle.innerHTML="Clases de division"
                
               
                var mod1_p=document.createElement("p");
                var mod1_p2=document.createElement("p");
                var mod_imgDiv1=document.createElement("img");
                var mod_imgDiv2=document.createElement("img");
                mod_imgDiv1.className="img_div";
                mod1_p.innerHTML="<h3>Dividir por una cifra</h3>Las divisiones por una cifra son aquellas que solo cuentan con un número de una cifra en el divisor, es decir, cuenta con un número que va del 1 al 9. A continuación, te explicamos paso por paso cómo hacerlas."+

               "<br><br>Tenemos esta división: 164 entre 4. Es una división por una cifra. Una vez sabemos que el divisor es 4, debemos pasar a mirar el dividendo y ver cuántas cifras podemos coger."+
               ""
                mod_imgDiv1.setAttribute("src","https://profesor-particular.com/wp-content/uploads/2021/10/division-paso-1.jpeg")
                mod1_p2.innerHTML="<br><br>Ahora, observa de nuevo el dividendo y el divisor. ¿Qué número multiplicado por el divisor se acerca más al dividendo? 4×1=4, 4×2=8, 4×3=12, 4×4=16… ¡Bingo! No solo se acerca, sino que es el número exacto. Escribe entonces el 4 en el cociente y vete debajo del dividendo, donde tendrás que escribir el resultado de la multiplicación que has conseguido: 4×4=16. <br> <img class='img_div' src='https://profesor-particular.com/wp-content/uploads/2021/10/division-paso-3.jpeg'></img>"+

                "<br><br>Realiza la resta: 16 menos 16 y escribe el 0. (El paso de la resta podrás hacerlo directamente, sin tener que escribirla en la división). A continuación, tendrás que bajar el siguiente número del dividendo y escribirlo al lado del 0. <br> <img class='img_div' src='https://profesor-particular.com/wp-content/uploads/2021/10/division-paso-4.jpeg'></img>"+
                "<br><br>Ahora, tendrás que hacer el mismo paso que al principio: ¿puedes dividir 4 entre 4? Sí, exactamente por 1, por lo que escribe un 1 en el cociente y realiza la resta de nuevo.<br> <img class='img_div' src='https://profesor-particular.com/wp-content/uploads/2021/10/division-paso-5.jpeg'></img>"
                
               +"<br><br>Si llegas a un número menor que el divisor, la división termina y lo que queda es el resto. En este caso, no sobra nada, por lo que el resto es 0 y la división es exacta."+

              " <br>Más adelante, las divisiones sin resta podrás hacerlas de la siguiente manera (más simplificadas):"+
              "<br> <img class='img_div' src='https://profesor-particular.com/wp-content/uploads/2021/10/division-paso-6.jpeg'></img>"

               
                content.appendChild(mod_ejemTitle)
                content.appendChild(mod1_p)
                content.appendChild(mod_imgDiv1)
                content.appendChild(mod1_p2)
   
               
                /*var mod_ejem= document.createElement("div");
                mod_ejem.id="mod_ejem"
               
              
                mod_ejem.appendChild(mod_ejemTitle)*/
                var cuerpo= document.getElementById('cuerpo');
                cuerpo.style=" background:rgba(218, 11, 11, 0.429);"
                container.style="background: rgba(218, 11, 11, 0.429);"
                content.style="overflow-y: scroll;"
            },
            "teoria3":function(){
                var content= document.getElementById('content');
                content.innerHTML=""

                var mod_ejemTitle= document.createElement("h3");
                mod_ejemTitle.innerHTML="Clases de division"
                
               
                var mod1_p=document.createElement("p");
                var mod1_p2=document.createElement("p");
                var mod_imgDiv1=document.createElement("img");
                var mod_imgDiv2=document.createElement("img");
                mod_imgDiv1.className="img_div";
                mod1_p.innerHTML="<h3>Division por dos cifras</h3>"+
                "Aunque son un poquito más complicadas que las divisiones por una cifra, estas divisiones se realizan de la misma manera que las de una cifra. Mira este ejemplo: Tenemos la división de 468 entre 22."
                +""
                mod_imgDiv1.setAttribute("src","https://profesor-particular.com/wp-content/uploads/2021/10/division-2-cifras-paso-1.jpeg")
                mod1_p2.innerHTML="¿Podemos dividir 4 entre 22? No, por lo que coge el siguiente número del dividendo. ¿Podemos dividir 46 entre 22? Sí, por lo que coloca el arco y comencemos la división con estos números."+

                 "<br><img class='img_div' src='https://profesor-particular.com/wp-content/uploads/2021/10/division-2-cifras-paso-2.jpeg'></img>"
                +"<br><br>Ahora, ¿qué número multiplicado por 22, se acerca más, sin pasarse, a 46? Calcula poco a poco: 22×1= 22, 22×2= 44… ¡Aquí lo tienes! El número que tienes que escribir en el cociente es 2. Y debajo del 46, escribe el resultado de 46 – 44."
                + "<br><img class='img_div' src='https://profesor-particular.com/wp-content/uploads/2021/10/division-2-cifras-paso-3.jpeg'></img>"
                +"<br><br>Y ahora, realiza de nuevo la misma tarea: ¿qué número multiplicado por 22, se acerca al 28? Como has calculado, el resultado es 1, es decir 22×1=22. Si lo multiplicamos por 2, ya nos pasaríamos. Por tanto, escribe el 1 en el cociente y realiza la resta de 28 – 22"
                +"<br><img class='img_div' src='https://profesor-particular.com/wp-content/uploads/2021/10/division-2-cifras-paso-5.jpeg'></img>"
                
                +"<br>El resultado de la división sería 21, con un resto de 6, ya que no podríamos dividir 6 entre 22, al ser menor que este número"
                content.appendChild(mod_ejemTitle)
                content.appendChild(mod1_p)
                content.appendChild(mod_imgDiv1)
                content.appendChild(mod1_p2)
   
               
                /*var mod_ejem= document.createElement("div");
                mod_ejem.id="mod_ejem"
               
              
                mod_ejem.appendChild(mod_ejemTitle)*/
                var cuerpo= document.getElementById('cuerpo');
                cuerpo.style=" background:rgba(218, 11, 11, 0.429);"
                container.style="background: rgba(218, 11, 11, 0.429);"
                content.style="overflow-y: scroll;"
            },
            "teoria4":function(){
                var content= document.getElementById('content');
                content.innerHTML=""

                var mod_ejemTitle= document.createElement("h3");
                mod_ejemTitle.innerHTML="Clases de division"
                
               
                var mod1_p=document.createElement("p");
                var mod1_p2=document.createElement("p");
                var mod_imgDiv1=document.createElement("img");
                var mod_imgDiv2=document.createElement("img");
                mod_imgDiv1.className="img_div";
                mod1_p.innerHTML="<h3>División Exacta</h3>"+
                "Las divisiones exactas son aquellas divisiones cuyo resto es 0, es decir, al repartir la cantidad entre un determinado número, no sobra nada. A continuación, puedes ver dos ejemplos de divisiones exactas en la imagen:"
                
                mod_imgDiv1.setAttribute("src","https://profesor-particular.com/wp-content/uploads/2021/10/division-exacta.jpg")
                mod1_p2.innerHTML="Como puedes comprobar en ambas divisiones, el resto es 0 y eso significa que la cantidad a repartir es exacta por esos números."+

               "<br><br> Por ejemplo, en el caso de la primera división, si repartimos 75 cartas entre 5 personas, cada persona recibirá 15 cartas y no sobrará ninguna. Si en su lugar, lo repartiésemos entre 4, cada persona recibiría 18 cartas y sobrarían 3, por lo que no sería una división exacta. Lo mismo ocurriría con la segunda división."
                content.appendChild(mod_ejemTitle)
                content.appendChild(mod1_p)
                content.appendChild(mod_imgDiv1)
                content.appendChild(mod1_p2)
   
               
                /*var mod_ejem= document.createElement("div");
                mod_ejem.id="mod_ejem"
               
              
                mod_ejem.appendChild(mod_ejemTitle)*/
                var cuerpo= document.getElementById('cuerpo');
                cuerpo.style=" background:rgba(218, 11, 11, 0.429);"
                container.style="background: rgba(218, 11, 11, 0.429);"
                content.style="overflow-y: scroll;"
            },"media":function(){
                var content= document.getElementById('content');
                content.innerHTML=""
                document.getElementById('juego').style="display:none"

                var mod_ejemTitle= document.createElement("h3");
                mod_ejemTitle.innerHTML="video Tutoriales"
                
               
                var mod1_p=document.createElement("p");
                var mod1_p2=document.createElement("p");
                var mod_imgDiv1=document.createElement("img");
                
                
                mod1_p.innerHTML="<iframe width='853' height='480' src='https://www.youtube.com/embed/AN5esI-NKu0?list=TLGGi3mN1guI2kQxMzExMjAyMw' title='Partes de la división - Como dividir un número/División/Matemáticas Tercero Primaria (8 año...' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ' allowfullscreen></iframe>"+
                "<iframe width='853' height='480' src='https://www.youtube.com/embed/RZvHSYHmgyQ' title='Explorando las Divisiones de Dos Cifras, Divisiones Exactas e Inexactas' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"+
                "<iframe width='853' height='480' src='https://www.youtube.com/embed/AE4B0hgnz0E' title='COMO HACER UNA MULTIPLICACIÓN Super fácil  - Para principiantes' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
               
                
                content.appendChild(mod_ejemTitle)
                content.appendChild(mod1_p)
                
        
   
               
                /*var mod_ejem= document.createElement("div");
                mod_ejem.id="mod_ejem"
               
              
                mod_ejem.appendChild(mod_ejemTitle)*/
                var cuerpo= document.getElementById('cuerpo');
                cuerpo.style=" background:rgba(218, 11, 11, 0.429);"
                container.style="background: rgba(218, 11, 11, 0.429);"
                content.style="overflow-y: scroll;"
            },
            "juego":function(){
                let title_module=document.getElementById("title_module");
                title_module.innerHTML="Modulo2 Division."
                var content= document.getElementById('content');
                content.innerHTML=""
                var Div_juego= document.getElementById('juego');
                    Div_juego.style="display:block"
                    container.appendChild(Div_juego)

            }
        }
    }
var mod1Conten=["teoria","ejercicios1","propiedades","ejercicios2"]
var mod2Conten=["teoria","teoria2","teoria3", "teoria4","media","juego"]
var cont=0;
var cont1=0;
next_modules.onclick=function(){
    container.style=" height: 660px"
    var DivLast_button=document.getElementById("DivLast_button");
    DivLast_button.style.display="block"
  if(cont1==mod2Conten.length){
    next_modules.innerHTML="Haz finalizado!"
  }
  if(cont>=mod1Conten.length){
  
let title_module=document.getElementById("title_module");
title_module.innerHTML="Modulo2 Division."
   pasarelaMod2.division[mod2Conten[cont1]]();
    cont1=cont1+1;
    next_modules.innerHTML="Siguiente"
  }else{
    if(cont==mod1Conten.length-1){

        next_modules.innerHTML="Modulo 2"
    }else{
        
    }
    pasarelaMod1.multiplicacion[mod1Conten[cont]]();
    cont=cont+1;
  }
}
last_modules.onclick=function(){

    if(cont>=mod1Conten.length){

         if(cont1==1){
            
            pasarelaMod1.multiplicacion[mod1Conten[3]]();
            cont1=0;
        }else{
          
            pasarelaMod2.division[mod2Conten[cont1-2]]();
            cont1=cont1-1;
        }


    }else{
        if(cont==1){
            start_mult()
            cont=0
        }else{
           
            pasarelaMod1.multiplicacion[mod1Conten[cont-2]]();
            cont=cont-1;
        }
        
          }
    }




function generateQuestion() {
    var divisor = Math.floor(Math.random() * 10) ;
    var dividend =  Math.floor(Math.random() * 10) ;
var answer=""
    if (divisor % 2 == 0 && dividend % 2 == 0) {
      var question = dividend + " ÷ " + divisor;
      answer=dividend / divisor 
  } else {
      var question = dividend + " * " + divisor;
      answer=dividend * divisor 
  }
   
    return { question: question, answer: answer };
  }

  function updateQuestion() {
    var questionObj = generateQuestion();
    document.getElementById('question').textContent = "Resuelve: " + questionObj.question;
    document.getElementById('answer').value = "";
    document.getElementById('feedback').textContent = "!vamos por mas!";
    var feedback=document.getElementById('feedback');
    feedback.style="cursor:pointer;"
    feedback.onclick=updateQuestion
    currentAnswer = questionObj.answer;
  }

  function checkAnswer() {
    var userAnswer = parseFloat(document.getElementById('answer').value);
    var feedbackElement = document.getElementById('feedback');
    if (isNaN(userAnswer)) {
      feedbackElement.textContent = "Por favor, ingresa un número válido.";
    } else if (userAnswer === currentAnswer) {
      feedbackElement.textContent = "Correcto";
      feedbackElement.style="color:green;  cursor: none;"
      setTimeout(function(){
          updateQuestion();
  }, 3000);
     
    } else {
      feedbackElement.textContent = "Incorrecto. Intenta de nuevo.";
      feedbackElement.style="color:red; cursor:pointer"
      feedbackElement.onclick=updateQuestion
    }
  }

  var currentAnswer;
  updateQuestion();





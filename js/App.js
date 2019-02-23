var calculadora = {
    visor: document.getElementById("display"),
    valorVisor: "0",
    operacion: "",
    primerValor: 0,
    segundoValor: 0,
    resultado: 0,
    auxTeclaIgual: false,

    init : (function(){
        this.asignarEventosClickBotones(".tecla");
        this.asignarEventosaFuncion();
    }),

    //Eventos Al Dar Click  a Los botones

    asignarEventosClickBotones: function(selector){
        var teclas = document.getElementsByTagName('img');
        for(var i = 0; i<teclas.length;i++){
            teclas[i].onmousedown = this.eventoPresionar;
            teclas[i].onmouseup = this.eventoSoltar;
        };
    },

    eventoPresionar: function(event){
        calculadora.presionarBoton(event.target);
    },

    eventoSoltar: function(event){
        calculadora.soltarBoton(event.target);
    },

    //Formato de los botones ampliar y reducir

    presionarBoton: function(elemento){
        var x = elemento.id;
        if(x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto"){
            elemento.style.transform = "scale(0.9,0.9)";
        } else if(x=="mas"){
            elemento.style.transform = "scale(0.9,0.9)";
        } else{
            elemento.style.transform = "scale(0.9,0.9)";
        }
    },

    soltarBoton : function(elemento){
        var x = elemento.id;
        if(x=="1" || x=="2" || x=="3" || x=="0" || x=="igual" || x=="punto"){
            elemento.style.transform = "scale(1,1)";
        } else if(x=="mas"){
            elemento.style.transform = "scale(1,1)";
        } else{
            elemento.style.transform = "scale(1,1)";
        }
    },
    //Final de los eventos ampliar y reducir botones

    //Inicio de los eventos que daran funcion a la calculadora

    asignarEventosaFuncion: function(){
        document.getElementById("0").addEventListener("click", function(){calculadora.ingresarNumero("0");});
        document.getElementById("1").addEventListener("click", function(){calculadora.ingresarNumero("1");});
        document.getElementById("2").addEventListener("click", function(){calculadora.ingresarNumero("2");});
        document.getElementById("3").addEventListener("click", function(){calculadora.ingresarNumero("3");});
        document.getElementById("4").addEventListener("click", function(){calculadora.ingresarNumero("4");});
        document.getElementById("5").addEventListener("click", function(){calculadora.ingresarNumero("5");});
        document.getElementById("6").addEventListener("click", function(){calculadora.ingresarNumero("6");});
        document.getElementById("7").addEventListener("click", function(){calculadora.ingresarNumero("7");});
        document.getElementById("8").addEventListener("click", function(){calculadora.ingresarNumero("8");});
        document.getElementById("9").addEventListener("click", function(){calculadora.ingresarNumero("9");});
        document.getElementById("").addEventListener("click", function(){calculadora.ingresarNumero();});
        document.getElementById("").addEventListener("click", function(){calculadora.ingresarNumero();});
        document.getElementById("").addEventListener("click", function(){calculadora.ingresarNumero();});
        document.getElementById("").addEventListener("click", function(){calculadora.ingresarNumero();});
        document.getElementById("").addEventListener("click", function(){calculadora.ingresarNumero();});
        document.getElementById("").addEventListener("click", function(){calculadora.ingresarNumero();});
        document.getElementById("").addEventListener("click", function(){calculadora.ingresarNumero();});
        document.getElementById("").addEventListener("click", function(){calculadora.ingresarNumero();});
        document.getElementById("").addEventListener("click", function(){calculadora.ingresarNumero();});
    }
}

calculadora.init();
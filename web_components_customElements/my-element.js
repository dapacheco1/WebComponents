
/*
    Crear web component usando web api custom elements 
*/

//con un template puedo crear una estructura HTML para evitar crear uno por uno mis elementos
//html y evitar hacer un trabajo tedioso.
const template = document.createElement("div");
template.innerHTML = `
    <style>
        p{
            color:blue;
        }
        .text-bold{
            color:black;
        }
    </style>
    <p class="text-bold">Hola mundo 2</p>
    <p>texto de ejemplo</p>

`;
//el nombre de la clase no debe tener separaciones y debe extender de HTMLElement
class myElement extends HTMLElement{

    constructor(){
        super();
        //lo que se guarda en memoria para agregarlo al DOM        
        this.p = document.createElement("p");
    }


    connectedCallback(){
        this.p.textContent = "Hola mundo, estoy creandome...";
        //agrego al DOM el elemento creado
        this.appendChild(this.p);
        this.appendChild(template);
    }

}

//convertir esta clase en ETIQUETA HTML, para darle el nombre a la etiqueta y la clase de la que viene
customElements.define("my-element",myElement);
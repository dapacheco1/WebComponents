
/*
    Crear web component usando web api template,custom Elements y shadow DOM. Es un DOM independiente 
    dentro del DOM global. Es decir que si bien va a formar parte del DOM global, todo lo que 
    configure dentro de este, sera independiente del resto del DOM global, en otras palabras
    es un DOM unico, dentro del DOM global y no se ve afectado por los cambios que se hagan en el DOM
    global.
    Para acceder a los elementos dentro del componente ya no uso document.getElement... porque esto
    sirve para el DOM global.
    Ahora para acceder a los elementos de este componente uso this.shadowRoot.getElement...
    Mis class e id deben iniciar con el nombre del componente, por buenas practicas. No me preocupo
    de la sobreescritura.
*/

//el nombre de la clase no debe tener separaciones y debe extender de HTMLElement
class myElement extends HTMLElement{

    constructor(){
        super();
        //aqui uso el shadow DOM, se configura en modo abierto u open para que veamos lo que tiene dentro
        //y tampoco podriamos generar interaccion con el componente. Si no puedo interaccionar o generar 
        //cambios, seria un componente inutil
        this.attachShadow({mode:'open'});
    }


    connectedCallback(){
        this.render();
    }

    //aqui tengo todo el HTML
    getTemplate(){
        //metodo para generar etiqueta template
        const template = document.createElement("template");
        template.innerHTML = `
            ${this.getStyles()}
            <section>
                <h2>Soy el titulo del Shadow DOM</h2>
                <div><p>Soy el parrafo del shadow dom</p></div>
            </section>

        `;
        return template;
    }
    

   //con shadow DOM no se me sobreescriben mis estilos con los del DOM principal
    getStyles(){
        return `
            <style>
                h2{
                    color:red;
                }
            </style>
        `;
    }

    //clonar el contenido que tengo dentro de la etiqueta template para agregarlo al DOM
    render(){
        //clono el contenido. El valor el true hace que clone todos los elementos anidados del template,
        //con valor false solo clona template pero sin los nodos anidados
        //Usamos shadow Root porque estamos usando shadow DOM. lo que le decimos es que entre al shadow DOM
        //y genera el appendChild del contenido de la etiqueta template
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

}

//convertir esta clase en ETIQUETA HTML, para darle el nombre a la etiqueta y la clase de la que viene
customElements.define("my-element",myElement);
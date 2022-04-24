
/*
    Crear web component usando web api template. Su uso es opcional mientras no existan elementos
    que se conviertan en nodos. Se usa para mejorar el rendimiento. Los elementos no se generan uno
    por uno sino de forma unica.
    Lo que esta dentro de template, no se muestra mientras no usemos JavaScript.
*/

//el nombre de la clase no debe tener separaciones y debe extender de HTMLElement
class myElement extends HTMLElement{

    constructor(){
        super();
        
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
                <h2>Hola mundo</h2>
                <div><p>Soy mas texto de ejemplo</p></div>
            </section>

        `;
        return template;
    }
    

    //aqui tengo los estilos css, el problema es que se sobreescriben los estilos,
    //porque este componente pertenece al DOM principal. Esto se soluciona con shadow DOM
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
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

}

//convertir esta clase en ETIQUETA HTML, para darle el nombre a la etiqueta y la clase de la que viene
customElements.define("my-element",myElement);
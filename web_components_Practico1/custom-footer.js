class customFooter extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
            <footer>
                Derechos Reservardos para : <a href="#">Danny Pacheco</a>
            </footer>
        `;
        return template;
    }


    getStyles(){
        return `
            <style>
                a{
                    text-decoration:none;
                }
            </style>
        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

customElements.define("custom-footer",customFooter);
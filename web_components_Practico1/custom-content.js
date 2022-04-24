class customContent extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    //HTML
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
            ${this.getStyles()}
            <main>
                <h2>Articulo con custom Elements y template</h2>
                <article>
                    <p>
                        Espero que la calificacion de aqui sea 6.67
                    </p>
                </article>
            </main>
        `;

        return template;
    }

    //CSS
    getStyles(){
        return `
            <style>
                main{
                    background-color:papayawhip;
                }

                h2{
                    color:blue;
                    font-family: sans-serif;
                }

                article{
                    box-shadow: 0 0 12px black;
                }

                
            </style>
        `;
    }

    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }

}

customElements.define("custom-content",customContent);
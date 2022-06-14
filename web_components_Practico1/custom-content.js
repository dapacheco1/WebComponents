class customContent extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
            ${this.getStyle()}
            <main>
                <h3>Custom content</h3>
                <section>
                    This is an important section
                </section>
            </main>
        `;
        return template;
    }

    getStyle(){
        return `
            <style>
                main{
                    background-color:papayawhip;
                    box-shadow:0 0 12px black;
                }

            </style>
        `;
    }

    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

customElements.define("custom-content",customContent);
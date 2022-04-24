class customFooter extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    //HTML
    getTemplate(){
        const template = document.createElement("template");

        template.innerHTML = `
            ${this.getStyles()}
            <footer>
                <ul>
                    <li>
                        <h5>Aqui estoy usando shadow DOM</h5>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Social media</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </footer>
        `;
        return template;
    }

    //CSS
    getStyles(){
        return `
            <style>
                ul{
                    list-style:none;
                }
            </style>
        `;
    }


    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

customElements.define("custom-footer",customFooter);
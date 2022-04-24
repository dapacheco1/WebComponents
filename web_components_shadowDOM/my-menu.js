
class navbar extends HTMLElement{

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
            ${this.getStyles()}
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        `;

        return template;
    }

    getStyles(){
        return `
            <style>
                ul{
                    list-decoration:none;
                }

                li{
                    display:inline;
                    margin-right: 10px;
                }

                a{
                    text-decoration:none;
                }
                a:hover{
                    color:papayawhip;
                }
            </style>
        `;
    }

    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        const link = this.shadowRoot.querySelector("a");
        link.addEventListener('click',()=>{
            console.log('link home clicked');
        });

    }
}

customElements.define("basic-menu",navbar);

class customNavbar extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    getTemplate(){
        const template = document.createElement("nav");
        template.innerHTML = `
            ${this.getStyle()}
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        `;
        return template;
    }

    getStyle(){
        return `
            <style>
                ul{
                    list-style:none;
                }
                li{
                    display:inline-block;
                }
            </style>
        `;
    }

    render(){
        this.appendChild(this.getTemplate());
    }
}

customElements.define("custom-navbar",customNavbar);
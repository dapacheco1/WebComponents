const template = document.createElement("nav");

template.innerHTML = `
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
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact Us</a></li>
    </ul>
`;

class navbar extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.appendChild(template);
    }
}

customElements.define("basic-menu",navbar);
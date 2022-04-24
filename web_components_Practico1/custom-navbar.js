class customNavbar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    //HTML
    getTemplate(){
        const navbar = document.createElement("nav");
        navbar.innerHTML = `
        ${this.getStyles()}
        
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            <ul>
        
        `;
        return navbar;
    }

    //CSS
    getStyles(){
        return `
            <style>
                ul{
                    list-style:none;
                }

                li{
                    display:inline-block;
                    padding: 20px;
                }

                a:hover{
                    background-color:red;
                }

                a{
                    text-decoration:none;
                }
            </style>
        `;
    }

    render(){
        this.appendChild(this.getTemplate());
    }
}

customElements.define('custom-navbar',customNavbar);
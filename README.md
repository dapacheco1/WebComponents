# Web Components

## Fundamentos de web Components

### Qué problemas resuelven los Web Components?

Para construir una aplicación web, debemos elegir
el ecosistema en el que se va a trabajar.

El ecosistema puede ser Frameworks tales como:

- Angular
- Vue
- entre otros.

O librerías de JavaScript:

- React
- jQuery
- D3.js
- MathJS
- entre otros.

Cada librería o framework tiene un ecosistema
distinto; el problema es que estos no están
diseñados para co-existir entre ellos, es decir,
que **No podemos usar módulos de React dentro
de Angular**.

Los web components permiten realizar una arquitectura
escalable y que sea independiente a las librerías
y frameworks.

### Qué son los Web Components?

Son como piezas de lego que están diseñadas para ser
reutilizables.

Encapsulan cierto fragmento de código que se puede
usar en distintas partes de una aplicación o aplicaciones
sin repetir el código.

Los Web Components son primitivos de bajo nivel que permiten
crear elementos HTML propios, en otras palabras, generar
etiquetas HTML 5 personalizadas.

Muchos frameworks utilizan la misma analogía pero
esto es mentira (a nivel de co-existir con otras
 tecnologías), esa analogía solo funciona dentro
 de su propio ecosistema.

Al momento de crear estos componentes, ayuda al desarrollador
para que siga estándares web para su creación.

Los componentes web están creados por las Web API's:

- HTML Templates: Es una etiqueta HTML 5.
- Custom Elements: Ayuda a definir una etiqueta personalizada
para convertirla en estándar HTML 5.
- Shadow DOM: Ayuda a encapsular el código HTML 5 en su propio
DOM.
- ES Modules: Son módulos que ayudan a importar códigos JavaScript
a otro archivo JavaScript.

### API's de Web Components

- HTML Template: Es una etiqueta HTML 5 que solo puede 
usarse mediante JavaScript. Si esta etiqueta se utiliza de
manera "pura" en un documento HTML 5, todo el contenido dentro
de esta etiqueta no se renderizará.
- Custom Elements: El estándar establece que las etiquetas
personalizadas deben tener la siguiente estructura: Debe estar
formado por almenos dos palabras y cada una de ellas separadas
por un guión.

``<my-custom-tag></my-custom-tag>``

- Shadow DOM: Permite que el código que está dentro de
esta etiqueta no conviva con lo que está afuera. Esto evita
que exista sobreescritura de estilos.

La combinación del Shadow DOM y customElements da como
resultado la creación de un Web Component.

### Beneficios de Web Components

- Reutilización: Permite construir el código del componente
una vez y usarlo varias veces sin necesidad de repetirlo.
- Legibilidad: Agrega semántica al proyecto. Siempre se debe
codificar pensando en que otras personas van a leer
el mismo código y deben entenderlo.
- Mantenibilidad: Cada componente puede ser escrito y probado
de manera individual.
- Interoperabilidad: Coexise en cualquier proyecto que use JavaScript.
Por ejemplo un web component puede ser utilizado en un aplicación de React.
- Consistencia: El componente se adapta a las necesidades de su entorno.

### Ciclo de vida de un componente

Está ligado al DOM y es parte del [Critical Rendering Path](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path).
//imagen aqui

## Web Components usando Custom Elements

El primer paso es maquetar el componente en un 
elemento HTML.

```
const template = document.createElement("div");
template.innerHTML = `
    <style>
        p{
            color:blue;
        }
        .text-bold{
            color:black;
        }
    </style>
    <p class="text-bold">Hola mundo 2</p>
    <p>texto de ejemplo</p>
    `
;
```
Seguido a esto, se crea una clase que hereda de **HTMLElement**.
La clase creada debe tener el mismo nombre que el componente
y no debe tener separaciones.

```
class myElement extends HTMLElement{
    //TODO code
}
```

Se debe crear el método constructor, dentro del cual
se llamará al constructor padre(HTMLElement) y se crea un 
elemento párrafo de HTML.

```
class myElement extends HTMLElement{

    constructor(){
        super();
        //lo que se guarda en memoria para agregarlo al DOM        
        this.p = document.createElement("p");
    }
}
```

Se crea el método **calledCallback()**, en el cual
se renderiza todos los elementos HTML que se definieron
previamente.

```
class myElement extends HTMLElement{

    constructor(){
        super();
        //lo que se guarda en memoria para agregarlo al DOM        
        this.p = document.createElement("p");
    }


    connectedCallback(){
        this.p.textContent = "Hola mundo, estoy creandome...";
        //agrego al DOM el elemento creado
        this.appendChild(this.p);
        this.appendChild(template);
    }

}
```

Finalmente, se utiliza **customElements** para definir 
el nombre de la etiqueta HTML 5 que representará al componente.

Esto se lo realiza usando el método **define**, el cual requiere dos
parámetros. El primero parámetro es el nombre de la etiqueta y 
el segundo parámetro es la clase que se definió.

Todo esto se define **FUERA** de la clase creada.

```
/*
    Crear web component usando web api custom elements 
*/

const template = document.createElement("div");
template.innerHTML = `
    <style>
        p{
            color:blue;
        }
        .text-bold{
            color:black;
        }
    </style>
    <p class="text-bold">Hola mundo 2</p>
    <p>texto de ejemplo</p>

`;
//el nombre de la clase no debe tener separaciones y debe extender de HTMLElement
class myElement extends HTMLElement{

    constructor(){
        super();
        //lo que se guarda en memoria para agregarlo al DOM        
        this.p = document.createElement("p");
    }


    connectedCallback(){
        this.p.textContent = "Hola mundo, estoy creandome...";
        //agrego al DOM el elemento creado
        this.appendChild(this.p);
        this.appendChild(template);
    }

}

//convertir esta clase en ETIQUETA HTML, para darle el nombre a la etiqueta y la clase de la que viene
customElements.define("my-element",myElement);
```
Para comprobar el funcionamiento del componente, se crea un documento
HTML 5 con la siguiente estructura.

```
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Elements</title>
</head>
<body>
    <my-element></my-element>
    <script type="module" src="./my-element.js"></script>
</body>
</html>
```

El resultado final debería ser el siguiente:

//imagen aqui


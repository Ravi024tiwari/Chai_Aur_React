function customRender(reactElement,container){//here we render the html in react
    /*//steps to inject this
    //1->firstly create a new element
    //2->inject those element into created tag and set their innerHTML;

    const domElement =document.createElement(reactElement.type);//here we create the element
    domElement.innerHTML =reactElement.childern;//here we set their inner html
    domElement.setAttribute('href',reactElement.props.href);//here we set their attributes 
    domElement.setAttribute('target',reactElement.props.target);//here we set the value

    //now add this in container
    container.appendChild(domElement);//here we append the created element into mainContainer//div container in html
    */
   //now write the loop based code to inject all at in loop
   const domElement =document.createElement(reactElement.type);
   domElement.innerHTML =reactElement.childern;//here we set their inner html
   for (const prop in reactElement.props) {
         if(prop==='childern') continue;//agar prop ke andar childern hai to
         //now make a loop on set attribute to inject on this
         domElement.setAttribute(prop,reactElement.props[prop]);//here we set all the key value pair of props in loop
   }
     //now append this domElement into container
     container.appendChild(domElement);

}

//this is our custom react project setup
const reactElement ={//this is a way in which react works internally when we react.create() and covert this into 
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    childern:'Click me to visit google:'
}


const mainContainer = document.getElementById('root');//grab from the index.html
//now we have to render the elements 

customRender(reactElement,mainContainer);//kya inject kru and kha par inject kru 
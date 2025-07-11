function customRender(reactElement,container){
    /*
  const docElement =  document.createElement(reactElement.type);
  docElement.innerHTML =reactElement.children;
  docElement.setAttribute('href',reactElement.props.href)

  container.appendChild(docElement);
*/
const domElement =document.createElement(reactElement.type);
domElement.innerHTML =reactElement.children;
//for making more optimisation in props
for(let key in reactElement.props){
    domElement.setAttribute(key,reactElement.props[key]);
}
//append the dom Element on container
container.appendChild(domElement);
}
const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
   children:'click me to visit google..'
}
const mainContainer =document.querySelector('#root');

customRender(reactElement,mainContainer)

//  const rootNode = document.getRootNode();
// const htmlElementNode = rootNode.childNodes[0];
// const headElementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElement = htmlElementNode.childNodes[2]
// console.log(headElementNode);
  const h1 = document.querySelector("h1");
  const body = h1.parentNode.parentNode;

  body.style.color= "#efefef";
  body.style.backgroundColor ="#333";

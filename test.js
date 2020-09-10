
function createTextElement  (text) {

 return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    }
    }
 }

function createElement  (name,props,...children)  {

  return {
  type: name,
  props : {
    ...props,
    children: children.map(child=>
      typeof child ==='object'
      ? child
      : createTextElement(child)
    )
    }

  }
}
const Didact = {
  createElement ,
}
/** @jsx Didact.createElement */
const element = (
<div id="foo">
  <a>bar</a>
  <b />
</div>
)
const container = document.querySelector('#root')



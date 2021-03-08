// Navigatin between nodes

// NODE TYPES
// parentNode, childNodes[nodenumber], firstChild, 
// lastChild, nextSibling, previousSibling


// child nodes, nodes values
/* <title id="demo">DOM Tutorial</title> */
document.getElementById("demo").innerHTML;
// is the same as accessing the node value
document.getElementById("demo").firstChild.nodeValue;
document.getElementById("demo").childNodes[0].nodeValue;


// NODENAME PROPERTY
// nodeName is read-only
// nodeName of an element node is the same as the tag name
// nodeName of an attribute node is the attribute name
// nodeName of a text node is always #text
// nodeName of the document node is always #document

// NODEVALUE PROPERTY
// nodeValue for element nodes is null
// nodeValue for text nodes is the text itself
// nodeValue for attribute nodes is the attribute value

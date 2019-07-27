var listElement = document.getElementById("list")
for (var i = 0; i < 100; i++) {
  var node = document.createElement("LI")
  var textnode = document.createTextNode("item " + (i + 1))
  node.appendChild(textnode)
  listElement.appendChild(node)
}

var sl = new ScrollLocation('listaq')
var sl = new ScrollLocation('list')

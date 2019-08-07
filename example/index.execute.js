var listElement = document.getElementById("list")
for (var i = 0; i < 100; i++) {
  var node = document.createElement("LI")
  var textnode = document.createTextNode("item " + (i + 1))
  node.id = `el_${i}`;
  node.appendChild(textnode)
  listElement.appendChild(node)
}

// var sl = new ScrollLocation('listaq')

var setting = {
  event: {
    enable: true,
    eventName: 'jass',
    eventEmitter: () => {},
    eventListener: () => {},
  }
}

window.addEventListener('jass', (x) => { console.log('jass ->> xxxss', x); })
var sl = new ScrollLocation(
  '#list',
  setting
)
const el_1 = sl.addTarget('#el_1');
console.log(el_1);
sl.addTarget('#el_3');

console.log('sl.targets');
console.table(sl.targets);
console.log(el_1.addEvent(() => {},() => {}));
// const ce = sl.createWatcher('#list');
// ce.scrollIntoView((x) => { console.log(x) });
// console.log(sl.elementObject);
// ce.listener();
// ce.emitter();

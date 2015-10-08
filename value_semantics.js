function clock(d) {
  return React.DOM.div({id: "clock"},
    React.DOM.span(null, d.getHours()),
    React.DOM.span(null, d.getMinutes()),
    React.DOM.span(null, d.getSeconds())
  );
}

var d = new Date(2015, 5, 30, 22, 10, 30);
var exampleClock = clock(d);
var anotherClock = clock(d);
console.log(exampleClock == anotherClock); // => false
console.log(_.isEqual(exampleClock, anotherClock)); // => true

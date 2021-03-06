function clock(d) {
  return React.DOM.div({id: "clock"},
    React.DOM.span(null, d.getHours()),
    React.DOM.span(null, d.getMinutes()),
    React.DOM.span(null, d.getSeconds())
  );
}

function render() {
  var d = new Date();
  var c = clock(d);
  var e = document.getElementById("app");
  var s = React.renderToString(c);
  e.innerHTML = s;
}

setInterval(render, 1000);

function clock(d) {
  return React.DOM.div({id: 'clock'},
    React.DOM.span(null, d.getHours()),
    React.DOM.span(null, d.getMinutes()),
    React.DOM.span(null, d.getSeconds())
  );
}

function render() {
  var d = new Date();
  var c = clock(d);
  var s = React.renderToString(c);
  var e = document.getElementById('app');
  e.innerHTML = s;
}

setInterval(render, 1000);

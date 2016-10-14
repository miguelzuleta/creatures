function newEl(parent, child, attrs, html){
  var getParent = document.querySelectorAll(parent);

  for (var i = 0; i < getParent.length; i++) {
    var newChild = document.createElement(child);
    html === undefined ? '' : newChild.innerHTML = html;

    for(var key in attrs){
      newChild.setAttribute(key, attrs[key]);
    }

    getParent[i].appendChild(newChild);
  }
}

var person = (function(){

  var face = function(element){
    newEl(
      element,
      'div',
      { 'class': 'face' },
      '(ツ)'
    );
  }

  return {
    face: face
  }

});
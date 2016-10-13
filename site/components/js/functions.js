function newEl(parent, child, attrs, html){
  var getParent = document.querySelectorAll(parent);

  for (var i = 0; i < getParent.length; i++) {
    var newChild = document.createElement(child);
    newChild.innerHTML = html;

    for(var key in attrs){
      newChild.setAttribute(key, attrs[key]);
    }

    getParent[i].appendChild(newChild);
  }

}
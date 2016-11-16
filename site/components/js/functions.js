function newEl(option){
  var getParent = document.querySelectorAll(option.parent || 'body');

  for (var i = 0; i < getParent.length; i++) {
    var newChild = document.createElement(option.child || 'div');
    newChild.innerHTML = option.html || '';

    var childAttrs = option.attrs || {};
    for(var key in childAttrs){
      newChild.setAttribute(key, childAttrs[key]);
    }

    getParent[i].appendChild(newChild);
  }
}

var person = (function(element){

  var face = function(){

    newEl({
      parent: element,
      attrs: { 'class': 'face'},
      html: '(ツ)'
    });

    var eyes = function(){

      var eye = ['left', 'right'];

      for (var i = 0; i < eye.length; i++) {
        newEl({
          parent: element + ' .face',
          attrs: { 'class': eye[i] + ' eye' },
          html: 'O'
        });
      }

    }

    return {
      eyes: eyes
    }

    return this;
  }

  var torso = function(){

    newEl({
      parent: element,
      child: 'aside',
      attrs: { 'class': 'torso nee' },
      html: 'x'
    });

    return this;
  }

  return {
    face: face,
    torso: torso
  }

});
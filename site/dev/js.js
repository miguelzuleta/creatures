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

  var face = function(parts){

    newEl({
      parent: element,
      attrs: { 'class': 'face'},
      html: '(ツ)'
    });

    if(parts === undefined){
      parts = {
        eyes: 'left'
      }
    }

    var faceEye = (parts.eyes === 'both') ? ['left', 'right'] : [parts.eyes],
        faceLooneyEyes = (parts.looneyEyes === undefined) ? '' : ' looney';

    for (var i = 0; i < faceEye.length; i++) {
      newEl({
        parent: element + ' .face',
        attrs: { 'class': faceEye[i] + faceLooneyEyes + ' eye' },
        html: faceEye[i] + ' eye'
      });
    }

    return this;
  }

  var torso = function(){

    newEl({
      parent: element,
      child: 'aside',
      attrs: { 'class': 'torso' },
      html: 'TORSO'
    });

    return this;
  }

  return {
    face: face,
    torso: torso
  }

});
person('body')
  .face({
    eyes: 'both',
    looneyEyes: true
  })
  .torso();

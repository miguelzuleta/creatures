function newEl(el){
  var getParent = document.querySelectorAll(el.parent || 'body');

  for (var i = 0; i < getParent.length; i++) {
    var newChild = document.createElement(el.child || 'div');
    newChild.innerHTML = el.html || '';

    var childAttrs = el.attrs || {};
    for(var key in childAttrs){
      newChild.setAttribute(key, childAttrs[key]);
    }

    getParent[i].appendChild(newChild);
  }
}

var creature = (function(element){

  if(element === undefined) element = 'body';

  var face = function(faceParts){

    newEl({
      parent: element,
      attrs: { 'class': 'face'},
      html: '(◕‿◕)'
    });

    var faceEye = 0,
        faceLooneyEyes = '';

    if(faceParts.eyes > 0) faceEye = faceParts.eyes;
    if(faceParts.looneyEyes === true) faceLooneyEyes = 'looney ';

    for (var i = 1; i < faceEye + 1; i++) {
      newEl({
        parent: element + ' .face',
        attrs: { 'class': 'eye eye-' + i },
        html: 'eye ' + i + '<span class="' + faceLooneyEyes + 'pupil"></span>'
      });
    }

    return this;
  }

  var arms = function(){

    newEl({
      parent: element,
      attrs: { 'class': 'arms' },
      html: 'ARM'
    });

    return this;
  }

  var torso = function(){

    newEl({
      parent: element,
      attrs: { 'class': 'torso' },
      html: 'TORSO'
    });

    return this;
  }

  return {
    face: face,
    torso: torso,
    arms: arms
  }

});
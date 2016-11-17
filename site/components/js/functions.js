var creature = (function(element){

  var _newEl = function(el){
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

    return this;
  };

  if(element === undefined) element = 'body';

  var face = function(faceParts){

    _newEl({
      parent: element,
      attrs: { 'class': 'face'}
    });

    var faceEye = 0,
        faceLooneyEyes = '';

    if(faceParts.eyeAmount > 0) faceEye = faceParts.eyeAmount;
    if(faceParts.looneyEyes === true) faceLooneyEyes = 'looney ';

    for (var i = 1; i < faceEye + 1; i++) {
      _newEl({
        parent: element + ' .face',
        attrs: { 'class': 'eye eye-' + i },
        html: '&#9711;<span class="' + faceLooneyEyes + 'pupil"></span>'
      });
    }

    if(faceParts.mouth === true){
      _newEl({
        parent: element + ' .face',
        attrs: { 'class': 'mouth' },
        html: '&#8255;'
      });
    }

    return this;
  };

  var torso = function(armCount){

    _newEl({
      parent: element,
      attrs: { 'class': 'torso' },
      html: '[  .  ]'
    });

    if(armCount !== undefined){
      var totalArms = 2;

      if(armCount.armAmount !== 2) totalArms = armCount.armAmount;

      for (var i = 1; i < totalArms + 1; i++) {
        _newEl({
          parent: element + ' .torso',
          attrs: { 'class': 'arm arm-' + i },
          html: '&#9603;'
        });

        if(armCount.hands === true){
          _newEl({
            parent: element + ' .arm-' + i,
            attrs: { 'class': 'hand' },
            html: '&#9994;'
          });
        }
      }

    }

    return this;
  };

  var legs = function(legCount){

    if(legCount !== undefined){
      var totalLegs = 2;

      if(legCount.amount !== 2) totalLegs = legCount.amount;

      for (var i = 1; i < totalLegs + 1; i++) {
        _newEl({
          parent: element,
          attrs: { 'class': 'leg leg-' + i },
          html: '&#10097;'
        });

        if(legCount.feet === true){
          _newEl({
            parent: element + ' .leg-' + i,
            attrs: { 'class': 'foot' },
            html: '&#10175;'
          });
        }
      }

    }

    return this;
  };

  return {
    face: face,
    torso: torso,
    // arms: arms,
    legs: legs
  };

});
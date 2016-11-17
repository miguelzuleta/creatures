creature('.dude')
  .face({
    eyeAmount: 2,
    looneyEyes: true,
    mouth: true
  })
  // .arms()
  .torso({
    armAmount: 4,
    hands: true
  })
  .legs({
    amount: 2,
    feet: true
  });

creature('.alien')
  .face({
    eyeAmount: 30
  });

creature('.minion')
  .torso();

creature('.random')
  .torso({
    armAmount: 2
  })
  .face({
    mouth: true
  });
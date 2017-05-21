
const movement = {

  moveIsValid: function(x,y) {
    return x >= 0 && x < 5 && y >= 0 && y < 5;
  },
  moveRobot: function(currentPos) {
    let x = currentPos[0];
    let y = currentPos[1];
    const f = currentPos[2];
    let newPos;
    switch (f) {
      case "N":
        y = y + 1;
        break;
      case "E":
        x = x + 1;
        break;
      case "S":
        y = y - 1;
        break;
      case "W":
        x = x - 1;
        break;
      default:

    }


    if (this.moveIsValid(x, y)) {
      newPos = [x, y, f];
    }
    else {
      newPos = currentPos;
    }
    return newPos;
  }
};

export default movement;

export function setCurrentPos(currentPos){
  return {
    type: 'SET_CURRENT_POS',
    currentPos
  }
}

export function sendInput(input){
  return {
    type: 'SEND_INPUT',
    input
  }
}

export function inputFinished(){
  return {
    type: 'INPUT_FINISHED',
  }
}

export function placeRobot(isPlaced){
  return {
    type: 'PLACE_ROBOT',
    isPlaced
  }
}
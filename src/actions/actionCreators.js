
export function setCurrentPos(currentPos){
  return {
    type: 'SET_CURRENT_POSITION',
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
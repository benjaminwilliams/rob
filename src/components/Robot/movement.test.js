import movement from './movement';

describe('movement', ()=>{

  it('should allow valid moves', ()=>{
    expect(movement.moveIsValid(0,0)).toEqual(true);
    expect(movement.moveIsValid(1,1)).toEqual(true);
    expect(movement.moveIsValid(2,2)).toEqual(true);
    expect(movement.moveIsValid(3,3)).toEqual(true);
    expect(movement.moveIsValid(4,4)).toEqual(true);
  });
  it('should NOT allow invalid moves', ()=>{
    expect(movement.moveIsValid(-1,-1)).toEqual(false);
    expect(movement.moveIsValid('a','a')).toEqual(false);
    expect(movement.moveIsValid(5,5)).toEqual(false);
    expect(movement.moveIsValid(100,100)).toEqual(false);
  });
  it('should move north correctly', ()=>{
    expect(movement.moveRobot(0,0,'N')).toEqual(0,1,'N');
    expect(movement.moveRobot(1,1,'N')).toEqual(1,2,'N');
    expect(movement.moveRobot(3,3,'N')).toEqual(3,4,'N');
  });
  it('should return the same position if not a valid move', ()=>{
    expect(movement.moveRobot(5,5,'N')).toEqual(5,5,'N');
    expect(movement.moveRobot(1,5,'N')).toEqual(1,5,'N');
  });

});

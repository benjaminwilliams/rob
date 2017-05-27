import movement from './movement';

describe('movement', ()=>{

  it('should allow valid moves', ()=>{
    expect(movement.moveIsValid(0,0)).toEqual(true);
    expect(movement.moveIsValid(1,1)).toEqual(true);
    expect(movement.moveIsValid(2,2)).toEqual(true);
    expect(movement.moveIsValid(3,2)).toEqual(true);
    expect(movement.moveIsValid(4,4)).toEqual(true);
  });
  it('should NOT allow invalid moves', ()=>{
    expect(movement.moveIsValid(-1,-1)).toEqual(false);
    expect(movement.moveIsValid('a','a')).toEqual(false);
    expect(movement.moveIsValid(5,5)).toEqual(false);
    expect(movement.moveIsValid(100,100)).toEqual(false);
  });
  it('should move north correctly', ()=>{
    expect(movement.moveRobot([0,0,'N'])).toEqual([0,1,'N']);
    expect(movement.moveRobot([1,1,'N'])).toEqual([1,2,'N']);
    expect(movement.moveRobot([3,3,'N'])).toEqual([3,4,'N']);
  });
  it('should move north correctly', ()=>{
    expect(movement.moveRobot([2,2,'N'])).toEqual([2,3,'N']);
  });
  it('should move east correctly', ()=>{
    expect(movement.moveRobot([2,2,'E'])).toEqual([3,2,'E']);
  });
  it('should move south correctly', ()=>{
    expect(movement.moveRobot([2,2,'S'])).toEqual([2,1,'S']);
  });

  it('should move west correctly', ()=>{
    expect(movement.moveRobot([2,2,"W"])).toEqual([1,2,'W']);
  });
  it('should return the same position if not a valid move', ()=>{
    expect(movement.moveRobot([5,5,'N'])).toEqual([5,5,'N']);
    expect(movement.moveRobot([1,5,'N'])).toEqual([1,5,'N']);
    expect(movement.moveRobot([0,0,'S'])).toEqual([0,0,'S']);
    expect(movement.moveRobot([0,0,'W'])).toEqual([0,0,'W']);
  });
  it('should return input if invalid', ()=>{
    expect(movement.moveRobot('test')).toEqual('test');
  });

});

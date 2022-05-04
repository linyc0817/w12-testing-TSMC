import { Kata } from './kata';

describe('Kata', () => {
  it('should create an instance', () => {
    expect(new Kata()).toBeTruthy();
  });

  test('testBasics', () => {
    const kata = new Kata();
    // for (let i = 0; i < 20; i++) {
    //   game.roll(0);
    // }
    expect(kata.price([])).toBe(0);
    expect(kata.price([1])).toBe(8);
    // expect(kata.price([2])).toBe(8);
    // expect(kata.price([3])).toBe(8);
    // expect(kata.price([4])).toBe(8);
    expect(kata.price([1,1,1])).toBe(8*3);
  });
  
});

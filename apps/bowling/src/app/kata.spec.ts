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
  });
  
});

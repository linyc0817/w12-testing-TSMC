import { IterableDiffers } from '@angular/core';
import { Kata } from './kata';

describe('Kata', () => {
  it('should create an instance', () => {
    expect(new Kata()).toBeTruthy();
  });

  test('testBasics', () => {
    const kata = new Kata();
    expect(kata.price([])).toBe(0);
    expect(kata.price([1])).toBe(8);
    expect(kata.price([2])).toBe(16);
    expect(kata.price([3])).toBe(24);
    expect(kata.price([4])).toBe(32);
    expect(kata.price([1,1,1])).toBe(8*3);
  });

  it('test it', ()=>{
    const kata = new Kata();
    expect(kata.price([])).toEqual(0);
    expect(kata.price([1])).toEqual(8);
  });

  
});

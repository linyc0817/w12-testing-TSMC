import { IterableDiffers } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Kata } from './kata';

describe('Kata', () => {
  it('should create an instance', () => {
    expect(new Kata()).toBeTruthy();
  });

  test('testBasics', () => {
    const kata = new Kata();
    expect(kata.price([])).toBe(0);
    expect(kata.price([1])).toBe(8);
    expect(kata.price([2])).toBe(8);
    expect(kata.price([3])).toBe(8);
    expect(kata.price([4])).toBe(8);
    expect(kata.price([1,1,1])).toBe(8*3);
  });

  test('testSimpleDiscounts', () => {
    const kata = new Kata();
    expect(kata.price([0, 1])).toBe(8 * 2 * 0.95);
    expect(kata.price([0, 2, 4])).toBe(8 * 3 * 0.9);
    expect(kata.price([0, 1, 2, 4])).toBe(8 * 4 * 0.8);
    expect(kata.price([0, 1, 2, 3, 4])).toBe(8 * 5 * 0.75);
  });

  test('testSeveralDiscounts', () => {
    const kata = new Kata();
    expect(kata.price([0, 0, 1])).toBe(8 + (8 * 2 * 0.95));
    expect(kata.price([0, 0, 1, 1])).toBe(2 * (8 * 2 * 0.95));
    expect(kata.price([0, 0, 1, 2, 2, 3])).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));
    expect(kata.price([0, 1, 1, 2, 3, 4])).toBe(8 + (8 * 5 * 0.75));
  });
  
});

import { PasswordStrengthChecker } from '../index';

const lowScore = 1;
const mediumScore = 5;
const highScore = 10;

test('one letter password should return low score', () => {
  expect(PasswordStrengthChecker('a').score).toBe(lowScore);
});

test('one digit password should return low score', () => {
  expect(PasswordStrengthChecker('1').score).toBe(lowScore);
});

test(`password with mixture of one letter and one
 digit should return a score of 2`, () => {
  expect(PasswordStrengthChecker('a1').score).toBe(2);
});

test('password under 8 chars should not be valid per defult', () => {
  expect(PasswordStrengthChecker('a').valid).toBe(false);
});

test(`passwords with a minimum of 8 chars |  
  minimum one big and one small letter | 
  minimum one digit and minimum one special chars
  should be valid per default`, () => {
  expect(PasswordStrengthChecker('aB6!_pL4').valid).toBe(true);
});

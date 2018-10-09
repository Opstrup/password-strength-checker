import { Greeter } from '../index';

test('My Greeter', () => {
  expect(Greeter('Anders')).toBe('Hello Anders');
});

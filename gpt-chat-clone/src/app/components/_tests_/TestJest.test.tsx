import { render, screen } from '@testing-library/react';
import TestJest from '../TestJest';

test('відображає текст Hello, world!', () => {
  render(<TestJest />);
  const heading = screen.getByText('Hello, world!');
  expect(heading).not.toBeNull(); // проста перевірка існування
});

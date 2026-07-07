import { fireEvent, render, screen } from '@testing-library/react';
import FinishScreen from './FinshScreen';

describe('FinishScreen', () => {
  it('calls onRestart when the restart button is clicked', () => {
    const handleRestart = jest.fn();

    render(<FinishScreen points={8} maxPoints={10} onRestart={handleRestart} />);

    fireEvent.click(screen.getByRole('button', { name: /restart quiz/i }));

    expect(handleRestart).toHaveBeenCalledTimes(1);
  });
});

import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', { name: 'Hello Word!' })
    .parentElement;
  expect(headingContainer).toHaveStyleRule({
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toMatchSnapshot();
});

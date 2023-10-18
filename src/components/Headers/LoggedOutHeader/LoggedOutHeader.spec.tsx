import {render, screen} from '@testing-library/react';
import TestWithLocaleWrapper from '@/components/test/TestWIthLocaleWrapper';
import LoggedOutHeader from '.';

describe('LoggedOutHeader', () => {

  it('should render the component', () => {
    render(
        <LoggedOutHeader />
    );

    expect(screen.getByText(`Donation System`)).toMatchSnapshot();
  });

});
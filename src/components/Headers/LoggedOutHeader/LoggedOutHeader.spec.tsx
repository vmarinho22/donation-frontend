import {render, screen} from '@testing-library/react';
import LoggedOutHeader from '.';
import { RootMock } from '../../../../__mocks__/RootMock';


describe('LoggedOutHeader', () => {

  it('should render the component', () => {
    render(
      <RootMock>
        <LoggedOutHeader />
      </RootMock>
    );

    expect(screen.getByText(`Donation System`)).toMatchSnapshot();
  });

});
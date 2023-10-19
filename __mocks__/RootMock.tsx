import { IntlProvider } from 'next-intl';
import { ReactNode } from 'react';

import messages from '../src/locales/pt-br.json';

interface Props {
  children: ReactNode;
}

export const RootMock = ({ children }: Props) => {

  return (
    <IntlProvider messages={messages} locale="pt-br">
      {children}
    </IntlProvider>
  );
};
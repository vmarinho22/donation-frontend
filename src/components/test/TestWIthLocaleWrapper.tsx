import pick from 'lodash/pick';
import {NextIntlClientProvider} from 'next-intl';
import locale from '../../locales/pt-br.json';

interface Props {
  children: React.ReactNode;
  locales: string[];
}

export default function TestWithLocaleWrapper(props: Props) {

  console.log(locale)
  return (
    <NextIntlClientProvider
    locale="pt-br"
    messages={pick(locale, props.locales)}
    >
      {props.children}
    </NextIntlClientProvider>
  );
}

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function LoggedOutHeader() {
  const t = useTranslations('buttons');

  return (
    <header className='h-22 mb-8 flex w-full flex-nowrap items-center justify-between px-8 py-3'>
        <h1 className='text-2xl font-bold'>Donation System</h1>
        <Button
          variant='outline'
          asChild
          className='border-bloodRed-500 hover:bg-bloodRed-500 hover:text-white'
        >
          <Link href='/login'>{t('signin')}</Link>
        </Button>
      </header>
  );
}

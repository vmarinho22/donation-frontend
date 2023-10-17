import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HiLockClosed, HiHeart, HiFaceSmile } from 'react-icons/hi2';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  const buttonsT = useTranslations('buttons');

  return (
    <main className='h-screen w-screen'>
      <header className='h-22 mb-8 flex w-full flex-nowrap items-center justify-between px-8 py-3'>
        <h1 className='text-2xl font-bold'>Donation System</h1>
        <Button
          variant='outline'
          asChild
          className='border-bloodRed-500 hover:bg-bloodRed-500 hover:text-white'
        >
          <Link href='/login'>{buttonsT('signin')}</Link>
        </Button>
      </header>
      <section
        id='lp-content'
        className='flex w-full flex-col items-center lg:justify-center gap-3 mb-8 lg:mb-0 lg:h-[60vh]'
      >
        <small className='uppercase'>{t('initialText')}</small>
        <h2 className='text-3xl lg:text-8xl '>{t('title')}</h2>
        <h3 className='mb-6 text-3xl lg:text-7xl'>{t('subTitle')}</h3>
        <p className='w-full px-4 text-center lg:w-1/2'>{t('info')}</p>
        <br />
        <div className='flex items-center gap-3'>
          <Button
            variant='outline'
            asChild
            className='border-bloodRed-500 hover:bg-bloodRed-500 hover:text-white'
          >
            <Link href='/signin'>{buttonsT('signin')}</Link>
          </Button>
          <Button asChild className='bg-bloodRed-500 text-white'>
            <Link href='/signup'>{buttonsT('signup')}</Link>
          </Button>
        </div>
        <br />
        <small className='text-center px-4'>{t('dataSecurity')}</small>
      </section>
      <section
        id='lb-benefits'
        className='flex flex-col w-full items-center justify-center px-4 gap-8 mb-8 lg:gap-3 lg:flex-row'
      >
        <div className='w-full lg:w-1/3 flex justify-center lg:items-start gap-3'>
           <HiLockClosed size='2em' />
          <div className='flex flex-col gap-2'>
            <h4 className='text-xl'>{t('benefits.first.title')}</h4>
            <p className='w-full lg:w-2/3'>{t('benefits.first.text')}</p>
          </div> 
          
        </div>
        <div className='w-full lg:w-1/3 flex justify-center lg:items-start gap-3'>
          <HiFaceSmile size='2em' />
          <div className='flex flex-col gap-2'>
            <h4 className='text-xl'>{t('benefits.second.title')}</h4>
            <p className='w-full lg:w-2/3'>{t('benefits.second.text')}</p>
          </div>
        </div>
        <div className='w-full lg:w-1/3 flex justify-center lg:items-start gap-3'>
          <HiHeart size='2em' />
          <div className='flex flex-col gap-2'>
            <h4 className='text-xl'>{t('benefits.third.title')}</h4>
            <p className='w-full lg:w-2/3'>{t('benefits.third.text')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

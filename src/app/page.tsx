import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HiLockClosed, HiHeart, HiFaceSmile } from 'react-icons/hi2';

export default function Home() {
  return (
    <main className='min-h-screen w-screen'>
      <header className='flex flex-nowrap items-center justify-between h-22 w-full px-8 py-3'>
        <h1 className='text-2xl font-bold'>Donation System</h1>
        <Button variant="outline" asChild className='border-bloodRed-500 hover:bg-bloodRed-500 hover:text-white'>
          <Link href='/login'>Entrar</Link>
        </Button>
      </header>
      <section id="lp-content" className='flex flex-col gap-3 items-center justify-center w-full h-[60vh]'>
        <small className='uppercase'>Uma prioridade</small>
        <h2 className='text-8xl'>Salve vidas doando</h2>
        <h3 className='text-7xl mb-6'>sangue e leite materno</h3>
        <p className='text-center w-1/2'>As doações são fundamentais para o suprimento de componentes sanguíneos vitais, e para a nutrição de recém-nascidos prematuros e bebês com dificuldades de amamentação.</p>
        <br />
        <div className='flex gap-3 items-center'>
          <Button variant="outline" asChild className='border-bloodRed-500 hover:bg-bloodRed-500 hover:text-white'>
            <Link href='/signin'>Entrar</Link>
          </Button>
          <Button asChild className='bg-bloodRed-500 text-white'>
            <Link href='/signup'>Cadastrar</Link>
          </Button>
        </div>
        <br />
        <small className='text-center'>Seus dados estão seguros e não serão enviados a ninguém</small>
      </section>
      <section id='lb-benefits' className='flex gap-3 items-center justify-center w-full'>
        <div className="min-w-1/3 flex gap-3 items-start">
          <HiLockClosed size="2em" />
          <div className='flex flex-col gap-2'>
            <h4 className='text-xl'>Segurança</h4>
            <p className='w-2/3'>Seus dados estão seguros e não serão enviados a ninguém.</p>
          </div>
        </div>
        <div className="min-w-1/3 flex gap-3 items-start">
          <HiFaceSmile size="2em" />
          <div className='flex flex-col gap-2'>
            <h4 className='text-xl'>Rapidez</h4>
            <p className='w-2/3'>Um processo simples e 100% informatizado.</p>
          </div>
        </div>
        <div className="min-w-1/3 flex gap-3 items-start">
          <HiHeart size="2em" />
          <div className='flex flex-col gap-2'>
            <h4 className='text-xl'>Gratidão</h4>
            <p className='w-2/3'>Você ajudará a salvar dezenas de vidas.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

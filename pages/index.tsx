import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <div className={'h-screen'}>
      <header className={'drop-shadow-lg h-20 bg-emerald-300 flex'}>
        <div className={'flex flex-row w-2/12 content-center items-center justify-center'}><p className={'text-2xl text-white font-semibold'}>Recepten App</p></div>
        <div className={'flex flex-row'}>
          <div className={'flex justify-items-center items-center mx-6 hover:bg-emerald-500 px-4'}><p className={'text-lg text-white'}>Overview</p></div>
          <div className={'flex justify-items-center items-center mx-6 hover:bg-emerald-500 px-4'}><p className={'text-lg text-white'}>Recept toevoegen</p></div>
        </div>
      </header>
    </div>
  );
};

export default Home;


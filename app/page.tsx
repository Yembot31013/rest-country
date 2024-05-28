import NavBar from './components/navbar'
import Toolbar from './components/toolbar'
import Card from './components/card'
import CardGroup from './components/cardGroup'

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    filter?: string;
  };
  }) {
  const query = searchParams?.query || '';
  const filter = searchParams?.filter || '';

  return (
      <section className="flex flex-col max-[988px]:px-[2rem] px-[5rem] py-[2.5rem] min-h-[90vh] bg-[--Very-Light-Gray] dark:bg-[--Very-Dark-Blue] gap-[3rem]">
        <Toolbar />
        <div id="cardContainer" className='grid grid-cols-16 gap-[2.5rem] max-[320px]:grid-cols-17'>
          <CardGroup query={query} filter={filter} />
        </div>
      </section>
  )
}

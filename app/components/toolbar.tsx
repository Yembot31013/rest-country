'use client';
import Image from 'next/image';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Toolbar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const handleChange = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('filter', term);
    } else {
      params.delete('filter');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex justify-between max-[425px]:flex-col max-[425px]:gap-[2rem]">
      <div id="search-contain" className="flex justify-center align-center w-[55%] h-[4rem] bg-[--White] dark:bg-[--Dark-Blue] shadow-lg max-[425px]:w-[100%] max-[425px]:h-[3rem]">
        <div id="icon" className="flex justify-center align-center ps-[1rem]">
          <Image
            src="/search.svg"
            alt="search Icon"
            className="dark:invert"
            width={23}
            height={23}
            priority
          />
        </div>
        <input
          type="text"
          className="w-[100%] h-[100%] border-none outline-none bg-[transparent] text-[--Very-Dark-Blue] dark:text-[--White] px-[1rem]"
          placeholder="Search for a Country"
          onChange={(e) => {
          handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
      </div>
      <select id="dropdown" className="flex justify-center align-center text-[--Very-Dark-Blue] dark:text-[--White] dark:bg-[--Dark-Blue] text-[15px] w-[30%] px-[1rem] border-none outline-none shadow max-[425px]:w-[60%] h-[3rem] max-[320px]:w-[80%]" aria-placeholder="Filter by region" onChange={(e) => { handleChange(e.target.value); }} defaultValue={searchParams.get('filter')?.toString()}>
        <option value="" className="hidden">Filter by region</option>
        <option value="Africa" className="">Africa</option>
        <option value="America" className="">America</option>
        <option value="Asia" className="">Asia</option>
        <option value="Europe" className="">Europe</option>
        <option value="Oceania" className="">Oceania</option>
      </select>
    </div>
  )
}
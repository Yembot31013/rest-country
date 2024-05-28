import Image from 'next/image'

type paramType = {
  name: string,
  population: number,
  region: string,
  capital: string | undefined,
  demonym: string,
  image: string
}

export default function Card({name, population, region, capital, demonym, image} : paramType) {
  const formattedNumber = population.toLocaleString();
  return (
    <div className="flex bg-[--White] dark:bg-[--Dark-Blue] shadow-lg flex-col hover:shadow-2xl cursor-pointer w-[100%] min-h-[100%] max-w-[260px]">
      <div className='flex justify-center align-center w-[100%] min-h-[200px]'>
        <img
          src={image}
          alt={demonym}
          className='w-[100%] h-[100%]'
        />
      </div>
      <div className="flex flex-col px-[2rem] pt-[1rem] pb-[3rem]">
        <h2 className="text-[--Very-Dark-Blue] dark:text-[--White] text-[17px] font-bold py-[0.7rem]">{name}</h2>
        <h3 className="text-[--Very-Dark-Blue] dark:text-[--White] text-[13px] font-semibold	">Population: <span className="font-normal">{formattedNumber}</span></h3>
        <h3 className="text-[--Very-Dark-Blue] dark:text-[--White] text-[13px] font-semibold	">Region: <span className="font-normal">{region}</span></h3>
        <h3 className="text-[--Very-Dark-Blue] dark:text-[--White] text-[13px] font-semibold	">Capital: <span className="font-normal">{capital}</span></h3>
      </div>
    </div>
  )
}
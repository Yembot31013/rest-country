'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import data from "../data/data";

export default function Home({
  params,
}: {
    params: {
      countryName: string;
    };
  }) {
  
  const { back } = useRouter();

  const decodedCountryName = decodeURIComponent(params.countryName);

  const dataValue = data.filter((item) => {
    return item.name.toLowerCase() == decodedCountryName.toLowerCase()
  })[0]

  return (
    <section className="flex flex-col bg-[--Very-Light-Gray] dark:bg-[--Very-Dark-Blue] min-h-[90vh]">
      <div id="btn" className="flex px-[5rem] py-[2.5rem] max-[1052px]:px-[2rem]">
        <div id="btn-group" className="flex bg-[--Dark-Blue] justify-center align-center gap-[0.5rem] px-[1.5rem] py-[0.5rem] shadow-lg cursor-pointer" onClick={(e)=>{back()}}>
          <div id="icon" className="">
            <Image
              src="/back.svg"
              alt="back Icon"
              className="dark:invert"
              width={23}
              height={23}
              priority
            />
          </div>
          <span className="capitalize text-[--Very-Dark-Blue] dark:text-[--White]">back</span>
        </div>
      </div>
      <div id="main-content" className="flex justify-center gap-[5rem] px-[5rem] max-[1152px]:gap-[3rem] max-[1152px]:px-[3rem] max-[1052px]:px-[2rem] max-[1052px]:gap-[2rem]">
        <div className="flex justify-center align-center w-[100%] h-[20rem]">
          <img src={dataValue.flag && dataValue.flags.png && dataValue.flags.svg} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className="flex flex-col w-[100%] gap-[1.5rem]">
          <h1 className="text-[--Very-Dark-Blue] dark:text-[--White] text-[25px] font-extrabold">{dataValue.name}</h1>
          <div className="flex justify-between">
            <div className="flex flex-col gap-[0.3rem]">
              <h3 className="font-bold flex gap-[0.4rem]">Native Name: <span className="font-normal">{dataValue.nativeName}</span></h3>
              <h3 className="font-bold flex gap-[0.4rem]">Population: <span className="font-normal">{dataValue.population.toLocaleString()}</span></h3>
              <h3 className="font-bold flex gap-[0.4rem]">Region: <span className="font-normal">{dataValue.region}</span></h3>
              <h3 className="font-bold flex gap-[0.4rem]">Sub Region: <span className="font-normal">{dataValue.subregion}</span></h3>
              <h3 className="font-bold flex gap-[0.4rem]">Capital: <span className="font-normal">{dataValue.capital}</span></h3>
            </div>
            <div className="flex flex-col gap-[0.3rem]">
              <h3 className="font-bold flex gap-[0.4rem]">Top Level Domain: <span className="font-normal">{dataValue.topLevelDomain}</span></h3>
              <h3 className="font-bold flex gap-[0.4rem]">Currencies: <span className="font-normal">{dataValue.currencies?.map((item)=>item.name).join(", ")}</span></h3>
              <h3 className="font-bold flex gap-[0.4rem]">Language: <span className="font-normal">{dataValue.languages.map((item)=>item.name).join(", ")}</span></h3>
            </div>
          </div>
          <div className="flex gap-[1rem]">
            <h3 className="text-[--Very-Dark-Blue] dark:text-[--White] text-[15px] font-bold">Border Countries:</h3>
            <div className="flex gap-[0.5rem] align-center flex-wrap">
              {dataValue.borders?.map((item) => {
                return <span className="bg-[--Dark-Blue] px-[1rem] shadow-lg cursor-pointer">{item}</span>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

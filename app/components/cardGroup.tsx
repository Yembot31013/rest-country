import Card from "./card";
import data from "../data/data";
import Link from "next/link";

export default function CardGroup({ query, filter }: { query: string, filter: string }) {
  const dataValue = data.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase()) && item.region.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <>
      {dataValue.map((data, key) => {
        return (<Link href={`${data.name}`} key={key}>
          <Card
            name={data.name}
            capital={data.capital}
            demonym={data.demonym}
            population={data.population}
            region={data.region}
            image={data.flag && data.flags.png && data.flags.svg}
          />
        </Link>)
      })}
    </>
  )
}
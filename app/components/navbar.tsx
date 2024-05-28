import Image from "next/image"

export default function NavBar() {
  return (
    <nav className="flex justify-between max-[988px]:px-[2rem] px-[5rem] bg-[--White] dark:bg-[--Dark-Blue] text-[--Very-Dark-Blue] dark:text-[--White] min-h-[10vh] items-center shadow-2xl max-[350px]:px-[1rem] max-[300px]:px-[0.5rem]">
      <h1 className="font-bold text-2xl max-[618px]:text-lg max-[395px]:text-base max-[300px]:text-sm">Where in the World?</h1>
      <div id="icon" className="flex gap-[0.5rem] justify-center align-center max-[350px]:gap-[0.1rem]">
        <div id="image">
          <Image
            src="/moon.svg"
            alt="moon Logo"
            className="dark:invert max-[350px]:w-[15px] max-[350px]:h-[15px]"
            width={23}
            height={23}
            priority
          />
        </div>
        <span className="text-sm">Dark Mode</span>
      </div>
    </nav>
  )
}
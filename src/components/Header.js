
export function Header({heading,subheading}) {
  return (
    <div>
         <h1 className="mt-8 sm:ml-[500px] ml-[150px] text-3xl font-bold">{heading}</h1>
        <p className="sm:ml-[465px] ml-[110px] text-sm font-normal">{subheading}</p>
    </div>
  )
}

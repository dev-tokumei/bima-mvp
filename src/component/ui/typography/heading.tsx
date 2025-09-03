export const Heading = ({ title }: { title: string }) => {
  return (
    <div className="w-full py-10">
      <h1 className="text-[#242729] text-xl md:text-[2.1rem] leading-11 font-bold">
        {title}
      </h1>
    </div>
  )
}

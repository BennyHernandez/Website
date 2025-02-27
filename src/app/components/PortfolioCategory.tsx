export default function PortfolioCategory({children, title}:{children:React.ReactNode, title:string}) {
  return (
    <div className="flex flex-col bg-black bg-opacity-20 p-8 rounded-3xl my-10">
      <h2 className="font-title text-4xl uppercase">{title}</h2>
      {children}
    </div>
  );
}

export default function PortfolioCategory({children, title}:{children:React.ReactNode, title:string}) {
  return (
    <div className="flex flex-col bg-black/20 px-4 py-8 md:px-8 md:rounded-2xl">
      <h2 className="font-title text-4xl uppercase">{title}</h2>
      {children}
    </div>
  );
}

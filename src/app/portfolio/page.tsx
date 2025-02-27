import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioCategory from "../components/PortfolioCategory";
import PortfolioItem from "../components/PortfolioItem";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col m-10 content-center">
          <h1 className="text-center font-title text-6xl uppercase">
            Theatre Portfolio
          </h1>
          <PortfolioCategory title={"Design"}>
            <PortfolioItem
              title={
                "Guys and dolls @ Sierra college - Associate Light Designer"
              }
              subtitle={
                "Directed by Scott Adams, Lighting Design by Michelle Zimmer"
              }
              text={
                "Created lighting looks, created Lightwright paperwork, managed spot operators, created spot sheet, hung & focused lights"
              }
            >
              <Image
                alt={"Portfolio image"}
                src={"/GuysDolls.jpg"}
                fill
              />
              <Image
                alt={"Portfolio image"}
                src={"/HotBox.png"}
                fill
              />
            </PortfolioItem>
          </PortfolioCategory>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioCategory from "../components/PortfolioCategory";
import PortfolioItem from "../components/PortfolioItem";

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen overflow-clip">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col md:mx-10 my-10 content-center gap-10">
          <h1 className="text-center font-title text-6xl uppercase">
            Theatre Portfolio
          </h1>
          <div className="flex flex-col gap-2 md:gap-10">
            <PortfolioCategory title={"Design"}>
              <PortfolioItem
                title={
                  "Guys and dolls @ Sierra college - Associate Lighting Designer"
                }
                subtitle={
                  "(2024) Directed by Scott Adams, Lighting Design by Michelle Zimmer"
                }
                text={
                  "Created lighting looks, pallettes, presets, magic sheets, and Lightwright paperwork. Installed practicals on set pieces using external dimmer pack and wireless DMX. Managed spot operators, created spot sheet, and hung & focused lights"
                }
              >
                <Image
                  alt={"Sewer lighting look"}
                  src={"/GuysDolls.jpg"}
                  fill
                />
                <Image
                  alt={
                    "Sewer lighting look with spots (From @sierracollegetheatrearts on IG)"
                  }
                  src={"/GuysDolls2.jpg"}
                  fill
                />
                <Image
                  alt={"Custom Hot Box practical"}
                  src={"/HotBox.jpg"}
                  fill
                />
                <Image
                  alt={"Hot Box practical wiring"}
                  src={"/HotBox2.jpg"}
                  fill
                />
                <Image
                  alt={"Hot Box practical dimmer pack and wireless DMX"}
                  src={"/HotBox3.jpg"}
                  fill
                />
                <Image
                  alt={'Side of stage column light BlackWrap "barn door"'}
                  src={"/Pillar.jpg"}
                  fill
                />
              </PortfolioItem>
              <PortfolioItem
                title={"The Pops Chorale @ Sierra College - Lighting Designer"}
                subtitle={
                  "Holiday Show '24, Big Band '24, American Pops '24, Big Band '23"
                }
                text={
                  "Created lighting looks based on music, used busking techniques, created EOS effects, and managed spot operators"
                }
              >
                <Image alt={"Pops Logo"} src={"/Pops.png"} fill />
                <Image
                  alt={"Programming Big Band 2023"}
                  src={"/ConcertEOS.png"}
                  fill
                />
              </PortfolioItem>
              <PortfolioItem
                title={
                  "Mean Girls @ Rocklin Community Theater - Lighting Designer"
                }
                subtitle={
                  "(2024) Directed by Cassie March, Co-Lighting Designer Robbie Wanamaker"
                }
                text={
                  "Created lighting looks, cues, palletes, and presets. Focused & hung lights, and utilized EOS OSC integration to operate projections."
                }
              >
                <Image
                  alt={"Mean Girls @ RTC Logo"}
                  src={"/MeanGirls.jpg"}
                  fill
                />
              </PortfolioItem>
              <PortfolioItem
                title={
                  "Miss Sacramento County - Lighting Designer"
                }
                subtitle={
                  "(2023, 2024)"
                }
                text={
                  "Created lighting looks & effects synced with music, utilized venue equipment to program and run show"
                }
              >
                <Image
                  alt={"Miss Sac County"}
                  src={"/MissSac.jpg"}
                  fill
                />
              </PortfolioItem>
            </PortfolioCategory>
            <PortfolioCategory title="Assistant To Desginer">
              <PortfolioItem
                title={
                  "Romeo & Juliet @ The Sacramento Ballet - Assistant Lighting Designer"
                }
                subtitle={
                  "(2025) Assistant to Lighting Designer Benjamin Gantose"
                }
                text={
                  "Created spot sheets & other paper work, instructed spots, aided local crew in focusing, facilitated communications with other departments, and took notes for designer, stage manager, and choreographer."
                }
              >
                <Image
                  alt={"R&J @ Sac Ballet Logo"}
                  src={"/R&J.jpg"}
                  fill
                  className="object-top"
                />
                <Image
                  alt={"Behind the scenes at the SAFE Credit Union PAC"}
                  src={"/R&J2.jpg"}
                  fill
                />
              </PortfolioItem>
              <PortfolioItem
                title={
                  "Romeo & Juliet @ Sierra College - Assistant Lighting Designer"
                }
                subtitle={
                  "(2025) Assistant to Lighting Designer Benjamin Gantose"
                }
                text={
                  "Instructed Stage Lighting class on hang & focus for this production, completed patching & addressing work, created palettes, presets & magic sheets, wired and installed torch practicals"
                }
              >
                <Image
                  alt={"Romeo and Juliet @ Sierra Logo"}
                  src={"/R&JSierra.jpg"}
                  fill
                  className="object-bottom"
                />
                <Image alt={"Torch practical"} src={"/R&JSierra2.jpg"} fill />
              </PortfolioItem>
            </PortfolioCategory>
                        <PortfolioCategory title="Other">
              <PortfolioItem
                title={
                  "The Pops Chorale @ Sierra College - Spot Operator"
                }
                subtitle={
                  "(2024)"
                }
                text={
                  "Created personal spot sheet, listen to calls from lighting operator & stage manager, lit dancers & musicians"
                }
              >
                <Image
                  alt={"Operating spotlight from cove"}
                  src={"/SpotOp.jpg"}
                  fill
                />
              </PortfolioItem>
            </PortfolioCategory>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

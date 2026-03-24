import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

export default function PostPreview({ entry, widgetFor }) {

    var thumbnail = entry.getIn(['data', 'thumbnail']);
    var title = entry.getIn(['data', 'title']);
    var date = entry.getIn(['data', 'date']);

    return html`
        <div className="flex flex-col min-h-screen overflow-clip">
            <Header />
            <main className="flex-1">
                <div className="flex flex-col m-10 mx-[10vw] items-left gap-5">
                    <h1 className="text-left w-full font-title text-6xl uppercase">Benny Hernandez's Blog</h1>
                    <div className="relative flex flex-col w-full h-full p-10 gap-5 bg-white/2 rounded-lg">
                        <div className="relative aspect-video h-96 w-fit rounded-md overflow-hidden">
                            <img src="${thumbnail}" alt="${title}" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-3 w-full px-5">
                            <h1 className="text-left w-full font-title text-6xl uppercase">${title}</h1>
                            <h2 className="text-left w-full font-title text-2xl uppercase">${new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</h2>
                        </div>
                        <div className="flex flex-col gap-3 w-full px-5 border-t-4 border-black/20 pt-8 mt-2">
                            <div id="body" className="flex flex-col gap-5 w-full">
                                ${widgetFor("body")}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
        `
}
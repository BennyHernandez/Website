import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen overflow-clip">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col my-10 items-center gap-20">
          <h1 className="text-center font-title text-6xl uppercase">Resume</h1>
          <object data="/files/BHernandezResume.pdf" className="w-11/12 h-[55vh] md:w-2/3 md:h-[85vh] bg-white">
            <p>
              Sorry, your browser doesn&apos;t support PDFs. Please download the PDF
              to view it: <a href="/files/BHernandezResume.pdf">Download</a>
            </p>
          </object>
          <a href="/files/BHernandezResume.pdf" className="text-3xl font-bold bg-black rounded-full px-8 py-4">Download</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

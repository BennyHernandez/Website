import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col m-10 items-center gap-20">
          <h1 className="text-center font-title text-6xl uppercase">Resume</h1>
          <object data="/Resume.pdf" className="w-2/3 h-[85vh]">
            <p>
              Sorry, your browser doesn't support PDFs. Please download the PDF
              to view it: <a href="/Resume.pdf">Download</a>
            </p>
          </object>
          <a href="/Resume.pdf" className="text-3xl font-bold bg-black rounded-full px-8 py-4">Download</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

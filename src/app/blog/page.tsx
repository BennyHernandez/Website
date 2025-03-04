import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogHome() {
  return (
    <div className="flex flex-col min-h-screen overflow-clip">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col m-10 items-center gap-20">
          <h1 className="text-center font-title text-6xl uppercase">Blog</h1>
          <p className="text-2xl">No posts yet :(</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

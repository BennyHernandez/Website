import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { LucideExternalLink } from "lucide-react";
import Link from "next/link";
import { PostThumbnail } from "@/types/blog";
import { getFeaturedPostsThumbnail, getPostsThumbnails } from "./util";

export default function BlogHome() {
  const posts: PostThumbnail[] = getPostsThumbnails();
  const featuredPosts: PostThumbnail[] = getFeaturedPostsThumbnail();

  return (
    <div className="flex flex-col min-h-screen overflow-clip">
      <Header />
      <main className="flex-1">
        <div className="flex flex-col m-10 items-center gap-5">
          <h1 className="text-left w-full font-title text-6xl uppercase">Benny Hernandez's Blog</h1>

          <div className="flex flex-row w-full gap-5">
            
            {featuredPosts.map((post) => (
              <Link href={post.href} key={"featured-" + post.href} className="relative aspect-video md:w-1/2 w-full rounded-md overflow-hidden cursor-pointer">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="object-cover"
                  fill
                />
                <LucideExternalLink size={30} className="absolute top-2 right-2 text-white opacity-50" />
                <div className="absolute flex flex-col gap-3 w-full bottom-0 bg-gradient-to-t from-black/80 to-black/0 px-3 py-2">
                  <p className="font-title md:text-3xl text-xl text-white">{post.title}</p>
                  <p className="font-title md:text-xl text-lg text-white">{post.date}</p>
                </div>
              </Link>
            ))}

          </div>

          <div className="w-full flex flex-col gap-5 mt-10">
            <h2 className="font-title text-4xl text-left">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

              {posts.map((post) => (
                <Link href={post.href} key={post.href} className="relative aspect-video w-full rounded-md overflow-hidden cursor-pointer">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="object-cover"
                  fill
                />
                <LucideExternalLink size={30} className="absolute top-2 right-2 text-white opacity-50" />
                <div className="absolute flex flex-col gap-1 w-full bottom-0 bg-gradient-to-t from-black/80 to-black/0 px-3 py-2">
                  <p className="font-title md:text-2xl text-xl text-white">{post.title}</p>
                  <p className="font-title md:text-xl text-lg text-white">{post.date}</p>
                </div>
              </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

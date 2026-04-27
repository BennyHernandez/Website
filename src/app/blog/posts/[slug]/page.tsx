import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { getPostData, getPostSlugs } from "../../util";
import BlogImage from "@/app/components/BlogImage";
import BlogPostThumbnail from "@/app/components/BlogPostThumbnail";

const resolveSrc = (s: string) => {
if (!s) return s;
return s.startsWith('/') || s.startsWith('http') ? s : `/${s}`;
};

export function generateStaticParams() {
    return getPostSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({params}: {params: Promise<{ slug: string }>}) {
    const { slug } = await params;

    const { title, date, thumbnail, body } = getPostData(slug);

    return (
        <div className="flex flex-col min-h-screen overflow-clip">
            <Header />
            <main className="flex-1">
                <div className="flex flex-col md:m-10 my-5 md:mx-[10vw] items-left gap-5">
                    <h1 className="text-center md:text-left w-full font-title md:text-6xl text-4xl uppercase">Cool Stuff!</h1>
                    <div className="relative flex flex-col w-full h-full p-1 pb-10 md:p-10 gap-5 bg-white/2 rounded-lg">
                        <BlogPostThumbnail src={thumbnail} alt={`Thumbnail for ${title}`} title={title} />
                        <div className="flex flex-col gap-3 w-full px-5">
                            <h1 className="text-left w-full font-title md:text-6xl text-3xl uppercase">{title}</h1>
                            <h2 className="text-left w-full font-title md:text-2xl text-lg uppercase">{date}</h2>
                        </div>
                        <div className="flex flex-col gap-3 w-full px-5 border-t-4 border-black/20 pt-8 mt-2">
                            <div className="flex flex-col gap-5 w-full">
                                <Markdown remarkPlugins={[remarkGfm]} components={{
                                        h1: ({...props}: any) => <h1 className="text-6xl font-title mt-5" {...props} />,
                                        h2: ({...props}: any) => <h2 className="text-5xl font-title mt-5" {...props} />,
                                        h3: ({...props}: any) => <h3 className="text-4xl font-title mt-5" {...props} />,
                                        h4: ({...props}: any) => <h4 className="text-3xl font-title mt-5" {...props} />,
                                        h5: ({...props}: any) => <h5 className="text-2xl font-title mt-5" {...props} />,
                                        h6: ({...props}: any) => <h6 className="text-xl font-title mt-5" {...props} />,
                                        p: ({...props}: any) => <p className="text-lg" {...props} />,
                                        a: ({href, ...props}: any) => {
                                            const resolvedHref = href?.startsWith('http') ? href : `https://${href}`;
                                            return <a href={resolvedHref} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline" {...props} />;
                                        },
                                        img: ({src, alt, title, ...props}: any) => <BlogImage src={resolveSrc(src)} alt={alt} title={title} {...props} />,
                                        ol: ({children, ...props}: any) => <ol className="list-decimal list-inside [&_ul]:pl-10" {...props}>{children}</ol>,
                                        ul: ({children, ...props}: any) => <ul className="list-disc list-inside [&_ul]:pl-10 [&_ul]:list-[circle]" {...props}>{children}</ul>,
                                        li: ({children, ...props}: any) => <li className="[&_p]:inline" {...props}>{children}</li>,
                                        blockquote: ({children, ...props}: any) => <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-300" {...props}>{children}</blockquote>,
                                        pre: ({children, ...props}: any) => <pre className="bg-black/20 [&_code]:bg-transparent  text-white p-4 rounded overflow-x-auto" {...props}>{children}</pre>,
                                        code: ({children, ...props}: any) => <code className="bg-black/20 text-white p-2 rounded" {...props}>{children}</code>,
                                    }}
                                    >
                                    {body}
                                </Markdown>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
import path from "path";
import fs from "fs";
import { PostData, PostThumbnail } from "@/types/blog";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

const resolveSrc = (s: string) => {
if (!s) return s;
return s.startsWith('/') || s.startsWith('http') ? s : `/${s}`;
};

export function getPostSlugs(): string[] {
    return fs
        .readdirSync(postsDirectory)
        .filter((fileName) => /\.md?$/.test(fileName))
        .map((fileName) => fileName.replace(/\.md?$/, ""));
}

export function getPostsThumbnails(): PostThumbnail[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData: PostThumbnail[] = [];
    for (const fileName of fileNames) {
        const fileContent = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
        const { data } = matter(fileContent);

        if (data.hidden) continue; // Skip hidden posts

        allPostsData.push({
            title: data.title,
            date: data.date instanceof Date ? data.date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric"}) : data.date,
            image: resolveSrc(data.thumbnail),
            href: `/blog/posts/${fileName.replace(/\.md?$/, "")}`,
        } as PostThumbnail);
    };

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedPostsThumbnail(): PostThumbnail[] {
    const featured = matter(fs.readFileSync(path.join(process.cwd(), "content/featured.md"), "utf8"));

    const featuredPosts: PostThumbnail[] = [];

    for (const post of featured.data.post) {
        try {
            const fileContent = fs.readFileSync(path.join(postsDirectory, `${post}.md`), "utf8");

            const { data } = matter(fileContent);

            if (data.hidden) continue; // Skip hidden posts

            featuredPosts.push({
                title: data.title,
                date: data.date instanceof Date ? data.date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric"}) : data.date,
                image: resolveSrc(data.thumbnail),
                href: `/blog/posts/${post}`,
            } as PostThumbnail);

        } catch (error) {
            console.error(`Error reading file for post ${post}:`, error);
            continue; // Skip this post and continue with the next one
        }
    }

    return featuredPosts;
}

export function getPostData(slug: string): PostData {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContent);
    
    return {
        title: data.title,
        date: data.date instanceof Date ? data.date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric"}) : data.date,
        thumbnail: resolveSrc(data.thumbnail),
        body: content,
    } as PostData;
}
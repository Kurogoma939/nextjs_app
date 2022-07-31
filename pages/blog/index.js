import Hero from "@components/hero";
import Link from "next/link";

export default function Blog() {
    return (
        <>
            <Link href="/about"><a><h1>Blog</h1></a></Link>
            <Hero
                title="Blog"
                subtitle="ブロブページ"
            />
        </>
    );
}
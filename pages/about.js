import Hero from "@components/hero";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Link href="/blog"><a><h1>About</h1></a></Link>
            <Hero
                title="About"
                subtitle="このサイトについて"
                imageOn={true}
            />
        </>

    );
}
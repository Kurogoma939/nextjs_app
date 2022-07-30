import Hero from "@components/hero";

export default function About() {
    return (
        <>
            <a href="/blog"><h1>About</h1></a>
            <Hero
                title="About"
                subtitle="このサイトについて"
            />
        </>

    );
}
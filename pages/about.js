import Hero from "@components/hero";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Hero
                title="About"
                subtitle="このサイトについて"
                imageOn={true}
            />
        </>

    );
}
function EachPost({ title, url }) {
    return (
        <article>
            <a href={url}>
                <h3>{title}</h3>
            </a>
        </article>
    )
}

export default function Post() {
    return (
        <section>
            <h2>おすすめ記事</h2>
            <EachPost title="スケジュール管理と猫の理論" url="/blog/schedule" />
            <EachPost title="音楽が呼び起こす美しいものの記憶" url="/blog/music" />
        </section>
    )
}
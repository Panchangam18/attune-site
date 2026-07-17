import { AttuneWord } from "./AttuneWord";

const downloadUrl =
  "https://github.com/Panchangam18/attune-app/releases/download/v0.1.0/Attune-0.1.0-mac-universal.dmg";

export default function Home() {
  return (
    <main className="site-shell">
      <section className="download-card" aria-labelledby="hero-title">
        <h1 id="hero-title">
          Tis a good day to <AttuneWord />
        </h1>
        <a className="download-button" href={downloadUrl}>
          <span className="apple-logo" aria-hidden="true" />
          Download for Mac
        </a>
      </section>
    </main>
  );
}

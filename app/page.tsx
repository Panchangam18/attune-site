const downloadUrl =
  "https://github.com/Panchangam18/attune-app/releases/tag/v0.1.0";

export default function Home() {
  return (
    <main className="site-shell">
      <section className="download-card" aria-labelledby="hero-title">
        <h1 id="hero-title">
          Tis a good day to <span className="attune-word">Attune</span>
        </h1>
        <a className="download-button" href={downloadUrl}>
          Download
        </a>
      </section>
    </main>
  );
}

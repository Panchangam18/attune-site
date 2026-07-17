import Image from "next/image";
import Link from "next/link";

const githubUrl = "https://github.com/Panchangam18/attune-app";
const downloadUrl = `${githubUrl}/releases`;

const highlights = [
  "Desktop control panel for the Attune live CSS runtime",
  "Launch, stop, and manage themed app sessions",
  "Built for fast local styling experiments",
];

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Primary">
          <Link className="brand" href="/">
            <Image src="/attune-logo.svg" alt="" width={36} height={36} />
            <span>Attune</span>
          </Link>
          <a className="nav-link" href={githubUrl}>
            GitHub
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Live CSS for desktop apps</p>
            <h1 id="hero-title">Download Attune.</h1>
            <p className="lede">
              A compact desktop app for discovering local applications,
              applying Attune theme adapters, and controlling live styling
              sessions from one place.
            </p>

            <div className="actions" aria-label="Download and source links">
              <a className="button button-primary" href={downloadUrl}>
                Download app
              </a>
              <a className="button button-secondary" href={githubUrl}>
                View source
              </a>
            </div>
          </div>

          <div className="product-visual" aria-hidden="true">
            <div className="app-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="window-body">
                <div className="logo-tile">
                  <Image src="/attune-logo.svg" alt="" width={96} height={96} />
                </div>
                <div className="session-panel">
                  <div className="session-row active">
                    <span>Arrakis</span>
                    <strong>Live</strong>
                  </div>
                  <div className="session-row">
                    <span>Terminal</span>
                    <strong>Ready</strong>
                  </div>
                  <div className="slider-line" />
                  <div className="color-strip">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="details" aria-labelledby="details-title">
        <h2 id="details-title">What you get</h2>
        <div className="highlight-list">
          {highlights.map((highlight) => (
            <p key={highlight}>{highlight}</p>
          ))}
        </div>
      </section>
    </main>
  );
}

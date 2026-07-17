function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue} 74% 66%)`;
}

function applyNextWave(element) {
  element.style.setProperty("--wave-a", randomColor());
  element.style.setProperty("--wave-b", randomColor());
  element.style.setProperty("--wave-c", randomColor());
  element.style.setProperty("--wave-d", randomColor());
}

const attuneWord = document.querySelector(".attune-word");

if (attuneWord) {
  applyNextWave(attuneWord);
  window.setInterval(() => applyNextWave(attuneWord), 900);
}

async function updateDownloadLink() {
  const downloadButton = document.querySelector("[data-download-button]");

  if (!downloadButton) {
    return;
  }

  try {
    const response = await fetch(
      "https://api.github.com/repos/Panchangam18/attune-app/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      },
    );

    if (!response.ok) {
      return;
    }

    const release = await response.json();
    const macAsset = release.assets?.find((asset) =>
      /mac-universal\.dmg$/i.test(asset.name),
    );

    if (macAsset?.browser_download_url) {
      downloadButton.href = macAsset.browser_download_url;
    }
  } catch {
    // Keep the static fallback link if GitHub's API is unavailable.
  }
}

updateDownloadLink();

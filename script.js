(function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxDownload = document.getElementById("lightbox-download");
  const backdrop = document.getElementById("lightbox-backdrop");
  const closeBtn = document.getElementById("lightbox-close");
  const tiles = document.querySelectorAll(".ref-tile");

  let lastFocused = null;

  function openLightbox(tile) {
    const full = tile.dataset.full;
    const caption = tile.dataset.caption || "";
    const downloadName = tile.dataset.download || "";

    lightboxImg.src = full;
    lightboxImg.alt = caption;
    lightboxCaption.textContent = caption;
    lightboxDownload.href = full;
    lightboxDownload.setAttribute("download", downloadName);

    lastFocused = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  tiles.forEach((tile) => {
    tile.addEventListener("click", () => openLightbox(tile));
  });

  backdrop.addEventListener("click", closeLightbox);
  closeBtn.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
})();

// Inicjalizacja po załadowaniu DOM
document.addEventListener("DOMContentLoaded", () => {
  setupCopyButtons();
  setCurrentYear();
});

/**
 * Ustawia automatycznie aktualny rok w stopce.
 */
function setCurrentYear() {
  const yearEl = document.getElementById("year");
  if (!yearEl) return;
  const now = new Date();
  yearEl.textContent = String(now.getFullYear());
}

/**
 * Podpina logikę kopiowania do przycisków z atrybutem data-copy-target.
 */
function setupCopyButtons() {
  const buttons = document.querySelectorAll("[data-copy-target]");

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const selector = button.getAttribute("data-copy-target");
      if (!selector) return;

      const codeElement = document.querySelector(selector);
      if (!codeElement) return;

      const text = codeElement.innerText || codeElement.textContent || "";

      try {
        // Preferowana metoda kopiowania (nowoczesne przeglądarki)
        await navigator.clipboard.writeText(text.trimEnd());
        showCopyFeedback(button, "Skopiowano!");
      } catch (err) {
        // Fallback dla starszych przeglądarek
        fallbackCopyText(text);
        showCopyFeedback(button, "Skopiowano (fallback)!");
      }
    });
  });
}

/**
 * Fallback – kopiowanie za pomocą tymczasowego textarea.
 */
function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text.trimEnd();
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }
}

/**
 * Wyświetla krótką informację o sukcesie kopiowania
 * w linii feedback powiązanej z danym przyciskiem.
 */
function showCopyFeedback(button, message) {
  const codeBlock = button.closest(".code-block");
  if (!codeBlock) return;

  const feedback = codeBlock.querySelector(".code-block__feedback");
  if (!feedback) return;

  feedback.textContent = message;

  // Krótkie znikanie komunikatu
  feedback.style.opacity = "1";
  setTimeout(() => {
    feedback.style.opacity = "0.2";
    feedback.textContent = "";
  }, 1700);
}

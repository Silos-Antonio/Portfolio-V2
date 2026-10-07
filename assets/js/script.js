(() => {
  const translations = window.PORTFOLIO_TRANSLATIONS;

  if (!translations) {
    return;
  }

  const supportedLanguages = ["pt", "fr", "en"];
  const languageAttribute = {
    pt: "pt-BR",
    fr: "fr",
    en: "en",
  };

  // Language selection
  function getInitialLanguage() {
    const requestedLanguage = new URLSearchParams(location.search).get("lang");

    if (supportedLanguages.includes(requestedLanguage)) {
      return requestedLanguage;
    }

    let savedLanguage = "";

    try {
      savedLanguage = localStorage.getItem("portfolio-language") || "";
    } catch (_) {
      // Storage can be unavailable in restricted browsing contexts.
    }

    if (supportedLanguages.includes(savedLanguage)) {
      return savedLanguage;
    }

    const browserLanguage = (navigator.language || "").slice(0, 2).toLowerCase();
    return supportedLanguages.includes(browserLanguage) ? browserLanguage : "pt";
  }

  function saveLanguage(language) {
    try {
      localStorage.setItem("portfolio-language", language);
    } catch (_) {
      // The selected language still applies for the current page view.
    }
  }

  function translateText(languageCopy) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const translatedValue = languageCopy[element.dataset.i18n];

      if (translatedValue) {
        element.innerHTML = translatedValue;
      }
    });
  }

  function translateMetadata(languageCopy) {
    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const translatedValue = languageCopy[element.dataset.i18nContent];

      if (translatedValue) {
        element.content = translatedValue;
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const translatedValue = languageCopy[element.dataset.i18nAlt];

      if (translatedValue) {
        element.alt = translatedValue;
      }
    });

    const titleKey = document.querySelector('[data-page="case"]')
      ? "caseTitle"
      : "title";
    const pageTitle = languageCopy[titleKey];
    const socialTitle = document.querySelector('meta[property="og:title"]');

    if (pageTitle) {
      document.title = pageTitle;

      if (socialTitle) {
        socialTitle.content = pageTitle;
      }
    }
  }

  function updateLanguageControls(language) {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.language === language),
      );
    });
  }

  function preserveLanguageInLinks(language) {
    document.querySelectorAll("[data-case-link], [data-home-link]").forEach((link) => {
      const destination = new URL(link.href, location.href);
      destination.searchParams.set("lang", language);
      link.href = destination.href;
    });
  }

  function setLanguage(language) {
    if (!supportedLanguages.includes(language)) {
      return;
    }

    const languageCopy = translations[language];

    if (!languageCopy) {
      return;
    }

    saveLanguage(language);
    document.documentElement.lang = languageAttribute[language];
    translateText(languageCopy);
    translateMetadata(languageCopy);
    updateLanguageControls(language);
    preserveLanguageInLinks(language);
  }

  function initializeLanguageSwitcher(language) {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.language);
      });
    });

    setLanguage(language);
  }

  // Mobile navigation
  function closeNavigation(toggle, navigation) {
    navigation.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function initializeNavigation() {
    const toggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector("#site-nav");

    if (!toggle || !navigation) {
      return;
    }

    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") !== "true";

      toggle.setAttribute("aria-expanded", String(isExpanded));
      navigation.classList.toggle("is-open", isExpanded);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        closeNavigation(toggle, navigation);
      }
    });
  }

  // Scroll reveal
  function getRevealTargets() {
    return document.querySelectorAll(
      ".section-heading, .featured-project, .secondary-project, " +
        ".experience-entry, .stack-grid, .education-list",
    );
  }

  function revealIntersectingElements(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }

  function initializeScrollReveal() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(revealIntersectingElements, {
      threshold: 0.12,
    });

    getRevealTargets().forEach((element) => observer.observe(element));
  }

  // Page setup
  function initializePortfolio() {
    const initialLanguage = getInitialLanguage();

    initializeLanguageSwitcher(initialLanguage);
    initializeNavigation();
    initializeScrollReveal();
  }

  initializePortfolio();
})();

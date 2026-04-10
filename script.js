(() => {
  const STORAGE_KEY = "notion-bookshelf-widget-v1";

  const DEFAULT_GOAL = 21;
  const DECOR_COUNT = 170;
  const BASE_WIDTH = 1400;
  const BASE_HEIGHT = 900;

  const FONT_OPTIONS = {
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    display: 'var(--font-display)'
  };

const THEMES = {
  boundInCrimson: {
    label: "Bound in Crimson",
    previewBg: "#E6D6D7",
    shelf: "#6B4F37",
    progress: "#7A2B2F",
    books: ["#2A1516", "#551F22", "#8A3A3E", "#301415", "#6A2326", "#7A2B2F", "#3F1C1D"],
    placeholderGrey: "#555555"
  },

  pastelPlotlines: {
    label: "Pastel Plotlines",
    previewBg: "#F7EAF0",
    shelf: "#6B4F37",
    progress: "#D4C2FF",
    books: ["#FFD6E7", "#F9C6A8", "#FFE9A8", "#BDF0D4", "#BDD5FF", "#D4C2FF", "#F3C3FF", "#FFC4D6", "#DDF3B5", "#B6EEF6"],
    placeholderGrey: "#555555"
  },

  enchantedPages: {
    label: "Enchanted Pages",
    previewBg: "#DCE7DD",
    shelf: "#6B4F37",
    progress: "#74AAB3",
    books: ["#B8CFC1", "#9C7F99", "#639AA8", "#A8C46B", "#C7B0C7", "#3A5A2A", "#74AAB3", "#CDE6A1", "#A6C9C6", "#B89DB5", "#7EA34D", "#8DBBBE"],
    placeholderGrey: "#555555"
  },

  cherryBlossomBloom: {
    label: "Cherry Blossom Bloom",
    previewBg: "#F7E4E8",
    shelf: "#6B4F37",
    progress: "#C9184A",
    books: ["#590D22", "#FF8FA3", "#A4133C", "#FFCCD5", "#800F2F", "#FF4D6D", "#C9184A", "#FFF0F3", "#FF758F", "#FFB3C1"],
    placeholderGrey: "#555555"
  },

  storiesAfterMidnight: {
    label: "Stories After Midnight",
    previewBg: "#EFE7F1",
    shelf: "#6B4F37",
    progress: "#144552",
    books: ["#006466", "#3E1F47", "#1B3A4B", "#4D194D", "#065A60", "#212F45", "#0B525B", "#272640", "#144552", "#312244"],
    placeholderGrey: "#555555"
  },

  petalsBetweenPages: {
    label: "Petals Between Pages",
    previewBg: "#F1ECE6",
    shelf: "#6B4F37",
    progress: "#FEC89A",
    books: ["#FEC5BB", "#E8E8E4", "#FEC89A", "#F8EDEB", "#FFD7BA", "#D8E2DC", "#FAE1DD", "#FFE5D9", "#FCD5CE", "#ECE4DB"],
    placeholderGrey: "#555555"
  },

  inkAndVelvet: {
    label: "Ink & Velvet",
    previewBg: "#ECE6EF",
    shelf: "#6B4F37",
    progress: "#7E365F",
    books: ["#060407", "#7E365F", "#9882B9", "#140B14", "#65213F", "#775E88", "#221932", "#541533", "#8E78A6", "#2E1F3D", "#722548", "#3F284B"],
    placeholderGrey: "#555555"
  },

  celestialRoots: {
    label: "Celestial Roots",
    previewBg: "#E8E0F1",
    shelf: "#6B4F37",
    progress: "#5A4BA5",
    books: ["#142A5C", "#91D2F4", "#5A4BA5", "#1E3F7A", "#CBA2EA", "#2868C6", "#8C6AC7", "#5FADE0", "#1D1F5A"],
    placeholderGrey: "#555555"
  },

  pagesAfterDusk: {
    label: "Pages After Dusk",
    previewBg: "#E6EDF0",
    shelf: "#6B4F37",
    progress: "#4F7C93",
    books: ["#28151C", "#94CFDB", "#3E5565", "#392B3B", "#7395AB", "#2C303A", "#375B6D", "#B8E5F0", "#5C7A8A", "#2F3F50", "#4F7C93"],
    placeholderGrey: "#555555"
  },

  octoberChapters: {
    label: "October Chapters",
    previewBg: "#F0D8C8",
    shelf: "#6B4F37",
    progress: "#A35A2A",
    books: ["#3D1200", "#E1692A", "#8C0C05", "#663017", "#A35A2A", "#581606", "#8A4321", "#C94815"],
    placeholderGrey: "#555555"
  },

  theLuminousGrove: {
    label: "The Luminous Grove",
    previewBg: "#E7F0EC",
    shelf: "#6B4F37",
    progress: "#6FBFC7",
    books: ["#0B0F1A", "#8EDAD1", "#8E549A", "#1A2238", "#537B72", "#A885C9", "#2C3E63", "#6FBFC7", "#B8E7E6", "#3E5F8A", "#C3A9D8"],
    placeholderGrey: "#555555"
  },

  inTheClouds: {
    label: "In The Clouds",
    previewBg: "#EEEAF6",
    shelf: "#6B4F37",
    progress: "#C3A9D8",
    books: ["#7FA1D1", "#C3A9D8", "#9FBCE3", "#FDEFF6", "#B8B8E6", "#D6CBEF", "#C7DDF2", "#E6DFF5", "#F2EAFB"],
    placeholderGrey: "#555555"
  },

  daughterOfTheForest: {
    label: "Daughter of the Forest",
    previewBg: "#E9E2D4",
    shelf: "#6B4F37",
    progress: "#4F6B4A",
    books: ["#1C1F1A", "#8C6A3B", "#4F6B4A", "#2E3528", "#D6B98A", "#697B65", "#3E563C", "#B58952"],
    placeholderGrey: "#555555"
  },

  byTheFire: {
    label: "By The Fire",
    previewBg: "#E7D7CE",
    shelf: "#6B4F37",
    progress: "#8A3F28",
    books: ["#0F1110", "#A65A3C", "#332D24", "#1A1C1A", "#C4876B", "#6A321E", "#2B1F1A", "#8A3F28", "#3B1C13"],
    placeholderGrey: "#555555"
  },

  softcoverClassics: {
    label: "Softcover Classics",
    previewBg: "#ECE4D8",
    shelf: "#6B4F37",
    progress: "#7E6856",
    books: ["#100603", "#D6C5B4", "#594B42", "#1B0F07", "#A08976", "#7E6856", "#29180E", "#5C4B3C", "#332D24", "#3B3535"],
    placeholderGrey: "#555555"
  },

  whereTheForestSleeps: {
    label: "Where the Forest Sleeps",
    previewBg: "#ECE7E2",
    shelf: "#6B4F37",
    progress: "#8A7A76",
    books: ["#1F1F1F", "#A3938E", "#4A5A5E", "#2E3A3F", "#C2B8B2", "#6B6F6A", "#3C4A4E", "#8A7A76", "#E5DDD6", "#5E6253", "#7A6E6A"],
    placeholderGrey: "#555555"
  },

  theDarkeningWoods: {
    label: "The Darkening Woods",
    previewBg: "#E4E7DE",
    shelf: "#6B4F37",
    progress: "#4B6651",
    books: ["#0F1411", "#7C6A50", "#4B6651", "#17201A", "#9A8B72", "#5A5B46", "#1F2A22", "#415946", "#2E4032", "#6B5A42", "#374C3B", "#26352A", "#213428", "#283E2F", "#2F4735"],
    placeholderGrey: "#555555"
  },

  ivoryEditions: {
    label: "Ivory Editions",
    previewBg: "#F3EEE7",
    shelf: "#6B4F37",
    progress: "#BCA187",
    books: ["#E5D7C3", "#8F7762", "#C7B095", "#DCCBB2", "#75614F", "#D2BEA3", "#A88E74", "#BCA187", "#5C4B3C"],
    placeholderGrey: "#555555"
  },

  lateNightEspresso: {
    label: "Late Night Espresso",
    previewBg: "#EAD9CC",
    shelf: "#6B4F37",
    progress: "#8A654A",
    books: ["#23201E", "#C08E63", "#4A392F", "#2E2723", "#D7A87A", "#6F5440", "#3A2F29", "#A37756", "#8A654A", "#5C4637"],
    placeholderGrey: "#555555"
  },

  bloodMoon: {
    label: "Blood Moon",
    previewBg: "#E5C8CC",
    shelf: "#6B4F37",
    progress: "#7A3740",
    books: ["#050505", "#D97A7F", "#5E2C34", "#0E0E0E", "#B85B63", "#7A3740", "#171717", "#9A4750", "#1F1A1A", "#4A262C", "#2A1F1F", "#3A2326"],
    placeholderGrey: "#555555"
  },

  antiqueGarden: {
    label: "Antique Garden",
    previewBg: "#EEE7DF",
    shelf: "#6B4F37",
    progress: "#7E6A5E",
    books: ["#E8E1D6", "#2F3D33", "#B59790", "#C6B6A2", "#4F5F4F", "#9A7A78", "#A48F7D", "#3F4F41", "#C3A69C", "#7E6A5E", "#5A544C", "#A88985", "#7A605F"],
    placeholderGrey: "#555555"
  }
};



  const DEFAULT_STATE = {
    year: new Date().getFullYear(),
    settings: {
      goal: DEFAULT_GOAL,
      darkMode: true,
      showPlaceholders: true,
      fillPlaceholdersWithTheme: true,
      showPlaceholderNumbers: true,
      fontMode: "mixed",
      themeName: "softcoverClassics"
    },
    books: [],
    claimedDecor: [],
    pendingDecor: null
  };

  const el = {
    widgetShell: document.getElementById("widgetShell"),
    scaleWrap: document.getElementById("scaleWrap"),
    shelvesContainer: document.getElementById("shelvesContainer"),
    shelvesScroll: document.getElementById("shelvesScroll"),

    progressFill: document.getElementById("progressFill"),
    progressPercent: document.getElementById("progressPercent"),
    progressLabel: document.getElementById("progressLabel"),
    saveDecorBtn: document.getElementById("saveDecorBtn"),

    openAchievementsBtn: document.getElementById("openAchievementsBtn"),
    openAddBookBtn: document.getElementById("openAddBookBtn"),
    openSettingsBtn: document.getElementById("openSettingsBtn"),

    settingsBackdrop: document.getElementById("settingsBackdrop"),
    bookBackdrop: document.getElementById("bookBackdrop"),
    achievementsBackdrop: document.getElementById("achievementsBackdrop"),

    settingsMainPage: document.getElementById("settingsMainPage"),
    settingsThemesPage: document.getElementById("settingsThemesPage"),

    goalInput: document.getElementById("goalInput"),
    darkModeToggle: document.getElementById("darkModeToggle"),
    placeholdersToggle: document.getElementById("placeholdersToggle"),
    fillPlaceholdersToggle: document.getElementById("fillPlaceholdersToggle"),
    placeholderNumbersToggle: document.getElementById("placeholderNumbersToggle"),
    fontModeSelect: document.getElementById("fontModeSelect"),
    selectedThemeInline: document.getElementById("selectedThemeInline"),
    openThemesPageBtn: document.getElementById("openThemesPageBtn"),
    backToSettingsBtn: document.getElementById("backToSettingsBtn"),
    closeThemesPageBtn: document.getElementById("closeThemesPageBtn"),
    saveSettingsBtn: document.getElementById("saveSettingsBtn"),
    closeSettingsBtn: document.getElementById("closeSettingsBtn"),
    themeGrid: document.getElementById("themeGrid"),

    bookModalTitle: document.getElementById("bookModalTitle"),
    bookModalSubtitle: document.getElementById("bookModalSubtitle"),
    bookTitleInput: document.getElementById("bookTitleInput"),
    saveBookBtn: document.getElementById("saveBookBtn"),
    closeBookBtn: document.getElementById("closeBookBtn"),
    removeBookBtn: document.getElementById("removeBookBtn"),

    achievementsProgressFill: document.getElementById("achievementsProgressFill"),
    achievementsUnlockedText: document.getElementById("achievementsUnlockedText"),
    prizesAvailableText: document.getElementById("prizesAvailableText"),
    achievementNote: document.getElementById("achievementNote"),
    decorGrid: document.getElementById("decorGrid"),
    closeAchievementsBtn: document.getElementById("closeAchievementsBtn"),
    removeAllDecorBtn: document.getElementById("removeAllDecorBtn")
  };

  let state = loadState();
  let tempSettings = null;
  let currentEditingBookId = null;
  let resizeObserver = null;
  let settingsPreviewOriginalThemeName = null;

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
      const currentYear = new Date().getFullYear();

      if (!parsed) return clone(DEFAULT_STATE);

      const merged = {
        ...clone(DEFAULT_STATE),
        ...parsed,
        settings: {
          ...clone(DEFAULT_STATE).settings,
          ...(parsed.settings || {})
        },
        books: Array.isArray(parsed.books) ? parsed.books : [],
        claimedDecor: Array.isArray(parsed.claimedDecor) ? parsed.claimedDecor : [],
        pendingDecor: parsed.pendingDecor || null
      };

      if (merged.year !== currentYear) {
        return {
          ...clone(DEFAULT_STATE),
          year: currentYear,
          settings: {
            ...clone(DEFAULT_STATE).settings,
            darkMode: merged.settings.darkMode,
            fontMode: merged.settings.fontMode,
            themeName: merged.settings.themeName
          }
        };
      }

      return merged;
    } catch (error) {
      return clone(DEFAULT_STATE);
    }
  }

  function saveState() {
    state.year = new Date().getFullYear();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getTheme() {
    return THEMES[state.settings.themeName] || THEMES.antiqueGarden;
  }

  function applyDarkMode() {
    el.widgetShell.classList.toggle("dark-mode", !!state.settings.darkMode);
  }

  function fitStage() {
    const rect = el.widgetShell.getBoundingClientRect();
    const availableWidth = Math.max(rect.width, 1);
    const availableHeight = Math.max(rect.height, 1);
    const scale = Math.min(availableWidth / BASE_WIDTH, availableHeight / BASE_HEIGHT);
    el.scaleWrap.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  function getBooksPerShelf() {
    const containerWidth = el.widgetShell.getBoundingClientRect().width || window.innerWidth;

    if (containerWidth < 420) return 8;
    if (containerWidth < 520) return 9;
    if (containerWidth < 640) return 10;
    if (containerWidth < 800) return 14;
    if (containerWidth < 980) return 16;
    if (containerWidth < 1180) return 18;
    if (containerWidth < 1360) return 22;
    if (containerWidth < 1560) return 25;
    if (containerWidth < 1760) return 28;
    return 32;
  }

  function getReadCount() {
    return state.books.length;
  }

  function getGoal() {
    return Math.max(1, Number(state.settings.goal) || DEFAULT_GOAL);
  }

  function getProgressPercent() {
    const goal = getGoal();
    const read = getReadCount();
    return Math.round((read / goal) * 100);
  }

  function getProgressFillPercent() {
    return Math.min(getProgressPercent(), 100);
  }

  function getMilestonesReached(count) {
    const milestones = [];

    if (count >= 2) milestones.push(2);

    for (let i = 5; i <= count; i += 5) {
      milestones.push(i);
    }

    return milestones;
  }

  function getTotalPrizeCount(count) {
    return getMilestonesReached(count).reduce((total, milestone) => {
      return total + (milestone % 50 === 0 ? 2 : 1);
    }, 0);
  }

  function getUnclaimedPrizeCount() {
    const earned = getTotalPrizeCount(getReadCount());
    const claimed = state.claimedDecor.length;
    const pending = state.pendingDecor ? 1 : 0;
    return Math.max(0, earned - claimed - pending);
  }

  function getAchievementsUnlockedCount() {
    return getMilestonesReached(getReadCount()).length;
  }

  function getDecorAssets() {
    return Array.from({ length: DECOR_COUNT }, (_, i) => ({
      id: `decor-${i + 1}`,
      src: `decor/decor-${i + 1}.png`
    }));
  }

  function sanitizeTitle(title) {
    return String(title || "").trim().replace(/\s+/g, " ");
  }

  function chooseFontForBook(bookIndex, mode) {
    if (mode === "serif") return "serif";
    if (mode === "rounded") return "rounded";
    if (mode === "display") return "display";
    const mixed = ["serif", "rounded", "display"];
    return mixed[bookIndex % mixed.length];
  }

  function pickTextColor(bgHex) {
    const hex = bgHex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 155 ? "#000000" : "#FFFFFF";
  }

  function computeBookVariant(index, titleLength = 8) {
    const widthOptions = [44, 52, 60, 68, 76];
    const heightOptions = [184, 206, 226, 248, 270];

    const widthIndex = (index + titleLength) % widthOptions.length;
    const heightBias = Math.min(2, Math.floor(titleLength / 10));
    const heightIndex = (index * 2 + heightBias) % heightOptions.length;

    return {
      width: widthOptions[widthIndex],
      height: heightOptions[heightIndex]
    };
  }

  function getBookColor(index) {
    const theme = getTheme();
    const palette = theme.books;
    const current = palette[index % palette.length];
    const prev = palette[(index - 1 + palette.length) % palette.length];

    if (index > 0 && current === prev) {
      return palette[(index + 1) % palette.length];
    }

    return current;
  }

  function createBookRecord(title) {
    const index = state.books.length;
    const variant = computeBookVariant(index, title.length);
    const fontChoice = chooseFontForBook(index, state.settings.fontMode);

    return {
      id: `book-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      title,
      width: variant.width,
      height: variant.height,
      fontChoice
    };
  }

  function wrapTitle(title) {
    const words = title.split(" ");
    if (words.length <= 1) return title;

    let bestLine1 = title;
    let bestLine2 = "";
    let smallestDiff = Infinity;

    for (let i = 1; i < words.length; i++) {
      const line1 = words.slice(0, i).join(" ");
      const line2 = words.slice(i).join(" ");
      const diff = Math.abs(line1.length - line2.length);

      if (diff < smallestDiff) {
        smallestDiff = diff;
        bestLine1 = line1;
        bestLine2 = line2;
      }
    }

    if (!bestLine2) return bestLine1;
    return `${bestLine1}<br>${bestLine2}`;
  }

  function renderProgress() {
    const theme = getTheme();
    const read = getReadCount();
    const goal = getGoal();
    const percent = getProgressPercent();

    el.progressFill.style.width = `${getProgressFillPercent()}%`;
    el.progressFill.style.background = theme.progress;
    el.progressPercent.textContent = `${percent}%`;
    el.progressLabel.textContent = `${read} of ${goal} Books Read`;
  }

  function getPlaceholderCount() {
    if (!state.settings.showPlaceholders) return 0;
    return Math.max(0, getGoal() - getReadCount());
  }

  function getTotalVisualBookCount() {
    return getReadCount() + getPlaceholderCount();
  }

  function getShelfDecorMap() {
    const decorMap = new Map();

    state.claimedDecor.forEach((item) => {
      decorMap.set(item.placement.shelfIndex, item);
    });

    if (state.pendingDecor) {
      decorMap.set(state.pendingDecor.placement.shelfIndex, state.pendingDecor);
    }

    return decorMap;
  }

  function buildShelfLayout(visualBooks) {
    const shelves = [];
    const decorMap = getShelfDecorMap();

      const SHELF_TOTAL_WIDTH = BASE_WIDTH - 18;
    const BOOK_GAP = 2;
    const EDGE_PADDING = 4;
    const DECOR_RESERVE = 124;

    let pointer = 0;
    let safety = 0;

    while (
      (pointer < visualBooks.length || shelves.length < decorMap.size || shelves.length === 0) &&
      safety < 1000
    ) {
      safety++;

      const shelfIndex = shelves.length;
      const decorItem = decorMap.get(shelfIndex) || null;

      const leftReserve = decorItem && decorItem.placement.side === "left" ? DECOR_RESERVE : 0;
      const rightReserve = decorItem && decorItem.placement.side === "right" ? DECOR_RESERVE : 0;

      const usableWidth = SHELF_TOTAL_WIDTH - (EDGE_PADDING * 2) - leftReserve - rightReserve;

      const shelfBooks = [];
      let usedWidth = 0;

      while (pointer < visualBooks.length) {
        const entry = visualBooks[pointer];

        const variant = entry.type === "real"
          ? { width: entry.book.width, height: entry.book.height }
          : computeBookVariant(entry.absoluteIndex, String(entry.slotNumber).length);

               const BOOK_RENDER_BUFFER = 3;
        const bookFootprint = variant.width + BOOK_RENDER_BUFFER;
        const nextWidth = bookFootprint + (shelfBooks.length > 0 ? BOOK_GAP : 0);

        if (shelfBooks.length > 0 && usedWidth + nextWidth > usableWidth) {
          break;
        }

        if (shelfBooks.length === 0 && bookFootprint > usableWidth) {
          shelfBooks.push(entry);
          pointer++;
          break;
        }

        shelfBooks.push(entry);
        usedWidth += nextWidth;
        pointer++;
      }

      shelves.push({
        shelfIndex,
        shelfBooks,
        decorItem,
        leftReserve,
        rightReserve
      });
    }

    return shelves;
  }

  function getShelfDecorPlacement(index) {
    const side = index % 2 === 0 ? "left" : "right";
    return { shelfIndex: index, side };
  }

  function renderShelves() {
    el.shelvesContainer.innerHTML = "";

    const goal = getGoal();
    const visualBooks = [];

    state.books.forEach((book, index) => {
      visualBooks.push({
        type: "real",
        book,
        slotNumber: index + 1,
        absoluteIndex: index
      });
    });

    if (state.settings.showPlaceholders) {
      const placeholdersNeeded = Math.max(0, goal - state.books.length);

      for (let i = 0; i < placeholdersNeeded; i++) {
        const slotNumber = state.books.length + i + 1;
        visualBooks.push({
          type: "placeholder",
          slotNumber,
          absoluteIndex: state.books.length + i
        });
      }
    }

    const shelves = buildShelfLayout(visualBooks);

    shelves.forEach((shelf) => {
      const shelfRow = document.createElement("div");
      shelfRow.className = "shelf-row";

      const booksRow = document.createElement("div");
      booksRow.className = "books-row";
      booksRow.style.paddingLeft = `${8 + shelf.leftReserve}px`;
      booksRow.style.paddingRight = `${8 + shelf.rightReserve}px`;

      if (shelf.decorItem) {
        const decorSlot = document.createElement("div");
        decorSlot.className = `decor-slot ${shelf.decorItem.placement.side}`;

        const decorImg = document.createElement("img");
        decorImg.className = "decor-item";
        decorImg.src = shelf.decorItem.src;
        decorImg.alt = shelf.decorItem.id;
        decorImg.onerror = () => {
          decorImg.remove();
          const fallback = document.createElement("div");
          fallback.className = "decor-placeholder";
          fallback.textContent = shelf.decorItem.id.replace("decor-", "Decor ");
          decorSlot.appendChild(fallback);
        };

        decorSlot.appendChild(decorImg);
        shelfRow.appendChild(decorSlot);
      }

      shelf.shelfBooks.forEach((entry) => {
        const absoluteIndex = entry.absoluteIndex;
        const spine = document.createElement("button");
        spine.type = "button";
        spine.className = `book-spine ${entry.type === "placeholder" ? "placeholder" : "real"}`;

        const variant = entry.type === "real"
          ? { width: entry.book.width, height: entry.book.height }
          : computeBookVariant(absoluteIndex, String(entry.slotNumber).length);

        spine.style.width = `${variant.width}px`;
        spine.style.height = `${variant.height}px`;

        const bgColor =
          entry.type === "placeholder"
            ? (
                state.settings.fillPlaceholdersWithTheme
                  ? getBookColor(absoluteIndex)
                  : getTheme().placeholderGrey
              )
            : getBookColor(absoluteIndex);

        spine.style.background = bgColor;

        const text = document.createElement("div");
        const titleLength = entry.type === "real" ? entry.book.title.length : String(entry.slotNumber).length;

        let sizeClass = "medium";
        if (variant.width <= 48 || titleLength > 18) sizeClass = "small";
        if (variant.width >= 70 && titleLength < 10) sizeClass = "large";

        text.className = `book-spine-text ${sizeClass}`;
        text.style.color = pickTextColor(bgColor);

        const fontChoice =
          entry.type === "real"
            ? entry.book.fontChoice
            : chooseFontForBook(absoluteIndex, state.settings.fontMode);

        text.style.fontFamily = FONT_OPTIONS[fontChoice] || FONT_OPTIONS.rounded;

        const usableSpineLength = Math.max(variant.height - 18, 40);
        const usableSpineThickness = Math.max(variant.width - 12, 22);

        text.style.width = `${usableSpineLength}px`;
        text.style.height = `${usableSpineThickness}px`;

        if (entry.type === "real") {
          text.innerHTML = wrapTitle(entry.book.title);
          spine.addEventListener("click", () => openEditBookModal(entry.book.id));
        } else {
          text.innerHTML = state.settings.showPlaceholderNumbers ? String(entry.slotNumber) : "";
        }

        spine.appendChild(text);
        booksRow.appendChild(spine);
      });

      shelfRow.appendChild(booksRow);

      const shelfBoard = document.createElement("div");
      shelfBoard.className = "shelf-board";
      shelfBoard.style.background = `linear-gradient(to bottom, ${getTheme().shelf}, ${shadeColor(getTheme().shelf, -12)})`;
      shelfRow.appendChild(shelfBoard);

      el.shelvesContainer.appendChild(shelfRow);
    });
  }

  function shadeColor(hex, percent) {
    const stripped = hex.replace("#", "");
    const num = parseInt(stripped, 16);
    let r = (num >> 16) + percent;
    let g = ((num >> 8) & 0x00ff) + percent;
    let b = (num & 0x0000ff) + percent;

    r = Math.max(Math.min(255, r), 0);
    g = Math.max(Math.min(255, g), 0);
    b = Math.max(Math.min(255, b), 0);

    return `rgb(${r}, ${g}, ${b})`;
  }

  function renderThemeGrid() {
    el.themeGrid.innerHTML = "";

    Object.entries(THEMES).forEach(([key, theme]) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = `theme-card ${tempSettings.themeName === key ? "selected" : ""}`;

      const preview = document.createElement("div");
      preview.className = "theme-preview";
      preview.style.background = theme.previewBg;

      const previewBooks = document.createElement("div");
      previewBooks.className = "theme-preview-books";

      const heights = [88, 62, 80];
      const widths = [28, 22, 26];

      for (let i = 0; i < 3; i++) {
        const pBook = document.createElement("div");
        pBook.className = "theme-preview-book";
        pBook.style.width = `${widths[i]}px`;
        pBook.style.height = `${heights[i]}px`;
        pBook.style.background = theme.books[i];
        previewBooks.appendChild(pBook);
      }

      preview.appendChild(previewBooks);

      const shelf = document.createElement("div");
      shelf.className = "theme-preview-shelf";
      shelf.style.background = theme.shelf;

      const name = document.createElement("div");
      name.className = "theme-name";
      name.textContent = theme.label;

      card.appendChild(preview);
      card.appendChild(shelf);
      card.appendChild(name);

      card.addEventListener("click", () => {
        tempSettings.themeName = key;
        state.settings.themeName = key;
        renderAll();
        updateSettingsThemePreview();
        renderThemeGrid();
      });

      el.themeGrid.appendChild(card);
    });
  }

  function updateSettingsThemePreview() {
    const theme = THEMES[tempSettings.themeName] || THEMES.antiqueGarden;
    el.selectedThemeInline.textContent = `Selected theme: ${theme.label}`;
  }

  function populateSettingsForm() {
    tempSettings = clone(state.settings);
    settingsPreviewOriginalThemeName = state.settings.themeName;
    el.goalInput.value = tempSettings.goal;
    el.darkModeToggle.checked = !!tempSettings.darkMode;
    el.placeholdersToggle.checked = !!tempSettings.showPlaceholders;
    el.fillPlaceholdersToggle.checked = !!tempSettings.fillPlaceholdersWithTheme;
    el.placeholderNumbersToggle.checked = !!tempSettings.showPlaceholderNumbers;
    el.fontModeSelect.value = tempSettings.fontMode;
    updateSettingsThemePreview();
    renderThemeGrid();
  }

  function collectSettingsForm() {
    tempSettings.goal = Math.max(1, Number(el.goalInput.value) || DEFAULT_GOAL);
    tempSettings.darkMode = !!el.darkModeToggle.checked;
    tempSettings.showPlaceholders = !!el.placeholdersToggle.checked;
    tempSettings.fillPlaceholdersWithTheme = !!el.fillPlaceholdersToggle.checked;
    tempSettings.showPlaceholderNumbers = !!el.placeholderNumbersToggle.checked;
    tempSettings.fontMode = el.fontModeSelect.value;
  }

  function openSettingsModal() {
    populateSettingsForm();
    showSettingsMainPage();
    el.settingsBackdrop.classList.add("show");
  }

function closeSettingsModal(shouldRevertTheme = false) {
  if (shouldRevertTheme && settingsPreviewOriginalThemeName) {
    state.settings.themeName = settingsPreviewOriginalThemeName;
    renderAll();
  } else if (tempSettings) {
    collectSettingsForm();

    state.settings = clone(tempSettings);

    state.books = state.books.map((book, index) => {
      const fontChoice = chooseFontForBook(index, state.settings.fontMode);
      return { ...book, fontChoice };
    });

    applyDarkMode();
    saveState();
    renderAll();
  }

  tempSettings = null;
  settingsPreviewOriginalThemeName = null;
  el.settingsBackdrop.classList.remove("show");
}

  function showSettingsMainPage() {
    el.settingsMainPage.classList.remove("hidden");
    el.settingsThemesPage.classList.add("hidden");
  }

  function showSettingsThemesPage() {
    collectSettingsForm();
    el.settingsMainPage.classList.add("hidden");
    el.settingsThemesPage.classList.remove("hidden");
  }

  function saveSettings() {
    collectSettingsForm();

    state.settings = clone(tempSettings);

    state.books = state.books.map((book, index) => {
      const fontChoice = chooseFontForBook(index, state.settings.fontMode);
      return { ...book, fontChoice };
    });

    applyDarkMode();
    saveState();
    renderAll();
    closeSettingsModal(false);
  }

  function openAddBookModal() {
    currentEditingBookId = null;
    el.bookModalTitle.textContent = "Add a Book";
    el.bookModalSubtitle.textContent = "Enter the title of the book you finished.";
    el.bookTitleInput.value = "";
    el.saveBookBtn.textContent = "Save";
    el.removeBookBtn.classList.add("hidden");
    el.bookBackdrop.classList.add("show");
    setTimeout(() => el.bookTitleInput.focus(), 40);
  }

  function openEditBookModal(bookId) {
    const book = state.books.find((item) => item.id === bookId);
    if (!book) return;

    currentEditingBookId = bookId;
    el.bookModalTitle.textContent = "Edit Book";
    el.bookModalSubtitle.textContent = "Update the title or remove this book from your shelf.";
    el.bookTitleInput.value = book.title;
    el.saveBookBtn.textContent = "Save Changes";
    el.removeBookBtn.classList.remove("hidden");
    el.bookBackdrop.classList.add("show");
    setTimeout(() => el.bookTitleInput.focus(), 40);
  }

  function closeBookModal() {
    currentEditingBookId = null;
    el.bookBackdrop.classList.remove("show");
  }

  function saveBookFromModal() {
    const title = sanitizeTitle(el.bookTitleInput.value);
    if (!title) return;

    if (currentEditingBookId) {
      const book = state.books.find((item) => item.id === currentEditingBookId);
      if (book) {
        book.title = title;
      }
    } else {
      state.books.push(createBookRecord(title));
    }

    saveState();
    renderAll();
    closeBookModal();
  }

  function removeCurrentBook() {
    if (!currentEditingBookId) return;
    state.books = state.books.filter((item) => item.id !== currentEditingBookId);
    saveState();
    renderAll();
    closeBookModal();
  }

  function getNextDecorPlacement() {
    const index = state.claimedDecor.length;
    return getShelfDecorPlacement(index);
  }

function buildPendingDecor(decorId) {
  return {
    id: decorId,
    src: `decor/${decorId}.png`,
    placement: getNextDecorPlacement()
  };
}

  function openAchievementsModal() {
    renderAchievementsModal();
    el.achievementsBackdrop.classList.add("show");
  }

  function closeAchievementsModal() {
    state.pendingDecor = null;
    el.saveDecorBtn.classList.add("hidden");
    saveState();
    renderAll();
    el.achievementsBackdrop.classList.remove("show");
  }

  function renderAchievementsModal() {
    const readCount = getReadCount();
    const achievementCount = getAchievementsUnlockedCount();
    const unclaimed = getUnclaimedPrizeCount();

    const nextMilestone = getNextPrizeMilestone(readCount);
    const progressTowardNext = getAchievementProgress(readCount, nextMilestone);

    el.achievementsProgressFill.style.width = `${progressTowardNext}%`;
    el.achievementsProgressFill.style.background = getTheme().progress;
    el.achievementsUnlockedText.textContent = `${achievementCount} Achievement${achievementCount === 1 ? "" : "s"} Unlocked`;
    el.prizesAvailableText.textContent = `${unclaimed} Prize${unclaimed === 1 ? "" : "s"} To Claim`;

    if (state.pendingDecor) {
      el.achievementNote.textContent = "Previewing selected decor on your shelf. Click Save Decor Placement to keep it.";
    } else if (unclaimed > 0) {
      el.achievementNote.textContent = "Pick one decor item to preview on your shelf.";
    } else {
      el.achievementNote.textContent = `No unclaimed prizes right now. Next prize at ${nextMilestone} books.`;
    }

    renderDecorGrid(unclaimed > 0 || !!state.pendingDecor);
  }

  function getNextPrizeMilestone(readCount) {
    if (readCount < 2) return 2;
    let milestone = 5;
    while (milestone <= readCount) {
      milestone += 5;
    }
    return milestone;
  }

  function getAchievementProgress(readCount, nextMilestone) {
    if (nextMilestone === 2) {
      return Math.min(100, (readCount / 2) * 100);
    }

    const previousMilestone = nextMilestone - 5;
    const progress = ((readCount - previousMilestone) / (nextMilestone - previousMilestone)) * 100;
    return Math.max(0, Math.min(100, progress));
  }

  function renderDecorGrid(canClaim) {
    el.decorGrid.innerHTML = "";
    const assets = getDecorAssets();

    assets.forEach((decor) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "decor-card";

      if (!canClaim) {
        card.classList.add("disabled");
      }

      if (state.pendingDecor && state.pendingDecor.id === decor.id) {
        card.classList.add("selected");
      }

      const img = document.createElement("img");
      img.src = decor.src;
      img.alt = decor.id;

      img.onerror = () => {
        img.remove();
        const fallback = document.createElement("div");
        fallback.className = "decor-fallback";
        fallback.textContent = decor.id.replace("decor-", "Decor ");
        card.appendChild(fallback);
      };

      card.appendChild(img);

      card.addEventListener("click", () => {
        if (!canClaim) return;

        state.pendingDecor = buildPendingDecor(decor.id);
        el.saveDecorBtn.classList.remove("hidden");
        saveState();
        renderAll();
        renderAchievementsModal();
        el.achievementsBackdrop.classList.remove("show");
      });

      el.decorGrid.appendChild(card);
    });
  }

  function savePendingDecor() {
    if (!state.pendingDecor) return;
    state.claimedDecor.push(clone(state.pendingDecor));
    state.pendingDecor = null;
    el.saveDecorBtn.classList.add("hidden");
    saveState();
    renderAll();
  }

  function renderAll() {
    applyDarkMode();
    renderProgress();
    renderShelves();
    el.saveDecorBtn.classList.toggle("hidden", !state.pendingDecor);
  }

  function handleBackdropClose(event, backdrop, closeFn) {
    if (event.target === backdrop) closeFn();
  }

  function bindEvents() {
    el.openSettingsBtn.addEventListener("click", openSettingsModal);
    el.openAddBookBtn.addEventListener("click", openAddBookModal);
    el.openAchievementsBtn.addEventListener("click", openAchievementsModal);

    el.saveSettingsBtn.addEventListener("click", saveSettings);
    el.closeSettingsBtn.addEventListener("click", () => closeSettingsModal(true));
    el.openThemesPageBtn.addEventListener("click", showSettingsThemesPage);
    el.backToSettingsBtn.addEventListener("click", showSettingsMainPage);
    el.closeThemesPageBtn.addEventListener("click", () => {
      saveSettings();
    });

    el.saveBookBtn.addEventListener("click", saveBookFromModal);
    el.closeBookBtn.addEventListener("click", closeBookModal);
    el.removeBookBtn.addEventListener("click", removeCurrentBook);

    el.closeAchievementsBtn.addEventListener("click", closeAchievementsModal);
    el.saveDecorBtn.addEventListener("click", savePendingDecor);

  el.settingsBackdrop.addEventListener("click", (e) => {
  handleBackdropClose(e, el.settingsBackdrop, () => closeSettingsModal(false));
});

    el.bookBackdrop.addEventListener("click", (e) => {
      handleBackdropClose(e, el.bookBackdrop, closeBookModal);
    });

    el.achievementsBackdrop.addEventListener("click", (e) => {
      handleBackdropClose(e, el.achievementsBackdrop, closeAchievementsModal);
    });

    el.bookTitleInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        saveBookFromModal();
      }
    });

    if (el.removeAllDecorBtn) {
      el.removeAllDecorBtn.addEventListener("click", () => {
        state.claimedDecor = [];
        state.pendingDecor = null;
        el.saveDecorBtn.classList.add("hidden");
        saveState();
        renderAll();
        renderAchievementsModal();
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeBookModal();
        closeSettingsModal(true);
        closeAchievementsModal();
      }
    });

    resizeObserver = new ResizeObserver(() => {
      fitStage();
      renderAll();
    });

    resizeObserver.observe(el.widgetShell);
  }

  function init() {
    bindEvents();
    fitStage();
    renderAll();
  }

  init();
})();
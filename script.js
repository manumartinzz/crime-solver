// ===== ESTADO DO JOGO =====
const state = {
  xp: 0,
  solved: false,
  found: new Set(),
  currentEvidence: null,
  interrogated: new Set(),
  startedAt: Date.now(),
};

// Banco de dados das evidências (poderia futuramente vir de um backend/BD real)
const evidence = {
  knife: {
    name: "Faca de cozinha",
    type: "EVIDÊNCIA 01",
    description: "A lâmina contém manchas escuras. Uma análise posterior pode ligar a arma diretamente ao crime.",
  },
  letter: {
    name: "Carta rasgada",
    type: "EVIDÊNCIA 02",
    description: "Uma ameaça escrita à mão: \u201cVocê vai pagar pelo que tirou de mim.\u201d A assinatura foi removida.",
  },
  phone: {
    name: "Celular da vítima",
    type: "EVIDÊNCIA 03",
    description: "A última ligação foi feita para Helena Duarte às 21:42. O aparelho estava escondido sob uma poltrona.",
  },
};

// ===== NAVEGAÇÃO ENTRE TELAS =====
function showView(id) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if (id === "profile-view") updateProfile();
  window.scrollTo(0, 0);
}

function showPanel(id) {
  document.getElementById(id).classList.add("open");
  if (id === "inventory-panel") renderInventory();
}

function closePanel(id) {
  document.getElementById(id).classList.remove("open");
}

function closeModal() {
  document.getElementById("evidence-modal").classList.remove("open");
}

function showCredits() {
  showPanel("credits-modal");
}

function showToast(text) {
  const t = document.getElementById("toast");
  t.textContent = text;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2600);
}

function startInvestigation() {
  showView("scene-view");
  showToast("Investigação iniciada. Procure os pontos dourados.");
}

// ===== EXAMINAR / COLETAR EVIDÊNCIAS =====
function openEvidence(key) {
  state.currentEvidence = key;
  const item = evidence[key];

  document.getElementById("evidence-type").textContent = item.type;
  document.getElementById("evidence-name").textContent = item.name;
  document.getElementById("evidence-description").textContent = item.description;

  const btn = document.getElementById("collect-button");
  const already = state.found.has(key);
  btn.textContent = already ? "Prova já coletada" : "Adicionar ao inventário";
  btn.disabled = already;
  btn.classList.toggle("opacity-50", already);

  document.getElementById("evidence-modal").classList.add("open");
}

function collectEvidence() {
  const key = state.currentEvidence;
  if (!key || state.found.has(key)) return;

  state.found.add(key);
  document.getElementById("found-" + key).classList.remove("hidden");
  document.getElementById("evidence-count").textContent = state.found.size + "/3";

  gainXP(25);
  closeModal();
  showToast("Prova coletada: +25 XP");
  saveProgress();
}

function renderInventory() {
  const list = document.getElementById("inventory-list");
  const empty = document.getElementById("inventory-empty");

  list.innerHTML = "";
  empty.classList.toggle("hidden", state.found.size > 0);

  state.found.forEach((key) => {
    const e = evidence[key];
    const row = document.createElement("article");
    row.className = "flex items-center justify-between rounded border border-[#333d48] bg-[#10141a] p-3";
    row.innerHTML =
      '<div><p class="font-semibold">' + e.name + '</p>' +
      '<p class="mt-1 text-xs text-[#9aa4af]">' + e.description + "</p></div>" +
      '<button class="rounded border border-[#d3a750] px-3 py-2 text-xs text-[#e9e2d4]">Analisar</button>';
    row.querySelector("button").onclick = () => openEvidence(key);
    list.appendChild(row);
  });
}

// ===== SUSPEITOS / INTERROGATÓRIO =====
function openInterrogation(name) {
  closePanel("suspects-panel");
  document.getElementById("interrogation-name").textContent = name;
  document.getElementById("chat-log").innerHTML =
    '<p class="text-sm text-[#9aa4af]">Escolha uma pergunta para iniciar o interrogatório.</p>';
  showPanel("interrogation-panel");
  state.interrogated.add(name);
  saveProgress();
}

function askQuestion(q) {
  const name = document.getElementById("interrogation-name").textContent;
  let reply = "\u201cNão tenho mais nada a declarar.\u201d";

  if (q.includes("Onde")) {
    reply = name === "Helena Duarte"
      ? "\u201cEu estava em casa. Não falei com Eduardo naquela noite.\u201d"
      : "\u201cEstava trabalhando até tarde. Há câmeras no prédio.\u201d";
  }
  if (q.includes("conhecia")) {
    reply = name === "Helena Duarte"
      ? "\u201cÉramos sócios. Ele destruiu tudo pelo que trabalhei.\u201d"
      : "\u201cEle era meu chefe, nada além disso.\u201d";
  }
  if (q.includes("carta")) {
    reply = (state.found.has("letter") && name === "Helena Duarte")
      ? "\u201cEssa carta... eu escrevi, mas não queria matá-lo.\u201d"
      : "\u201cNunca vi essa carta antes.\u201d";
  }

  const chat = document.getElementById("chat-log");
  chat.innerHTML =
    '<div class="text-right text-sm text-[#d3a750]">Detetive: ' + q + "</div>" +
    '<div class="chat-bubble rounded-r p-3 text-sm text-[#d5dbe1]">' + name + ": " + reply + "</div>";

  if (q.includes("carta") && name === "Helena Duarte" && state.found.has("letter")) {
    gainXP(20);
    showToast("Contradição registrada: +20 XP");
  }
  saveProgress();
}

// ===== XP / NÍVEL / PERFIL =====
function gainXP(amount) {
  state.xp += amount;
  updateProfile();
}

function updateProfile() {
  const level = Math.floor(state.xp / 100) + 1;
  const progress = state.xp % 100;

  document.getElementById("xp-label").textContent = progress + " / 100 XP";
  document.getElementById("xp-bar").style.width = progress + "%";
  document.getElementById("scene-xp").textContent = state.xp;
  document.getElementById("top-level").textContent = "NÍVEL " + level;
  document.getElementById("profile-level").textContent = "NÍVEL " + level;
  document.getElementById("profile-xp").textContent = state.xp;
  document.getElementById("profile-cases").textContent = state.solved ? 1 : 0;
  document.getElementById("profile-medals").textContent = state.solved ? 2 : 0;
  document.getElementById("case-status").textContent = state.solved ? "RESOLVIDO" : "EM INVESTIGAÇÃO";
}

// ===== RESOLVER O CASO =====
document.getElementById("solve-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const killer = document.getElementById("killer").value;
  const weapon = document.getElementById("weapon").value;
  const motive = document.getElementById("motive").value;

  const correct = killer === "helena" && weapon === "knife" && motive === "inheritance";
  const feedback = document.getElementById("solve-feedback");

  if (!correct) {
    feedback.textContent = "Algumas respostas não correspondem às evidências. Revise a investigação antes de acusar alguém.";
    feedback.classList.remove("hidden");
    return;
  }

  state.solved = true;
  gainXP(150);

  document.getElementById("result-copy").textContent =
    "Helena Duarte foi responsabilizada pelo assassinato após a fraude financeira vir à tona.";
  document.getElementById("result-clues").textContent = state.found.size + "/3";
  document.getElementById("result-xp").textContent = "+150";
  document.getElementById("result-accuracy").textContent = "100%";

  saveProgress();
  showView("result-view");
});

// ===== CONFIGURAÇÕES =====
function toggleSetting(id) {
  const el = document.getElementById(id);
  el.classList.toggle("toggle-on");
  el.querySelector("span").classList.toggle("translate-x-5");
  saveProgress();
}

// ===== PERSISTÊNCIA (localStorage) =====
// Obs.: para um projeto de Banco de Dados "de verdade", esta função é o ponto
// onde entraria uma chamada a uma API/backend conectada ao seu banco de dados
// (ex.: fetch('/api/progresso', { method: 'POST', body: JSON.stringify(record) })).
// Por enquanto, o progresso é salvo localmente no navegador do jogador.
function saveProgress() {
  const elapsed = Math.round((Date.now() - state.startedAt) / 1000);
  const record = {
    player_name: "Detetive",
    level: Math.floor(state.xp / 100) + 1,
    xp: state.xp,
    cases_solved: state.solved ? 1 : 0,
    total_play_time: elapsed,
    achievements: state.solved ? "Primeiro Caso, Melhor Detetive" : "",
    case_progress: JSON.stringify({
      found: [...state.found],
      interrogated: [...state.interrogated],
    }),
  };

  try {
    localStorage.setItem("crimeSolverProgress", JSON.stringify(record));
  } catch (e) {
    console.warn("Não foi possível salvar o progresso localmente.", e);
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem("crimeSolverProgress");
    if (!raw) return;

    const record = JSON.parse(raw);
    state.xp = Number(record.xp) || 0;
    state.solved = Number(record.cases_solved) > 0;

    const progress = JSON.parse(record.case_progress || "{}");
    (progress.found || []).forEach((key) => {
      state.found.add(key);
      const marker = document.getElementById("found-" + key);
      if (marker) marker.classList.remove("hidden");
    });
    (progress.interrogated || []).forEach((name) => state.interrogated.add(name));

    document.getElementById("evidence-count").textContent = state.found.size + "/3";
  } catch (e) {
    console.warn("Não foi possível carregar o progresso salvo.", e);
  }
}

// ===== INICIALIZAÇÃO =====
function init() {
  lucide.createIcons();
  loadProgress();
  updateProfile();
  setTimeout(() => showView("menu-view"), 2000);
}

init();

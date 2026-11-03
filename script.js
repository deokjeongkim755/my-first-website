(() => {
  "use strict";

  const STORAGE_KEY = "peanutScratchMapV2";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lessons = [
    {
      title: "先认清 5 个区域",
      label: "认识界面",
      intro:
        "Scratch 看起来按钮很多，其实只需要先记住五块地方。认清它们，后面拖积木就不会迷路。",
      steps: [
        "左边彩色的分类区是<strong>积木区</strong>，不同颜色代表不同任务。",
        "中间空白的区域是<strong>代码区</strong>，拖来的积木会排列在这里。",
        "右上方白色的区域是<strong>舞台</strong>，作品会在这里播放。",
        "舞台下面的小图片是<strong>角色区</strong>，点一下谁，代码区就显示谁。",
        "最上方的菜单里能找到<strong>文件、教程和保存</strong>。",
      ],
      tip: "找不到彩色积木时，先看看角色区里有没有选中一个角色。",
      try: "把五个区域各指一次，再说出它们分别负责什么。",
      zones: ["palette", "code", "stage", "sprites", "file"],
      blocks: [
        { type: "event", text: "⚑ 当绿旗被点击" },
        { type: "looks", text: "说 你好！ 2 秒" },
      ],
      status: "等待点绿旗",
    },
    {
      title: "背景和角色先站好",
      label: "角色背景",
      intro:
        "舞台是故事发生的地方，角色是故事里的人物。先选好这两样，作品就有了自己的场景。",
      steps: [
        "在舞台右下方点击<strong>选择一个背景</strong>，挑一个喜欢的场景。",
        "点击<strong>选择一个角色</strong>，搜索并添加一个角色。",
        "拖动角色外面的小圆点，把大小调到适合舞台。",
        "在角色区把名字改成容易辨认的称呼，例如“队长”。",
      ],
      tip: "背景在舞台下面，角色按钮也在附近；选错时不用害怕，可以随时更换。",
      try: "给你的角色换一个新背景，再添加一个会一起出场的角色。",
      zones: ["stage", "sprites", "stage", "sprites"],
      blocks: [
        { type: "event", text: "⚑ 当绿旗被点击" },
        { type: "looks", text: "将大小设为 90 %" },
        { type: "motion", text: "移到 x: 0 y: -80" },
      ],
      status: "场景已准备好",
    },
    {
      title: "让角色走、说、换造型",
      label: "动作指令",
      intro:
        "开始做动画时，先放“什么时候开始”，再接“角色做什么”。这三类积木最常用。",
      steps: [
        "在黄色事件里拖出<strong>当绿旗被点击</strong>，放在脚本最上面。",
        "接上蓝色运动里的<strong>移动 50 步</strong>，改变数字就能改变距离。",
        "接上紫色外观里的<strong>说 你好！ 2 秒</strong>，让它开口说话。",
        "再接一个<strong>下一个造型</strong>，最后点绿旗查看完整效果。",
      ],
      tip: "积木从上往下执行。想同时做两件事时，可以写成两条独立的脚本。",
      try: "让角色走 50 步、说一句话，再切换一次造型。",
      zones: ["palette", "code", "code", "stage"],
      blocks: [
        { type: "event", text: "⚑ 当绿旗被点击" },
        { type: "motion", text: "移动 50 步" },
        { type: "looks", text: "说 出发！ 2 秒" },
        { type: "looks", text: "下一个造型" },
      ],
      status: "动作已拼好",
    },
    {
      title: "用循环和判断变聪明",
      label: "循环判断",
      intro:
        "重复执行让动作持续发生，如果……那么……让角色学会判断。两者组合，就能做出小游戏。",
      steps: [
        "从橙色控制积木里拖出<strong>重复执行</strong>。",
        "在循环里放<strong>移动 5 步</strong>和<strong>碰到边缘就反弹</strong>。",
        "加入<strong>如果……那么……</strong>，再放入一个侦测条件。",
        "新建变量“得分”，在条件成立时把得分增加 1。",
      ],
      tip: "“一直重复”会持续运行。测试结束时点红色停止，再继续修改。",
      try: "让角色一直移动并碰到边缘反弹；如果碰到另一个角色，就加 1 分。",
      zones: ["palette", "code", "palette", "code"],
      blocks: [
        { type: "event", text: "⚑ 当绿旗被点击" },
        { type: "control", text: "重复执行" },
        { type: "motion", text: "移动 5 步", indent: true },
        { type: "motion", text: "碰到边缘就反弹", indent: true },
        { type: "variables", text: "如果 碰到 对手？ 那么 将得分增加 1" },
      ],
      status: "循环脚本运行中",
    },
    {
      title: "检查一下，再保存",
      label: "保存作品",
      intro:
        "作品完成前先做三件事：停下来、从头测试、保存到自己的文件夹。会保存，作品才真正属于你。",
      steps: [
        "先点红色停止按钮，结束所有正在运动的脚本。",
        "一次只点一块积木测试，检查角色是否选对、顺序是否正确。",
        "点击文件里的<strong>保存到电脑</strong>，文件名写成“作品名_日期”。",
        "关闭后再重新打开 .sb3 文件，确认角色和脚本都还在。",
      ],
      tip: "每完成一个重要动作就另存一版，出错时还有上一版可以继续。",
      try: "保存作品后重新打开，全屏播放一次，再关掉找出一个想改的地方。",
      zones: ["stage", "code", "file", "file"],
      blocks: [
        { type: "event", text: "⚑ 当绿旗被点击" },
        { type: "motion", text: "在 1 秒内滑行到 x: 150 y: -50" },
        { type: "control", text: "永远重复执行" },
        { type: "looks", text: "下一个造型", indent: true },
      ],
      status: "准备保存",
    },
  ];

  const videoTitles = {
    BV1Bv411W7ZS: "第一课：认识 Scratch 3.0",
    BV1CK4y1v7wc: "Scratch 少儿编程：认识条件与循环",
    BV1dnsqenEZg: "Scratch 3.0 少儿编程全套课程",
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const tabs = $$("[data-lesson-tab]");
  const overviewButtons = $$("[data-lesson-link]");
  const lessonTitle = $("#lessonTitle");
  const lessonLabel = $("#lessonLevel");
  const lessonCounter = $("#lessonCounter");
  const lessonIntro = $("#lessonIntro");
  const lessonSteps = $("#lessonSteps");
  const lessonTip = $("#lessonTip");
  const lessonTry = $("#lessonTry");
  const mockBlocks = $("#mockBlocks");
  const mockCodeHint = $("#mockCodeHint");
  const mockMascot = $("#mockMascot");
  const mockSpeech = $("#mockSpeech");
  const mockStatus = $("#mockStatus");
  const completeButton = $("#completeLesson");
  const prevButton = $("#prevLesson");
  const nextButton = $("#nextLesson");
  const videoModal = $("#videoModal");
  const videoFrame = $("#videoFrame");
  const videoTitle = $("#videoTitle");
  const videoExternal = $("#videoExternal");
  const toast = $("#toast");
  const toastText = $("#toastText");
  const toastIcon = $("#toastIcon");

  let currentLesson = 0;
  let completed = loadCompleted();
  let demoTimer = 0;
  let toastTimer = 0;
  let previousFocus = null;

  function loadCompleted() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(stored) ? stored.filter(Number.isInteger).filter((value) => value >= 0 && value < 5) : [];
    } catch {
      return [];
    }
  }

  function saveCompleted() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      showToast("浏览器无法保存本地进度", "!");
    }
  }

  function showToast(message, icon = "✓") {
    window.clearTimeout(toastTimer);
    toastText.textContent = message;
    toastIcon.textContent = icon;
    toast.classList.add("visible");
    toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2300);
  }

  function renderSteps(steps) {
    lessonSteps.innerHTML = steps
      .map(
        (step, index) =>
          `<li tabindex="0" data-step-index="${index}" title="点击定位到界面"><span class="step-no">${String(index + 1).padStart(2, "0")}</span><span>${step}</span></li>`,
      )
      .join("");
  }

  function renderBlocks(blocks) {
    mockBlocks.innerHTML = blocks
      .map(
        (block, index) =>
          `<div class="mock-block ${block.type}${block.indent ? " indent" : ""}" style="animation-delay:${index * 45}ms">${block.text}</div>`,
      )
      .join("");
    mockCodeHint.hidden = blocks.length > 0;
  }

  function highlightZone(zone) {
    $$("[data-mock-zone]").forEach((element) => element.classList.remove("highlight"));
    if (!zone) return;
    $(`[data-mock-zone="${zone}"]`)?.classList.add("highlight");
  }

  function resetMascot() {
    window.clearTimeout(demoTimer);
    mockMascot.classList.remove("moving", "spinning");
    mockSpeech.classList.remove("visible");
    mockStatus.textContent = lessons[currentLesson].status;
  }

  function updateCompletionUI() {
    $("#headerProgress").textContent = `${completed.length} / 5`;
    $("#mapProgressText").textContent = `${completed.length} / 5`;
    $("#mapProgressBar").style.width = `${(completed.length / 5) * 100}%`;
    tabs.forEach((tab, index) => tab.classList.toggle("is-complete", completed.includes(index)));
    overviewButtons.forEach((button, index) => button.classList.toggle("active", index === currentLesson));

    const isComplete = completed.includes(currentLesson);
    completeButton.classList.toggle("is-complete", isComplete);
    completeButton.setAttribute("aria-pressed", String(isComplete));
    $("b", completeButton).textContent = isComplete ? "这一站已完成" : "这一站学会了";
  }

  function renderLesson(index, options = {}) {
    currentLesson = Math.max(0, Math.min(index, lessons.length - 1));
    const lesson = lessons[currentLesson];

    tabs.forEach((tab, tabIndex) => {
      const selected = tabIndex === currentLesson;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    $("#lessonPanel").setAttribute("aria-labelledby", `tab${currentLesson}`);
    lessonCounter.textContent = `第 ${currentLesson + 1} 站 / 共 ${lessons.length} 站`;
    lessonLabel.textContent = lesson.label;
    lessonTitle.textContent = lesson.title;
    lessonIntro.textContent = lesson.intro;
    lessonTip.textContent = lesson.tip;
    lessonTry.textContent = lesson.try;
    renderSteps(lesson.steps);
    renderBlocks(lesson.blocks);
    highlightZone(lesson.zones[0]);
    resetMascot();
    prevButton.disabled = currentLesson === 0;
    nextButton.disabled = currentLesson === lessons.length - 1;
    updateCompletionUI();

    if (options.scroll) {
      requestAnimationFrame(() => {
        $("#map").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
      });
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => renderLesson(Number(tab.dataset.lessonTab)));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
      event.preventDefault();
      const direction = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      const next = (currentLesson + direction + lessons.length) % lessons.length;
      renderLesson(next);
      tabs[next].focus();
    });
  });
  overviewButtons.forEach((button) => {
    button.addEventListener("click", () => renderLesson(Number(button.dataset.lessonLink), { scroll: true }));
  });

  lessonSteps.addEventListener("click", (event) => {
    const item = event.target.closest("[data-step-index]");
    if (!item) return;
    highlightZone(lessons[currentLesson].zones[Number(item.dataset.stepIndex)]);
  });
  lessonSteps.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const item = event.target.closest("[data-step-index]");
    if (!item) return;
    event.preventDefault();
    item.click();
  });

  prevButton.addEventListener("click", () => renderLesson(currentLesson - 1));
  nextButton.addEventListener("click", () => renderLesson(currentLesson + 1));
  completeButton.addEventListener("click", () => {
    const position = completed.indexOf(currentLesson);
    if (position >= 0) {
      completed.splice(position, 1);
      showToast("已取消这一站的完成标记", "↺");
    } else {
      completed.push(currentLesson);
      showToast(`第 ${currentLesson + 1} 站完成`, "✓");
    }
    saveCompleted();
    updateCompletionUI();
  });

  $("#mockRun").addEventListener("click", () => {
    resetMascot();
    mockSpeech.textContent = currentLesson === 3 ? "转起来！" : "出发！";
    mockSpeech.classList.add("visible");
    mockStatus.textContent = "绿旗已点击 · 脚本运行中";
    mockMascot.classList.add(currentLesson === 3 ? "spinning" : "moving");
    demoTimer = window.setTimeout(resetMascot, currentLesson === 3 ? 1600 : 2600);
  });

  function closeMenu() {
    const nav = $("#mainNav");
    const button = $(".menu-toggle");
    if (!nav.classList.contains("open")) return;
    nav.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "打开导航");
  }

  $("#mainNav").addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  $(".menu-toggle").addEventListener("click", () => {
    const nav = $("#mainNav");
    const button = $(".menu-toggle");
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
  });

  function openVideo(bvid, trigger) {
    previousFocus = trigger || document.activeElement;
    const title = videoTitles[bvid] || "Scratch 3 教学视频";
    videoTitle.textContent = title;
    videoExternal.href = `https://www.bilibili.com/video/${bvid}`;
    videoFrame.innerHTML = `
      <iframe
        title="${title}"
        src="https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&danmaku=0&autoplay=0"
        allowfullscreen
        loading="eager"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    `;
    videoModal.classList.add("open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    window.setTimeout(() => $(".modal-close").focus(), 80);
  }

  function closeVideo() {
    if (!videoModal.classList.contains("open")) return;
    videoModal.classList.remove("open");
    videoModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    videoFrame.innerHTML = "";
    previousFocus?.focus?.();
  }

  $$("[data-video-open]").forEach((button) => {
    button.addEventListener("click", () => openVideo(button.dataset.videoOpen, button));
  });
  $$("[data-video-close]").forEach((button) => button.addEventListener("click", closeVideo));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeVideo();
      closeMenu();
    }
  });

  $("#resetProgress").addEventListener("click", () => {
    if (!window.confirm("要清空五个站点的学习完成标记吗？")) return;
    completed = [];
    saveCompleted();
    renderLesson(0);
    showToast("学习进度已重置", "↺");
  });

  function updatePageProgress() {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = total > 0 ? Math.min(1, window.scrollY / total) : 0;
    $("#pageProgress").style.width = `${ratio * 100}%`;
    $("#siteHeader").classList.toggle("scrolled", window.scrollY > 24);
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updatePageProgress();
        ticking = false;
      });
    },
    { passive: true },
  );

  const revealElements = $$(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px" },
    );
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("in-view"));
  }

  renderLesson(0);
  updatePageProgress();

  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
      window.setTimeout(() => {
        const root = document.documentElement;
        const oldBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = "auto";
        target.scrollIntoView({ block: "start" });
        root.style.scrollBehavior = oldBehavior;
      }, 100);
    }
  }
})();

const container = document.querySelector("#englishForEveryone3D");

if (container) {
  initEnglishForEveryone3D(container);
}

function initEnglishForEveryone3D(stage) {
  const fallback = stage.querySelector(".logo-3d-fallback");

  const scene = document.createElement("div");
  scene.className = "logo-3d-scene";

  const stars = document.createElement("div");
  stars.className = "logo-3d-stars";
  createStars(stars);

  const rig = document.createElement("div");
  rig.className = "logo-3d-rig";

  const wordmark = document.createElement("div");
  wordmark.className = "logo-3d-wordmark";

  const frontCopy = createCopy("front");
  const backCopy = createCopy("back");
  wordmark.append(frontCopy, backCopy);
  rig.append(wordmark);
  scene.append(stars, rig);
  stage.append(scene);

  if (fallback) {
    fallback.remove();
  }

  stage.classList.add("is-live");

  const state = {
    rotationX: -14,
    rotationY: -24,
    targetX: -14,
    targetY: -24,
    scale: 1,
    targetScale: 1,
    dragging: false,
    pointerId: null,
    lastX: 0,
    lastY: 0,
    glowX: 68,
    glowY: 30,
    glowTargetX: 68,
    glowTargetY: 30,
  };

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const updatePointerGlow = (clientX, clientY) => {
    const rect = stage.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      return;
    }

    const normalizedX = clamp((clientX - rect.left) / rect.width, 0, 1);
    const normalizedY = clamp((clientY - rect.top) / rect.height, 0, 1);
    state.glowTargetX = 14 + normalizedX * 72;
    state.glowTargetY = 12 + normalizedY * 52;
  };

  const onPointerDown = (event) => {
    state.dragging = true;
    state.pointerId = event.pointerId;
    state.lastX = event.clientX;
    state.lastY = event.clientY;
    stage.setPointerCapture?.(event.pointerId);
    stage.classList.add("is-dragging");
    updatePointerGlow(event.clientX, event.clientY);
  };

  const onPointerMove = (event) => {
    updatePointerGlow(event.clientX, event.clientY);

    if (!state.dragging || event.pointerId !== state.pointerId) {
      return;
    }

    const deltaX = event.clientX - state.lastX;
    const deltaY = event.clientY - state.lastY;
    state.lastX = event.clientX;
    state.lastY = event.clientY;

    state.targetY += deltaX * 0.34;
    state.targetX -= deltaY * 0.28;
    state.targetX = clamp(state.targetX, -38, 26);
  };

  const stopDragging = () => {
    state.dragging = false;
    state.pointerId = null;
    stage.classList.remove("is-dragging");
  };

  const onWheel = (event) => {
    event.preventDefault();
    const direction = event.deltaY < 0 ? 0.08 : -0.08;
    state.targetScale = clamp(state.targetScale + direction, 0.86, 1.25);
  };

  const onDoubleClick = () => {
    state.targetX = -14;
    state.targetY = -24;
    state.targetScale = 1;
    state.glowTargetX = 68;
    state.glowTargetY = 30;
  };

  const onPointerLeave = () => {
    if (!state.dragging) {
      state.glowTargetX = 68;
      state.glowTargetY = 30;
    }
  };

  stage.addEventListener("pointerdown", onPointerDown);
  stage.addEventListener("pointermove", onPointerMove);
  stage.addEventListener("pointerup", stopDragging);
  stage.addEventListener("pointercancel", stopDragging);
  stage.addEventListener("pointerleave", onPointerLeave);
  stage.addEventListener("wheel", onWheel, { passive: false });
  stage.addEventListener("dblclick", onDoubleClick);

  let animationFrameId = 0;

  const animate = () => {
    if (!state.dragging) {
      state.targetY += 0.08;
    }

    state.rotationX += (state.targetX - state.rotationX) * 0.08;
    state.rotationY += (state.targetY - state.rotationY) * 0.08;
    state.scale += (state.targetScale - state.scale) * 0.12;
    state.glowX += (state.glowTargetX - state.glowX) * 0.07;
    state.glowY += (state.glowTargetY - state.glowY) * 0.07;

    stage.style.setProperty("--logo-rotate-x", `${state.rotationX}deg`);
    stage.style.setProperty("--logo-rotate-y", `${state.rotationY}deg`);
    stage.style.setProperty("--logo-scale", state.scale.toFixed(3));
    stage.style.setProperty("--logo-glow-x", `${state.glowX.toFixed(2)}%`);
    stage.style.setProperty("--logo-glow-y", `${state.glowY.toFixed(2)}%`);

    animationFrameId = window.requestAnimationFrame(animate);
  };

  animate();

  window.addEventListener(
    "pagehide",
    () => {
      window.cancelAnimationFrame(animationFrameId);
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerup", stopDragging);
      stage.removeEventListener("pointercancel", stopDragging);
      stage.removeEventListener("pointerleave", onPointerLeave);
      stage.removeEventListener("wheel", onWheel);
      stage.removeEventListener("dblclick", onDoubleClick);
    },
    { once: true },
  );
}

function createCopy(side) {
  const copy = document.createElement("div");
  copy.className = `logo-3d-copy logo-3d-copy-${side}`;

  copy.append(createTextLine("ENGLISH", "top", side));
  copy.append(createTextLine("FOR EVERYONE", "bottom", side));
  return copy;
}

function createTextLine(text, variant, side) {
  const line = document.createElement("div");
  line.className = `logo-3d-line logo-3d-line-${variant}`;

  const depthStack = document.createElement("div");
  depthStack.className = "logo-3d-depth-stack";

  for (let index = 22; index >= 1; index -= 1) {
    const depthLayer = document.createElement("span");
    depthLayer.className = "logo-3d-depth";
    depthLayer.textContent = text;
    depthLayer.style.color = `hsl(${side === "front" ? 349 : 343} 100% ${20 + index * 1.35}%)`;
    depthLayer.style.transform =
      side === "front"
        ? `translateZ(${-index * 1.5}px) translateX(${index * 0.11}px) translateY(${index * 0.08}px)`
        : `translateZ(${index * 1.5}px) translateX(${-index * 0.11}px) translateY(${index * 0.08}px)`;
    depthStack.append(depthLayer);
  }

  const glow = document.createElement("span");
  glow.className = "logo-3d-front logo-3d-front-glow";
  glow.textContent = text;

  const face = document.createElement("span");
  face.className = "logo-3d-front";
  face.textContent = text;

  line.append(depthStack, glow, face);
  return line;
}

function createStars(container) {
  const stars = [
    { x: 12, y: 20, size: 5, delay: 0.1 },
    { x: 18, y: 67, size: 4, delay: 1.1 },
    { x: 26, y: 38, size: 3, delay: 1.7 },
    { x: 35, y: 74, size: 5, delay: 0.7 },
    { x: 48, y: 15, size: 4, delay: 2.1 },
    { x: 58, y: 82, size: 3, delay: 1.4 },
    { x: 68, y: 24, size: 5, delay: 2.5 },
    { x: 76, y: 60, size: 4, delay: 0.5 },
    { x: 84, y: 18, size: 3, delay: 1.9 },
    { x: 90, y: 44, size: 5, delay: 0.9 },
  ];

  stars.forEach((starConfig) => {
    const star = document.createElement("span");
    star.className = "logo-3d-star";
    star.style.left = `${starConfig.x}%`;
    star.style.top = `${starConfig.y}%`;
    star.style.setProperty("--star-size", `${starConfig.size}px`);
    star.style.setProperty("--star-delay", `${starConfig.delay}s`);
    container.append(star);
  });
}

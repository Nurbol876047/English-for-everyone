const ASSET_VERSION = "20260421-0435";

const tasks = [
  {
    id: "basketball",
    title: "Playing Basketball",
    instruction: "Build an English sentence that says the boy is playing basketball.",
    answer: ["He", "is", "playing", "basketball", "now"],
    image: `./assets/images/task-01-basketball.png?v=${ASSET_VERSION}`,
  },
  {
    id: "feeding-pet",
    title: "Feeding His Pet",
    instruction: "Build an English sentence that says the boy is feeding his pet.",
    answer: ["He", "is", "feeding", "his", "pet"],
    image: `./assets/images/task-02-feeding-pet.png?v=${ASSET_VERSION}`,
  },
  {
    id: "temperature",
    title: "Talking on the Phone",
    instruction: "Build an English sentence that says the boy is talking on the phone.",
    answer: ["He", "is", "talking", "on", "the", "phone"],
    image: `./assets/images/task-03-temperature.png?v=${ASSET_VERSION}`,
  },
  {
    id: "computer",
    title: "Using a Laptop",
    instruction: "Build an English sentence that says the girl is using a laptop.",
    answer: ["She", "is", "using", "a", "laptop"],
    image: `./assets/images/task-04-computer.png?v=${ASSET_VERSION}`,
  },
  {
    id: "bicycle",
    title: "Riding a Bicycle",
    instruction: "Build an English sentence that says the boy is riding a bicycle.",
    answer: ["He", "is", "riding", "a", "bicycle"],
    image: `./assets/images/task-05-bicycle.png?v=${ASSET_VERSION}`,
  },
  {
    id: "cooking",
    title: "Cooking Together",
    instruction: "Build an English sentence that says the family is cooking together.",
    answer: ["They", "are", "cooking", "together", "now"],
    image: `./assets/images/task-06-cooking.png?v=${ASSET_VERSION}`,
  },
  {
    id: "watching-tv",
    title: "Watching TV",
    instruction: "Build an English sentence that says the children are watching TV together.",
    answer: ["They", "are", "watching", "TV", "together"],
    image: `./assets/images/task-07-watching-tv.png?v=${ASSET_VERSION}`,
  },
  {
    id: "dancing",
    title: "Jumping on a Trampoline",
    instruction: "Build an English sentence that says the children are jumping on a trampoline.",
    answer: ["They", "are", "jumping", "on", "a", "trampoline"],
    image: `./assets/images/task-08-dancing.png?v=${ASSET_VERSION}`,
  },
  {
    id: "cleaning-room",
    title: "Cleaning the Room",
    instruction: "Build an English sentence that says the girls are cleaning the room.",
    answer: ["They", "are", "cleaning", "the", "room"],
    image: `./assets/images/task-09-cleaning-room.png?v=${ASSET_VERSION}`,
  },
  {
    id: "painting",
    title: "Painting a Picture",
    instruction: "Build an English sentence that says the boy is painting a picture.",
    answer: ["He", "is", "painting", "a", "picture"],
    image: `./assets/images/task-10-painting.png?v=${ASSET_VERSION}`,
  },
].map((task, index) => ({
  ...task,
  order: index + 1,
  scrambled: shuffleArray([...task.answer]),
}));

const speechTasks = [
  {
    id: "speech-football",
    title: "Playing Football",
    prompt: "Look at the picture and say what the boy is doing in a complete English sentence.",
    example: "The boy is playing football.",
    image: `./assets/images/speech-01-football.png?v=${ASSET_VERSION}`,
    required: [
      ["boy", "kid", "child", "he"],
      ["play", "playing", "plays", "kick", "kicking"],
      ["football", "soccer", "ball"],
    ],
    mustInclude: [1, 2],
    minGroups: 2,
  },
  {
    id: "speech-reading",
    title: "Reading a Book",
    prompt: "Look at the picture and say what the person is doing in English.",
    example: "The woman is reading a book.",
    image: `./assets/images/speech-02-reading.png?v=${ASSET_VERSION}`,
    required: [
      ["woman", "lady", "girl", "she", "person"],
      ["read", "reading", "reads"],
      ["book"],
    ],
    mustInclude: [1],
    minGroups: 2,
  },
  {
    id: "speech-apple",
    title: "Eating an Apple",
    prompt: "Look at the picture and say what the boy is eating in English.",
    example: "The boy is eating an apple.",
    image: `./assets/images/speech-03-apple.png?v=${ASSET_VERSION}`,
    required: [
      ["boy", "kid", "child", "he"],
      ["eat", "eating", "eats"],
      ["apple", "fruit"],
    ],
    mustInclude: [1, 2],
    minGroups: 2,
  },
  {
    id: "speech-guitar",
    title: "Playing the Guitar",
    prompt: "Look at the picture and say what the boy is doing with the musical instrument.",
    example: "The boy is playing the guitar.",
    image: `./assets/images/speech-04-guitar.png?v=${ASSET_VERSION}`,
    required: [
      ["boy", "kid", "child", "he"],
      ["play", "playing", "plays"],
      ["guitar"],
    ],
    mustInclude: [1, 2],
    minGroups: 2,
  },
  {
    id: "speech-laptop",
    title: "Using a Laptop",
    prompt: "Look at the picture and say what the boy is doing with the laptop in English.",
    example: "The boy is using a laptop.",
    image: `./assets/images/speech-05-laptop.png?v=${ASSET_VERSION}`,
    required: [
      ["boy", "kid", "child", "he", "student"],
      ["use", "using", "work", "working", "type", "typing", "study", "studying"],
      ["laptop", "computer"],
    ],
    mustInclude: [1, 2],
    minGroups: 2,
  },
  {
    id: "speech-running",
    title: "Running",
    prompt: "Look at the picture and say what the boy is doing in English.",
    example: "The boy is running.",
    image: `./assets/images/speech-06-running.png?v=${ASSET_VERSION}`,
    required: [
      ["boy", "kid", "child", "he"],
      ["run", "running", "runs"],
    ],
    mustInclude: [1],
    minGroups: 2,
  },
  {
    id: "speech-sleeping",
    title: "Sleeping in Bed",
    prompt: "Look at the picture and say what the boy is doing in a complete English sentence.",
    example: "The boy is sleeping in bed.",
    image: `./assets/images/speech-07-sleeping.png?v=${ASSET_VERSION}`,
    required: [
      ["boy", "kid", "child", "he"],
      ["sleep", "sleeping", "sleeps", "rest", "resting"],
      ["bed", "bedroom"],
    ],
    mustInclude: [1],
    minGroups: 2,
  },
].map((task, index) => ({
  ...task,
  order: index + 1,
}));

const quizTasks = [
  {
    id: "quiz-apple",
    prompt: "Which word names a common red or green fruit?",
    options: ["Apple", "Chair", "Window"],
    correctIndex: 0,
  },
  {
    id: "quiz-reading",
    prompt: "Choose the correct sentence.",
    options: ["He is reading a book.", "He are reading a book.", "He reading a book."],
    correctIndex: 0,
  },
  {
    id: "quiz-color",
    prompt: "Which word is a color?",
    options: ["Blue", "Run", "Milk"],
    correctIndex: 0,
  },
  {
    id: "quiz-she-is",
    prompt: "Complete the sentence: She ___ playing.",
    options: ["is", "are", "am"],
    correctIndex: 0,
  },
  {
    id: "quiz-cat",
    prompt: 'Which animal says "meow"?',
    options: ["Cat", "Dog", "Cow"],
    correctIndex: 0,
  },
  {
    id: "quiz-fruit",
    prompt: "Choose the fruit.",
    options: ["Banana", "Pencil", "Pillow"],
    correctIndex: 0,
  },
  {
    id: "quiz-football",
    prompt: "Complete the sentence: They are ___ football.",
    options: ["playing", "plays", "played"],
    correctIndex: 0,
  },
  {
    id: "quiz-school",
    prompt: "Which one belongs to school?",
    options: ["Notebook", "Carrot", "Blanket"],
    correctIndex: 0,
  },
  {
    id: "quiz-drink",
    prompt: "What do we drink?",
    options: ["Water", "Shoe", "Tree"],
    correctIndex: 0,
  },
  {
    id: "quiz-hello",
    prompt: "Choose the English greeting.",
    options: ["Hello", "Banana", "Jump"],
    correctIndex: 0,
  },
].map((task, index) => ({
  ...task,
  order: index + 1,
}));

const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition || null;
const requestFrame =
  window.requestAnimationFrame?.bind(window) ||
  (() => 0);

const state = {
  activeFeature: "featureOne",
  currentTaskIndex: 0,
  placements: tasks.map((task) => Array(task.answer.length).fill(null)),
  banks: tasks.map((task) => [...task.scrambled]),
  completed: Array(tasks.length).fill(false),
  score: 0,
  drag: null,
  celebrationTimer: null,
  ignoreClickUntil: 0,
  gesture: {
    enabled: false,
    pinchActive: false,
    lastPinch: false,
    lostFrames: 0,
    smoothX: window.innerWidth / 2,
    smoothY: window.innerHeight / 2,
    lastGestureText: "Gesture tracking will start when the camera is on",
  },
  camera: {
    streamStarted: false,
    hands: null,
    cameraFeed: null,
    ownerFeature: "",
  },
  speech: {
    supported: Boolean(SpeechRecognitionCtor),
    recognition: null,
    listening: false,
    fallbackToTyping: false,
    currentTaskIndex: 0,
    completed: Array(speechTasks.length).fill(false),
    score: 0,
    transcript: "",
    hintVisible: false,
  },
  voiceGame: {
    supported: Boolean(SpeechRecognitionCtor),
    recognition: null,
    listening: false,
    fallbackToButtons: false,
    running: false,
    gameOver: false,
    score: 0,
    apples: 0,
    hits: 0,
    lastCommand: "Waiting...",
    heardText: "No command heard yet.",
    commandLog: [],
    playerY: 0,
    velocityY: 0,
    objects: [],
    nextSpawnInMs: 780,
    lastFrameTime: 0,
    loopStarted: false,
    objectSerial: 0,
  },
  quiz: {
    currentTaskIndex: 0,
    answers: Array(quizTasks.length).fill(null),
    score: 0,
    detectedFingers: 0,
    recentFingerCounts: [],
    lastGestureCount: 0,
    holdStartedAt: 0,
    holdProgress: 0,
    gestureLockedUntil: 0,
    autoAdvanceTimer: null,
  },
};

const GESTURE_HOTZONE = {
  xMin: 0.02,
  xMax: 0.98,
  yMin: 0.04,
  yMax: 0.96,
};

const VOICE_GAME_CONFIG = {
  stageWidth: 960,
  playerX: 104,
  playerWidth: 64,
  playerHeight: 76,
  maxLives: 10,
  gravity: 1820,
  jumpVelocity: 760,
  runSpeed: 205,
  groundBottom: 58,
  initialSpawnDelayMin: 3200,
  initialSpawnDelayMax: 4200,
  spawnDelayMin: 2800,
  spawnDelayMax: 4200,
  crateSpawnOffsetMin: 280,
  crateSpawnOffsetMax: 520,
  appleOffsetMin: 140,
  appleOffsetMax: 220,
  appleSpawnChance: 0.45,
};

const elements = {
  featureOneScreen: document.querySelector("#featureOneScreen"),
  featureTwoScreen: document.querySelector("#featureTwoScreen"),
  featureThreeScreen: document.querySelector("#featureThreeScreen"),
  featureFourScreen: document.querySelector("#featureFourScreen"),
  taskTitle: document.querySelector("#taskTitle"),
  taskInstruction: document.querySelector("#taskInstruction"),
  taskImage: document.querySelector("#taskImage"),
  taskIndexBadge: document.querySelector("#taskIndexBadge"),
  sentenceSlots: document.querySelector("#sentenceSlots"),
  wordBank: document.querySelector("#wordBank"),
  feedbackText: document.querySelector("#feedbackText"),
  celebrationLayer: document.querySelector("#celebrationLayer"),
  scoreValue: document.querySelector("#scoreValue"),
  progressValue: document.querySelector("#progressValue"),
  taskList: document.querySelector("#taskList"),
  pageShell: document.querySelector(".page-shell"),
  gameLayout: document.querySelector(".game-layout"),
  gamePanel: document.querySelector(".game-panel"),
  taskCard: document.querySelector(".task-card"),
  navigationRow: document.querySelector(".navigation-row"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  checkButton: document.querySelector("#checkButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  restartButton: document.querySelector("#restartButton"),
  openSpeechFeatureButton: document.querySelector("#openSpeechFeatureButton"),
  cameraButton: document.querySelector("#cameraButton"),
  cameraStatus: document.querySelector("#cameraStatus"),
  gestureStatus: document.querySelector("#gestureStatus"),
  cameraVideo: document.querySelector("#cameraVideo"),
  cameraCanvas: document.querySelector("#cameraCanvas"),
  cursor: document.querySelector("#cursor"),
  backToFeatureOneButton: document.querySelector("#backToFeatureOneButton"),
  speechListenButton: document.querySelector("#speechListenButton"),
  speechCheckButton: document.querySelector("#speechCheckButton"),
  speechHintButton: document.querySelector("#speechHintButton"),
  speechSupportStatus: document.querySelector("#speechSupportStatus"),
  speechLiveStatus: document.querySelector("#speechLiveStatus"),
  speechTaskTitle: document.querySelector("#speechTaskTitle"),
  speechTaskInstruction: document.querySelector("#speechTaskInstruction"),
  speechTaskImage: document.querySelector("#speechTaskImage"),
  speechTaskIndexBadge: document.querySelector("#speechTaskIndexBadge"),
  speechTranscript: document.querySelector("#speechTranscript"),
  speechTranscriptStatus: document.querySelector("#speechTranscriptStatus"),
  speechManualFallback: document.querySelector("#speechManualFallback"),
  speechFeedbackText: document.querySelector("#speechFeedbackText"),
  speechScoreValue: document.querySelector("#speechScoreValue"),
  speechProgressValue: document.querySelector("#speechProgressValue"),
  speechTaskList: document.querySelector("#speechTaskList"),
  speechModelText: document.querySelector("#speechModelText"),
  speechPrevButton: document.querySelector("#speechPrevButton"),
  speechNextButton: document.querySelector("#speechNextButton"),
  openVoiceGameFeatureButton: document.querySelector("#openVoiceGameFeatureButton"),
  backToFeatureTwoButton: document.querySelector("#backToFeatureTwoButton"),
  voiceGameListenButton: document.querySelector("#voiceGameListenButton"),
  voiceGameResetButton: document.querySelector("#voiceGameResetButton"),
  voiceGameControlHint: document.querySelector("#voiceGameControlHint"),
  voiceGameCommandButtons: document.querySelectorAll("[data-voice-command-button]"),
  voiceGameSupportStatus: document.querySelector("#voiceGameSupportStatus"),
  voiceGameLiveStatus: document.querySelector("#voiceGameLiveStatus"),
  voiceGameLastCommand: document.querySelector("#voiceGameLastCommand"),
  voiceGameScoreValue: document.querySelector("#voiceGameScoreValue"),
  voiceGameApplesValue: document.querySelector("#voiceGameApplesValue"),
  voiceGameHitsValue: document.querySelector("#voiceGameHitsValue"),
  voiceGameStage: document.querySelector("#voiceGameStage"),
  voiceGameObjects: document.querySelector("#voiceGameObjects"),
  voiceGamePlayer: document.querySelector("#voiceGamePlayer"),
  voiceGameStateText: document.querySelector("#voiceGameStateText"),
  voiceGameHeardText: document.querySelector("#voiceGameHeardText"),
  voiceGameCommandLog: document.querySelector("#voiceGameCommandLog"),
  openFingerQuizFeatureButton: document.querySelector("#openFingerQuizFeatureButton"),
  backToFeatureThreeButton: document.querySelector("#backToFeatureThreeButton"),
  quizCameraButton: document.querySelector("#quizCameraButton"),
  quizResetButton: document.querySelector("#quizResetButton"),
  quizCameraStatus: document.querySelector("#quizCameraStatus"),
  quizGestureStatus: document.querySelector("#quizGestureStatus"),
  quizCameraVideo: document.querySelector("#quizCameraVideo"),
  quizCameraCanvas: document.querySelector("#quizCameraCanvas"),
  quizTaskTitle: document.querySelector("#quizTaskTitle"),
  quizQuestionNumber: document.querySelector("#quizQuestionNumber"),
  quizQuestionText: document.querySelector("#quizQuestionText"),
  quizHintText: document.querySelector("#quizHintText"),
  quizDetectedValue: document.querySelector("#quizDetectedValue"),
  quizDetectedText: document.querySelector("#quizDetectedText"),
  quizFeedbackText: document.querySelector("#quizFeedbackText"),
  quizScoreValue: document.querySelector("#quizScoreValue"),
  quizProgressValue: document.querySelector("#quizProgressValue"),
  quizOptions: document.querySelector("#quizOptions"),
  quizPrevButton: document.querySelector("#quizPrevButton"),
  quizNextButton: document.querySelector("#quizNextButton"),
  quizQuestionList: document.querySelector("#quizQuestionList"),
};

bootstrap();

function bootstrap() {
  renderTaskList();
  renderCurrentTask();
  renderSpeechTask();
  resetVoiceGame();
  renderQuiz();
  bindUI();
  initSpeechRecognition();
  initVoiceGameRecognition();
  startVoiceGameLoop();
  showFeature("featureOne");
  window.addEventListener("resize", handleResize);
  handleResize();
}

function bindUI() {
  elements.prevButton.addEventListener("click", () => moveTask(-1));
  elements.nextButton.addEventListener("click", () => moveTask(1));
  elements.checkButton.addEventListener("click", checkCurrentTask);
  elements.shuffleButton.addEventListener("click", shuffleCurrentTask);
  elements.restartButton.addEventListener("click", restartCurrentTask);
  elements.cameraButton.addEventListener("click", toggleCamera);
  elements.openSpeechFeatureButton.addEventListener("click", () => showFeature("featureTwo"));
  elements.backToFeatureOneButton.addEventListener("click", () => showFeature("featureOne"));
  elements.speechListenButton.addEventListener("click", toggleSpeechListening);
  elements.speechCheckButton.addEventListener("click", checkSpeechTask);
  elements.speechHintButton.addEventListener("click", toggleSpeechHint);
  elements.speechPrevButton.addEventListener("click", () => moveSpeechTask(-1));
  elements.speechNextButton.addEventListener("click", () => moveSpeechTask(1));
  elements.openVoiceGameFeatureButton.addEventListener("click", () => showFeature("featureThree"));
  elements.backToFeatureTwoButton.addEventListener("click", () => showFeature("featureTwo"));
  elements.openFingerQuizFeatureButton.addEventListener("click", () => showFeature("featureFour"));
  elements.backToFeatureThreeButton.addEventListener("click", () => showFeature("featureThree"));
  elements.voiceGameListenButton.addEventListener("click", toggleVoiceGameListening);
  elements.voiceGameResetButton.addEventListener("click", resetVoiceGame);
  elements.quizCameraButton.addEventListener("click", toggleCamera);
  elements.quizResetButton.addEventListener("click", resetQuiz);
  elements.quizPrevButton.addEventListener("click", () => moveQuizTask(-1));
  elements.quizNextButton.addEventListener("click", () => moveQuizTask(1));
  elements.voiceGameCommandButtons.forEach((button) => {
    button.addEventListener("click", () => {
      triggerVoiceGameButtonCommand(button.dataset.voiceCommandButton);
    });
  });
  elements.speechTranscript.addEventListener("input", () => {
    state.speech.transcript = elements.speechTranscript.value;
  });
}

function showFeature(featureName) {
  state.activeFeature = featureName;
  const showFirst = featureName === "featureOne";
  const showSecond = featureName === "featureTwo";
  const showThird = featureName === "featureThree";
  const showFourth = featureName === "featureFour";

  elements.featureOneScreen.classList.toggle("active", showFirst);
  elements.featureTwoScreen.classList.toggle("active", showSecond);
  elements.featureThreeScreen.classList.toggle("active", showThird);
  elements.featureFourScreen.classList.toggle("active", showFourth);

  if (state.camera.streamStarted && state.camera.ownerFeature !== featureName) {
    stopCamera();
  }

  if (!showFirst) {
    elements.cursor.classList.add("hidden");
  }

  if (!showSecond && state.speech.listening) {
    stopSpeechListening();
  }

  if (!showThird && state.voiceGame.listening) {
    stopVoiceGameListening();
  }

  if (!showFourth) {
    clearQuizAutoAdvance();
    resetQuizGestureTracking();
  }

  if (showSecond) {
    renderSpeechTask();
  }

  if (showThird) {
    renderVoiceGame();
  }

  if (showFourth) {
    renderQuiz();
    setQuizIdleStatuses();
  }

  if (showFirst || showFourth) {
    handleResize();
  }
}

function currentSpeechTask() {
  return speechTasks[state.speech.currentTaskIndex];
}

function countSpeechCompleted() {
  return state.speech.completed.filter(Boolean).length;
}

function renderSpeechTask() {
  const task = currentSpeechTask();
  const speechImageWrap = elements.speechTaskImage.closest(".task-image-wrap");

  elements.speechTaskTitle.textContent = `${task.order} / ${speechTasks.length}`;
  elements.speechTaskInstruction.textContent = task.prompt;
  elements.speechTaskImage.innerHTML = taskVisualMarkup(task, false);
  speechImageWrap.classList.toggle("task-image-wrap-photo", Boolean(task.image));
  elements.speechTaskIndexBadge.textContent = String(task.order).padStart(2, "0");
  elements.speechScoreValue.textContent = String(state.speech.score);
  elements.speechProgressValue.textContent = `${countSpeechCompleted()}/${speechTasks.length}`;
  elements.speechPrevButton.disabled = state.speech.currentTaskIndex === 0;
  elements.speechNextButton.disabled = state.speech.currentTaskIndex === speechTasks.length - 1;
  elements.speechModelText.textContent = `Example: ${task.example}`;
  elements.speechModelText.classList.toggle("hidden", !state.speech.hintVisible);
  elements.speechHintButton.textContent = state.speech.hintVisible
    ? "Hide Example Sentence"
    : "Show Example Sentence";
  elements.speechTranscript.value = state.speech.transcript;
  elements.speechManualFallback.classList.toggle(
    "hidden",
    !(state.speech.fallbackToTyping || !state.speech.supported),
  );

  setSpeechFeedback("Say the action in the picture aloud in English.", "");
  if (state.speech.fallbackToTyping || !state.speech.supported) {
    setSpeechLiveStatus("Manual typing mode", "status-idle");
    setSpeechTranscriptStatus(
      "If the microphone does not start, you can type the sentence and check it manually.",
      "status-error-text",
    );
  } else {
    if (!state.speech.listening) {
      setSpeechLiveStatus("Not listening yet", "status-idle");
    }
    setSpeechTranscriptStatus(
      "Press the microphone button and say a sentence about the picture.",
      "",
    );
  }

  renderSpeechTaskList();
  updateSpeechButtons();
}

function renderSpeechTaskList() {
  elements.speechTaskList.innerHTML = speechTasks
    .map((task, index) => {
      const active = index === state.speech.currentTaskIndex;
      const done = state.speech.completed[index];
      return `
        <button class="task-list-item ${active ? "active" : ""} ${done ? "done" : ""}" data-speech-task-index="${index}" type="button">
          <div class="task-mini">${taskVisualMarkup(task, true)}</div>
          <div class="task-list-copy">
            <strong>${task.order}. ${task.title}</strong>
            <span>Checked by meaning</span>
          </div>
          <span class="completion-dot"></span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-speech-task-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.speech.currentTaskIndex = Number(button.dataset.speechTaskIndex);
      state.speech.transcript = "";
      state.speech.hintVisible = false;
      renderSpeechTask();
    });
  });
}

function moveSpeechTask(direction) {
  const nextIndex = state.speech.currentTaskIndex + direction;
  if (nextIndex < 0 || nextIndex >= speechTasks.length) {
    return;
  }

  if (state.speech.listening) {
    stopSpeechListening();
  }

  state.speech.currentTaskIndex = nextIndex;
  state.speech.transcript = "";
  state.speech.hintVisible = false;
  renderSpeechTask();
}

function toggleSpeechHint() {
  state.speech.hintVisible = !state.speech.hintVisible;
  elements.speechModelText.classList.toggle("hidden", !state.speech.hintVisible);
  elements.speechHintButton.textContent = state.speech.hintVisible
    ? "Hide Example Sentence"
    : "Show Example Sentence";
}

function initSpeechRecognition() {
  if (!SpeechRecognitionCtor) {
    setSpeechFallbackMode(true);
    updateSpeechButtons();
    return;
  }

  const recognition = new SpeechRecognitionCtor();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    state.speech.listening = true;
    setSpeechFallbackMode(false);
    setSpeechLiveStatus("Listening...", "status-live");
    setSpeechTranscriptStatus("Say a complete sentence in English.", "status-live-text");
    updateSpeechButtons();
  };

  recognition.onresult = (event) => {
    let finalText = "";
    let interimText = "";

    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const transcript = event.results[index][0].transcript.trim();
      if (event.results[index].isFinal) {
        finalText += `${transcript} `;
      } else {
        interimText += `${transcript} `;
      }
    }

    if (finalText.trim()) {
      state.speech.transcript = finalText.trim();
      elements.speechTranscript.value = state.speech.transcript;
    }

    if (interimText.trim()) {
      setSpeechTranscriptStatus(`Listening: ${interimText.trim()}`, "status-live-text");
    }
  };

  recognition.onerror = (event) => {
    state.speech.listening = false;
    updateSpeechButtons();

    if (event.error === "no-speech") {
      setSpeechLiveStatus("No speech heard", "status-idle");
      setSpeechTranscriptStatus(
        "Speech was not clear. Try again or type the sentence manually.",
        "status-error-text",
      );
      return;
    }

    if (event.error === "aborted") {
      setSpeechLiveStatus("Listening stopped", "status-idle");
      return;
    }

    if (shouldUseVoiceFallback(event.error)) {
      setSpeechFallbackMode(true, event.error);
      setSpeechLiveStatus("Manual typing mode", "status-idle");
      setSpeechTranscriptStatus(getSpeechErrorMessage(event.error), "status-error-text");
      return;
    }

    setSpeechLiveStatus("Microphone error", "status-error");
    setSpeechTranscriptStatus(getSpeechErrorMessage(event.error), "status-error-text");
  };

  recognition.onend = () => {
    const wasListening = state.speech.listening;
    state.speech.listening = false;
    updateSpeechButtons();

    if (!wasListening) {
      return;
    }

    setSpeechLiveStatus("Listening finished", "status-idle");
    if (state.speech.transcript.trim()) {
      setSpeechTranscriptStatus("Your answer was recorded. You can check it now.", "");
    } else {
      setSpeechTranscriptStatus("Your voice was not clear. Try again.", "status-error-text");
    }
  };

  state.speech.recognition = recognition;
  setSpeechFallbackMode(false);
}

function toggleSpeechListening() {
  if (!state.speech.supported || !state.speech.recognition) {
    setSpeechFallbackMode(true);
    setSpeechLiveStatus("Manual typing mode", "status-idle");
    setSpeechTranscriptStatus(
      "The microphone did not fully start in this browser. You can type the sentence manually.",
      "status-error-text",
    );
    return;
  }

  if (state.speech.listening) {
    stopSpeechListening();
    return;
  }

  state.speech.transcript = "";
  elements.speechTranscript.value = "";
  setSpeechFeedback("Say the action in the picture aloud in English.", "");

  try {
    state.speech.recognition.start();
  } catch (error) {
    console.error(error);
    state.speech.listening = false;
    setSpeechFallbackMode(true);
    setSpeechLiveStatus("Manual typing mode", "status-idle");
    setSpeechTranscriptStatus(
      "The microphone did not start. You can type the sentence and check it manually.",
      "status-error-text",
    );
    updateSpeechButtons();
  }
}

function stopSpeechListening() {
  if (state.speech.recognition && state.speech.listening) {
    state.speech.recognition.stop();
  }
}

function updateSpeechButtons() {
  elements.speechListenButton.textContent = state.speech.listening
    ? "Stop Listening"
    : state.speech.fallbackToTyping
      ? "Try Microphone Again"
      : "Start Speaking";
  elements.speechListenButton.disabled = !state.speech.supported;
}

function checkSpeechTask() {
  const task = currentSpeechTask();
  const transcript = elements.speechTranscript.value.trim();
  state.speech.transcript = transcript;

  if (!transcript) {
    setSpeechFeedback("First say a sentence or type your answer.", "feedback-error");
    setSpeechTranscriptStatus("The answer is empty. Say an English sentence.", "status-error-text");
    return;
  }

  const evaluation = evaluateSpeechMeaning(task, transcript);
  if (evaluation.passed) {
    if (!state.speech.completed[state.speech.currentTaskIndex]) {
      state.speech.completed[state.speech.currentTaskIndex] = true;
      state.speech.score += 10;
    }

    setSpeechFeedback("Great job! The system accepted the meaning.", "feedback-success");
    setSpeechLiveStatus("Meaning recognized correctly", "status-live");
  } else if (evaluation.partial) {
    setSpeechFeedback(evaluation.message, "feedback-warm");
    setSpeechLiveStatus("The answer is close", "status-muted");
  } else {
    setSpeechFeedback(evaluation.message, "feedback-error");
    setSpeechLiveStatus("Try again", "status-error");
  }

  elements.speechScoreValue.textContent = String(state.speech.score);
  elements.speechProgressValue.textContent = `${countSpeechCompleted()}/${speechTasks.length}`;
  renderSpeechTaskList();
}

function setSpeechFeedback(message, tone) {
  elements.speechFeedbackText.textContent = message;
  elements.speechFeedbackText.className = `feedback-text ${tone}`;
}

function setSpeechSupportStatus(text, tone) {
  elements.speechSupportStatus.textContent = text;
  elements.speechSupportStatus.className = `status-pill ${tone}`;
}

function setSpeechLiveStatus(text, tone) {
  elements.speechLiveStatus.textContent = text;
  elements.speechLiveStatus.className = `status-pill ${tone}`;
}

function setSpeechTranscriptStatus(text, toneClass) {
  elements.speechTranscriptStatus.textContent = text;
  elements.speechTranscriptStatus.className = `speech-transcript-status ${toneClass}`.trim();
}

function shouldUseVoiceFallback(errorCode) {
  return ["network", "service-not-allowed", "not-allowed", "audio-capture"].includes(errorCode);
}

function setSpeechFallbackMode(active, errorCode = "") {
  state.speech.fallbackToTyping = active;
  elements.speechManualFallback.classList.toggle("hidden", !(active || !state.speech.supported));

  if (!active) {
    if (state.speech.supported) {
      setSpeechSupportStatus("You can answer with the microphone", "status-live");
    } else {
      setSpeechSupportStatus(
        "The microphone does not fully work in this browser, but you can type your answer manually",
        "status-muted",
      );
    }
    return;
  }

  const supportText =
    errorCode === "not-allowed"
      ? "Microphone permission was denied. You can type and check your answer manually."
      : "The browser voice service did not work. You can type and check your answer manually.";
  setSpeechSupportStatus(supportText, "status-muted");
}

function evaluateSpeechMeaning(task, transcript) {
  const normalized = normalizeSpeechText(transcript);
  const matches = task.required.map((group) => matchesSpeechGroup(normalized, group));
  const matchedCount = matches.filter(Boolean).length;
  const mustIncludeOk = task.mustInclude.every((index) => matches[index]);
  const partialThreshold = Math.max(1, task.minGroups - 1);

  if (mustIncludeOk && matchedCount >= task.minGroups) {
    return {
      passed: true,
      partial: false,
      message: "The meaning was recognized correctly.",
    };
  }

  if (matchedCount >= partialThreshold || task.mustInclude.some((index) => matches[index])) {
    return {
      passed: false,
      partial: true,
      message: `That was close. Try to get nearer to this example: ${task.example}`,
    };
  }

  return {
    passed: false,
    partial: false,
    message: "The meaning does not match the picture yet. Try another complete sentence.",
  };
}

function normalizeSpeechText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesSpeechGroup(normalizedText, group) {
  return group.some((variant) => containsSpeechVariant(normalizedText, variant));
}

function containsSpeechVariant(normalizedText, variant) {
  const normalizedVariant = normalizeSpeechText(variant);
  if (!normalizedVariant) {
    return false;
  }

  const textTokens = normalizedText.split(" ").filter(Boolean).map(stemSpeechToken);
  const variantTokens = normalizedVariant.split(" ").filter(Boolean).map(stemSpeechToken);

  if (variantTokens.length === 1) {
    return textTokens.includes(variantTokens[0]);
  }

  const stemmedText = textTokens.join(" ");
  return stemmedText.includes(variantTokens.join(" "));
}

function stemSpeechToken(token) {
  return token
    .replace(/ing$/g, "")
    .replace(/ed$/g, "")
    .replace(/es$/g, "")
    .replace(/s$/g, "");
}

function getSpeechErrorMessage(code) {
  const messages = {
    "audio-capture": "No microphone was found. Check your device.",
    "not-allowed": "Microphone permission was denied.",
    "service-not-allowed": "Speech recognition service is not allowed.",
    "network": "The browser voice service did not respond. This often happens in Brave or when internet access is limited.",
    "no-speech": "Speech was not clear.",
  };

  return messages[code] || "An error occurred during speech recognition.";
}

function currentQuizTask() {
  return quizTasks[state.quiz.currentTaskIndex];
}

function countQuizAnswered() {
  return state.quiz.answers.filter((answer) => answer !== null).length;
}

function recalculateQuizScore() {
  state.quiz.score = state.quiz.answers.reduce((total, answer, index) => {
    return total + (answer === quizTasks[index].correctIndex ? 10 : 0);
  }, 0);
}

function clearQuizAutoAdvance() {
  if (state.quiz.autoAdvanceTimer) {
    clearTimeout(state.quiz.autoAdvanceTimer);
    state.quiz.autoAdvanceTimer = null;
  }
}

function resetQuizGestureTracking() {
  state.quiz.detectedFingers = 0;
  state.quiz.recentFingerCounts = [];
  state.quiz.lastGestureCount = 0;
  state.quiz.holdStartedAt = 0;
  state.quiz.holdProgress = 0;
}

function setQuizIdleStatuses() {
  if (state.camera.streamStarted && state.camera.ownerFeature === "featureFour") {
    return;
  }

  setCameraStatus("Camera off", "status-idle", "featureFour");
  setGestureStatus("Turn on the camera and show 1, 2, or 3 fingers", "status-muted", "featureFour");
}

function getQuizFeedbackState(taskIndex = state.quiz.currentTaskIndex) {
  const task = quizTasks[taskIndex];
  const answer = state.quiz.answers[taskIndex];

  if (answer === null) {
    return {
      text:
        countQuizAnswered() === quizTasks.length
          ? `Quiz complete. Total score: ${state.quiz.score}/${quizTasks.length * 10}.`
          : "Turn on the camera and answer with 1, 2, or 3 fingers.",
      tone: "",
    };
  }

  const baseMessage =
    answer === task.correctIndex
      ? "Correct answer! Well done!"
      : `Incorrect. Correct answer: ${task.correctIndex + 1}) ${task.options[task.correctIndex]}`;

  return {
    text:
      countQuizAnswered() === quizTasks.length
        ? `${baseMessage} Quiz complete. Total score: ${state.quiz.score}/${quizTasks.length * 10}.`
        : baseMessage,
    tone: answer === task.correctIndex ? "feedback-success" : "feedback-error",
  };
}

function setQuizFeedback(message, tone) {
  elements.quizFeedbackText.textContent = message;
  elements.quizFeedbackText.className = `feedback-text ${tone}`.trim();
}

function updateQuizDetectedDisplay() {
  const cameraReady = state.camera.streamStarted && state.camera.ownerFeature === "featureFour";
  elements.quizDetectedValue.textContent = String(state.quiz.detectedFingers || 0);

  if (!cameraReady) {
    elements.quizDetectedText.textContent = "Turn on the camera, then show 1, 2, or 3 fingers.";
    return;
  }

  if (performance.now() < state.quiz.gestureLockedUntil && state.quiz.detectedFingers) {
    elements.quizDetectedText.textContent = `Your answer was saved as option ${state.quiz.detectedFingers}.`;
    return;
  }

  if (state.quiz.detectedFingers >= 1 && state.quiz.detectedFingers <= 3) {
    const holdPercent = Math.max(0, Math.min(100, Math.round(state.quiz.holdProgress * 100)));
    elements.quizDetectedText.textContent =
      holdPercent >= 100
        ? `${state.quiz.detectedFingers} finger(s) recognized.`
        : `${state.quiz.detectedFingers} finger(s) recognized. Keep holding: ${holdPercent}%`;
    return;
  }

  elements.quizDetectedText.textContent = "Show 1, 2, or 3 fingers to choose an answer.";
}

function renderQuizQuestionList() {
  elements.quizQuestionList.innerHTML = quizTasks
    .map((task, index) => {
      const active = index === state.quiz.currentTaskIndex;
      const answer = state.quiz.answers[index];
      const answered = answer !== null;
      const correct = answer === task.correctIndex;
      return `
        <button class="task-list-item ${active ? "active" : ""} ${answered ? "done" : ""} ${answered && !correct ? "quiz-wrong" : ""}" data-quiz-task-index="${index}" type="button">
          <div class="task-mini quiz-mini-badge">${String(task.order).padStart(2, "0")}</div>
          <div class="task-list-copy">
            <strong>${task.order}. Question</strong>
            <span>${answered ? (correct ? "Correct" : "Answered") : "Waiting for answer"}</span>
          </div>
          <span class="completion-dot"></span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-quiz-task-index]").forEach((button) => {
    button.addEventListener("click", () => {
      clearQuizAutoAdvance();
      resetQuizGestureTracking();
      state.quiz.currentTaskIndex = Number(button.dataset.quizTaskIndex);
      renderQuiz();
    });
  });
}

function renderQuiz() {
  const task = currentQuizTask();
  const selectedAnswer = state.quiz.answers[state.quiz.currentTaskIndex];
  const feedback = getQuizFeedbackState();

  elements.quizTaskTitle.textContent = `${task.order} / ${quizTasks.length}`;
  elements.quizQuestionNumber.textContent = String(task.order).padStart(2, "0");
  elements.quizQuestionText.textContent = task.prompt;
  elements.quizHintText.textContent =
    selectedAnswer === null
      ? "Show 1, 2, or 3 fingers and hold for a moment."
      : "Your answer is saved. You can change it if you want.";
  elements.quizScoreValue.textContent = String(state.quiz.score);
  elements.quizProgressValue.textContent = `${countQuizAnswered()}/${quizTasks.length}`;
  elements.quizPrevButton.disabled = state.quiz.currentTaskIndex === 0;
  elements.quizNextButton.disabled = state.quiz.currentTaskIndex === quizTasks.length - 1;

  elements.quizOptions.innerHTML = task.options
    .map((option, index) => {
      const isSelected = selectedAnswer === index;
      const isCorrect = selectedAnswer !== null && index === task.correctIndex;
      const isWrongSelected = isSelected && selectedAnswer !== task.correctIndex;

      return `
        <button
          class="quiz-option ${isSelected ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isWrongSelected ? "wrong" : ""}"
          data-quiz-option-index="${index}"
          type="button"
        >
          <span class="quiz-option-index">${index + 1}</span>
          <span class="quiz-option-text">${option}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-quiz-option-index]").forEach((button) => {
    button.addEventListener("click", () => {
      selectQuizAnswer(Number(button.dataset.quizOptionIndex), "click");
    });
  });

  setQuizFeedback(feedback.text, feedback.tone);
  updateQuizDetectedDisplay();
  renderQuizQuestionList();
}

function moveQuizTask(direction) {
  const nextIndex = state.quiz.currentTaskIndex + direction;
  if (nextIndex < 0 || nextIndex >= quizTasks.length) {
    return;
  }

  clearQuizAutoAdvance();
  resetQuizGestureTracking();
  state.quiz.currentTaskIndex = nextIndex;
  renderQuiz();
}

function scheduleQuizAutoAdvance() {
  clearQuizAutoAdvance();

  if (state.quiz.currentTaskIndex >= quizTasks.length - 1) {
    renderQuiz();
    return;
  }

  state.quiz.autoAdvanceTimer = setTimeout(() => {
    state.quiz.currentTaskIndex += 1;
    state.quiz.autoAdvanceTimer = null;
    resetQuizGestureTracking();
    renderQuiz();
  }, 1200);
}

function selectQuizAnswer(optionIndex, source = "gesture") {
  const now = performance.now();
  clearQuizAutoAdvance();
  state.quiz.answers[state.quiz.currentTaskIndex] = optionIndex;
  recalculateQuizScore();

  if (source === "gesture") {
    state.quiz.detectedFingers = optionIndex + 1;
    state.quiz.holdProgress = 1;
    state.quiz.gestureLockedUntil = now + 1200;
  }

  renderQuiz();

  if (source === "gesture") {
    scheduleQuizAutoAdvance();
  }
}

function resetQuiz() {
  clearQuizAutoAdvance();
  state.quiz.currentTaskIndex = 0;
  state.quiz.answers = Array(quizTasks.length).fill(null);
  state.quiz.score = 0;
  state.quiz.gestureLockedUntil = 0;
  resetQuizGestureTracking();
  renderQuiz();
  setQuizIdleStatuses();
}

function setVoiceGameFallbackMode(active, errorCode = "") {
  state.voiceGame.fallbackToButtons = active || !state.voiceGame.supported;

  if (!state.voiceGame.supported) {
    setVoiceGameSupportStatus("Voice service is unavailable here. Use the buttons below.", "status-muted");
    return;
  }

  if (!active) {
    setVoiceGameSupportStatus("Voice commands ready", "status-live");
    return;
  }

  const supportText =
    errorCode === "not-allowed"
      ? "Microphone permission was denied. Use the buttons below."
      : "The browser voice service is unavailable. Use the buttons below or try again.";
  setVoiceGameSupportStatus(supportText, "status-muted");
}

function initVoiceGameRecognition() {
  if (!SpeechRecognitionCtor) {
    setVoiceGameFallbackMode(true);
    updateVoiceGameButtons();
    return;
  }

  const recognition = new SpeechRecognitionCtor();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    setVoiceGameFallbackMode(false);
    setVoiceGameLiveStatus('Listening... say "forward", "jump", or "stop"', "status-live");
    updateVoiceGameButtons();
  };

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript.trim())
      .filter(Boolean)
      .join(" ")
      .trim();

    if (!transcript) {
      return;
    }

    handleVoiceGameSpeech(transcript);
  };

  recognition.onerror = (event) => {
    if (event.error === "no-speech" && state.voiceGame.listening) {
      setVoiceGameLiveStatus('Still listening... say "forward", "jump", or "stop"', "status-muted");
      setVoiceGameStateText("Your voice was not clear. Say the command again.");
      return;
    }

    if (event.error === "aborted" && !state.voiceGame.listening) {
      updateVoiceGameButtons();
      return;
    }

    if (shouldUseVoiceFallback(event.error)) {
      setVoiceGameFallbackMode(true, event.error);
      setVoiceGameLiveStatus("Button controls enabled", "status-idle");
      setVoiceGameStateText(`${getVoiceGameErrorMessage(event.error)} Use the FORWARD, JUMP, or STOP buttons below.`);
      state.voiceGame.listening = false;
      updateVoiceGameButtons();
      return;
    }

    setVoiceGameLiveStatus("Voice control error", "status-error");
    setVoiceGameStateText(getVoiceGameErrorMessage(event.error));
    state.voiceGame.listening = false;
    updateVoiceGameButtons();
  };

  recognition.onend = () => {
    if (state.voiceGame.listening && state.activeFeature === "featureThree") {
      updateVoiceGameButtons();
      setTimeout(() => {
        if (state.voiceGame.listening && state.activeFeature === "featureThree") {
          try {
            recognition.start();
          } catch (error) {
            console.error(error);
          }
        }
      }, 220);
      return;
    }

    updateVoiceGameButtons();
  };

  state.voiceGame.recognition = recognition;
  setVoiceGameFallbackMode(false);
}

function toggleVoiceGameListening() {
  if (!state.voiceGame.supported || !state.voiceGame.recognition) {
    setVoiceGameFallbackMode(true);
    setVoiceGameLiveStatus("Button controls enabled", "status-idle");
    setVoiceGameStateText("Voice service is unavailable here. Use the FORWARD, JUMP, and STOP buttons.");
    return;
  }

  if (state.voiceGame.listening) {
    stopVoiceGameListening();
    return;
  }

  state.voiceGame.listening = true;
  setVoiceGameLiveStatus('Listening... say "forward", "jump", or "stop"', "status-live");

  try {
    state.voiceGame.recognition.start();
  } catch (error) {
    console.error(error);
    state.voiceGame.listening = false;
    setVoiceGameFallbackMode(true);
    setVoiceGameLiveStatus("Button controls enabled", "status-idle");
    setVoiceGameStateText("The microphone did not start. Use the FORWARD, JUMP, and STOP buttons or try again.");
  }

  updateVoiceGameButtons();
}

function stopVoiceGameListening() {
  state.voiceGame.listening = false;
  if (state.voiceGame.recognition) {
    try {
      state.voiceGame.recognition.stop();
    } catch (error) {
      console.error(error);
    }
  }
  setVoiceGameLiveStatus('Voice control stopped. Turn it on again and say "forward", "jump", or "stop".', "status-idle");
  updateVoiceGameButtons();
}

function updateVoiceGameButtons() {
  elements.voiceGameListenButton.textContent = state.voiceGame.listening
    ? "Stop Voice Control"
    : state.voiceGame.fallbackToButtons
      ? "Try Voice Control Again"
      : "Start Voice Control";
  elements.voiceGameListenButton.disabled = !state.voiceGame.supported;
}

function resetVoiceGame() {
  state.voiceGame.running = false;
  state.voiceGame.gameOver = false;
  state.voiceGame.score = 0;
  state.voiceGame.apples = 0;
  state.voiceGame.hits = 0;
  state.voiceGame.lastCommand = "Waiting...";
  state.voiceGame.heardText = "No command heard yet.";
  state.voiceGame.playerY = 0;
  state.voiceGame.velocityY = 0;
  state.voiceGame.objects = [];
  state.voiceGame.nextSpawnInMs = getVoiceGameSpawnDelay(true);
  state.voiceGame.commandLog = [];
  state.voiceGame.objectSerial = 0;
  spawnVoiceGameSet();
  renderVoiceGame();
  setVoiceGameStateText('Game restarted. Say "forward" to start moving.');
  setVoiceGameLiveStatus(
    state.voiceGame.listening
      ? 'Listening... say "forward", "jump", or "stop"'
      : state.voiceGame.fallbackToButtons
        ? "Button controls ready"
        : 'Say "forward", "jump", or "stop"',
    state.voiceGame.listening ? "status-live" : "status-idle",
  );
}

function renderVoiceGame() {
  elements.voiceGameScoreValue.textContent = String(state.voiceGame.score);
  elements.voiceGameApplesValue.textContent = String(state.voiceGame.apples);
  elements.voiceGameHitsValue.textContent = String(getVoiceGameRemainingLives());
  elements.voiceGameLastCommand.textContent = state.voiceGame.lastCommand;
  elements.voiceGameHeardText.textContent = state.voiceGame.heardText;
  renderVoiceGameCommandLog();
  renderVoiceGamePlayer();
  renderVoiceGameObjects();
  updateVoiceGameButtons();
}

function renderVoiceGamePlayer() {
  elements.voiceGamePlayer.style.transform = `translateY(${-state.voiceGame.playerY}px)`;
  elements.voiceGamePlayer.classList.toggle("moving", state.voiceGame.running);
}

function renderVoiceGameObjects() {
  elements.voiceGameObjects.innerHTML = state.voiceGame.objects
    .map((object) => {
      if (object.type === "apple") {
        return `
          <div class="voice-game-object apple" style="transform: translate(${object.x}px, 0); bottom: ${VOICE_GAME_CONFIG.groundBottom + object.y}px;" data-voice-object-id="${object.id}">
            <span>🍎</span>
          </div>
        `;
      }

      return `
        <div class="voice-game-object crate" style="transform: translate(${object.x}px, 0); bottom: ${VOICE_GAME_CONFIG.groundBottom + object.y}px;" data-voice-object-id="${object.id}"></div>
      `;
    })
    .join("");
}

function renderVoiceGameCommandLog() {
  if (!state.voiceGame.commandLog.length) {
    elements.voiceGameCommandLog.innerHTML = "<li><strong>Ready:</strong> The game is waiting for your first command.</li>";
    return;
  }

  elements.voiceGameCommandLog.innerHTML = state.voiceGame.commandLog
    .slice(0, 6)
    .map((entry) => `<li><strong>${entry.command.toUpperCase()}</strong> ${entry.text}</li>`)
    .join("");
}

function startVoiceGameLoop() {
  if (state.voiceGame.loopStarted) {
    return;
  }

  state.voiceGame.loopStarted = true;
  requestFrame(stepVoiceGame);
}

function stepVoiceGame(timestamp) {
  const last = state.voiceGame.lastFrameTime || timestamp;
  const deltaMs = Math.min(32, timestamp - last);
  state.voiceGame.lastFrameTime = timestamp;

  if (state.activeFeature === "featureThree") {
    updateVoiceGamePhysics(deltaMs / 1000);
    renderVoiceGamePlayer();
    renderVoiceGameObjects();
  } else {
    state.voiceGame.lastFrameTime = timestamp;
  }

  requestFrame(stepVoiceGame);
}

function updateVoiceGamePhysics(deltaSeconds) {
  state.voiceGame.velocityY -= VOICE_GAME_CONFIG.gravity * deltaSeconds;
  state.voiceGame.playerY = Math.max(0, state.voiceGame.playerY + state.voiceGame.velocityY * deltaSeconds);

  if (state.voiceGame.playerY === 0 && state.voiceGame.velocityY < 0) {
    state.voiceGame.velocityY = 0;
  }

  if (state.voiceGame.running) {
    const travel = VOICE_GAME_CONFIG.runSpeed * deltaSeconds;
    state.voiceGame.objects.forEach((object) => {
      object.x -= travel;
    });
    state.voiceGame.nextSpawnInMs -= deltaSeconds * 1000;

    if (state.voiceGame.nextSpawnInMs <= 0) {
      spawnVoiceGameSet();
      state.voiceGame.nextSpawnInMs = getVoiceGameSpawnDelay();
    }
  }

  state.voiceGame.objects.forEach((object) => {
    if (object.collected || object.hit) {
      return;
    }

    if (checkVoiceGameCollision(object)) {
      if (object.type === "apple") {
        object.collected = true;
        state.voiceGame.apples += 1;
        state.voiceGame.score += 10;
        setVoiceGameStateText("Great job! You collected an apple.");
      } else {
        object.hit = true;
        state.voiceGame.hits += 1;
        state.voiceGame.score = Math.max(0, state.voiceGame.score - 4);
        triggerVoiceGameHitEffect();

        const remainingLives = getVoiceGameRemainingLives();
        if (remainingLives <= 0) {
          state.voiceGame.gameOver = true;
          state.voiceGame.running = false;
          setVoiceGameStateText('Game over. The dinosaur lost all 10 lives. Press "Restart Game" to try again.');
          setVoiceGameLiveStatus("Game over", "status-error");
        } else {
          setVoiceGameStateText(`You hit an obstacle. ${remainingLives} lives left.`);
          setVoiceGameLiveStatus("Obstacle hit, game continues", "status-live");
        }
      }
    } else if (object.type === "crate" && !object.passed && object.x + object.width < VOICE_GAME_CONFIG.playerX) {
      object.passed = true;
      state.voiceGame.score += 4;
    }
  });

  state.voiceGame.objects = state.voiceGame.objects.filter((object) => object.x + object.width > -80 && !object.collected && !object.hit);
  elements.voiceGameScoreValue.textContent = String(state.voiceGame.score);
  elements.voiceGameApplesValue.textContent = String(state.voiceGame.apples);
  elements.voiceGameHitsValue.textContent = String(getVoiceGameRemainingLives());
}

function spawnVoiceGameSet() {
  const crateX =
    VOICE_GAME_CONFIG.stageWidth +
    VOICE_GAME_CONFIG.crateSpawnOffsetMin +
    Math.random() * (VOICE_GAME_CONFIG.crateSpawnOffsetMax - VOICE_GAME_CONFIG.crateSpawnOffsetMin);
  state.voiceGame.objects.push(createVoiceGameObject("crate", crateX, 0, 48, 48));

  if (Math.random() < VOICE_GAME_CONFIG.appleSpawnChance) {
    const appleHeight = 36 + Math.random() * 78;
    const appleX =
      crateX +
      VOICE_GAME_CONFIG.appleOffsetMin +
      Math.random() * (VOICE_GAME_CONFIG.appleOffsetMax - VOICE_GAME_CONFIG.appleOffsetMin);
    state.voiceGame.objects.push(createVoiceGameObject("apple", appleX, appleHeight, 30, 30));
  }
}

function getVoiceGameRemainingLives() {
  return Math.max(0, VOICE_GAME_CONFIG.maxLives - state.voiceGame.hits);
}

function getVoiceGameSpawnDelay(isInitial = false) {
  const min = isInitial ? VOICE_GAME_CONFIG.initialSpawnDelayMin : VOICE_GAME_CONFIG.spawnDelayMin;
  const max = isInitial ? VOICE_GAME_CONFIG.initialSpawnDelayMax : VOICE_GAME_CONFIG.spawnDelayMax;
  return min + Math.random() * (max - min);
}

function createVoiceGameObject(type, x, y, width, height) {
  state.voiceGame.objectSerial += 1;
  return {
    id: `voice-${state.voiceGame.objectSerial}`,
    type,
    x,
    y,
    width,
    height,
    passed: false,
    collected: false,
    hit: false,
  };
}

function checkVoiceGameCollision(object) {
  const playerLeft = VOICE_GAME_CONFIG.playerX + 8;
  const playerRight = playerLeft + VOICE_GAME_CONFIG.playerWidth - 16;
  const playerBottom = state.voiceGame.playerY + 8;
  const playerTop = playerBottom + VOICE_GAME_CONFIG.playerHeight - 10;

  const objectLeft = object.x;
  const objectRight = object.x + object.width;
  const objectBottom = object.y;
  const objectTop = object.y + object.height;

  const overlapX = playerRight > objectLeft && playerLeft < objectRight;
  const overlapY = playerTop > objectBottom && playerBottom < objectTop;
  return overlapX && overlapY;
}

function handleVoiceGameSpeech(transcript) {
  const normalized = normalizeSpeechText(transcript);
  const command = parseVoiceGameCommand(normalized);

  if (!command) {
    state.voiceGame.heardText = transcript;
    elements.voiceGameHeardText.textContent = transcript;
    setVoiceGameStateText('Command not recognized. Say "forward", "jump", or "stop".');
    pushVoiceGameCommand("unknown", `heard: "${transcript}"`);
    renderVoiceGameCommandLog();
    return;
  }

  applyVoiceGameCommand(command, transcript, `heard: "${transcript}"`);
}

function triggerVoiceGameButtonCommand(command) {
  applyVoiceGameCommand(command, `Button: ${command.toUpperCase()}`, "fallback button pressed");
}

function applyVoiceGameCommand(command, heardText, logText) {
  state.voiceGame.heardText = heardText;
  elements.voiceGameHeardText.textContent = heardText;
  state.voiceGame.lastCommand = command;
  elements.voiceGameLastCommand.textContent = command.toUpperCase();
  pushVoiceGameCommand(command, logText);
  renderVoiceGameCommandLog();

  if (state.voiceGame.gameOver) {
    setVoiceGameStateText('Game over. Press "Restart Game" to start again.');
    setVoiceGameLiveStatus("Game over", "status-error");
    renderVoiceGame();
    return;
  }

  if (command === "forward") {
    state.voiceGame.running = true;
    setVoiceGameLiveStatus("Running forward", "status-live");
    setVoiceGameStateText('Great! The character is running. Say "jump" at the next obstacle.');
  } else if (command === "stop") {
    state.voiceGame.running = false;
    setVoiceGameLiveStatus("Running stopped", "status-idle");
    setVoiceGameStateText('The character stopped. Say "forward" to move again.');
  } else if (command === "jump") {
    if (state.voiceGame.playerY === 0) {
      state.voiceGame.velocityY = VOICE_GAME_CONFIG.jumpVelocity;
      setVoiceGameLiveStatus("Jump command accepted", "status-live");
      setVoiceGameStateText("Nice jump! Keep going.");
    } else {
      setVoiceGameStateText("The character is already jumping.");
    }
  }

  renderVoiceGame();
}

function parseVoiceGameCommand(normalizedText) {
  if (normalizedText.includes("jump")) {
    return "jump";
  }

  if (normalizedText.includes("stop")) {
    return "stop";
  }

  if (normalizedText.includes("forward") || normalizedText.includes("go")) {
    return "forward";
  }

  return "";
}

function pushVoiceGameCommand(command, text) {
  state.voiceGame.commandLog.unshift({ command, text });
  state.voiceGame.commandLog = state.voiceGame.commandLog.slice(0, 6);
}

function triggerVoiceGameHitEffect() {
  elements.voiceGamePlayer.classList.remove("hit");
  // Force restart of the hit animation.
  void elements.voiceGamePlayer.offsetWidth;
  elements.voiceGamePlayer.classList.add("hit");
  setTimeout(() => {
    elements.voiceGamePlayer.classList.remove("hit");
  }, 680);
}

function setVoiceGameSupportStatus(text, tone) {
  elements.voiceGameSupportStatus.textContent = text;
  elements.voiceGameSupportStatus.className = `status-pill ${tone}`;
}

function setVoiceGameLiveStatus(text, tone) {
  elements.voiceGameLiveStatus.textContent = text;
  elements.voiceGameLiveStatus.className = `status-pill ${tone}`;
}

function setVoiceGameStateText(text) {
  elements.voiceGameStateText.textContent = text;
}

function getVoiceGameErrorMessage(code) {
  const messages = {
    "audio-capture": "No microphone was found.",
    "not-allowed": "Microphone permission was denied.",
    "service-not-allowed": "Voice service is not allowed here.",
    "network": "The browser voice service did not respond. This often happens in Brave or when internet access is limited.",
    "no-speech": "Voice was not clear.",
  };

  return messages[code] || "Voice control did not understand the command.";
}

function renderCurrentTask() {
  resetSuccessCelebration();
  const task = currentTask();
  const placements = currentPlacements();
  const bank = currentBank();
  const taskImageWrap = elements.taskImage.closest(".task-image-wrap");

  elements.taskTitle.textContent = `${task.order} / ${tasks.length}`;
  elements.taskInstruction.textContent = task.instruction;
  elements.taskImage.innerHTML = taskVisualMarkup(task, false);
  taskImageWrap.classList.toggle("task-image-wrap-photo", Boolean(task.image));
  elements.taskIndexBadge.textContent = String(task.order).padStart(2, "0");
  elements.scoreValue.textContent = String(state.score);
  elements.progressValue.textContent = `${countCompleted()}/${tasks.length}`;
  elements.prevButton.disabled = state.currentTaskIndex === 0;
  elements.nextButton.disabled = state.currentTaskIndex === tasks.length - 1;

  const isDone = state.completed[state.currentTaskIndex];
  elements.feedbackText.textContent = isDone
    ? "Nice work! The sentence is correct."
    : "Move each word to the correct place.";
  elements.feedbackText.className = `feedback-text ${isDone ? "feedback-success" : ""}`;

  elements.sentenceSlots.innerHTML = task.answer
    .map((_, index) => {
      const word = placements[index];
      return `
        <div class="slot ${word ? "filled" : ""}" data-slot-index="${index}" data-index="${index + 1}">
          ${
            word
              ? `<button class="word-token in-slot" data-word="${word}" data-source="slot" data-slot-index="${index}" type="button">${word}</button>`
              : ""
          }
        </div>
      `;
    })
    .join("");

  elements.wordBank.innerHTML = bank
    .map(
      (word, index) => `
        <button class="word-token" data-word="${word}" data-bank-index="${index}" data-source="bank" type="button">
          ${word}
        </button>
      `,
    )
    .join("");

  bindTokensAndSlots();
  renderTaskList();
}

function renderTaskList() {
  elements.taskList.innerHTML = tasks
    .map((task, index) => {
      const active = index === state.currentTaskIndex;
      const done = state.completed[index];
      return `
        <button class="task-list-item ${active ? "active" : ""} ${done ? "done" : ""}" data-task-index="${index}" type="button">
          <div class="task-mini">${taskVisualMarkup(task, true)}</div>
          <div class="task-list-copy">
            <strong>${task.order}. ${task.title}</strong>
            <span>${task.answer.length} words</span>
          </div>
          <span class="completion-dot"></span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-task-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentTaskIndex = Number(button.dataset.taskIndex);
      renderCurrentTask();
    });
  });
}

function bindTokensAndSlots() {
  document.querySelectorAll(".word-token").forEach((token) => {
    token.addEventListener("pointerdown", (event) => {
      beginPointerDrag(event, token);
    });
    token.addEventListener("click", (event) => {
      event.stopPropagation();
      quickPlaceToken(token);
    });
  });

  document.querySelectorAll(".slot").forEach((slot) => {
    slot.addEventListener("click", (event) => {
      event.stopPropagation();
      if (!slot.dataset.slotIndex) {
        return;
      }
      const slotIndex = Number(slot.dataset.slotIndex);
      const word = currentPlacements()[slotIndex];
      if (word) {
        moveWordFromSlotToBank(slotIndex);
      }
    });
  });
}

function quickPlaceToken(token) {
  if (state.drag || Date.now() < state.ignoreClickUntil) {
    return;
  }

  const source = token.dataset.source;
  if (source === "bank") {
    const emptyIndex = currentPlacements().findIndex((word) => word === null);
    if (emptyIndex !== -1) {
      moveWordFromBankToSlot(Number(token.dataset.bankIndex), emptyIndex);
      maybeAutoCheck();
    }
  } else if (source === "slot") {
    moveWordFromSlotToBank(Number(token.dataset.slotIndex));
  }
}

function beginPointerDrag(event, token) {
  if (event.pointerType === "mouse" && event.button !== 0) {
    return;
  }

  event.preventDefault();
  const rect = token.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  startDrag({
    originNode: token,
    word: token.dataset.word,
    source: token.dataset.source,
    bankIndex: token.dataset.bankIndex !== undefined ? Number(token.dataset.bankIndex) : null,
    slotIndex: token.dataset.slotIndex !== undefined ? Number(token.dataset.slotIndex) : null,
    pointerOffsetX: event.clientX - rect.left,
    pointerOffsetY: event.clientY - rect.top,
  });

  moveDragGhost(x, y);

  const onMove = (moveEvent) => {
    moveDragGhost(moveEvent.clientX, moveEvent.clientY);
  };

  const onUp = (upEvent) => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", onUp);
    finishDragAt(upEvent.clientX, upEvent.clientY);
  };

  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
}

function startDrag(payload) {
  clearSlotHighlights();
  const ghost = document.createElement("div");
  ghost.className = "word-token drag-ghost";
  ghost.textContent = payload.word;
  document.body.appendChild(ghost);

  payload.originNode.classList.add("drag-origin");
  state.drag = {
    ...payload,
    ghost,
  };
}

function moveDragGhost(clientX, clientY) {
  if (!state.drag) {
    return;
  }

  state.drag.ghost.style.left = `${clientX}px`;
  state.drag.ghost.style.top = `${clientY}px`;
  highlightSlotAt(clientX, clientY);
}

function finishDragAt(clientX, clientY) {
  if (!state.drag) {
    return;
  }

  state.ignoreClickUntil = Date.now() + 220;

  const dropSlot = findSlotAt(clientX, clientY);
  if (dropSlot) {
    const slotIndex = Number(dropSlot.dataset.slotIndex);
    placeDraggedWord(slotIndex);
  }

  cleanupDrag();
  maybeAutoCheck();
}

function cleanupDrag() {
  if (!state.drag) {
    clearSlotHighlights();
    return;
  }

  state.drag.originNode.classList.remove("drag-origin");
  state.drag.ghost.remove();
  state.drag = null;
  clearSlotHighlights();
}

function placeDraggedWord(slotIndex) {
  const drag = state.drag;
  if (!drag) {
    return;
  }

  if (drag.source === "bank") {
    moveWordFromBankToSlot(drag.bankIndex, slotIndex);
    return;
  }

  if (drag.slotIndex === slotIndex) {
    return;
  }

  moveWordBetweenSlots(drag.slotIndex, slotIndex);
}

function moveWordFromBankToSlot(bankIndex, slotIndex) {
  const bank = currentBank();
  const placements = currentPlacements();
  const word = bank[bankIndex];

  if (!word || slotIndex < 0) {
    return;
  }

  markTaskDirty(state.currentTaskIndex);
  const displaced = placements[slotIndex];
  placements[slotIndex] = word;
  bank.splice(bankIndex, 1);

  if (displaced) {
    bank.push(displaced);
  }

  renderCurrentTask();
}

function moveWordFromSlotToBank(slotIndex) {
  const placements = currentPlacements();
  const bank = currentBank();
  const word = placements[slotIndex];

  if (!word) {
    return;
  }

  markTaskDirty(state.currentTaskIndex);
  placements[slotIndex] = null;
  bank.push(word);
  renderCurrentTask();
}

function moveWordBetweenSlots(fromIndex, toIndex) {
  const placements = currentPlacements();
  const fromWord = placements[fromIndex];

  if (!fromWord) {
    return;
  }

  markTaskDirty(state.currentTaskIndex);
  const temp = placements[toIndex];
  placements[toIndex] = fromWord;
  placements[fromIndex] = temp;
  renderCurrentTask();
}

function findSlotAt(clientX, clientY) {
  const slots = Array.from(document.querySelectorAll(".slot"));
  const directHit = slots.find((slot) => {
    const rect = slot.getBoundingClientRect();
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  });

  if (directHit) {
    return directHit;
  }

  return findNearestElement(slots, clientX, clientY, 92);
}

function highlightSlotAt(clientX, clientY) {
  clearSlotHighlights();
  const slot = findSlotAt(clientX, clientY);
  if (slot) {
    slot.classList.add("active-target");
  }
}

function clearSlotHighlights() {
  document.querySelectorAll(".slot.active-target").forEach((slot) => {
    slot.classList.remove("active-target");
  });
}

function checkCurrentTask() {
  const task = currentTask();
  const placements = currentPlacements();
  const isFull = placements.every(Boolean);
  const isCorrect = placements.every((word, index) => word === task.answer[index]);

  if (!isFull) {
    setFeedback("Place every word before checking.", "feedback-error");
    return;
  }

  if (isCorrect) {
    if (!state.completed[state.currentTaskIndex]) {
      state.completed[state.currentTaskIndex] = true;
      state.score += 10;
    }

    setFeedback("Correct! The sentence matches the picture.", "feedback-success");
  } else {
    setFeedback("Not quite yet. Move the words and try again.", "feedback-error");
  }

  renderCurrentTask();
  elements.feedbackText.textContent = isCorrect
    ? "Correct! The sentence matches the picture."
    : "Not quite yet. Move the words and try again.";
  elements.feedbackText.className = `feedback-text ${isCorrect ? "feedback-success" : "feedback-error"}`;

  if (isCorrect) {
    triggerSuccessCelebration();
  } else {
    resetSuccessCelebration();
  }
}

function maybeAutoCheck() {
  const placements = currentPlacements();
  if (placements.every(Boolean)) {
    checkCurrentTask();
  }
}

function setFeedback(message, tone) {
  elements.feedbackText.textContent = message;
  elements.feedbackText.className = `feedback-text ${tone}`;
}

function triggerSuccessCelebration() {
  const card = elements.taskCard;
  const layer = elements.celebrationLayer;
  const feedbackPanel = card?.querySelector(".task-feedback");
  const sentenceArea = card?.querySelector(".sentence-area");
  const statCards = Array.from(document.querySelectorAll(".stat-card"));
  const slottedWords = Array.from(document.querySelectorAll(".slot.filled, .word-token.in-slot"));

  if (!card || !layer) {
    return;
  }

  resetSuccessCelebration();
  layer.innerHTML = "";

  [card, feedbackPanel, sentenceArea, ...statCards].forEach((element) => {
    if (element) {
      element.classList.add("is-celebrating");
    }
  });

  slottedWords.forEach((element, index) => {
    element.style.setProperty("--success-delay", `${index * 70}ms`);
    element.classList.add("success-pop");
  });

  createCelebrationBurst(layer, { x: 32, y: 56, count: 12, spread: 74, delayOffset: 0 });
  createCelebrationBurst(layer, { x: 73, y: 34, count: 14, spread: 86, delayOffset: 80 });

  state.celebrationTimer = window.setTimeout(() => {
    resetSuccessCelebration();
  }, 1400);
}

function resetSuccessCelebration() {
  if (state.celebrationTimer) {
    window.clearTimeout(state.celebrationTimer);
    state.celebrationTimer = null;
  }

  const card = elements.taskCard;
  const feedbackPanel = card?.querySelector(".task-feedback");
  const sentenceArea = card?.querySelector(".sentence-area");

  [card, feedbackPanel, sentenceArea, ...document.querySelectorAll(".stat-card")].forEach((element) => {
    element?.classList.remove("is-celebrating");
  });

  document.querySelectorAll(".slot.success-pop, .word-token.success-pop").forEach((element) => {
    element.classList.remove("success-pop");
    element.style.removeProperty("--success-delay");
  });

  if (elements.celebrationLayer) {
    elements.celebrationLayer.innerHTML = "";
  }
}

function createCelebrationBurst(layer, burst) {
  const colors = ["#63c7b2", "#2da18a", "#9ae6c7", "#c8ff79", "#ffffff"];

  const flash = document.createElement("span");
  flash.className = "celebration-flash";
  flash.style.left = `${burst.x}%`;
  flash.style.top = `${burst.y}%`;
  flash.style.setProperty("--delay", `${burst.delayOffset}ms`);
  layer.appendChild(flash);

  for (let index = 0; index < burst.count; index += 1) {
    const spark = document.createElement("span");
    const angle = (Math.PI * 2 * index) / burst.count + Math.random() * 0.22;
    const distance = burst.spread * (0.65 + Math.random() * 0.4);
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = 6 + Math.random() * 7;

    spark.className = "celebration-spark";
    spark.style.left = `${burst.x}%`;
    spark.style.top = `${burst.y}%`;
    spark.style.setProperty("--dx", `${dx.toFixed(1)}px`);
    spark.style.setProperty("--dy", `${dy.toFixed(1)}px`);
    spark.style.setProperty("--delay", `${burst.delayOffset + index * 18}ms`);
    spark.style.setProperty("--size", `${size.toFixed(1)}px`);
    spark.style.setProperty("--trail", `${(12 + Math.random() * 14).toFixed(1)}px`);
    spark.style.setProperty("--rotation", `${(angle * 180) / Math.PI + 90}deg`);
    spark.style.setProperty("--spark-color", colors[index % colors.length]);
    layer.appendChild(spark);
  }
}

function moveTask(direction) {
  const nextIndex = state.currentTaskIndex + direction;
  if (nextIndex < 0 || nextIndex >= tasks.length) {
    return;
  }

  state.currentTaskIndex = nextIndex;
  renderCurrentTask();
}

function shuffleCurrentTask() {
  const task = currentTask();
  state.banks[state.currentTaskIndex] = shuffleArray([
    ...currentBank(),
    ...currentPlacements().filter(Boolean),
  ]);
  state.placements[state.currentTaskIndex] = Array(task.answer.length).fill(null);
  state.completed[state.currentTaskIndex] = false;
  recalculateScore();
  setFeedback("The words were shuffled again. Build the sentence once more.", "");
  renderCurrentTask();
}

function restartCurrentTask() {
  const task = currentTask();
  state.banks[state.currentTaskIndex] = shuffleArray([...task.answer]);
  state.placements[state.currentTaskIndex] = Array(task.answer.length).fill(null);
  state.completed[state.currentTaskIndex] = false;
  recalculateScore();
  setFeedback("The task was restarted. The words were moved back down.", "");
  renderCurrentTask();
}

function recalculateScore() {
  state.score = state.completed.filter(Boolean).length * 10;
}

function markTaskDirty(taskIndex) {
  if (!state.completed[taskIndex]) {
    return;
  }

  state.completed[taskIndex] = false;
  recalculateScore();
}

function currentTask() {
  return tasks[state.currentTaskIndex];
}

function currentPlacements() {
  return state.placements[state.currentTaskIndex];
}

function currentBank() {
  return state.banks[state.currentTaskIndex];
}

function countCompleted() {
  return state.completed.filter(Boolean).length;
}

function getCameraElements(featureName = state.activeFeature) {
  if (featureName === "featureOne") {
    return {
      button: elements.cameraButton,
      status: elements.cameraStatus,
      gestureStatus: elements.gestureStatus,
      video: elements.cameraVideo,
      canvas: elements.cameraCanvas,
    };
  }

  if (featureName === "featureFour") {
    return {
      button: elements.quizCameraButton,
      status: elements.quizCameraStatus,
      gestureStatus: elements.quizGestureStatus,
      video: elements.quizCameraVideo,
      canvas: elements.quizCameraCanvas,
    };
  }

  return null;
}

function updateCameraButtons() {
  elements.cameraButton.textContent =
    state.camera.streamStarted && state.camera.ownerFeature === "featureOne"
      ? "Turn Camera Off"
      : "Start Camera";

  elements.quizCameraButton.textContent =
    state.camera.streamStarted && state.camera.ownerFeature === "featureFour"
      ? "Turn Camera Off"
      : "Start Camera";
}

async function toggleCamera() {
  if (state.camera.streamStarted) {
    stopCamera();
    return;
  }

  try {
    await startCamera();
  } catch (error) {
    console.error(error);
    setCameraStatus("Camera did not start", "status-error");
    setGestureStatus("Allow camera access and reload the page.", "status-error");
  }
}

async function startCamera() {
  if (!window.Hands || !window.Camera) {
    throw new Error("MediaPipe scripts are unavailable.");
  }

  const ownerFeature = state.activeFeature;
  const cameraElements = getCameraElements(ownerFeature);
  if (!cameraElements) {
    throw new Error("No camera screen is active.");
  }

  const canvas = cameraElements.canvas;
  const ctx = canvas.getContext("2d");
  handleResize();

  const hands = new Hands({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
  });

  hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 0,
    minDetectionConfidence: 0.55,
    minTrackingConfidence: 0.5,
  });

  hands.onResults((results) => {
    drawHandResults(results, ctx, canvas);
    handleGesture(results);
  });

  const cameraFeed = new Camera(cameraElements.video, {
    onFrame: async () => {
      await hands.send({ image: cameraElements.video });
    },
    width: 640,
    height: 480,
  });

  await cameraFeed.start();
  state.camera.hands = hands;
  state.camera.cameraFeed = cameraFeed;
  state.camera.streamStarted = true;
  state.camera.ownerFeature = ownerFeature;
  state.gesture.enabled = true;
  state.gesture.lostFrames = 0;
  state.gesture.lastPinch = false;

  if (ownerFeature === "featureFour") {
    resetQuizGestureTracking();
    updateQuizDetectedDisplay();
    setCameraStatus("Camera on", "status-live", ownerFeature);
    setGestureStatus("Show 1, 2, or 3 fingers to choose your answer.", "status-live", ownerFeature);
  } else {
    setCameraStatus("Camera on", "status-live", ownerFeature);
    setGestureStatus("Show one hand and pinch to grab a word.", "status-live", ownerFeature);
  }

  updateCameraButtons();
}

function stopCamera() {
  const ownerFeature = state.camera.ownerFeature || state.activeFeature;
  const cameraElements = getCameraElements(ownerFeature);
  const video = cameraElements?.video;
  const stream = video?.srcObject;

  if (state.camera.cameraFeed?.stop) {
    state.camera.cameraFeed.stop();
  }

  if (state.camera.hands?.close) {
    state.camera.hands.close();
  }

  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
  }

  const ctx = cameraElements?.canvas?.getContext("2d");
  if (ctx && cameraElements?.canvas) {
    ctx.clearRect(0, 0, cameraElements.canvas.width, cameraElements.canvas.height);
  }

  state.camera.streamStarted = false;
  state.camera.cameraFeed = null;
  state.camera.hands = null;
  state.camera.ownerFeature = "";
  state.gesture.enabled = false;
  state.gesture.lastPinch = false;
  state.gesture.pinchActive = false;
  state.gesture.lostFrames = 0;

  if (state.drag) {
    cleanupDrag();
  }

  elements.cursor.classList.add("hidden");
  elements.cursor.classList.remove("pinching");

  if (ownerFeature === "featureFour") {
    resetQuizGestureTracking();
    updateQuizDetectedDisplay();
    setCameraStatus("Camera off", "status-idle", ownerFeature);
    setGestureStatus("Turn on the camera and show 1, 2, or 3 fingers", "status-muted", ownerFeature);
  } else {
    setCameraStatus("Camera off", "status-idle", ownerFeature);
    setGestureStatus("Gesture tracking will start when the camera is on", "status-muted", ownerFeature);
  }

  updateCameraButtons();
}

function drawHandResults(results, ctx, canvas) {
  ctx.save();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!results.multiHandLandmarks?.length) {
    ctx.restore();
    if (state.gesture.enabled && state.activeFeature === "featureOne") {
      setGestureStatus("No hand found. Move your hand closer to the camera.", "status-muted");
      elements.cursor.classList.remove("pinching");
    }
    if (state.activeFeature !== "featureOne") {
      elements.cursor.classList.add("hidden");
    }
    return;
  }

  for (const landmarks of results.multiHandLandmarks) {
    drawConnectors(ctx, landmarks, HAND_CONNECTIONS, {
      color: "#9dd6ff",
      lineWidth: 4,
    });
    drawLandmarks(ctx, landmarks, {
      color: "#ffcf73",
      fillColor: "#ff7b54",
      lineWidth: 1.5,
      radius: 4,
    });
  }

  ctx.restore();
}

function handleGesture(results) {
  if (!state.gesture.enabled) {
    return;
  }

  if (!results.multiHandLandmarks?.length) {
    state.gesture.lostFrames += 1;

    if (state.gesture.lostFrames >= 8) {
      state.gesture.lastPinch = false;
      if (state.drag) {
        cleanupDrag();
      }
    }

    if (state.activeFeature === "featureFour") {
      resetQuizGestureTracking();
      updateQuizDetectedDisplay();
      setGestureStatus("No hand found. Show your hand clearly to the camera.", "status-muted", "featureFour");
      elements.cursor.classList.add("hidden");
      return;
    }

    setGestureStatus("No hand found. Move your hand closer to the camera.", "status-muted");
    elements.cursor.classList.add("tracking-lost");
    elements.cursor.classList.remove("pinching");
    return;
  }

  state.gesture.lostFrames = 0;
  elements.cursor.classList.remove("tracking-lost");

  const landmarks = results.multiHandLandmarks[0];
  if (state.activeFeature === "featureFour") {
    handleQuizGesture(results, landmarks);
    return;
  }

  const thumb = landmarks[4];
  const index = landmarks[8];
  const wrist = landmarks[0];
  const middleBase = landmarks[9];
  const indexBase = landmarks[5];
  const pinkyBase = landmarks[17];

  const handSize = distance(wrist, middleBase) || 0.1;
  const palmSpan = distance(indexBase, pinkyBase) || handSize;
  const pinchDistance = distance(thumb, index);
  const pinchStartThreshold = palmSpan * 0.26;
  const pinchEndThreshold = palmSpan * 0.36;
  const pinching = state.gesture.lastPinch
    ? pinchDistance < pinchEndThreshold
    : pinchDistance < pinchStartThreshold;

  const bounds = getGestureBounds();
  const stablePoint = weightedLandmarks([
    { point: index, weight: 0.58 },
    { point: middleBase, weight: 0.2 },
    { point: indexBase, weight: 0.12 },
    { point: wrist, weight: 0.1 },
  ]);
  const dragPoint = weightedLandmarks([
    { point: midpoint(thumb, index), weight: 0.72 },
    { point: index, weight: 0.18 },
    { point: middleBase, weight: 0.1 },
  ]);
  const pointerPoint = state.drag && pinching ? dragPoint : stablePoint;
  const normalizedX = normalizeHotzone(1 - pointerPoint.x, GESTURE_HOTZONE.xMin, GESTURE_HOTZONE.xMax);
  const normalizedY = normalizeHotzone(pointerPoint.y, GESTURE_HOTZONE.yMin, GESTURE_HOTZONE.yMax);
  const rawX = clamp(bounds.left + normalizedX * bounds.width, bounds.left, bounds.right);
  const rawY = clamp(bounds.top + normalizedY * bounds.height, bounds.top, bounds.bottom);
  const smoothing = state.drag ? 0.4 : 0.3;

  state.gesture.smoothX += (rawX - state.gesture.smoothX) * smoothing;
  state.gesture.smoothY += (rawY - state.gesture.smoothY) * smoothing;

  updateCursor(state.gesture.smoothX, state.gesture.smoothY, pinching);

  if (pinching && !state.gesture.lastPinch) {
    const token = findTokenAt(state.gesture.smoothX, state.gesture.smoothY);
    if (token) {
      const rect = token.getBoundingClientRect();
      startDrag({
        originNode: token,
        word: token.dataset.word,
        source: token.dataset.source,
        bankIndex: token.dataset.bankIndex !== undefined ? Number(token.dataset.bankIndex) : null,
        slotIndex: token.dataset.slotIndex !== undefined ? Number(token.dataset.slotIndex) : null,
        pointerOffsetX: rect.width / 2,
        pointerOffsetY: rect.height / 2,
      });
      moveDragGhost(state.gesture.smoothX, state.gesture.smoothY);
      setGestureStatus("Pinch detected. Move to a slot and open your fingers.", "status-live");
    } else {
      setGestureStatus("Pinch over a word to grab it.", "status-muted");
    }
  } else if (!pinching && state.gesture.lastPinch && state.drag) {
    finishDragAt(state.gesture.smoothX, state.gesture.smoothY);
    setGestureStatus("Word placed. Pinch again to grab the next word.", "status-live");
  } else if (pinching && state.drag) {
    moveDragGhost(state.gesture.smoothX, state.gesture.smoothY);
  } else if (!pinching) {
    setGestureStatus("Move over a word and pinch to grab it.", "status-live");
  }

  state.gesture.lastPinch = pinching;
}

function handleQuizGesture(results, landmarks) {
  elements.cursor.classList.add("hidden");
  elements.cursor.classList.remove("pinching");

  const now = performance.now();
  if (now < state.quiz.gestureLockedUntil) {
    updateQuizDetectedDisplay();
    setGestureStatus("Answer saved. Get ready for the next question.", "status-live", "featureFour");
    return;
  }

  const rawFingerCount = countQuizSelectionFingers(landmarks);
  const fingerCount = stabilizeQuizFingerCount(rawFingerCount);

  if (!fingerCount) {
    state.quiz.detectedFingers = rawFingerCount >= 1 && rawFingerCount <= 3 ? rawFingerCount : 0;
    state.quiz.lastGestureCount = 0;
    state.quiz.holdStartedAt = 0;
    state.quiz.holdProgress = 0;
    updateQuizDetectedDisplay();
    setGestureStatus(
      rawFingerCount >= 1 && rawFingerCount <= 3
        ? `${rawFingerCount} finger(s) detected. Keep your hand upright and steady.`
        : "Show 1, 2, or 3 fingers clearly and separately.",
      rawFingerCount >= 1 && rawFingerCount <= 3 ? "status-live" : "status-muted",
      "featureFour",
    );
    return;
  }

  state.quiz.detectedFingers = fingerCount;

  if (state.quiz.lastGestureCount !== fingerCount) {
    state.quiz.lastGestureCount = fingerCount;
    state.quiz.holdStartedAt = now;
    state.quiz.holdProgress = 0;
    updateQuizDetectedDisplay();
    setGestureStatus(`${fingerCount} finger(s) recognized. Hold a little longer to choose.`, "status-live", "featureFour");
    return;
  }

  state.quiz.holdProgress = Math.min(1, (now - state.quiz.holdStartedAt) / 850);
  updateQuizDetectedDisplay();

  if (state.quiz.holdProgress >= 1) {
    selectQuizAnswer(fingerCount - 1, "gesture");
    setGestureStatus(`Option ${fingerCount} selected.`, "status-live", "featureFour");
    return;
  }

  setGestureStatus(`${fingerCount} finger(s) recognized. Keep holding.`, "status-live", "featureFour");
}

function stabilizeQuizFingerCount(count) {
  if (count < 1 || count > 3) {
    state.quiz.recentFingerCounts = [];
    return 0;
  }

  const lastCount = state.quiz.recentFingerCounts[state.quiz.recentFingerCounts.length - 1];
  if (lastCount && lastCount !== count) {
    state.quiz.recentFingerCounts = [count];
    return 0;
  }

  state.quiz.recentFingerCounts.push(count);
  state.quiz.recentFingerCounts = state.quiz.recentFingerCounts.slice(-4);
  return state.quiz.recentFingerCounts.length >= 4 ? count : 0;
}

function countQuizSelectionFingers(landmarks) {
  const wrist = landmarks[0];
  const indexBase = landmarks[5];
  const middleBase = landmarks[9];
  const pinkyBase = landmarks[17];
  const palmSpan = distance(indexBase, pinkyBase) || 0.12;
  const palmDirection = normalizeVector({
    x: middleBase.x - wrist.x,
    y: middleBase.y - wrist.y,
  });
  const indexUp = isFingerRaised(landmarks, 8, 7, 6, 5, wrist, palmDirection, palmSpan);
  const middleUp = isFingerRaised(landmarks, 12, 11, 10, 9, wrist, palmDirection, palmSpan);
  const ringUp = isFingerRaised(landmarks, 16, 15, 14, 13, wrist, palmDirection, palmSpan);
  const pinkyUp = isFingerRaised(landmarks, 20, 19, 18, 17, wrist, palmDirection, palmSpan);

  if (indexUp && !middleUp && !ringUp && !pinkyUp) {
    return 1;
  }

  if (indexUp && middleUp && !ringUp && !pinkyUp) {
    return 2;
  }

  if (indexUp && middleUp && ringUp && !pinkyUp) {
    return 3;
  }

  if (indexUp && middleUp && !ringUp && pinkyUp) {
    return 3;
  }

  return 0;
}

function isFingerRaised(landmarks, tipIndex, dipIndex, pipIndex, mcpIndex, wrist, palmDirection, palmSpan) {
  const tip = landmarks[tipIndex];
  const dip = landmarks[dipIndex];
  const pip = landmarks[pipIndex];
  const mcp = landmarks[mcpIndex];
  const baseDirection = normalizeVector({
    x: pip.x - mcp.x,
    y: pip.y - mcp.y,
  });
  const middleDirection = normalizeVector({
    x: dip.x - pip.x,
    y: dip.y - pip.y,
  });
  const tipDirection = normalizeVector({
    x: tip.x - dip.x,
    y: tip.y - dip.y,
  });
  const tipProgress = projectPointOntoAxis(wrist, tip, palmDirection);
  const dipProgress = projectPointOntoAxis(wrist, dip, palmDirection);
  const pipProgress = projectPointOntoAxis(wrist, pip, palmDirection);
  const mcpProgress = projectPointOntoAxis(wrist, mcp, palmDirection);
  const reachesForward =
    tipProgress > dipProgress + palmSpan * 0.08 &&
    dipProgress > pipProgress + palmSpan * 0.03 &&
    pipProgress > mcpProgress - palmSpan * 0.01;
  const reachExtended = distance(tip, mcp) > distance(pip, mcp) + palmSpan * 0.18;
  const straightEnough =
    dotProduct(baseDirection, middleDirection) > 0.6 &&
    dotProduct(middleDirection, tipDirection) > 0.72;

  return reachesForward && reachExtended && straightEnough;
}

function updateCursor(clientX, clientY, pinching) {
  elements.cursor.classList.remove("hidden");
  elements.cursor.style.left = `${clientX}px`;
  elements.cursor.style.top = `${clientY}px`;
  elements.cursor.classList.toggle("pinching", pinching);
}

function findTokenAt(clientX, clientY) {
  const tokens = Array.from(document.querySelectorAll(".word-token"));
  const directHit = tokens.find((token) => {
    const rect = token.getBoundingClientRect();
    return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
  });

  if (directHit) {
    return directHit;
  }

  return findNearestElement(tokens, clientX, clientY, 60);
}

function handleResize() {
  const activeCameraElements = getCameraElements(state.camera.streamStarted ? state.camera.ownerFeature : state.activeFeature);
  if (!activeCameraElements?.canvas) {
    return;
  }

  const rect = activeCameraElements.canvas.getBoundingClientRect();
  activeCameraElements.canvas.width = Math.max(1, Math.floor(rect.width));
  activeCameraElements.canvas.height = Math.max(1, Math.floor(rect.height));
}

function getGestureBounds() {
  const shellRect = elements.pageShell?.getBoundingClientRect();
  const layoutRect = elements.gameLayout?.getBoundingClientRect();
  const panelRect = elements.gamePanel?.getBoundingClientRect();
  const taskRect = elements.taskCard?.getBoundingClientRect();
  const navRect = elements.navigationRow?.getBoundingClientRect();
  const viewportPadding = 16;

  if (!shellRect && !layoutRect && !panelRect && !taskRect && !navRect) {
    return {
      left: viewportPadding,
      top: viewportPadding,
      right: window.innerWidth - viewportPadding,
      bottom: window.innerHeight - viewportPadding,
      width: window.innerWidth - viewportPadding * 2,
      height: window.innerHeight - viewportPadding * 2,
    };
  }

  const leftSource = Math.min(
    shellRect?.left ?? window.innerWidth,
    layoutRect?.left ?? window.innerWidth,
    panelRect?.left ?? window.innerWidth,
    taskRect?.left ?? window.innerWidth,
    navRect?.left ?? window.innerWidth,
  );
  const rightSource = Math.max(
    shellRect?.right ?? 0,
    layoutRect?.right ?? 0,
    panelRect?.right ?? 0,
    taskRect?.right ?? 0,
    navRect?.right ?? 0,
  );
  const topSource = Math.min(
    layoutRect?.top ?? window.innerHeight,
    panelRect?.top ?? window.innerHeight,
    taskRect?.top ?? window.innerHeight,
    navRect?.top ?? window.innerHeight,
  );
  const bottomSource = Math.max(
    layoutRect?.bottom ?? 0,
    panelRect?.bottom ?? 0,
    taskRect?.bottom ?? 0,
    navRect?.bottom ?? 0,
  );

  const expandX = 16;
  const expandTop = 8;
  const expandBottom = 16;
  const left = Math.max(leftSource + expandX, viewportPadding);
  const maxRight = Math.min(rightSource - expandX, window.innerWidth - viewportPadding);
  const top = Math.max(topSource + expandTop, viewportPadding);
  const maxBottom = Math.min(bottomSource - expandBottom, window.innerHeight - viewportPadding);
  const right = Math.max(left + 140, maxRight);
  const bottom = Math.max(top + 160, maxBottom);

  return {
    left,
    top,
    right,
    bottom,
    width: Math.max(140, right - left),
    height: Math.max(160, bottom - top),
  };
}

function findNearestElement(elementsList, clientX, clientY, maxDistance) {
  let nearestElement = null;
  let nearestDistance = maxDistance;

  elementsList.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const currentDistance = Math.hypot(centerX - clientX, centerY - clientY);

    if (currentDistance <= nearestDistance) {
      nearestDistance = currentDistance;
      nearestElement = element;
    }
  });

  return nearestElement;
}

function setCameraStatus(text, tone, featureName = state.camera.ownerFeature || state.activeFeature) {
  const cameraElements = getCameraElements(featureName);
  if (!cameraElements?.status) {
    return;
  }

  cameraElements.status.textContent = text;
  cameraElements.status.className = `status-pill ${tone}`;
}

function setGestureStatus(text, tone, featureName = state.camera.ownerFeature || state.activeFeature) {
  const cameraElements = getCameraElements(featureName);
  if (!cameraElements?.gestureStatus) {
    return;
  }

  state.gesture.lastGestureText = text;
  cameraElements.gestureStatus.textContent = text;
  cameraElements.gestureStatus.className = `status-pill ${tone}`;
}

function shuffleArray(items) {
  const array = [...items];
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
  }
  return array;
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function midpoint(a, b) {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  };
}

function averageLandmarks(points) {
  const totals = points.reduce(
    (sum, point) => ({
      x: sum.x + point.x,
      y: sum.y + point.y,
    }),
    { x: 0, y: 0 },
  );

  return {
    x: totals.x / points.length,
    y: totals.y / points.length,
  };
}

function weightedLandmarks(points) {
  const totals = points.reduce(
    (sum, { point, weight }) => ({
      x: sum.x + point.x * weight,
      y: sum.y + point.y * weight,
      weight: sum.weight + weight,
    }),
    { x: 0, y: 0, weight: 0 },
  );

  const safeWeight = Math.max(totals.weight, 0.001);
  return {
    x: totals.x / safeWeight,
    y: totals.y / safeWeight,
  };
}

function normalizeVector(vector) {
  const length = Math.hypot(vector.x, vector.y) || 1;
  return {
    x: vector.x / length,
    y: vector.y / length,
  };
}

function dotProduct(a, b) {
  return a.x * b.x + a.y * b.y;
}

function projectPointOntoAxis(origin, point, axis) {
  return dotProduct(
    {
      x: point.x - origin.x,
      y: point.y - origin.y,
    },
    axis,
  );
}

function normalizeHotzone(value, min, max) {
  return clamp((value - min) / Math.max(0.001, max - min), 0, 1);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function taskVisualMarkup(task, compact) {
  const loading = compact ? "lazy" : "eager";
  const cssClass = compact ? "task-photo task-photo-mini" : "task-photo task-photo-main";
  const alt = `${task.title} reference image`;

  if (task.image) {
    return `<img class="${cssClass}" src="${task.image}" alt="${alt}" loading="${loading}" draggable="false">`;
  }

  return `<div class="task-photo-fallback">${task.title}</div>`;
}

function sceneSvg(id, compact) {
  const baseClass = compact ? "mini-scene" : "main-scene";
  const size = compact ? 54 : 640;
  const height = compact ? 54 : 460;

  const sharedStart = `
    <svg class="${baseClass}" viewBox="0 0 ${size} ${height}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8fd0ff"/>
          <stop offset="100%" stop-color="#f4fbff"/>
        </linearGradient>
        <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a8dc72"/>
          <stop offset="100%" stop-color="#74b64f"/>
        </linearGradient>
      </defs>
  `;

  const end = "</svg>";

  const scenes = {
    drums: `
      <rect width="${size}" height="${height}" fill="url(#skyGrad)"/>
      <rect y="${height - 92}" width="${size}" height="92" fill="#d7d7b2"/>
      <circle cx="${size * 0.22}" cy="${height * 0.28}" r="${compact ? 6 : 34}" fill="#ffd27a"/>
      ${person({ x: size * 0.26, y: height * 0.62, shirt: "#496c87", shorts: "#2d4d67", skin: "#f4c49b", compact, armLeft: "up", armRight: "thumb" })}
      ${drummer({ x: size * 0.72, y: height * 0.7, compact })}
    `,
    running: `
      <rect width="${size}" height="${height}" fill="url(#skyGrad)"/>
      <ellipse cx="${size * 0.25}" cy="${height * 0.22}" rx="${compact ? 8 : 88}" ry="${compact ? 4 : 38}" fill="#ffffff" opacity="0.8"/>
      <ellipse cx="${size * 0.6}" cy="${height * 0.26}" rx="${compact ? 10 : 108}" ry="${compact ? 6 : 46}" fill="#ffffff" opacity="0.88"/>
      <rect y="${height * 0.62}" width="${size}" height="${height * 0.38}" fill="url(#grassGrad)"/>
      ${runner({ x: size * 0.25, y: height * 0.74, shirt: "#ffffff", shorts: "#5f92d9", compact })}
      ${runner({ x: size * 0.42, y: height * 0.82, shirt: "#ffffff", shorts: "#f15b51", compact, female: true })}
      ${runner({ x: size * 0.56, y: height * 0.66, shirt: "#ffffff", shorts: "#5678ca", compact })}
      ${runner({ x: size * 0.76, y: height * 0.8, shirt: "#ffffff", shorts: "#ee6f63", compact, female: true })}
      ${runner({ x: size * 0.66, y: height * 0.9, shirt: "#ffffff", shorts: "#6f95d2", compact })}
    `,
    drinking: `
      <rect width="${size}" height="${height}" fill="#fffdf8"/>
      ${sun({ x: size * 0.22, y: height * 0.16, compact })}
      ${sun({ x: size * 0.72, y: height * 0.18, compact })}
      ${drinkingKid({ x: size * 0.32, y: height * 0.78, shirt: "#79c56f", bottom: "#d7b160", compact })}
      ${drinkingKid({ x: size * 0.68, y: height * 0.8, shirt: "#ff9bc0", bottom: "#5f92d9", compact, ponytail: true })}
    `,
    guitar: `
      <rect width="${size}" height="${height}" fill="#fffdfc"/>
      ${spotBlob({ x: size * 0.5, y: height * 0.46, rx: compact ? 22 : 180, ry: compact ? 18 : 140, color: "#fff0d3" })}
      ${guitarPlayer({ x: size * 0.5, y: height * 0.74, compact })}
    `,
    sleeping: `
      <rect width="${size}" height="${height}" fill="#fffdf8"/>
      ${bedScene({ x: size * 0.5, y: height * 0.74, compact })}
      <text x="${size * 0.7}" y="${height * 0.18}" fill="#4cc7d6" font-size="${compact ? 8 : 38}" font-family="Trebuchet MS">Z z</text>
    `,
    swimming: `
      <rect width="${size}" height="${height}" fill="#fafcff"/>
      ${wave({ x: size * 0.5, y: height * 0.62, compact })}
      ${swimmer({ x: size * 0.56, y: height * 0.56, compact })}
    `,
    cleaning: `
      <rect width="${size}" height="${height}" fill="#fffdfc"/>
      ${cleaningScene({ x: size * 0.5, y: height * 0.78, compact })}
    `,
    painting: `
      <rect width="${size}" height="${height}" fill="#fffdfb"/>
      ${paintingScene({ x: size * 0.5, y: height * 0.8, compact })}
    `,
    cooking: `
      <rect width="${size}" height="${height}" fill="#fffdfb"/>
      ${cookingScene({ x: size * 0.5, y: height * 0.8, compact })}
    `,
    watching: `
      <rect width="${size}" height="${height}" fill="#fffdfb"/>
      ${watchingScene({ x: size * 0.5, y: height * 0.84, compact })}
    `,
  };

  return sharedStart + scenes[id] + end;
}

function person({ x, y, shirt, shorts, skin, compact, armLeft = "down", armRight = "down" }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="0" cy="-132" r="38" fill="${skin}"/>
      <path d="M-56 -50 Q0 -92 56 -50 L44 54 L-44 54 Z" fill="${shirt}"/>
      <rect x="-34" y="54" width="28" height="86" rx="12" fill="${shorts}"/>
      <rect x="6" y="54" width="28" height="86" rx="12" fill="${shorts}"/>
      <rect x="-36" y="136" width="30" height="12" rx="6" fill="#38598a"/>
      <rect x="4" y="136" width="30" height="12" rx="6" fill="#38598a"/>
      ${armPath(-48, -26, armLeft, shirt, skin)}
      ${armPath(48, -26, armRight, shirt, skin, true)}
      <circle cx="-12" cy="-142" r="4" fill="#2b2b2b"/>
      <circle cx="12" cy="-142" r="4" fill="#2b2b2b"/>
      <path d="M-12 -120 Q0 -108 12 -120" stroke="#d77c7c" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M-34 -164 Q-8 -186 26 -170 Q12 -196 -18 -194 Q-30 -190 -34 -164 Z" fill="#7f522f"/>
    </g>
  `;
}

function armPath(x, y, pose, shirt, skin, right = false) {
  const direction = right ? 1 : -1;
  const poses = {
    down: `M${x} ${y} q${18 * direction} 34 ${20 * direction} 78`,
    up: `M${x} ${y} q${-16 * direction} -28 ${-24 * direction} -84`,
    thumb: `M${x} ${y} q${14 * direction} -16 ${36 * direction} -48`,
  };
  return `
    <path d="${poses[pose] || poses.down}" stroke="${shirt}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <circle cx="${x + (pose === "thumb" ? 36 * direction : pose === "up" ? -24 * direction : 20 * direction)}" cy="${y + (pose === "thumb" ? -48 : pose === "up" ? -84 : 78)}" r="10" fill="${skin}"/>
  `;
}

function drummer({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="-18" cy="-146" r="32" fill="#f4c49b"/>
      <path d="M-58 -64 Q-8 -104 42 -54 L26 28 L-44 28 Z" fill="#516f7e"/>
      <rect x="-32" y="28" width="24" height="80" rx="10" fill="#7e5731"/>
      <rect x="0" y="28" width="24" height="80" rx="10" fill="#7e5731"/>
      <circle cx="-78" cy="-12" r="38" fill="#82b866" stroke="#6b9351" stroke-width="8"/>
      <circle cx="-12" cy="-2" r="40" fill="#90c773" stroke="#6b9351" stroke-width="8"/>
      <circle cx="62" cy="18" r="44" fill="#96cc7b" stroke="#6b9351" stroke-width="8"/>
      <ellipse cx="-14" cy="-108" rx="40" ry="16" fill="#e7a445"/>
      <path d="M-36 -92 l-34 58" stroke="#8f5f31" stroke-width="6" stroke-linecap="round"/>
      <path d="M0 -88 l58 76" stroke="#8f5f31" stroke-width="6" stroke-linecap="round"/>
    </g>
  `;
}

function runner({ x, y, shirt, shorts, compact, female = false }) {
  const scale = compact ? 0.16 : 0.72;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="0" cy="-86" r="24" fill="#f4c49b"/>
      <path d="M-28 -42 L28 -42 L18 26 L-18 26 Z" fill="${shirt}"/>
      <path d="M-18 26 H4 L-24 90" stroke="${shorts}" stroke-width="16" stroke-linecap="round"/>
      <path d="M10 26 H28 L72 86" stroke="${shorts}" stroke-width="16" stroke-linecap="round"/>
      <path d="M-22 -20 L-62 18" stroke="#f4c49b" stroke-width="12" stroke-linecap="round"/>
      <path d="M24 -10 L54 -56" stroke="#f4c49b" stroke-width="12" stroke-linecap="round"/>
      <path d="M-30 92 h18" stroke="#ffc857" stroke-width="12" stroke-linecap="round"/>
      <path d="M64 88 h18" stroke="#ffc857" stroke-width="12" stroke-linecap="round"/>
      <path d="${female ? "M-12 -104 q18 -20 36 0" : "M-10 -106 q16 -14 28 2"}" stroke="#7a4c2a" stroke-width="10" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

function sun({ x, y, compact }) {
  const radius = compact ? 5 : 30;
  const rays = compact ? 7 : 16;
  const rayLength = compact ? 3 : 18;
  let lines = "";
  for (let i = 0; i < rays; i += 1) {
    const angle = (Math.PI * 2 * i) / rays;
    const x1 = x + Math.cos(angle) * (radius + 4);
    const y1 = y + Math.sin(angle) * (radius + 4);
    const x2 = x + Math.cos(angle) * (radius + rayLength);
    const y2 = y + Math.sin(angle) * (radius + rayLength);
    lines += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#2a2a2a" stroke-width="${compact ? 1 : 4}" stroke-linecap="round"/>`;
  }
  return `<g><circle cx="${x}" cy="${y}" r="${radius}" fill="#ff5f6d"/>${lines}</g>`;
}

function drinkingKid({ x, y, shirt, bottom, compact, ponytail = false }) {
  const scale = compact ? 0.22 : 0.94;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="0" cy="-116" r="30" fill="#f4c49b"/>
      <path d="M-34 -84 Q0 -118 34 -84 L24 14 L-24 14 Z" fill="${shirt}"/>
      <rect x="-26" y="14" width="22" height="92" rx="10" fill="${bottom}"/>
      <rect x="4" y="14" width="22" height="92" rx="10" fill="${bottom}"/>
      <path d="M-28 -48 l-18 54" stroke="#f4c49b" stroke-width="14" stroke-linecap="round"/>
      <path d="M28 -48 l18 54" stroke="#f4c49b" stroke-width="14" stroke-linecap="round"/>
      <circle cx="-48" cy="10" r="8" fill="#f4c49b"/>
      <circle cx="48" cy="10" r="8" fill="#f4c49b"/>
      <path d="M-26 -40 q22 -14 52 -18" stroke="#4ea7dd" stroke-width="28" stroke-linecap="round"/>
      <circle cx="18" cy="-54" r="10" fill="#4ea7dd"/>
      ${ponytail ? '<path d="M20 -136 q34 20 14 54" stroke="#a26d3c" stroke-width="14" fill="none" stroke-linecap="round"/>' : '<path d="M-32 -136 q40 -28 56 0" stroke="#8c5b34" stroke-width="14" fill="none" stroke-linecap="round"/>'}
    </g>
  `;
}

function spotBlob({ x, y, rx, ry, color }) {
  return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${color}"/>`;
}

function guitarPlayer({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="0" cy="-138" r="36" fill="#f4c49b"/>
      <path d="M-58 -82 L58 -82 L42 34 L-44 34 Z" fill="#f4c94f"/>
      <rect x="-30" y="34" width="26" height="102" rx="10" fill="#4ec3b1"/>
      <rect x="6" y="34" width="26" height="102" rx="10" fill="#4ec3b1"/>
      <path d="M-48 -52 q58 20 112 10" stroke="#f4c49b" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M-42 -18 Q-12 -74 64 -34 Q112 -10 94 36 Q80 74 24 48 Q-28 26 -42 -18 Z" fill="#ef8c3d" stroke="#b95c1f" stroke-width="8"/>
      <circle cx="24" cy="-6" r="16" fill="#7d431a"/>
      <circle cx="24" cy="-6" r="8" fill="#f8dcb6"/>
      <rect x="72" y="-34" width="74" height="12" rx="6" fill="#7d431a"/>
      <line x1="82" y1="-34" x2="82" y2="24" stroke="#fce6bc" stroke-width="2"/>
      <line x1="90" y1="-34" x2="90" y2="24" stroke="#fce6bc" stroke-width="2"/>
      <line x1="98" y1="-34" x2="98" y2="24" stroke="#fce6bc" stroke-width="2"/>
      <path d="M-34 -162 q34 -30 70 -2" stroke="#8c552c" stroke-width="16" fill="none" stroke-linecap="round"/>
      <circle cx="-14" cy="-142" r="4" fill="#2b2b2b"/>
      <circle cx="14" cy="-142" r="4" fill="#2b2b2b"/>
      <path d="M-12 -120 Q0 -108 12 -120" stroke="#d77c7c" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

function bedScene({ x, y, compact }) {
  const scale = compact ? 0.34 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="-210" y="-30" width="420" height="46" rx="22" fill="#c4eef8"/>
      <rect x="-214" y="-40" width="18" height="150" fill="#b67c4d"/>
      <rect x="196" y="-40" width="18" height="150" fill="#b67c4d"/>
      <rect x="-200" y="-52" width="16" height="34" rx="8" fill="#b67c4d"/>
      <rect x="184" y="-52" width="16" height="34" rx="8" fill="#b67c4d"/>
      <ellipse cx="0" cy="84" rx="170" ry="18" fill="rgba(0,0,0,0.08)"/>
      <rect x="-130" y="-72" width="120" height="52" rx="18" fill="#f2f8ff"/>
      <path d="M-80 -100 q62 -20 102 32" stroke="#f7c0a2" stroke-width="56" fill="none" stroke-linecap="round"/>
      <path d="M-26 -34 q78 16 164 38 q-38 72 -180 52 q-14 -34 16 -90 Z" fill="#3bb7c7" opacity="0.92"/>
      <path d="M-88 -98 q-28 -24 -72 0" stroke="#d28d61" stroke-width="18" fill="none" stroke-linecap="round"/>
      <circle cx="-78" cy="-98" r="4" fill="#bb6b5d"/>
      <circle cx="-60" cy="-98" r="4" fill="#bb6b5d"/>
      <path d="M-74 -76 q8 8 18 0" stroke="#bb6b5d" stroke-width="3" fill="none" stroke-linecap="round"/>
      <rect x="-30" y="100" width="42" height="16" rx="8" fill="#ff7b54"/>
      <rect x="18" y="100" width="42" height="16" rx="8" fill="#ff7b54"/>
    </g>
  `;
}

function wave({ x, y, compact }) {
  const scale = compact ? 0.24 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <path d="M-200 90 q60 -190 204 -118 q44 18 72 64 q58 -98 164 -70 q100 24 110 158 z" fill="#4da9df"/>
      <path d="M-180 58 q48 -98 120 -86 q52 8 104 54 q30 -34 86 -30 q74 4 118 86 q-62 -34 -102 -6 q-28 18 -82 16 q-108 -4 -244 -34 Z" fill="#80d4ff"/>
    </g>
  `;
}

function swimmer({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <circle cx="30" cy="-14" r="24" fill="#f4c49b"/>
      <path d="M-16 18 q54 -44 116 -16" stroke="#f1a521" stroke-width="36" fill="none" stroke-linecap="round"/>
      <path d="M-22 14 q-56 14 -110 0" stroke="#4da9df" stroke-width="22" fill="none" stroke-linecap="round"/>
      <path d="M84 -36 q28 -48 72 -56" stroke="#f4c49b" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M-8 20 q-48 32 -92 44" stroke="#f4c49b" stroke-width="16" fill="none" stroke-linecap="round"/>
      <path d="M-20 -2 q16 -48 58 -58" stroke="#f4c49b" stroke-width="16" fill="none" stroke-linecap="round"/>
      <circle cx="20" cy="-18" r="4" fill="#2b2b2b"/>
      <path d="M28 -6 q16 8 24 0" stroke="#d77c7c" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M18 -46 q28 -24 54 -4" stroke="#8c552c" stroke-width="12" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

function cleaningScene({ x, y, compact }) {
  const scale = compact ? 0.26 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="20" y="-220" width="160" height="220" rx="18" fill="#c1f1cf" stroke="#8f4f28" stroke-width="10"/>
      <rect x="32" y="-20" width="136" height="30" rx="8" fill="#8f4f28"/>
      <rect x="40" y="10" width="120" height="80" rx="8" fill="#8f4f28"/>
      <path d="M92 -170 q34 -20 40 28 q0 30 -22 62" stroke="#ffffff" stroke-width="16" fill="none" stroke-linecap="round"/>
      ${person({ x: -110, y: 44, shirt: "#e7f27e", shorts: "#f3b85e", skin: "#f4c49b", compact: false, armLeft: "down", armRight: "down" })}
      <path d="M-120 10 l-16 104" stroke="#8f5f31" stroke-width="10" stroke-linecap="round"/>
      <path d="M-176 118 h72" stroke="#c4852f" stroke-width="16" stroke-linecap="round"/>
      ${person({ x: 100, y: 42, shirt: "#e85b4f", shorts: "#f4c49b", skin: "#f4c49b", compact: false, armLeft: "up", armRight: "down" })}
      <path d="M106 -52 q16 -36 42 -76" stroke="#ffffff" stroke-width="18" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

function paintingScene({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="-194" y="-10" width="106" height="96" rx="10" fill="#b58258"/>
      <rect x="-190" y="50" width="98" height="30" fill="#92613c"/>
      <rect x="-172" y="-72" width="30" height="48" fill="#d8eef7"/>
      <rect x="-136" y="-72" width="30" height="48" fill="#f0b24b"/>
      <rect x="-100" y="-72" width="30" height="48" fill="#eb6e56"/>
      <line x1="-10" y1="-140" x2="-84" y2="120" stroke="#d0a165" stroke-width="10"/>
      <line x1="-10" y1="-140" x2="64" y2="120" stroke="#d0a165" stroke-width="10"/>
      <line x1="-10" y1="-140" x2="-10" y2="120" stroke="#d0a165" stroke-width="10"/>
      <rect x="-86" y="-150" width="154" height="164" rx="12" fill="#f6fbff" stroke="#d0a165" stroke-width="10"/>
      <path d="M-62 -48 q44 -54 112 -12" stroke="#8ecbff" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M-70 -10 q34 -20 98 18" stroke="#b2da8f" stroke-width="12" fill="none" stroke-linecap="round"/>
      ${person({ x: 130, y: 44, shirt: "#bd5b4f", shorts: "#bd5b4f", skin: "#f4c49b", compact: false, armLeft: "thumb", armRight: "down" })}
      <ellipse cx="188" cy="-18" rx="42" ry="26" fill="#f6f0d6" stroke="#92613c" stroke-width="8"/>
      <circle cx="170" cy="-18" r="8" fill="#8ecbff"/>
      <circle cx="190" cy="-30" r="8" fill="#e85b4f"/>
      <circle cx="200" cy="-4" r="8" fill="#f0b24b"/>
      <circle cx="212" cy="-20" r="8" fill="#63c7b2"/>
      <path d="M136 -60 q-22 -24 -56 -28" stroke="#8ecbff" stroke-width="8" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

function cookingScene({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="-210" y="-12" width="420" height="20" fill="#dfe8ef"/>
      <circle cx="0" cy="-6" r="92" fill="#485a69"/>
      <circle cx="0" cy="-6" r="76" fill="#323f4b"/>
      <ellipse cx="-22" cy="-12" rx="36" ry="24" fill="#ffffff"/>
      <ellipse cx="38" cy="18" rx="36" ry="24" fill="#ffffff"/>
      <circle cx="-18" cy="-10" r="12" fill="#f7c246"/>
      <circle cx="42" cy="20" r="12" fill="#f7c246"/>
      ${person({ x: -40, y: -34, shirt: "#dce9f5", shorts: "#dce9f5", skin: "#f4c49b", compact: false, armLeft: "down", armRight: "thumb" })}
      <path d="M-44 -40 l-84 72" stroke="#888" stroke-width="12" stroke-linecap="round"/>
      <path d="M22 -26 l120 26" stroke="#888" stroke-width="12" stroke-linecap="round"/>
      <path d="M-98 -138 q30 -30 62 -6" stroke="#8c552c" stroke-width="14" fill="none" stroke-linecap="round"/>
      <rect x="-150" y="-188" width="96" height="168" rx="18" fill="#8fd0ff"/>
    </g>
  `;
}

function watchingScene({ x, y, compact }) {
  const scale = compact ? 0.28 : 1;
  return `
    <g transform="translate(${x}, ${y}) scale(${scale})">
      <rect x="-164" y="-26" width="244" height="180" rx="40" fill="#f3d76e"/>
      <rect x="-148" y="132" width="20" height="64" fill="#8c552c"/>
      <rect x="32" y="132" width="20" height="64" fill="#8c552c"/>
      ${person({ x: -30, y: 64, shirt: "#57a7df", shorts: "#4c6fb4", skin: "#f4c49b", compact: false, armLeft: "thumb", armRight: "down" })}
      <rect x="-148" y="-12" width="28" height="10" rx="5" fill="#2b2b2b"/>
      <circle cx="-116" cy="-8" r="6" fill="#2b2b2b"/>
      <path d="M-110 -10 q26 20 54 12" stroke="#2b2b2b" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M-44 -140 q38 -26 66 0" stroke="#8c552c" stroke-width="14" fill="none" stroke-linecap="round"/>
    </g>
  `;
}

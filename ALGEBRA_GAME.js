
(() => {
  // Algebra questions data sets with all unique questions including linear gradient ones especially in Algebra 2
  const quizData = {
    algebra1: [
      { q: "What is 7 + 8?", a: "15", explanation: "7 plus 8 equals 15." },
      { q: "Calculate 12 - 5.", a: "7", explanation: "12 minus 5 is 7." },
      { q: "What is 3 * 4?", a: "12", explanation: "3 times 4 equals 12." },
      { q: "Divide 20 by 4.", a: "5", explanation: "20 divided by 4 is 5." },
      { q: "What is the solution to x + 5 = 10?", a: "5", explanation: "x + 5 = 10, so x = 10 - 5 = 5." },
      { q: "Calculate 9 + 6 - 4.", a: "11", explanation: "9 + 6 = 15, minus 4 is 11." },
      { q: "What is 2²?", a: "4", explanation: "2 raised to the power of 2 is 4." },
      { q: "What is the square root of 81?", a: "9", explanation: "The square root of 81 is 9." },
      { q: "Add: 10 + 4 * 2", a: "18", explanation: "4 * 2 = 8, plus 10 equals 18." },
      { q: "Calculate (5 + 3) * 2.", a: "16", explanation: "5 + 3 = 8, times 2 equals 16." },
      { q: "What is 100 - 45?", a: "55", explanation: "100 minus 45 is 55." },
      { q: "Solve for x: x - 4 = 12.", a: "16", explanation: "x = 12 + 4 = 16." },
      { q: "What is the result of 6 * 7?", a: "42", explanation: "6 times 7 is 42." },
      { q: "Divide 36 by 9.", a: "4", explanation: "36 divided by 9 is 4." },
      { q: "Calculate the value of 10 + 2 * 5.", a: "20", explanation: "2 * 5 = 10, plus 10 = 20." },
      { q: "Solve: 15 / 3 + 4.", a: "9", explanation: "15 divided by 3 is 5, plus 4 equals 9." },
      { q: "What is 3³?", a: "27", explanation: "3 raised to the power of 3 is 27." },
      { q: "Calculate 7 * 5 - 10.", a: "25", explanation: "7 * 5 = 35, minus 10 is 25." },
      { q: "What is 144 divided by 12?", a: "12", explanation: "144 divided by 12 is 12." },
      { q: "Solve for x: 3x = 18.", a: "6", explanation: "3x = 18, so x = 6." },
      { q: "What is 14 + 6?", a: "20", explanation: "14 plus 6 equals 20." },
      { q: "Calculate 2 * (4 + 3).", a: "14", explanation: "4 + 3 = 7, times 2 equals 14." },
      { q: "What is 100 - 25 * 3?", a: "25", explanation: "25 * 3 = 75, 100 minus 75 is 25." },
      { q: "Calculate 8 + 2 * 6 - 4.", a: "16", explanation: "2 * 6 = 12, plus 8 = 20, minus 4 = 16." },
      { q: "Solve for x: x / 2 = 7.", a: "14", explanation: "x = 7 * 2 = 14." }

    ],
    algebra2: [
      { q: "Solve for x: 2x + 3 = 7.", a: "2", explanation: "2x+3=7 → 2x=4 → x=2." },
      { q: "Calculate the slope m of the line through points (1,2) and (3,6).", a: "2", explanation: "m=(6-2)/(3-1)=4/2=2." },
      { q: "Solve the equation: 5x - 4 = 11.", a: "3", explanation: "5x=15 → x=3." },
      { q: "Find m when y = 4x + 1.", a: "4", explanation: "Slope is the coefficient of x, so it's 4." },
      { q: "Calculate the y-intercept of y = 3x - 5.", a: "-5", explanation: "The y-intercept is the constant term, here -5." },
      { q: "Solve for x: 3(x - 2) = 9.", a: "5", explanation: "3x-6=9 → 3x=15 → x=5." },
      { q: "Find the slope between (4,1) and (4,5).", a: "undefined", explanation: "Division by zero, a vertical line has no defined slope." },
      { q: "Solve: y - 2 = 3(x + 1).", a: "y=3x+5", explanation: "y-2=3x+3 → y=3x+5." },
      { q: "Find x such that y = 0 when y = 2x - 6.", a: "3", explanation: "0=2x-6 → 2x=6 → x=3." },
      { q: "Calculate the slope m of the line y = -x + 7.", a: "-1", explanation: "The slope is -1." },
      { q: "Solve for y: 4y - 8 = 12.", a: "5", explanation: "4y=20 → y=5." },
      { q: "Find m and b in y=mx+b with y=5x-2.", a: "m=5, b=-2", explanation: "m is 5, b is -2." },
      { q: "Solve: 2(x+3) = x + 9.", a: "3", explanation: "2x+6=x+9 → x=3." },
      { q: "What is the slope m of the line through (0,1) and (2,5)?", a: "2", explanation: "m=(5-1)/(2-0)=4/2=2." },
      { q: "Solve: 3y + 6 = 0.", a: "-2", explanation: "3y=-6 → y=-2." },
      { q: "Find y for x=4 when y=7x+3.", a: "31", explanation: "y=7*4+3=31." },
      { q: "Calculate the slope m of the line between (2,3) and (6,11).", a: "2", explanation: "m=(11-3)/(6-2)=8/4=2." },
      { q: "Solve for x: 4x - 7 = 5x + 1.", a: "-8", explanation: "4x-5x=1+7 → -x=8 → x=-8." },
      { q: "Find the y-intercept of y = -3x + 9.", a: "9", explanation: "b=9." },
      { q: "Solve 2(y+1) = 4x + 6 for y, when x=1.", a: "5", explanation: "2(y+1)=4*1+6 → 2y+2=10 → 2y=8 → y=4." }

    ],
    algebra3: [
      { q: "Write down the quadratic formula.", a: "(-b±√(b²-4ac))/(2a)", explanation: "Solution to ax²+bx+c=0." },
      { q: "What is the derivative of f(x)=x²?", a: "2x", explanation: "The derivative of x² is 2x." },
      { q: "Integrate f(x)=3x².", a: "x³+C", explanation: "The integral of 3x² is x³ + C." },
      { q: "Expand: (2x + 3)(x - 5).", a: "2x²-7x-15", explanation: "2x*x=2x²; 2x*(-5)=-10x; 3*x=3x; 3*(-5)=-15, combined: 2x²-7x-15." },
      { q: "Simplify the expression: x² + 2x + 1.", a: "(x+1)²", explanation: "x² + 2x + 1 is the square of the sum (x+1)²." },
      { q: "Solve the equation: x² - 9 = 0.", a: "x=±3", explanation: "x²=9, so x=3 or x=-3." },
      { q: "Find the first derivative of f(x)=5x³.", a: "15x²", explanation: "3*5x²=15x²." },
      { q: "Integrate f(x)=4x³.", a: "x⁴+C", explanation: "The integral of 4x³ is x⁴ + C." },
      { q: "Simplify: (x² - 4)/(x - 2).", a: "x+2", explanation: "The numerator is (x-2)(x+2), which cancels out." },
      { q: "Solve for x: 2x² - 8x + 6 = 0.", a: "1.5, 2", explanation: "Solutions using the quadratic formula: x=1.5 and x=2." },
      { q: "What is the gradient of the function f(x)=3x + 7?", a: "3", explanation: "The gradient is the slope, here it is 3." },
      { q: "Explain the meaning of ∫f(x)dx.", a: "Integral", explanation: "The integral is the area under the curve f(x)." },
      { q: "Give the roots of f(x) = x² - x - 6.", a: "3, -2", explanation: "Solve x² - x - 6 = 0 → (x-3)(x+2) = 0." },
      { q: "Solve the system of equations:\n2x + y = 5\nx - y = 1", a: "x=2, y=1", explanation: "Add and solve: x=2, y=1." }
    ],
  };

  let currentLevel = "algebra1";
  let currentIndex = 0;
  let quizStarted = false;

  // UI references
  const startScreen = document.getElementById("start-screen");
  const questionScreen = document.getElementById("question-screen");
  const startBtn = document.getElementById("start-btn");
  const questionNumber = document.getElementById("question-number");
  const questionText = document.getElementById("question-text");
  const answerInput = document.getElementById("answer-input");
  const feedback = document.getElementById("feedback");
  const checkBtn = document.getElementById("check-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

  // Whiteboard refs and variables
  const wbCanvas = document.getElementById("whiteboard");
  const wbCtx = wbCanvas.getContext("2d");
  const wbPenBtn = document.getElementById("wb-pen");
  const wbEraserBtn = document.getElementById("wb-eraser");
  const wbTextBtn = document.getElementById("wb-text");
  const colorPicker = document.getElementById("color-picker");
  const wbUndoBtn = document.getElementById("wb-undo");
  const wbRedoBtn = document.getElementById("wb-redo");
  const wbClearBtn = document.getElementById("wb-clear");
  const wbInfoBtn = document.getElementById("wb-info");

  let drawing = false;
  let currentTool = "pen";
  let penColor = "#000000";
  let penWidth = 2;
  let eraserWidth = 12;

  let undoStack = [];
  let redoStack = [];

  function resizeCanvas() {
    wbCanvas.width = wbCanvas.clientWidth * window.devicePixelRatio;
    wbCanvas.height = wbCanvas.clientHeight * window.devicePixelRatio;
    wbCanvas.style.width = wbCanvas.clientWidth + "px";
    wbCanvas.style.height = wbCanvas.clientHeight + "px";
    wbCtx.setTransform(1,0,0,1,0,0);
    wbCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
    redrawAll();
  }

  function saveState() {
    let imageData = wbCtx.getImageData(0, 0, wbCanvas.width, wbCanvas.height);
    undoStack.push(imageData);
    if (undoStack.length > 50) undoStack.shift();
    redoStack.length = 0;
    updateUndoRedoBtns();
  }
  function updateUndoRedoBtns() {
    wbUndoBtn.disabled = undoStack.length === 0;
    wbRedoBtn.disabled = redoStack.length === 0;
  }
  function redrawAll() {
    if (undoStack.length > 0) {
      wbCtx.putImageData(undoStack[undoStack.length -1], 0, 0);
    } else {
      wbCtx.clearRect(0,0,wbCanvas.width,wbCanvas.height);
    }
  }
  function undo() {
    if (undoStack.length > 0) {
      let last = undoStack.pop();
      redoStack.push(last);
      if (undoStack.length > 0) {
        wbCtx.putImageData(undoStack[undoStack.length -1], 0, 0);
      } else {
        wbCtx.clearRect(0,0,wbCanvas.width,wbCanvas.height);
      }
      updateUndoRedoBtns();
    }
  }
  function redo() {
    if (redoStack.length > 0) {
      let image = redoStack.pop();
      undoStack.push(image);
      wbCtx.putImageData(image, 0, 0);
      updateUndoRedoBtns();
    }
  }

  function startDrawing(x, y) {
    drawing = true;
    wbCtx.beginPath();
    wbCtx.lineCap = "round";
    wbCtx.lineJoin = "round";
    if(currentTool === "pen") {
      wbCtx.strokeStyle = penColor;
      wbCtx.lineWidth = penWidth;
    } else if (currentTool === "eraser") {
      wbCtx.strokeStyle = "#fff";
      wbCtx.lineWidth = eraserWidth;
    }
    wbCtx.moveTo(x, y);
  }
  function drawLine(x, y) {
    if (!drawing) return;
    wbCtx.lineTo(x, y);
    wbCtx.stroke();
  }
  function stopDrawing() {
    if (drawing) {
      drawing = false;
      saveState();
    }
  }

  function addTextInput(x, y) {
    const input = document.createElement('input');
    input.type = "text";
    input.style.position = "absolute";
    input.style.left = (wbCanvas.getBoundingClientRect().left + x) + "px";
    input.style.top = (wbCanvas.getBoundingClientRect().top + y) + "px";
    input.style.color = penColor;
    input.style.fontSize = "20px";
    input.style.border = "1px solid #2979ff";
    input.style.background = "transparent";
    input.style.outline = "none";
    input.style.zIndex = 1000;
    input.autofocus = true;
    input.spellcheck = false;

    document.body.appendChild(input);
    input.focus();

    function finish() {
      const text = input.value.trim();
      if (text.length > 0) {
        wbCtx.fillStyle = penColor;
        wbCtx.font = "20px Arial";
        wbCtx.fillText(text, x, y+18);
        saveState();
      }
      document.body.removeChild(input);
      wbCanvas.focus();
    }
    input.addEventListener('keydown', e => {
      if(e.key === "Enter") {
        finish();
      } else if(e.key === "Escape") {
        document.body.removeChild(input);
        wbCanvas.focus();
      }
    });
    input.addEventListener('blur', finish);
  }

  let lastX = 0, lastY = 0;
  function getCanvasCoordinates(event) {
    const rect = wbCanvas.getBoundingClientRect();
    let x, y;
    if(event.touches) {
      x = event.touches[0].clientX - rect.left;
      y = event.touches[0].clientY - rect.top;
    } else {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }
    return {x, y};
  }

  function onPointerDown(e) {
    if(currentTool === "text") return;
    const {x, y} = getCanvasCoordinates(e);
    startDrawing(x, y);
    lastX = x;
    lastY = y;
    e.preventDefault();
  }
  function onPointerMove(e) {
    if(!drawing) return;
    const {x, y} = getCanvasCoordinates(e);
    drawLine(x, y);
    lastX = x;
    lastY = y;
    e.preventDefault();
  }
  function onPointerUp(e) {
    stopDrawing();
    e.preventDefault();
  }
  function onCanvasClick(e) {
    if(currentTool === "text") {
      const {x, y} = getCanvasCoordinates(e);
      addTextInput(x, y);
    }
  }

  function initWhiteboard() {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    wbCanvas.addEventListener("mousedown", onPointerDown);
    wbCanvas.addEventListener("mousemove", onPointerMove);
    wbCanvas.addEventListener("mouseup", onPointerUp);
    wbCanvas.addEventListener("mouseout", onPointerUp);
    wbCanvas.addEventListener("touchstart", onPointerDown, {passive:false});
    wbCanvas.addEventListener("touchmove", onPointerMove, {passive:false});
    wbCanvas.addEventListener("touchend", onPointerUp);
    wbCanvas.addEventListener("click", onCanvasClick);
    updateUndoRedoBtns();
  }

  function switchTool(tool) {
    currentTool = tool;
    wbPenBtn.setAttribute("aria-pressed", tool === "pen");
    wbEraserBtn.setAttribute("aria-pressed", tool === "eraser");
    wbTextBtn.setAttribute("aria-pressed", tool === "text");
    if (tool === "eraser") {
      wbCanvas.style.cursor = "crosshair";
    } else if (tool === "pen") {
      wbCanvas.style.cursor = "crosshair";
    } else if (tool === "text") {
      wbCanvas.style.cursor = "text";
    }
  }

  function showQuestion() {
    let qList = quizData[currentLevel];
    let qObj = qList[currentIndex];
    questionNumber.textContent = `Level: ${currentLevel.toUpperCase()} - Question ${currentIndex + 1} by ${qList.length}`;
    questionText.textContent = qObj.q;
    answerInput.value = "";
    answerInput.focus();
    feedback.textContent = "";
    checkBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
    restartBtn.style.display = "none";
  }

  // Normalize answers: remove spaces + lowercase + replace some chars for easier matching
  function normalize(str) {
    if (!str) return "";
    return str.toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[\u00B1±]/g, "+-")    // ± to +-
      .replace(/[√]/g, "sqrt")        // √ to sqrt
      .replace(/[²]/g, "^2")          // squared char to ^2
      .replace(/[³]/g, "^3")          // cubed char to ^3
      .replace(/[÷]/g, "/")           // division symbol
      .replace(/,/g, ".")             // comma to dot (for decimal)
      .replace(/\(|\)/g, "");         // remove parentheses for leniency
  }

  function checkAnswer() {
    const qObj = quizData[currentLevel][currentIndex];
    const userAnswerRaw = answerInput.value.trim();
    if(userAnswerRaw === "") {
      feedback.style.color = "#ffa500";
      feedback.textContent = "Please enter an answer.";
      answerInput.focus();
      return false;
    }
    const userAnswer = normalize(userAnswerRaw);
    const correctAnswer = normalize(qObj.a);

    // Accept multiple answers separated by comma (for Algebra3 solutions)
    if(correctAnswer.includes(",")) {
      const correctParts = correctAnswer.split(",").map(s => s.trim()).sort();
      const userParts = userAnswer.split(",").map(s => s.trim()).sort();
      if(correctParts.length !== userParts.length) {
        feedback.style.color = "#f44336";
        feedback.textContent = "Unfortunately wrong. Explanation: " + qObj.explanation;
        return false;
      }
      for(let i=0; i<correctParts.length; i++) {
        if(correctParts[i] !== userParts[i]) {
          feedback.style.color = "#f44336";
          feedback.textContent = "Unfortunately wrong. Explanation: " + qObj.explanation;
          return false;
        }
      }
      feedback.style.color = "#4caf50";
      feedback.textContent = "Correct! ✅";
      checkBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
      return true;
    }

    // If answer is "undefined", accept also "unbekannt" (German)
    if(correctAnswer === "undefined" && (userAnswer === "undefined" || userAnswer === "unbekannt")) {
      feedback.style.color = "#4caf50";
      feedback.textContent = "Correct! ✅";
      checkBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
      return true;
    }

    // Normal exact match
    if(userAnswer === correctAnswer) {
      feedback.style.color = "#4caf50";
      feedback.textContent = "Correct! ✅";
      checkBtn.style.display = "none";
      nextBtn.style.display = "inline-block";
      return true;
    } else {
      feedback.style.color = "#f44336";
      feedback.textContent = "Unfortunately wrong. Explanation: " + qObj.explanation;
      return false;
    }
  }

  function nextQuestion() {
    const qList = quizData[currentLevel];
    currentIndex++;
    if(currentIndex >= qList.length) {
      if(currentLevel === "algebra1") {
        currentLevel = "algebra2";
      } else if(currentLevel === "algebra2") {
        currentLevel = "algebra3";
      } else {
        alert("Congratulations! You have completed all the questions in Algebra 1, 2, and 3!");
        restartBtn.style.display = "inline-block";
        nextBtn.style.display = "none";
        checkBtn.style.display = "none";
        return;
      }
      currentIndex = 0;
      alert(`You have the level! ${currentLevel === 'algebra2' ? 'Algebra 1' : 'Algebra 2'} completed!\nContinue to ${currentLevel === 'algebra2' ? 'Algebra 2' : 'Algebra 3'}!`);
    }
    showQuestion();
  }

  function restartQuiz() {
    currentLevel = "algebra1";
    currentIndex = 0;
    startScreen.style.display = "none";
    questionScreen.style.display = "flex";
    showQuestion();
    checkBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
    restartBtn.style.display = "none";
  }

  startBtn.addEventListener("click", () => {
    quizStarted = true;
    startScreen.style.display = "none";
    questionScreen.style.display = "flex";
    showQuestion();
  });
  checkBtn.addEventListener("click", () => {
    checkAnswer();
  });
  nextBtn.addEventListener("click", () => {
    nextQuestion();
  });
  restartBtn.addEventListener("click", () => {
    restartQuiz();
  });

  wbPenBtn.addEventListener("click", () => switchTool("pen"));
  wbEraserBtn.addEventListener("click", () => switchTool("eraser"));
  wbTextBtn.addEventListener("click", () => switchTool("text"));
  colorPicker.addEventListener("input", e => penColor = e.target.value);
  wbUndoBtn.addEventListener("click", undo);
  wbRedoBtn.addEventListener("click", redo);
  wbClearBtn.addEventListener("click", () => {
    wbCtx.clearRect(0, 0, wbCanvas.width, wbCanvas.height);
    saveState();
  });
  wbInfoBtn.addEventListener("click", () => {
    alert("Whiteboard Explanation:\n\n- Use pen to draw.\n- Eraser to delete.\n- Text tool for formulas or notes.\n- Choose different colors.\n- With undo/redo, you can control changes.\n\nUse the whiteboard especially in Algebra 3 to write complex formulas or sketches.");
  });

  // Initialize
  function initialize() {
    initWhiteboard();
  }
  initialize();

  function goBack() {
    window.history.back(); // Zurück zur vorherigen Seite
    // oder benutze die folgende Zeile, um zu einer festen Seite zurückzukehren:
    // window.location.href = "deine-website-url.html"; // Beispiel für eine feste URL
}

  
})();

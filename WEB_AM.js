(() => {
  // Navigation & Mobile Menü
  const menuButtons = document.querySelectorAll('nav ul.menu button');
  const sections = document.querySelectorAll('main section');
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('main-menu');
  const profileIcon = document.getElementById('profile-icon');

  // Chat
  const chatForm = document.getElementById('chat-form');
  const chatInput = chatForm.querySelector('#chat-input');
  const messagesContainer = document.querySelector('#chat .messages');
  let messages = [];

  // Statistiken
  const statsToggleBtn = document.querySelector('#settings .stats-toggle');
  const statsContent = document.getElementById('stats-content');

  // Kursverwaltung
  const addBtn = document.getElementById('add-course-btn');
  const courseContainer = document.getElementById('user-courses');

  // Mobile Menü Toggle
  function toggleMobileMenu(show) {
    if (show === undefined) show = !mainMenu.classList.contains('show');
    if (show) {
      mainMenu.classList.add('show');
      menuToggle.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
    } else {
      mainMenu.classList.remove('show');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  }

  // Navigation
  function showSection(id) {
    sections.forEach(sec => {
      if (sec.id === id) {
        sec.classList.add('active');
        sec.setAttribute('tabindex', '0');
        sec.focus();
      } else {
        sec.classList.remove('active');
        sec.setAttribute('tabindex', '-1');
      }
    });
    menuButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === id);
      btn.setAttribute('aria-current', btn.dataset.target === id ? 'page' : 'false');
    });
    if (mainMenu.classList.contains('show')) toggleMobileMenu(false);
  }

  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.target));
  });
  menuToggle.addEventListener('click', () => toggleMobileMenu());
  menuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMobileMenu();
    }
  });

  // Profil (Dummy, da kein Formular im HTML)
  profileIcon.addEventListener('click', () => alert('Profilbereich kommt bald!'));
  profileIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      alert('Profilbereich kommt bald!');
    }
  });

  // Chat
  function renderMessages() {
    messagesContainer.innerHTML = '';
    messages.forEach(m => {
      const div = document.createElement('div');
      div.className = 'message';
      const d = new Date(m.timestamp);
      div.textContent = `[${d.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}] ${m.text}`;
      messagesContainer.appendChild(div);
    });
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  function chatSend(e) {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (text === '') return;
    const msg = { speaker: 'kind', text, timestamp: Date.now() };
    messages.push(msg);
    renderMessages();
    chatInput.value = '';
  }
  chatForm.addEventListener('submit', chatSend);

  // Statistiken Toggle
  function toggleStats() {
    const isVisible = statsContent.classList.toggle('show');
    statsContent.hidden = !isVisible;
    statsToggleBtn.setAttribute('aria-pressed', isVisible.toString());
    statsToggleBtn.setAttribute('aria-expanded', isVisible.toString());
  }
  statsToggleBtn.addEventListener('click', toggleStats);
  statsToggleBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleStats();
    }
  });

  // Statistiken Zeit-Update
  let startTime = Date.now();
  function updateTime() {
    let totalTimeInMinutes = Math.floor((Date.now() - startTime) / 1000 / 60);
    let totalTimeInHours = (totalTimeInMinutes / 60).toFixed(2);
    document.getElementById('total-play-time').textContent = totalTimeInHours;
  }
  setInterval(updateTime, 60000);

  // Kursverwaltung (Add, Delete, LocalStorage)
  function renderCourse({ title, wordDe, wordTi, imgUrl }) {
    const lessonDiv = document.createElement('div');
    lessonDiv.className = 'lesson';
    lessonDiv.innerHTML = `
      <h3>${title}</h3>
      <ul class="vocab-list">
        <li>
          ${imgUrl ? `<img src="${imgUrl}" alt="${wordDe}" />` : ''}
          <span>${wordDe} – ${wordTi}</span>
          <button onclick="alert('🔊 (${wordTi}) – Audio coming soon')">🔊</button>
          <button class="delete-btn" title="Delete">🗑️</button>
        </li>
      </ul>
    `;
    lessonDiv.querySelector('.delete-btn').addEventListener('click', () => {
      courseContainer.removeChild(lessonDiv);
      deleteCourse({ title, wordDe, wordTi, imgUrl });
    });
    courseContainer.appendChild(lessonDiv);
  }
  function saveCourse(course) {
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
  }
  function deleteCourse(courseToDelete) {
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    const filtered = courses.filter(c =>
      c.title !== courseToDelete.title ||
      c.wordDe !== courseToDelete.wordDe ||
      c.wordTi !== courseToDelete.wordTi
    );
    localStorage.setItem('courses', JSON.stringify(filtered));
  }
  function loadCourses() {
    const savedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    savedCourses.forEach(course => renderCourse(course));
  }
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const title = document.getElementById('lesson-title').value.trim();
      const wordDe = document.getElementById('word-de').value.trim();
      const wordTi = document.getElementById('word-ti').value.trim();
      const imgUrl = document.getElementById('img-url').value.trim();
      if (!title || !wordDe || !wordTi) {
        alert('Please fill in all fields!');
        return;
      }
      const newCourse = { title, wordDe, wordTi, imgUrl };
      renderCourse(newCourse);
      saveCourse(newCourse);
      document.getElementById('lesson-title').value = '';
      document.getElementById('word-de').value = '';
      document.getElementById('word-ti').value = '';
      document.getElementById('img-url').value = '';
    });
    loadCourses();
  }

  // Games: Details anzeigen (optional, falls du Buttons für Details hast)
  const gamesList = document.querySelector('#games .game-list');
  const gameDetails = document.querySelector('#games .game-details');
  if (gamesList && gameDetails) {
    gamesList.addEventListener('click', (e) => {
      if (!e.target.matches('a')) return;
      e.preventDefault();
      let description = '';
      if (e.target.href.includes('ALGEBRA_GAME.html')) {
        description = 'Algebra Game: Lerne Mathe mit coolen Aufgaben!';
      } else if (e.target.href.includes('Memory-play.html')) {
        description = 'Memory Game: Trainiere dein Gedächtnis!';
      } else if (e.target.href.includes('satrs.html')) {
        description = 'Tigrinya Game: Lerne Tigrinya spielerisch!';
      }
      gameDetails.textContent = description;
    });
  }

  // Live-Bereich Demo (Winken)
  const liveBtn = document.getElementById('live-audio-btn');
  const waveBtn = document.getElementById('wave-btn');
  const waveAnim = document.getElementById('wave-animation');
  if (liveBtn && waveBtn && waveAnim) {
    liveBtn.addEventListener('click', () => {
      waveBtn.hidden = false;
      document.getElementById('live-audio-status').textContent = 'Live gestartet!';
    });
    waveBtn.addEventListener('click', () => {
      waveAnim.hidden = false;
      setTimeout(() => { waveAnim.hidden = true; }, 2000);
    });
  }

  // Audio-Buttons in Kursen (Demo)
  window.playAudio = function(word) {
    alert('Audio für "' + word + '" kommt bald!');
  };

  // Initialisierung
  showSection('home');
  renderMessages();
  updateTime();



  // ...existing code...
document.querySelectorAll('.lesson-nav button').forEach(btn => {
  btn.addEventListener('click', function() {
    // Alle Lektionen ausblenden
    document.querySelectorAll('.lesson-category').forEach(sec => sec.classList.remove('active'));
    // Alle Buttons deaktivieren
    document.querySelectorAll('.lesson-nav button').forEach(b => b.classList.remove('active'));
    // Die gewünschte Lektion anzeigen
    const target = this.getAttribute('data-target');
    document.getElementById(target).classList.add('active');
    this.classList.add('active');
  });
});

// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
  // Kategorie-Karten Klick
  document.querySelectorAll('#ti-course .category-card').forEach(card => {
    card.addEventListener('click', function() {
      // Übersicht ausblenden
      document.querySelector('#ti-course .category-overview').style.display = 'none';
      // Alle Kategorien ausblenden
      document.querySelectorAll('#ti-course .lesson-category').forEach(sec => sec.style.display = 'none');
      // Gewählte Kategorie anzeigen
      const target = this.getAttribute('data-target');
      const section = document.getElementById(target);
      if(section) section.style.display = 'block';
    });
  });

  // Zurück-Button Klick
  document.querySelectorAll('#ti-course .back-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      // Übersicht anzeigen
      document.querySelector('#ti-course .category-overview').style.display = 'flex';
      // Alle Kategorien ausblenden
      document.querySelectorAll('#ti-course .lesson-category').forEach(sec => sec.style.display = 'none');
    });
  });

  // Optional: Beim Laden alle Kategorien ausblenden, nur Übersicht zeigen
  document.querySelector('#ti-course .category-overview').style.display = 'flex';
  document.querySelectorAll('#ti-course .lesson-category').forEach(sec => sec.style.display = 'none');
});

// Dummy-Funktion für Audio-Buttons
function playAudio(word) {
  alert('Audio for "' + word + '" is coming soon!');
}

// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
  // ...dein anderer Code...

  // Quiz-Logik
  document.querySelectorAll('.quiz').forEach(quiz => {
    quiz.querySelectorAll('.quiz-answer').forEach(btn => {
      btn.addEventListener('click', function() {
        const feedback = quiz.querySelector('.quiz-feedback');
        if (this.dataset.correct === "true") {
          feedback.textContent = "✅ Richtig!";
          feedback.style.color = "green";
        } else {
          feedback.textContent = "❌ Falsch! Versuche es nochmal.";
          feedback.style.color = "red";
        }
      });
    });
  });
});


})();

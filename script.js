const stats = [
  { label: "Events conducted", value: 13, suffix: "+" },
  { label: "Student members", value: 100, suffix: "+" },
  { label: "Faculty mentors", value: 10, suffix: "+" },
  { label: "Successful semesters", value: 2, suffix: "" },
  { label: "Research domains", value: 5, suffix: "+" }
];

const mentors = [
  "Prof. Prem Kumar Khosla",
  "Atul Khosla",
  "Avnee Gupta",
  "Ashoo Khosla",
  "Ashish Khosla",
  "Vishal Anand",
  "Pankaj Vaidya",
  "Anurag Rana",
  "Dr. Gaurav Gupta",
  "Dr. Aakanksha Kalra"
];

const mentorPreview = [
  ["Prof. Prem Kumar Khosla", "Chairman / Mentor"],
  ["Dr. Aakanksha Kalra", "Faculty Mentor"],
  ["Dr. Gaurav Gupta", "Faculty Mentor"],
  ["Anurag Rana", "Mentor / Workshop Lead"]
];

const roadmap = [
  {
    title: "Ideation",
    description: "Attend workshops and identify a research problem worth pursuing.",
    details: ["Design Thinking", "SCOPEX notes", "Idea templates"]
  },
  {
    title: "Mentorship",
    description: "Get paired with a faculty mentor and begin structured check-ins.",
    details: ["Mentor list", "Meeting log", "Cohort guidance"]
  },
  {
    title: "Skill Building",
    description: "Improve writing, presentation, and research tool usage.",
    details: ["Writing guides", "Workshop slides", "AI tool notes"]
  },
  {
    title: "Submission",
    description: "Prepare abstract, paper, or prototype submission with SRC guidance.",
    details: ["Abstract format", "Journal checklist", "Peer review"]
  },
  {
    title: "Outcome",
    description: "Reach publication, patent, prototype, or conference presentation.",
    details: ["Recognition", "Certificates", "Visibility"]
  }
];

const activities = [
  {
    semester: "semester-1",
    title: "Meet & Greet (Inaugural)",
    meta: "Semester I 2025 | Orientation",
    outcome: "SRC intro, objectives, onboarding, group photo"
  },
  {
    semester: "semester-1",
    title: "Workshop: Begin Your Research Journey",
    meta: "Dr. Aakanksha Kalra",
    outcome: "Research methodology basics and starter resources"
  },
  {
    semester: "semester-1",
    title: "Write a Research Paper & Review Article",
    meta: "12 Nov 2025 | Ila Joshi",
    outcome: "Paper structure, review article guide, and group photos"
  },
  {
    semester: "semester-1",
    title: "No-Code LLM Workshop",
    meta: "27 Nov 2025 | Anurag Rana",
    outcome: "AI tools, no-code workflows, and workshop poster"
  },
  {
    semester: "semester-1",
    title: "SCOPEX 2025 Opening Workshop",
    meta: "13 Nov 2025 | Rahul D Bahadur, Dr. Lokender Kumar",
    outcome: "Problem-to-research pipeline and speaker profiles"
  },
  {
    semester: "semester-1",
    title: "Power of Pause Workshop",
    meta: "14 Nov 2025 | Ankur Saxena Bashar",
    outcome: "Reflective thinking and communication clarity"
  },
  {
    semester: "semester-1",
    title: "Design Thinking Workshop",
    meta: "15 Nov 2025 | P Kumaresan (IIT Bombay)",
    outcome: "Empathy-led design and innovation exercises"
  },
  {
    semester: "semester-1",
    title: "Ideation Conclave 2025",
    meta: "4 Dec 2025 | APJ Hall",
    outcome: "Student presentations, awards, leadership photos"
  },
  {
    semester: "semester-2",
    title: "Parents Gratitude Day Initiative",
    meta: "14 Feb 2026 | Pine Court",
    outcome: "Anonymous gratitude wall and wellbeing focus"
  },
  {
    semester: "semester-2",
    title: "SRC Biotech Fest 2026",
    meta: "2026 | Collaborative event",
    outcome: "Interdisciplinary collaboration and audience coverage"
  },
  {
    semester: "semester-2",
    title: "Meeting with Education Minister",
    meta: "2026 | Leadership event",
    outcome: "Policy engagement and institutional recognition"
  },
  {
    semester: "semester-2",
    title: "ProtoSphere — Idea to Prototype",
    meta: "2026 | Innovation initiative",
    outcome: "Prototype showcase and early-stage product development"
  },
  {
    semester: "semester-2",
    title: "Centre of Excellence: Robotics & AI",
    meta: "2026 | Sirena Technologies",
    outcome: "Lab inauguration and AI/robotics exposure"
  }
];

const featuredEvents = [
  ["No Code LLM Workshop", "27 Nov 2025", "Anurag Rana", "Research-ready AI workflows made accessible."],
  ["Research Paper Workshop", "12 Nov 2025", "Ila Joshi", "Paper structure and review article guidance."],
  ["Design Thinking Workshop", "15 Nov 2025", "P Kumaresan", "Empathy-led innovation for student teams."],
  ["Ideation Conclave", "4 Dec 2025", "APJ Hall", "Student presentations, awards, and startup mindset."]
];

const benefits = [
  "Access to workshops",
  "Research mentorship",
  "Publication support",
  "Networking with innovators",
  "Certificates and recognition",
  "Leadership opportunities"
];

const report = [
  ["Event coverage", "All 13 activities presented in a web-friendly summary."],
  ["Mentor acknowledgements", "Visible credit for the faculty mentors supporting SRC."],
  ["Institutional impact", "Highlights for university reporting and student visibility."],
  ["Photo archive", "Curated visuals for annual report storytelling."]
];

const resources = [
  ["Writing Guides", "Paper structure, review article guide, and submission checklist."],
  ["AI Tools", "Responsible no-code workflows and productivity tools."],
  ["Templates", "Abstract, poster, mentor log, and presentation templates."],
  ["Workshop Notes", "Slides and key takeaways from SRC sessions."],
  ["Recommended Books", "Core references for writing, methods, and innovation."],
  ["Research Opportunities", "A place to highlight internships, calls, and lab openings."]
];

const quotes = [
  { role: "Student", text: "Students can discover SRC and apply for membership in under 3 minutes." },
  { role: "Faculty", text: "The research roadmap should make the next step obvious for every new student." },
  { role: "President", text: "Activity documentation turns a student council into an institutional memory." }
];

const statsRoot = document.getElementById("stats");
const mentorsRoot = document.getElementById("mentors");
const roadmapRoot = document.getElementById("roadmapSteps");
const activityGrid = document.getElementById("activityGrid");
const benefitGrid = document.getElementById("benefits");
const reportGrid = document.getElementById("reportGrid");
const resourceGrid = document.getElementById("resourceGrid");
const quotePanel = document.getElementById("quotePanel");
const featuredEventsRoot = document.getElementById("featuredEvents");
const mentorStripRoot = document.getElementById("mentorStrip");
const nextEventTitle = document.getElementById("nextEventTitle");
const nextEventMeta = document.getElementById("nextEventMeta");
const countdown = document.getElementById("countdown");
const toast = document.getElementById("toast");
const topbar = document.querySelector(".topbar");
const newsletterForm = document.querySelector(".newsletter-form");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function renderStats() {
  statsRoot.innerHTML = stats
    .map(
      (item) => `
        <div>
          <strong><span class="count-up" data-target="${item.value}">0</span>${item.suffix}</strong>
          <span>${item.label}</span>
        </div>
      `
    )
    .join("");
}

function renderMentors() {
  mentorsRoot.innerHTML = mentors
    .map(
      (mentor, index) => `
        <article class="mentor-card reveal">
          <p class="eyebrow">Faculty mentor ${String(index + 1).padStart(2, "0")}</p>
          <h4>${mentor}</h4>
          <p>Faculty guidance, research mentorship, and collaboration support.</p>
          <span class="meta">Mentor profile</span>
        </article>
      `
    )
    .join("");
}

function renderMentorStrip() {
  if (!mentorStripRoot) return;

  mentorStripRoot.innerHTML = mentorPreview
    .map(
      ([name, role]) => `
        <article class="mentor-strip-card reveal">
          <div class="mentor-avatar">SRC</div>
          <div>
            <h4>${name}</h4>
            <p>${role}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderFeaturedEvents() {
  if (!featuredEventsRoot) return;

  featuredEventsRoot.innerHTML = featuredEvents
    .map(
      ([title, date, speaker, outcome]) => `
        <article class="featured-card reveal">
          <div class="featured-image">Image</div>
          <div class="featured-copy">
            <p class="eyebrow">Featured Event</p>
            <h4>${title}</h4>
            <p class="featured-meta">${date} | ${speaker}</p>
            <p>${outcome}</p>
            <a href="#activities" class="learn-more">Learn More</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRoadmap() {
  roadmapRoot.innerHTML = roadmap
    .map(
      (item, index) => `
        <article class="roadmap-card reveal">
          <span class="step">Stage ${index + 1}</span>
          <h4>${item.title}</h4>
          <p>${item.description}</p>
          <ul>${item.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderActivities(filter = "all") {
  const visible = filter === "all" ? activities : activities.filter((item) => item.semester === filter);
  activityGrid.innerHTML = visible
    .map(
      (item) => `
        <article class="activity-card reveal" tabindex="0">
          <div class="meta">
            <span class="badge">${item.semester.replace("semester-", "Semester ")}</span>
            <span class="impact-tag">Documentation</span>
          </div>
          <h4>${item.title}</h4>
          <p>${item.meta}</p>
          <p>${item.outcome}</p>
        </article>
      `
    )
    .join("");
}

function renderBenefits() {
  benefitGrid.innerHTML = benefits
    .map(
      (item) => `
        <article class="benefit-card reveal">
          <h4>${item}</h4>
          <p>Part of the SRC membership value proposition for students.</p>
        </article>
      `
    )
    .join("");
}

function renderReport() {
  reportGrid.innerHTML = report
    .map(
      ([title, body]) => `
        <article class="resource-card reveal">
          <h4>${title}</h4>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
}

function renderResources() {
  resourceGrid.innerHTML = resources
    .map(
      ([title, body]) => `
        <article class="resource-card reveal">
          <h4>${title}</h4>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
}

function renderQuote() {
  quotePanel.innerHTML = `<p id="quoteText">${quotes[0].text}</p><span class="badge" id="quoteRole">${quotes[0].role}</span>`;
  let index = 0;
  window.setInterval(() => {
    index = (index + 1) % quotes.length;
    const quoteText = document.getElementById("quoteText");
    const quoteRole = document.getElementById("quoteRole");
    if (!quoteText || !quoteRole) return;
    quoteText.textContent = quotes[index].text;
    quoteRole.textContent = quotes[index].role;
  }, 5000);
}

function renderEvents() {
  const next = activities[4];
  nextEventTitle.textContent = next.title;
  nextEventMeta.textContent = next.meta;
}

function updateCountdown() {
  const target = new Date();
  target.setDate(target.getDate() + 12);
  target.setHours(18, 0, 0, 0);

  const tick = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) {
      countdown.textContent = "Registration is open.";
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  tick();
  window.setInterval(tick, 1000);
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      renderActivities(tab.dataset.semester);
      attachCardHandlers();
    });
  });
}

function attachCardHandlers() {
  document.querySelectorAll(".activity-card, .mentor-card, .resource-card, .benefit-card, .roadmap-card").forEach((card) => {
    card.addEventListener("click", () => showToast(`${card.querySelector("h4")?.textContent || "Item"} opened for review.`));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });
}

function animateCounters() {
  const counters = document.querySelectorAll(".count-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.target);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 36));

        const timer = window.setInterval(() => {
          current += step;
          if (current >= target) {
            element.textContent = target;
            window.clearInterval(timer);
            return;
          }
          element.textContent = current;
        }, 24);

        observer.unobserve(element);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupScrollState() {
  const hero = document.getElementById("home");
  if (!hero || !topbar) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      topbar.classList.toggle("scrolled", !entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  observer.observe(hero);
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

document.getElementById("membershipForm").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Membership application captured. Connect a backend next.");
  event.target.reset();
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Contact message captured. Connect email delivery next.");
  event.target.reset();
});

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Newsletter subscription captured. Connect your email provider next.");
    event.target.reset();
  });
}

renderStats();
renderMentors();
renderMentorStrip();
renderFeaturedEvents();
renderRoadmap();
renderActivities();
renderBenefits();
renderReport();
renderResources();
renderQuote();
renderEvents();
updateCountdown();
setupTabs();
animateCounters();
setupScrollState();
attachCardHandlers();
setupRevealObserver();
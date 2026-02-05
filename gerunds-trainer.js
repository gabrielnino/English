const STORAGE_KEY = "gerunds_trainer_one_section_v2";

// 20 cases per section (Subject / Object / Preposition)
const TOPICS = [
  {
    id: "subjects",
    title: "Gerunds as Subjects",
    tag: "SUBJECT",
    desc: "Gerund (verb+ing) used as the subject (the main “thing” in the sentence).",
    dot: "var(--accent2)",
    lessons: [
      {type:"mcq",prompt:"Choose the best sentence:",choices:["To swim is fun.","Swimming is fun.","Swim is fun."],answerIndex:1,explainGood:"Correct: “Swimming” is the subject.",explainBad:"Use verb+ing as the subject: “Swimming…”.",hint:"Subject = who/what. Use verb+ing."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Running every day improve my health.","Running every day improves my health.","Run every day improves my health."],answerIndex:1,explainGood:"Correct: “Running…” is the subject.",explainBad:"Gerund subject + singular verb: “Running… improves”.",hint:"Gerund subject is singular → improves."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Cooking at home save money.","Cooking at home saves money.","Cook at home saves money."],answerIndex:1,explainGood:"Correct gerund subject: “Cooking… saves”.",explainBad:"Use “Cooking” as the subject and “saves”.",hint:"Cooking (singular) → saves."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Learning English take time.","Learning English takes time.","Learn English takes time."],answerIndex:1,explainGood:"Correct: “Learning English” is the subject.",explainBad:"Use gerund as subject: “Learning… takes”.",hint:"Learning (singular) → takes."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Being honest is important.","Be honest is important.","To being honest is important."],answerIndex:0,explainGood:"Correct: “Being honest” is the subject.",explainBad:"Use gerund: “Being honest…”.",hint:"Being + adjective."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Driving in snow is scary.","To drive in snow is scary.","Drive in snow is scary."],answerIndex:0,explainGood:"Correct: “Driving…” is the subject.",explainBad:"Use “Driving” as the subject.",hint:"Start with “Driving…”"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Working late make me tired.","Working late makes me tired.","Work late makes me tired."],answerIndex:1,explainGood:"Correct gerund subject + makes.",explainBad:"Gerund subject is singular → makes.",hint:"Working (singular) → makes."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Traveling alone teach you a lot.","Traveling alone teaches you a lot.","To travel alone teaches you a lot."],answerIndex:1,explainGood:"Correct: “Traveling alone teaches…”.",explainBad:"Use gerund subject + teaches.",hint:"Traveling (singular) → teaches."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Staying hydrated help you focus.","Staying hydrated helps you focus.","Stay hydrated helps you focus."],answerIndex:1,explainGood:"Correct: “Staying hydrated helps…”.",explainBad:"Gerund subject + helps.",hint:"Staying → helps."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Reading before bed relaxes me.","Read before bed relaxes me.","To reading before bed relaxes me."],answerIndex:0,explainGood:"Correct: “Reading…” is the subject.",explainBad:"Use “Reading” at the start.",hint:"Reading is the subject."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Saving money require discipline.","Saving money requires discipline.","Save money requires discipline."],answerIndex:1,explainGood:"Correct: “Saving money requires…”.",explainBad:"Gerund subject + requires.",hint:"Saving → requires."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Talking too much can be a problem.","Talk too much can be a problem.","To talking too much can be a problem."],answerIndex:0,explainGood:"Correct: gerund subject “Talking…”.",explainBad:"Use “Talking” as the subject.",hint:"Talking + can be…"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Making mistakes is normal.","Make mistakes is normal.","To making mistakes is normal."],answerIndex:0,explainGood:"Correct: “Making mistakes” is the subject.",explainBad:"Use gerund subject: “Making…”.",hint:"Making + noun."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Waiting in line is annoying.","Wait in line is annoying.","To waiting in line is annoying."],answerIndex:0,explainGood:"Correct: “Waiting…” is the subject.",explainBad:"Use “Waiting” at the beginning.",hint:"Waiting in line…"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Eating vegetables improve your diet.","Eating vegetables improves your diet.","Eat vegetables improves your diet."],answerIndex:1,explainGood:"Correct: “Eating…” + improves.",explainBad:"Gerund subject is singular → improves.",hint:"Eating → improves."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Helping others feels good.","Help others feels good.","To helping others feels good."],answerIndex:0,explainGood:"Correct: “Helping others feels…”.",explainBad:"Use gerund: “Helping…”.",hint:"Helping + feels…"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Practicing every day makes you better.","Practice every day makes you better.","To practicing every day makes you better."],answerIndex:0,explainGood:"Correct: “Practicing… makes…”.",explainBad:"Use gerund subject: “Practicing…”.",hint:"Practicing + makes…"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Listening carefully helps a lot.","Listen carefully helps a lot.","To listening carefully helps a lot."],answerIndex:0,explainGood:"Correct gerund subject: “Listening… helps…”.",explainBad:"Use “Listening” as the subject.",hint:"Listening → helps."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Getting enough sleep improves memory.","Get enough sleep improves memory.","To getting enough sleep improves memory."],answerIndex:0,explainGood:"Correct: “Getting enough sleep improves…”.",explainBad:"Use gerund subject “Getting…”.",hint:"Getting → improves."},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Trying again is the key.","Try again is the key.","To trying again is the key."],answerIndex:0,explainGood:"Correct: “Trying again” is the subject.",explainBad:"Use “Trying” as the subject.",hint:"Trying again..."}
    ]
  },
  {
    id: "objects",
    title: "Gerunds as Objects",
    tag: "OBJECT",
    desc: "Many verbs are followed by a gerund (enjoy, finish, avoid, consider, suggest, keep, mind, practice...).",
    dot: "var(--accent)",
    lessons: [
      {type:"mcq",prompt:"Choose the best sentence:",choices:["I enjoy to learn English.","I enjoy learning English.","I enjoy learn English."],answerIndex:1,explainGood:"Correct: enjoy + gerund.",explainBad:"After “enjoy”, use verb+ing.",hint:"enjoy + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["She finished to write the report.","She finished writing the report.","She finished write the report."],answerIndex:1,explainGood:"Correct: finish + gerund.",explainBad:"After “finish”, use verb+ing.",hint:"finish + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["We avoid to talk about politics.","We avoid talking about politics.","We avoid talk about politics."],answerIndex:1,explainGood:"Correct: avoid + gerund.",explainBad:"After “avoid”, use verb+ing.",hint:"avoid + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["They considered to move to Vancouver.","They considered moving to Vancouver.","They considered move to Vancouver."],answerIndex:1,explainGood:"Correct: consider + gerund.",explainBad:"After “consider”, use verb+ing.",hint:"consider + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["He suggested to take the bus.","He suggested taking the bus.","He suggested take the bus."],answerIndex:1,explainGood:"Correct: suggest + gerund.",explainBad:"After “suggest”, use verb+ing.",hint:"suggest + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["I keep to forget my keys.","I keep forgetting my keys.","I keep forget my keys."],answerIndex:1,explainGood:"Correct: keep + gerund.",explainBad:"After “keep”, use verb+ing.",hint:"keep + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Do you mind to close the window?","Do you mind closing the window?","Do you mind close the window?"],answerIndex:1,explainGood:"Correct: mind + gerund.",explainBad:"After “mind”, use verb+ing.",hint:"mind + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["She practices to speak every day.","She practices speaking every day.","She practices speak every day."],answerIndex:1,explainGood:"Correct: practice + gerund.",explainBad:"After “practice”, use verb+ing.",hint:"practice + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["I can’t stand to wait.","I can’t stand waiting.","I can’t stand wait."],answerIndex:1,explainGood:"Correct: can’t stand + gerund.",explainBad:"Use verb+ing after “can’t stand”.",hint:"can’t stand + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["He admitted to lie.","He admitted lying.","He admitted lie."],answerIndex:1,explainGood:"Correct: admit + gerund.",explainBad:"After “admit”, use verb+ing.",hint:"admit + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["They postponed to meet.","They postponed meeting.","They postponed meet."],answerIndex:1,explainGood:"Correct: postpone + gerund.",explainBad:"After “postpone”, use verb+ing.",hint:"postpone + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["We discussed to buy a car.","We discussed buying a car.","We discussed buy a car."],answerIndex:1,explainGood:"Correct: discuss + gerund.",explainBad:"After “discuss”, use verb+ing.",hint:"discuss + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["I recommend to see that movie.","I recommend seeing that movie.","I recommend see that movie."],answerIndex:1,explainGood:"Correct: recommend + gerund.",explainBad:"After “recommend”, use verb+ing.",hint:"recommend + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["She mentioned to work remotely.","She mentioned working remotely.","She mentioned work remotely."],answerIndex:1,explainGood:"Correct: mention + gerund.",explainBad:"After “mention”, use verb+ing.",hint:"mention + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["He quit to smoke.","He quit smoking.","He quit smoke."],answerIndex:1,explainGood:"Correct: quit + gerund.",explainBad:"After “quit”, use verb+ing.",hint:"quit + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["I miss to travel.","I miss traveling.","I miss travel."],answerIndex:1,explainGood:"Correct: miss + gerund.",explainBad:"After “miss”, use verb+ing.",hint:"miss + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["He risked to lose everything.","He risked losing everything.","He risked lose everything."],answerIndex:1,explainGood:"Correct: risk + gerund.",explainBad:"After “risk”, use verb+ing.",hint:"risk + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["They denied to cheat.","They denied cheating.","They denied cheat."],answerIndex:1,explainGood:"Correct: deny + gerund.",explainBad:"After “deny”, use verb+ing.",hint:"deny + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["I love to cook on weekends.","I love cooking on weekends.","I love cook on weekends."],answerIndex:1,explainGood:"Correct: love + gerund works here.",explainBad:"Use verb+ing as object here: “love cooking…”.",hint:"love + verb-ing (common)"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["She enjoys to read at night.","She enjoys reading at night.","She enjoys read at night."],answerIndex:1,explainGood:"Correct: enjoy + gerund.",explainBad:"After “enjoys”, use verb+ing.",hint:"enjoy + verb-ing"}
    ]
  },
  {
    id: "prepositions",
    title: "Gerunds after Prepositions",
    tag: "PREPOSITION",
    desc: "After a preposition (in, on, at, of, for, about, by, with, without...), use a gerund.",
    dot: "var(--good)",
    lessons: [
      {type:"mcq",prompt:"Choose the best sentence:",choices:["I’m interested for learn English.","I’m interested in learning English.","I’m interested in learn English."],answerIndex:1,explainGood:"Correct: in + gerund.",explainBad:"After “in”, use verb+ing.",hint:"in + verb-ing"},
      {type:"mcq",prompt:"Choose the best option:",choices:["She apologized for be late.","She apologized for being late.","She apologized to being late."],answerIndex:1,explainGood:"Correct: for + gerund.",explainBad:"After “for”, use verb+ing.",hint:"for + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["They left without to say goodbye.","They left without saying goodbye.","They left without say goodbye."],answerIndex:1,explainGood:"Correct: without + gerund.",explainBad:"After “without”, use verb+ing.",hint:"without + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Thanks for help me.","Thanks for helping me.","Thanks for help me to."],answerIndex:1,explainGood:"Correct: for + helping.",explainBad:"After “for”, use verb+ing.",hint:"for + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["I’m good at to explain things.","I’m good at explaining things.","I’m good at explain things."],answerIndex:1,explainGood:"Correct: at + gerund.",explainBad:"After “at”, use verb+ing.",hint:"good at + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["She is responsible for organize the meeting.","She is responsible for organizing the meeting.","She is responsible to organizing the meeting."],answerIndex:1,explainGood:"Correct: for + organizing.",explainBad:"After “for”, use verb+ing.",hint:"responsible for + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["I’m tired of to hear complaints.","I’m tired of hearing complaints.","I’m tired of hear complaints."],answerIndex:1,explainGood:"Correct: of + gerund.",explainBad:"After “of”, use verb+ing.",hint:"tired of + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["He insisted on to pay.","He insisted on paying.","He insisted on pay."],answerIndex:1,explainGood:"Correct: on + paying.",explainBad:"After “on”, use verb+ing.",hint:"insist on + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["They succeeded in to solve the issue.","They succeeded in solving the issue.","They succeeded in solve the issue."],answerIndex:1,explainGood:"Correct: in + solving.",explainBad:"After “in”, use verb+ing.",hint:"succeed in + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["He is excited about start the job.","He is excited about starting the job.","He is excited about to start the job."],answerIndex:1,explainGood:"Correct: about + starting.",explainBad:"After “about”, use verb+ing.",hint:"about + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["She worries about to fail.","She worries about failing.","She worries about fail."],answerIndex:1,explainGood:"Correct: about + failing.",explainBad:"After “about”, use verb+ing.",hint:"worry about + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["He left before to finish.","He left before finishing.","He left before finish."],answerIndex:1,explainGood:"Correct: before + finishing.",explainBad:"After “before”, use verb+ing.",hint:"before + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["After to eat, we went out.","After eating, we went out.","After eat, we went out."],answerIndex:1,explainGood:"Correct: after + eating.",explainBad:"After “after”, use verb+ing.",hint:"after + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["Instead of to drive, take the train.","Instead of driving, take the train.","Instead of drive, take the train."],answerIndex:1,explainGood:"Correct: instead of + driving.",explainBad:"After “instead of”, use verb+ing.",hint:"instead of + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["She helped me by to explaining it.","She helped me by explaining it.","She helped me by explain it."],answerIndex:1,explainGood:"Correct: by + explaining.",explainBad:"After “by”, use verb+ing.",hint:"by + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["I’m looking forward to meet you.","I’m looking forward to meeting you.","I’m looking forward to meet you to."],answerIndex:1,explainGood:"Correct: to (preposition) + meeting.",explainBad:"In “look forward to”, “to” is a preposition → verb+ing.",hint:"look forward to + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["They prevented us from enter.","They prevented us from entering.","They prevented us from to enter."],answerIndex:1,explainGood:"Correct: from + entering.",explainBad:"After “from”, use verb+ing.",hint:"from + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["He apologized for to interrupting.","He apologized for interrupting.","He apologized to interrupting."],answerIndex:1,explainGood:"Correct: for + interrupting.",explainBad:"After “for”, use verb+ing.",hint:"for + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["She left without lock the door.","She left without locking the door.","She left without to lock the door."],answerIndex:1,explainGood:"Correct: without + locking.",explainBad:"After “without”, use verb+ing.",hint:"without + verb-ing"},
      {type:"mcq",prompt:"Choose the best sentence:",choices:["He is capable of solve it.","He is capable of solving it.","He is capable to solve it."],answerIndex:1,explainGood:"Correct: of + solving.",explainBad:"After “of”, use verb+ing.",hint:"capable of + verb-ing"}
    ]
  }
];

function totalLessons(){ return TOPICS.reduce((sum,t)=>sum+t.lessons.length,0); }

const state = loadState() ?? {
  topicIndex: 0,
  lessonIndex: 0,
  xp: 0,
  streak: 0,
  bestStreak: 0,
  answered: {},
  hintVisible: false
};

const el = {
  seg: document.getElementById("seg"),
  panel: document.getElementById("panel"),
  toast: document.getElementById("toast"),
  doneCount: document.getElementById("doneCount"),
  totalCount: document.getElementById("totalCount"),
  progressBar: document.getElementById("progressBar"),
  xp: document.getElementById("xp"),
  streak: document.getElementById("streak"),
  bestStreak: document.getElementById("bestStreak"),
  btnHint: document.getElementById("btnHint"),
  btnRestartSection: document.getElementById("btnRestartSection"),
  btnResetAll: document.getElementById("btnResetAll")
};

el.totalCount.textContent = String(totalLessons());
renderSeg();
renderHUD();
renderPanel();

el.btnHint.addEventListener("click", () => {
  state.hintVisible = !state.hintVisible;
  saveState();
  const hint = el.panel.querySelector(".hint");
  if(hint) hint.classList.toggle("show", state.hintVisible);
  toast(state.hintVisible ? "Hint shown." : "Hint hidden.");
});

el.btnRestartSection.addEventListener("click", () => {
  state.lessonIndex = 0;
  saveState();
  renderHUD();
  renderPanel();
  toast("Section restarted.");
  scrollTopSmooth();
});

el.btnResetAll.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
});

function renderSeg(){
  el.seg.innerHTML = "";
  TOPICS.forEach((t, idx) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = t.tag;
    b.className = (idx === state.topicIndex) ? "active" : "";
    b.title = t.title;
    b.addEventListener("click", () => {
      state.topicIndex = idx;
      state.lessonIndex = Math.min(state.lessonIndex, TOPICS[idx].lessons.length - 1);
      saveState();
      renderSeg();
      renderHUD();
      renderPanel();
      scrollTopSmooth();
    });
    el.seg.appendChild(b);
  });
}

function renderHUD(){
  const done = Object.keys(state.answered).length;
  el.doneCount.textContent = String(done);
  el.xp.textContent = String(state.xp);
  el.streak.textContent = String(state.streak);
  el.bestStreak.textContent = String(state.bestStreak);

  const pct = totalLessons() ? (done / totalLessons()) * 100 : 0;
  el.progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
}

function renderPanel(){
  const topic = TOPICS[state.topicIndex];
  const lesson = topic.lessons[state.lessonIndex];

  const key = makeKey(state.topicIndex, state.lessonIndex);
  const alreadyDone = !!state.answered[key];

  el.panel.innerHTML = `
    <div class="panelHeader">
      <div class="titleRow">
        <span class="badge">
          <span class="dot" style="background:${topic.dot}; box-shadow: 0 0 0 6px rgba(255,255,255,.08)"></span>
          <span>${escapeHtml(topic.tag)}</span>
        </span>
        <h2>${escapeHtml(topic.title)}</h2>
      </div>

      <div class="badge" title="Section progress">
        Lesson <b>${state.lessonIndex + 1}</b> / ${topic.lessons.length}
      </div>
    </div>

    <p class="desc">${escapeHtml(topic.desc)}</p>

    <div class="exercise">
      ${renderExerciseHTML(lesson)}
      <div class="hint ${state.hintVisible ? "show" : ""}">${escapeHtml(lesson.hint || "No hint for this one.")}</div>
      <div class="feedback ${alreadyDone ? "show good" : ""}" id="fb">${alreadyDone ? "Already completed. You can press Next." : ""}</div>

      <div class="row">
        <div class="tiny" id="status">${alreadyDone ? "Completed." : "Answer to unlock Next."}</div>
        <div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end;">
          <button id="btnPrev" type="button">Prev</button>
          <button class="primary" id="btnNext" type="button" ${alreadyDone ? "" : "disabled"}>Next</button>
        </div>
      </div>

      <div class="row" style="margin-top:2px;">
        <div class="tiny">
          Section: <b style="color:var(--text)">${escapeHtml(topic.tag)}</b> · Overall: <b style="color:var(--text)">${Object.keys(state.answered).length}</b> / <b style="color:var(--text)">${totalLessons()}</b>
        </div>
      </div>
    </div>
  `;

  wirePanel(topic, lesson, alreadyDone);
}

function renderExerciseHTML(lesson){
  if(lesson.type === "mcq"){
    const choices = lesson.choices.map((c, i) => `
      <button class="choice" type="button" data-choice="${i}">${escapeHtml(c)}</button>
    `).join("");
    return `
      <div class="prompt">${escapeHtml(lesson.prompt)}</div>
      <div class="choices">${choices}</div>
    `;
  }

  if(lesson.type === "fix"){
    return `
      <div class="prompt">${escapeHtml(lesson.prompt)}</div>
      <div class="prompt"><code>${escapeHtml(lesson.sentence)}</code></div>
      <div style="display:grid; gap:8px;">
        <label class="sr" for="answer">Your answer</label>
        <input id="answer" class="input" type="text"
          placeholder="Type the corrected sentence…"
          autocomplete="off"
          spellcheck="false"
        />
        <button class="choice" type="button" id="btnCheck">Check</button>
      </div>
    `;
  }

  return `<div class="prompt">Unknown exercise type.</div>`;
}

function wirePanel(topic, lesson, alreadyDone){
  const fb = el.panel.querySelector("#fb");
  const status = el.panel.querySelector("#status");
  const btnPrev = el.panel.querySelector("#btnPrev");
  const btnNext = el.panel.querySelector("#btnNext");

  btnPrev.addEventListener("click", () => {
    if(state.lessonIndex > 0){
      state.lessonIndex -= 1;
    } else if(state.topicIndex > 0){
      state.topicIndex -= 1;
      state.lessonIndex = TOPICS[state.topicIndex].lessons.length - 1;
      renderSeg();
    }
    saveState();
    renderHUD();
    renderPanel();
    scrollTopSmooth();
  });

  btnNext.addEventListener("click", () => {
    if(state.lessonIndex < topic.lessons.length - 1){
      state.lessonIndex += 1;
    } else if(state.topicIndex < TOPICS.length - 1){
      state.topicIndex += 1;
      state.lessonIndex = 0;
      renderSeg();
      toast("Section complete → moved to next section.");
    } else {
      toast("All sections complete.");
    }
    saveState();
    renderHUD();
    renderPanel();
    scrollTopSmooth();
  });

  if(alreadyDone) return;

  if(lesson.type === "mcq"){
    const btns = [...el.panel.querySelectorAll(".choice[data-choice]")];
    btns.forEach(b => {
      b.addEventListener("click", () => {
        const picked = Number(b.dataset.choice);
        const correct = picked === lesson.answerIndex;

        btns.forEach(x => x.disabled = true);

        if(correct){
          btns.forEach(x => {
            const idx = Number(x.dataset.choice);
            if(idx === lesson.answerIndex) x.classList.add("correct");
          });

          awardCorrect();
          setFeedback(true, lesson.explainGood, "good");
          status.textContent = "Correct. Next unlocked.";
          btnNext.disabled = false;
          pulse(el.panel, "good");
        } else {
          btns.forEach(x => {
            const idx = Number(x.dataset.choice);
            if(idx === lesson.answerIndex) x.classList.add("correct");
            if(idx === picked) x.classList.add("wrong");
          });

          awardWrong();
          setFeedback(true, lesson.explainBad, "bad");
          status.textContent = "Try again (use Hint if needed).";

          setTimeout(() => {
            btns.forEach(x => {
              x.disabled = false;
              x.classList.remove("wrong");
              x.classList.remove("correct");
            });
          }, 650);

          pulse(el.panel, "bad");
        }
      });
    });
  }

  if(lesson.type === "fix"){
    const input = el.panel.querySelector("#answer");
    const btnCheck = el.panel.querySelector("#btnCheck");

    const check = () => {
      const raw = (input.value || "").trim();
      if(!raw){
        setFeedback(true, "Type your corrected sentence first.", "bad");
        pulse(el.panel, "bad");
        return;
      }
      const correct = normalize(raw) === normalize(lesson.answer);

      if(correct){
        input.disabled = true;
        btnCheck.disabled = true;
        awardCorrect();
        setFeedback(true, lesson.explainGood, "good");
        status.textContent = "Correct. Next unlocked.";
        btnNext.disabled = false;
        pulse(el.panel, "good");
      } else {
        awardWrong();
        setFeedback(true, lesson.explainBad + `\nCorrect answer: “${lesson.answer}”`, "bad");
        status.textContent = "Try again (edit your sentence).";
        pulse(el.panel, "bad");
      }
    };

    btnCheck.addEventListener("click", check);
    input.addEventListener("keydown", (e) => { if(e.key === "Enter") check(); });
  }

  function setFeedback(show, text, tone){
    fb.textContent = text;
    fb.classList.toggle("show", !!show);
    fb.classList.remove("good","bad");
    if(tone) fb.classList.add(tone);
  }

  function awardCorrect(){
    const key = makeKey(state.topicIndex, state.lessonIndex);
    state.answered[key] = true;
    state.xp += 10;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    saveState();
    renderHUD();
    toast(`+10 XP · Streak: ${state.streak}`);
  }

  function awardWrong(){
    state.streak = 0;
    saveState();
    renderHUD();
  }
}

function makeKey(t, l){ return `${t}:${l}`; }

function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  }catch{ return null; }
}

function normalize(s){
  return String(s)
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[“”]/g, '"')
    .replace(/[’]/g, "'")
    .toLowerCase();
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

let toastTimer = null;
function toast(msg){
  if(toastTimer) clearTimeout(toastTimer);
  el.toast.textContent = msg;
  el.toast.classList.add("show");
  toastTimer = setTimeout(() => el.toast.classList.remove("show"), 1100);
}

function pulse(node, tone){
  node.animate(
    [
      { transform: "translateY(0px)", filter:"brightness(1)" },
      { transform: "translateY(-1px)", filter: tone === "good" ? "brightness(1.08)" : "brightness(1.03)" },
      { transform: "translateY(0px)", filter:"brightness(1)" }
    ],
    { duration: 220, easing: "ease-out" }
  );
}

function scrollTopSmooth(){ window.scrollTo({ top: 0, behavior: "smooth" }); }

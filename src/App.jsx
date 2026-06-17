import { useState, useEffect, useRef } from "react";
import {
  PERSONAL,
  ABOUT,
  NAV_LINKS,
  SOCIAL_LINKS,
  CONTACT,
  FOOTER,
  PROJECTS,
  EXPERIENCE,
  EDUCATION,
  SKILL_CATEGORIES,
  STATS,
} from "./data.js";

/*=============== PC SETUP ANIMATION ===============*/
function PCSetupAnimation() {
  const leftRef = useRef(null);
  const mainRef = useRef(null);
  const rightRef = useRef(null);
  const fanRef = useRef(null);
  const cpuRef = useRef(null);
  const memRef = useRef(null);
  const uptRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const leftLines = [
      {t:'$ git status', c:'#9d8fff'},
      {t:'On branch main', c:'#aaa'},
      {t:'Changes staged:', c:'#4ade80'},
      {t:'  App.js', c:'#7f77dd'},
      {t:'  index.css', c:'#7f77dd'},
      {t:'$ git commit', c:'#9d8fff'},
      {t:'"feat: ui polish"', c:'#febc2e'},
      {t:'[main a3f91c]', c:'#4ade80'},
      {t:'$ git push', c:'#9d8fff'},
      {t:'→ origin/main ✓', c:'#4ade80'},
    ];
    const mainLines = [
      {t:'public class App {', c:'#9d8fff'},
      {t:'  public static void', c:'#7f77dd'},
      {t:'  main(String[] args){', c:'#7f77dd'},
      {t:'    Server s = new', c:'#aaa'},
      {t:'    Server(8080);', c:'#aaa'},
      {t:'    s.start();', c:'#4ade80'},
      {t:'  // ✓ Port :8080', c:'#febc2e'},
      {t:'  // ✓ DB connected', c:'#febc2e'},
      {t:'  // ✓ Redis ready', c:'#4ade80'},
      {t:'  // → 0 errors', c:'#4ade80'},
      {t:'  }', c:'#9d8fff'},
      {t:'}', c:'#9d8fff'},
    ];
    const rightLines = [
      {t:'> vite --port 5173', c:'#9d8fff'},
      {t:'VITE v5.2 ready', c:'#4ade80'},
      {t:'→ Local: localhost', c:'#7f77dd'},
      {t:'→ Network: ok', c:'#7f77dd'},
      {t:'[HMR] connected', c:'#febc2e'},
      {t:'✓ 312 modules', c:'#4ade80'},
      {t:'built in 890ms', c:'#aaa'},
      {t:'watching files…', c:'#9d8fff'},
    ];

    const timers = [];

    function renderLines(el, lines, baseDelay, maxVisible) {
      if (!el) return;
      function addNext(i) {
        if (i >= lines.length) {
          const t = setTimeout(() => { el.innerHTML = ''; addNext(0); }, 2000);
          timers.push(t);
          return;
        }
        const d = document.createElement('div');
        d.className = 'pc-code-line';
        d.style.color = lines[i].c;
        d.textContent = lines[i].t;
        el.appendChild(d);
        requestAnimationFrame(() => d.classList.add('pc-line-visible'));
        if (el.children.length > maxVisible) el.removeChild(el.firstChild);
        const t = setTimeout(() => addNext(i + 1), 340 + Math.random() * 180);
        timers.push(t);
      }
      const t = setTimeout(() => addNext(0), baseDelay);
      timers.push(t);
    }

    renderLines(leftRef.current, leftLines, 300, 7);
    renderLines(mainRef.current, mainLines, 0, 10);
    renderLines(rightRef.current, rightLines, 700, 7);

    function spawnParticles(container, count) {
      if (!container) return;
      const pEl = container.querySelector('.pc-particles');
      if (!pEl) return;
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'pc-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (2 + Math.random() * 3) + 's';
        p.style.animationDelay = (Math.random() * 4) + 's';
        p.style.background = Math.random() > 0.5 ? '#7f77dd' : '#9d8fff';
        pEl.appendChild(p);
      }
    }

    const monitors = document.querySelectorAll('.pc-monitor-body');
    monitors.forEach((m, i) => spawnParticles(m, i === 1 ? 12 : 7));

    let fanAngle = 0;
    const fanInterval = setInterval(() => {
      fanAngle += 12;
      if (fanRef.current) {
        fanRef.current.querySelectorAll('.pc-fan-blade').forEach((b, i) => {
          b.style.transform = `rotate(${i * 90 + fanAngle}deg) translateX(-2.5px)`;
        });
      }
    }, 50);

    let cpu = 30, mem = 300, uptime = 0;
    const statsInterval = setInterval(() => {
      cpu = Math.min(98, Math.max(12, cpu + (Math.random() * 20 - 10)));
      mem = Math.min(980, Math.max(200, mem + (Math.random() * 60 - 30)));
      uptime++;
      if (cpuRef.current) cpuRef.current.textContent = 'CPU ' + Math.round(cpu) + '%';
      if (memRef.current) memRef.current.textContent = 'MEM ' + Math.round(mem) + 'MB';
      if (uptRef.current) uptRef.current.textContent = 'UP ' + uptime + 's';
    }, 1200);

    const profileSections = [
      { lines: [
        '<span style="color:#febc2e;font-size:8px;font-weight:bold;">▌ HANEESH YADAV</span>',
        '<span style="color:#7f77dd;">  role: </span><span style="color:#4ade80;">"Developer"</span>',
        '<span style="color:#7f77dd;">  status: </span><span style="color:#febc2e;">"Open to</span>',
        '<span style="color:#febc2e;">   Opportunities"</span>',
        '<span style="color:#7f77dd;">  hire_me: </span><span style="color:#4ade80;">true ✨</span>',
      ]},
      { lines: [
        '<span style="color:#febc2e;font-size:8px;font-weight:bold;">▌ TECH STACK</span>',
        '<span style="color:#9d8fff;">  React  </span><span style="color:#4ade80;">████████░ 90%</span>',
        '<span style="color:#9d8fff;">  Java   </span><span style="color:#4ade80;">███████░░ 80%</span>',
        '<span style="color:#9d8fff;">  Node   </span><span style="color:#febc2e;">██████░░░ 75%</span>',
        '<span style="color:#9d8fff;">  SQL    </span><span style="color:#febc2e;">█████░░░░ 70%</span>',
        '<span style="color:#9d8fff;">  Docker </span><span style="color:#7f77dd;">████░░░░░ 60%</span>',
      ]},
      { lines: [
        '<span style="color:#febc2e;font-size:8px;font-weight:bold;">▌ STATUS</span>',
        '<span style="color:#7f77dd;">  mood:  </span><span style="color:#4ade80;">"building"</span>',
        '<span style="color:#7f77dd;">  <span class="material-icons" style="font-size:9px;vertical-align:-1px;">local_cafe</span>:    </span><span style="color:#febc2e;">× 3 today</span>',
        '<span style="color:#7f77dd;">  music: </span><span style="color:#fff;">"lo-fi beats"</span>',
        '<span style="color:#7f77dd;">  focus: </span><span style="color:#4ade80;">100%</span>',
      ]},
    ];

    let secIdx = 0;
    function showProfileSection() {
      const el = profileRef.current;
      if (!el) return;
      el.innerHTML = '';
      const sec = profileSections[secIdx % profileSections.length];
      sec.lines.forEach((html, i) => {
        const d = document.createElement('div');
        d.className = 'pc-profile-line';
        d.innerHTML = html;
        el.appendChild(d);
        const t = setTimeout(() => d.classList.add('pc-profile-visible'), i * 240);
        timers.push(t);
      });
      secIdx++;
      const t = setTimeout(showProfileSection, sec.lines.length * 240 + 2400);
      timers.push(t);
    }
    const profileT = setTimeout(showProfileSection, 400);
    timers.push(profileT);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(fanInterval);
      clearInterval(statsInterval);
    };
  }, []);

  const MonitorDots = () => (
    <>
      <div className="pc-dot" style={{background:'#ff5f57'}}></div>
      <div className="pc-dot" style={{background:'#febc2e'}}></div>
      <div className="pc-dot" style={{background:'#28c840'}}></div>
    </>
  );

  return (
    <div className="pc-wrap">
      <div className="pc-screens-row">

        <div className="pc-monitor pc-side-sm">
          <div className="pc-monitor-body">
            <div className="pc-particles"></div>
            <div className="pc-screen">
              <div className="pc-term-bar">
                <MonitorDots />
                <span className="pc-term-title">bash</span>
              </div>
              <div className="pc-code-lines" ref={leftRef}></div>
            </div>
          </div>
          <div className="pc-neck"></div>
          <div className="pc-stand pc-stand-sm"></div>
        </div>

        <div className="pc-monitor pc-main-lg">
          <div className="pc-monitor-body">
            <div className="pc-particles"></div>
            <div className="pc-screen">
              <div className="pc-term-bar">
                <MonitorDots />
                <span className="pc-term-title">App.java — running</span>
              </div>
              <div className="pc-code-lines" ref={mainRef}></div>
            </div>
          </div>
          <div className="pc-neck"></div>
          <div className="pc-stand pc-stand-lg"></div>
        </div>

        <div className="pc-monitor pc-profile-mon">
          <div className="pc-monitor-body" style={{borderColor:'#9d8fff'}}>
            <div className="pc-particles"></div>
            <div className="pc-screen">
              <div className="pc-term-bar" style={{background:'#0d001f'}}>
                <MonitorDots />
                <span className="pc-term-title">profile.json</span>
              </div>
              <div className="pc-profile-content" ref={profileRef}></div>
            </div>
          </div>
          <div className="pc-neck"></div>
          <div className="pc-stand pc-stand-profile"></div>
        </div>

        <div className="pc-right-col">
          <div className="pc-monitor pc-side-sm">
            <div className="pc-monitor-body">
              <div className="pc-particles"></div>
              <div className="pc-screen">
                <div className="pc-term-bar">
                  <MonitorDots />
                  <span className="pc-term-title">npm dev</span>
                </div>
                <div className="pc-code-lines" ref={rightRef}></div>
              </div>
            </div>
            <div className="pc-neck"></div>
            <div className="pc-stand pc-stand-sm"></div>
          </div>
          <div className="pc-tower">
            <div className="pc-tower-led" style={{background:'#7f77dd'}}></div>
            <div className="pc-tower-led" style={{background:'#4ade80', animationDelay:'0.5s'}}></div>
            <div className="pc-tower-slot"></div>
            <div className="pc-tower-fan" ref={fanRef}>
              <div className="pc-fan-blade" style={{transform:'rotate(0deg) translateX(-2.5px)'}}></div>
              <div className="pc-fan-blade" style={{transform:'rotate(90deg) translateX(-2.5px)'}}></div>
              <div className="pc-fan-blade" style={{transform:'rotate(180deg) translateX(-2.5px)'}}></div>
              <div className="pc-fan-blade" style={{transform:'rotate(270deg) translateX(-2.5px)'}}></div>
            </div>
            <div className="pc-tower-slot"></div>
          </div>
        </div>

      </div>

      <div className="pc-desk">
        <div className="pc-keyboard">
          {[...Array(9)].map((_, i) => <div key={i} className="pc-key"></div>)}
        </div>
        <div className="pc-mouse"></div>
      </div>

      <div className="pc-status-bar">
        <div className="pc-chip"><div className="pc-chip-dot"></div>Online</div>
        <div className="pc-chip" ref={cpuRef}>CPU 0%</div>
        <div className="pc-chip" ref={memRef}>MEM 0MB</div>
        <div className="pc-chip" ref={uptRef}>UP 0s</div>
      </div>
    </div>
  );
}

/*=============== INLINE CSS ===============*/
const GlobalStyles = () => (
  <style>{`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Unbounded:wght@200..900&display=swap");
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    @import url("https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css");
    @import url("https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css");

    /*=============== PC ANIMATION ===============*/
    .pc-wrap { background:#0a0010; border-radius:16px; padding:16px 10px 14px; font-family:'Courier New',monospace; overflow:hidden; width:100%; box-sizing:border-box; }
    .pc-screens-row { display:flex; gap:5px; justify-content:center; align-items:flex-end; flex-wrap:wrap; }
    .pc-monitor { display:flex; flex-direction:column; align-items:center; }
    .pc-monitor-body { background:#0d0018; border:2px solid #7f77dd; border-radius:6px; overflow:hidden; position:relative; }
    .pc-neck { width:8px; height:8px; background:#222; margin:0 auto; }
    .pc-stand { height:4px; border-radius:2px; background:#333; }
    .pc-stand-sm { width:26px; } .pc-stand-lg { width:40px; } .pc-stand-profile { width:34px; }
    .pc-side-sm .pc-monitor-body { width:82px; height:60px; }
    .pc-main-lg .pc-monitor-body { width:130px; height:86px; }
    .pc-profile-mon .pc-monitor-body { width:108px; height:80px; }
    .pc-screen { padding:5px; overflow:hidden; height:100%; box-sizing:border-box; display:flex; flex-direction:column; }
    .pc-term-bar { display:flex; gap:3px; align-items:center; padding:2px 4px; background:#1a0030; border-bottom:1px solid #3c2060; margin-bottom:3px; flex-shrink:0; }
    .pc-dot { width:5px; height:5px; border-radius:50%; flex-shrink:0; }
    .pc-term-title { font-size:7px; color:#7f77dd; margin-left:3px; letter-spacing:0.5px; overflow:hidden; white-space:nowrap; }
    .pc-code-lines { display:flex; flex-direction:column; gap:2px; }
    .pc-code-line { font-size:7px; white-space:nowrap; opacity:0; transition:opacity 0.3s; }
    .pc-line-visible { opacity:1; }
    .pc-particles { position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; overflow:hidden; border-radius:4px; z-index:0; }
    .pc-particle { position:absolute; width:2px; height:2px; border-radius:50%; animation:pcFloatUp linear infinite; }
    .pc-profile-content { display:flex; flex-direction:column; gap:2px; }
    .pc-profile-line { font-size:7px; white-space:nowrap; line-height:1.5; font-family:'Courier New',monospace; opacity:0; transition:opacity 0.4s; }
    .pc-profile-visible { opacity:1; }
    .pc-right-col { display:flex; flex-direction:column; align-items:center; gap:4px; }
    .pc-tower { width:28px; background:#111827; border:1.5px solid #3c2060; border-radius:5px; padding:4px 3px; display:flex; flex-direction:column; gap:2px; }
    .pc-tower-led { width:5px; height:2px; border-radius:1px; animation:pcLedPulse 2s ease-in-out infinite; }
    .pc-tower-slot { width:100%; height:2px; background:#1a1a2e; border-radius:1px; }
    .pc-tower-fan { width:16px; height:16px; border:1.5px solid #3c2060; border-radius:50%; margin:2px auto; display:flex; align-items:center; justify-content:center; position:relative; }
    .pc-fan-blade { position:absolute; width:5px; height:1.5px; background:#534ab7; border-radius:1px; transform-origin:right center; }
    .pc-desk { background:#110820; border-radius:6px; height:12px; margin:6px 0 4px; display:flex; align-items:center; justify-content:center; gap:8px; padding:0 12px; }
    .pc-keyboard { background:#1a1a2e; border:1px solid #3c2060; border-radius:3px; height:6px; width:70px; display:flex; align-items:center; justify-content:center; gap:1px; }
    .pc-key { width:4px; height:3px; background:#2a1a4a; border-radius:1px; border-top:1px solid #4a2a6a; }
    .pc-mouse { width:8px; height:11px; background:#1a1a2e; border:1px solid #3c2060; border-radius:4px 4px 5px 5px; position:relative; }
    .pc-mouse::after { content:''; position:absolute; top:3px; left:50%; transform:translateX(-50%); width:1px; height:3px; background:#3c2060; }
    .pc-status-bar { display:flex; justify-content:center; gap:6px; margin-top:6px; flex-wrap:wrap; }
    .pc-chip { background:#1a0030; border:1px solid #3c2060; border-radius:20px; padding:2px 8px; font-size:8px; color:#9d8fff; display:flex; align-items:center; gap:3px; }
    .pc-chip-dot { width:5px; height:5px; border-radius:50%; background:#4ade80; animation:pcBlink 1.5s ease-in-out infinite; }
    @keyframes pcBlink { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes pcFloatUp { 0%{transform:translateY(100%) scale(0);opacity:0} 20%{opacity:0.7} 80%{opacity:0.3} 100%{transform:translateY(-120%) scale(1.5);opacity:0} }
    @keyframes pcLedPulse { 0%,100%{opacity:1} 50%{opacity:0.2} }

    :root {
      --header-height: 3.5rem;
      --hue: 255;
      --first-color: hsl(var(--hue), 60%, 64%);
      --first-color-alt: hsl(var(--hue), 80%, 56%);
      --first-color-alt-2: hsl(var(--hue), 60%, 56%);
      --first-color-light: hsl(var(--hue), 60%, 74%);
      --title-color: hsl(240, 8%, 95%);
      --text-color: hsl(240, 8%, 70%);
      --text-color-light: hsl(240, 8%, 50%);
      --body-color: hsl(240, 100%, 2%);
      --container-color: hsl(240, 8%, 6%);
      --body-font: "Montserrat", sans-serif;
      --second-font: "Unbounded", sans-serif;
      --biggest-font-size: 2rem;
      --bigger-font-size: 1.75rem;
      --h1-font-size: 1.5rem;
      --h2-font-size: 1.25rem;
      --h3-font-size: 1rem;
      --normal-font-size: .938rem;
      --small-font-size: .813rem;
      --smaller-font-size: .75rem;
      --font-regular: 400;
      --font-medium: 500;
      --font-semi-bold: 600;
      --z-tooltip: 10;
      --z-fixed: 100;
    }

    @media screen and (min-width: 1150px) {
      :root {
        --biggest-font-size: 3rem;
        --bigger-font-size: 2rem;
        --h1-font-size: 2.25rem;
        --h2-font-size: 1.5rem;
        --h3-font-size: 1.25rem;
        --normal-font-size: 1rem;
        --small-font-size: .875rem;
        --smaller-font-size: .813rem;
      }
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    html { scroll-behavior: smooth; }
    body,
    button,
    input,
    textarea {
      font-family: var(--body-font);
      font-size: var(--normal-font-size);
    }
    body {
      background-color: var(--body-color);
      color: var(--text-color);
    }
    button {
      outline: none;
      border: none;
    }
    h1,
    h2,
    h3,
    h4 {
      color: var(--title-color);
      font-family: var(--second-font);
      font-weight: var(--font-semi-bold);
    }
    ul { list-style: none; }
    a { text-decoration: none; }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    .container {
      max-width: 1120px;
      margin-inline: 1.5rem;
    }
    .grid {
      display: grid;
      gap: 1.5rem;
    }
    .section { padding-block: 5rem 1rem; }
    .section__title {
      text-align: center;
      font-size: var(--h1-font-size);
      margin-bottom: 3rem;
    }
    .section__title span { color: var(--first-color); }
    .main { overflow: hidden; }

    /*=============== BLOB ===============*/
    .blob-animate {
      width: 100px;
      height: 100px;
      background: linear-gradient(180deg, var(--first-color-alt) 20%, var(--first-color-light) 100%);
      border-radius: 50%;
      position: absolute;
      filter: blur(35px);
      z-index: -1;
      animation: animateBlob 5s linear infinite;
    }
    @keyframes animateBlob {
      0%   { transform: rotate(0); }
      100% { transform: rotate(360deg); }
    }

    .blob {
      width: 250px;
      height: 250px;
      background: linear-gradient(180deg, var(--first-color) 0%, var(--first-color-alt) 100%);
      border-radius: 50%;
      filter: blur(50px);
      position: absolute;
      z-index: -1;
    }

    /*=============== CUSTOM CURSOR ===============*/
    .cursor {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 9999;
      width: 50px;
      height: 50px;
      background-color: var(--first-color-light);
      border-radius: 50%;
      box-shadow: 0 0 30px var(--first-color);
      mix-blend-mode: difference;
      pointer-events: none;
      transition: transform .2s ease-out, left .2s ease-out, top .2s ease-out, width .3s, height .3s;
    }
    .hide-cursor {
      width: 0;
      height: 0;
    }

    /*=============== HEADER & NAV ===============*/
    .header {
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(180deg, var(--body-color) 60%, hsla(240, 100%, 2%, 0) 100%);
      z-index: var(--z-fixed);
    }
    .header .blob-animate {
      top: -3rem;
      left: -3rem;
    }
    .nav {
      display: flex;
      justify-content: space-between;
      padding-block: 1rem;
    }
    .nav__logo {
      font-family: var(--second-font);
      font-weight: var(--font-semi-bold);
      color: var(--title-color);
      align-self: flex-start;
      transition: color .4s;
    }
    .nav__logo:hover { color: var(--first-color); }
    .nav__list {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      row-gap: .5rem;
    }
    .nav__link {
      color: var(--title-color);
      font: var(--font-semi-bold) var(--small-font-size) var(--second-font);
      transition: color .4s, text-shadow .4s;
    }
    .nav__link:hover {
      color: var(--first-color);
      text-shadow: 0 8px 16px var(--first-color);
    }
    .active-link {
      color: var(--first-color);
      text-shadow: 0 8px 16px var(--first-color);
    }

    /*=============== HOME ===============*/
    .home { position: relative; }
    .home__container {
      position: relative;
      padding-top: 4rem;
      row-gap: 3rem;
    }
    .home__greeting {
      font-size: var(--h2-font-size);
      font-weight: var(--font-regular);
      color: var(--first-color);
    }
    .home__name { font-size: var(--biggest-font-size); }
    .home__image {
      position: relative;
      display: grid;
      overflow-y: clip;
    }
    .home__image .blob-animate {
      width: 250px;
      height: 250px;
      bottom: 0;
      justify-self: center;
    }
    .home__perfil {
      width: 100%;
      justify-self: center;
    }
    .home__shadow,
    .home__info,
    .home__social,
    .home__cv {
      position: absolute;
    }
    /* On mobile, home__info flows naturally below the image */
    .home__info {
      position: static;
      z-index: 2;
      text-align: center;
      margin-top: .5rem;
    }
    .home__shadow {
      display: none;
      width: 100%;
      height: 375px;
      bottom: 1rem;
      z-index: 1;
      background: linear-gradient(180deg, hsla(240, 100%, 2%, 0) 60%, hsla(240, 100%, 2%) 85%);
    }
    .home__split {
      font-size: var(--h3-font-size);
      font-weight: var(--font-regular);
      color: var(--first-color);
    }
    .home__profession-1,
    .home__profession-2 {
      font-size: var(--bigger-font-size);
      text-align: center;
      overflow: hidden;
    }
    .home__profession-1 {
      position: relative;
      color: var(--first-color);
    }
    .home__profession-1::after {
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, hsl(0, 0%, 0%) 10%, hsla(0, 0%, 0%, 0) 60%);
      position: absolute;
      top: 0;
      left: 0;
    }
    .home__profession-2 { transform: translateY(-1rem); }
    .home__social {
      z-index: 2;
      left: 0;
      align-self: center;
      display: flex;
      flex-direction: column;
      row-gap: .75rem;
    }
    .home__social-link {
      color: var(--title-color);
      font-size: 1.25rem;
      transition: transform .4s, color .4s;
    }
    .home__social-link:hover {
      color: var(--first-color);
      transform: translateX(.25rem);
    }
    .home__cv {
      position: static;
      rotate: -90deg;
      flex-shrink: 0;
      color: var(--text-color-light);
      font: var(--font-medium) var(--small-font-size) var(--second-font);
      display: flex;
      align-items: center;
      column-gap: .5rem;
      transition: color .4s;
      margin-top: -1.25rem;
    }
    .home__cv i { font-size: 1rem; }
    .home__cv:hover { color: var(--first-color); }

    /* Flex row: profession text + RESUME side by side on mobile */
    .home__profession-row {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: .75rem;
    }
    .home__profession-text { flex: 1; }

    /*=============== BUTTON ===============*/
    .button {
      background-color: var(--body-color);
      border: 3px solid var(--first-color);
      color: var(--title-color);
      padding: 1rem 2rem;
      box-shadow: 0 8px 32px hsla(var(--hue), 60%, 64%, .5), inset 8px -8px 30px var(--first-color-alt-2);
      border-radius: 4rem;
      font-family: var(--second-font);
      font-weight: var(--font-semi-bold);
      display: inline-flex;
      align-items: center;
      column-gap: .5rem;
      transition: box-shadow .4s;
      cursor: pointer;
    }
    .button i {
      font-weight: initial;
      font-size: 1rem;
    }
    .button:hover {
      box-shadow: 0 8px 48px hsla(var(--hue), 60%, 64%, .7), inset 8px -8px 30px var(--first-color-alt-2);
    }

    /*=============== ABOUT ===============*/
    .about { position: relative; }
    .about__container {
      row-gap: 3rem;
      overflow-y: clip;
    }
    .about__data .section__title {
      margin-bottom: 1.5rem;
      text-align: initial;
    }
    .about__description {
      font-size: var(--h2-font-size);
      margin-bottom: 2rem;
    }
    .about__description b {
      color: var(--first-color);
      font-weight: var(--font-semi-bold);
    }
    .about__image {
      position: relative;
      justify-self: center;
    }
    .about__image .blob-animate:nth-child(1) {
      top: 1.5rem;
      left: 1rem;
    }
    .about__image .blob-animate:nth-child(2) {
      right: -.5rem;
      bottom: .5rem;
    }
    .about__perfil {
      width: 220px;
      border-radius: 2rem;
      border: 2px solid hsla(var(--hue), 60%, 64%, .4);
      box-shadow: 0 0 32px hsla(var(--hue), 80%, 56%, .25), 0 0 8px hsla(var(--hue), 60%, 64%, .15);
      display: block;
    }
    .about__shadow {
      width: 100%;
      height: 258px;
      position: absolute;
      bottom: 1rem;
      z-index: 1;
      background: linear-gradient(180deg, hsla(240, 100%, 2%, 0) 60%, var(--body-color) 95%);
    }

    /*=============== PROJECTS ===============*/
    .projects .section__title {
      text-align: initial;
      margin-left: 1.5rem;
    }
    .projects__card {
      position: relative;
      background-color: var(--container-color);
      padding: 1.5rem;
      border-radius: 3rem;
      overflow: hidden;
    }
    .projects__card .blob {
      z-index: 0;
      right: -7.75rem;
      bottom: 0;
    }
    .projects__number,
    .projects__data,
    .projects__image {
      position: relative;
      z-index: 1;
    }
    .projects__number {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .projects__number h1 { font-size: var(--biggest-font-size); }
    .projects__number h3 {
      font-weight: var(--font-regular);
      font-size: var(--h3-font-size);
    }
    .projects__data { margin-block: 1.5rem; }
    .projects__title {
      font-size: var(--h2-font-size);
      margin-bottom: .25rem;
    }
    .projects__subtitle-text {
      font-size: var(--small-font-size);
      color: var(--first-color);
      font-family: var(--second-font);
      margin-bottom: .75rem;
    }
    .projects__subtitle {
      font-family: var(--second-font);
      font-size: var(--small-font-size);
      margin-bottom: .5rem;
    }
    .projects__description { font-size: var(--small-font-size); }
    .projects__highlights {
      margin-top: .75rem;
      display: grid;
      row-gap: .35rem;
    }
    .projects__highlight {
      font-size: var(--smaller-font-size);
      color: var(--text-color);
      display: flex;
      align-items: flex-start;
      column-gap: .4rem;
    }
    .projects__highlight i {
      color: var(--first-color);
      font-size: .9rem;
      flex-shrink: 0;
      margin-top: .1rem;
    }
    .projects__img { border-radius: 1.5rem; }
    .projects__buttons {
      display: flex;
      column-gap: .5rem;
      position: absolute;
      top: .75rem;
      right: .75rem;
    }
    .projects__button {
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      background-color: var(--body-color);
      border: 3px solid var(--first-color);
      border-radius: 50%;
      color: var(--title-color);
      font-size: 1.6rem;
      transition: box-shadow .4s, opacity .4s;
    }
    .projects__button--github {
      font-size: 1.3rem;
    }
    .projects__button:hover { box-shadow: 0 0 24px var(--first-color); }
    .projects__swiper {
      margin-inline: initial;
      padding-bottom: 2rem;
    }
    .projects .swiper-pagination-bullets { bottom: 0; }
    .projects .swiper-pagination-bullet {
      background-color: var(--first-color);
      transition: opacity .4s;
    }

    /*=============== WORK ===============*/
    .work__tabs {
      background-color: var(--container-color);
      padding: 1.25rem 2rem;
      border-radius: 4rem;
      display: flex;
      justify-content: space-between;
    }
    .work__button {
      background: none;
      color: var(--text-color);
      display: flex;
      align-items: center;
      column-gap: .25rem;
      font-size: var(--small-font-size);
      font-family: var(--second-font);
      cursor: pointer;
      transition: color .4s;
    }
    .work__button i { font-size: 1rem; }
    .work__button:hover { color: var(--first-color); }
    .work__area {
      position: relative;
      padding-left: 1rem;
    }
    .work__content {
      display: grid;
      row-gap: 4rem;
    }
    .work__card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      align-items: start;
      row-gap: 0;
    }
    .work__data {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .work__right {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: .5rem;
    }
    .work__title {
      font-size: var(--h2-font-size);
      margin-bottom: .5rem;
    }
    .work__subtitle {
      font-size: var(--normal-font-size);
      font-weight: var(--font-regular);
      color: var(--first-color);
    }
    .work__year {
      font-size: var(--h1-font-size);
      color: var(--first-color);
      margin-bottom: .35rem;
    }
    .work__description {
      font-size: var(--small-font-size);
      color: var(--text-color);
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .work__line {
      width: 4px;
      height: 100%;
      background: linear-gradient(180deg, var(--first-color-alt-2), hsla(var(--hue), 60%, 64%, 0));
      position: absolute;
      left: -.25rem;
    }
    .work__line::after {
      content: '';
      width: 16px;
      height: 16px;
      background-color: var(--first-color-alt-2);
      border-radius: 50%;
      position: absolute;
      top: -1px;
      bottom: auto;
      left: -6px;
      box-shadow: 0 0 10px var(--first-color-alt-2), 0 0 20px hsla(var(--hue), 80%, 56%, .4);
    }
    .work__area [data-content] { display: none; }
    .work-active[data-content] { display: grid; }
    .work__button.work-active { color: var(--first-color); }

    /*=============== SKILLS ===============*/
    .skills { position: relative; }
    .skills__container { row-gap: 2rem; }
    .skills__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
    }
    .skills__card {
      position: relative;
      background-color: var(--container-color);
      padding: 2rem 1.5rem;
      border-radius: 2rem;
      overflow: hidden;
      transition: transform .3s, box-shadow .3s;
    }
    .skills__card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 32px hsla(var(--hue), 60%, 64%, .15);
    }
    .skills__card .blob {
      z-index: 0;
      top: -7.75rem;
      left: -7.75rem;
    }
    .skills__card-content { position: relative; z-index: 1; }
    .skills__card-header {
      display: flex;
      align-items: center;
      column-gap: .75rem;
      margin-bottom: 1.25rem;
    }
    .skills__card-icon {
      width: 42px;
      height: 42px;
      background: hsla(var(--hue), 60%, 64%, .12);
      border: 1px solid hsla(var(--hue), 60%, 64%, .3);
      border-radius: .75rem;
      display: grid;
      place-items: center;
      font-size: 1.25rem;
      color: #ffffff;
    }
    .skills__card-title {
      font-size: var(--h3-font-size);
      color: var(--title-color);
    }
    .skills__tags {
      display: flex;
      flex-wrap: wrap;
      gap: .5rem;
    }
    .skills__tag {
      background-color: var(--body-color);
      color: var(--title-color);
      border: 1px solid hsla(var(--hue), 60%, 64%, .25);
      padding: 4px 12px;
      border-radius: 4rem;
      font-size: var(--smaller-font-size);
      font-family: var(--second-font);
      transition: border-color .3s, color .3s;
    }
    .skills__tag:hover {
      border-color: var(--first-color);
      color: var(--first-color);
    }

    /*=============== CURRENTLY BUILDING BANNER ===============*/
    .building__banner {
      background: hsla(var(--hue), 60%, 64%, .07);
      border: 1px solid hsla(var(--hue), 60%, 64%, .2);
      border-radius: 1rem;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      column-gap: .75rem;
      margin-top: 2rem;
    }
    .building__icon {
      font-size: 1.4rem;
      color: var(--first-color);
      flex-shrink: 0;
    }
    .building__label {
      font-family: var(--second-font);
      font-size: var(--smaller-font-size);
      color: var(--first-color);
      margin-bottom: .2rem;
    }
    .building__text {
      font-size: var(--small-font-size);
      color: var(--text-color);
    }

    /*=============== CONTACT ===============*/
    .contact__container { padding-bottom: 2rem; }
    .contact .section__title { margin-bottom: 2.5rem; }
    .contact__email { display: none; }

    /* 3-box grid — stacks on mobile, side-by-side on desktop */
    .contact__grid {
      display: grid;
      gap: 1.25rem;
    }

    /* Each box */
    .contact__box {
      background-color: var(--container-color);
      border: 1px solid hsla(var(--hue), 60%, 64%, .12);
      border-radius: 2rem;
      padding: 2rem 1.75rem;
      position: relative;
      overflow: hidden;
    }
    .contact__box .blob {
      z-index: 0;
      right: -7rem;
      bottom: -7rem;
    }
    .contact__box-content { position: relative; z-index: 1; }

    .contact__box-title {
      font-size: var(--h2-font-size);
      color: var(--title-color);
      margin-bottom: .4rem;
    }
    .contact__box-sub {
      font-size: var(--small-font-size);
      color: var(--text-color);
      margin-bottom: 1.75rem;
      font-family: var(--body-font);
      font-weight: var(--font-regular);
    }

    /* Form inside box */
    .contact__form {
      display: grid;
      row-gap: 1rem;
    }
    .form__group {
      display: grid;
      row-gap: .35rem;
    }
    .form__label {
      font-family: var(--second-font);
      font-size: var(--smaller-font-size);
      color: var(--first-color);
      letter-spacing: .03em;
    }
    .form__input,
    .form__textarea {
      background-color: var(--body-color);
      border: 1.5px solid hsla(var(--hue), 60%, 64%, .18);
      border-radius: .85rem;
      padding: .8rem 1rem;
      color: var(--title-color);
      outline: none;
      width: 100%;
      transition: border-color .3s, box-shadow .3s;
    }
    .form__input:focus,
    .form__textarea:focus {
      border-color: var(--first-color);
      box-shadow: 0 0 0 3px hsla(var(--hue), 60%, 64%, .1);
    }
    .form__input::placeholder,
    .form__textarea::placeholder {
      color: var(--text-color-light);
      font-size: var(--small-font-size);
    }
    .form__textarea {
      resize: vertical;
      min-height: 110px;
    }
    .form__submit { margin-top: .5rem; }
    .form__status {
      text-align: center;
      font-size: var(--small-font-size);
      color: var(--first-color);
      font-family: var(--second-font);
      min-height: 1.2rem;
      margin-top: .5rem;
    }

    /* Info rows inside info/social boxes */
    .contact__info-row {
      display: flex;
      align-items: flex-start;
      column-gap: 1rem;
      padding: 1rem 0;
      border-bottom: 1px solid hsla(var(--hue), 60%, 64%, .1);
    }
    .contact__info-row:last-child { border-bottom: none; padding-bottom: 0; }
    .contact__info-row:first-child { padding-top: 0; }
    .contact__info-icon {
      width: 40px;
      height: 40px;
      background: hsla(var(--hue), 60%, 64%, .1);
      border: 1px solid hsla(var(--hue), 60%, 64%, .25);
      border-radius: .65rem;
      display: grid;
      place-items: center;
      font-size: 1.1rem;
      color: var(--first-color);
      flex-shrink: 0;
    }
    .contact__info-label {
      font-family: var(--second-font);
      font-size: var(--smaller-font-size);
      color: var(--text-color-light);
      margin-bottom: .2rem;
    }
    .contact__info-value {
      font-size: var(--small-font-size);
      color: var(--title-color);
      font-weight: var(--font-medium);
      font-style: normal;
      word-break: break-all;
    }
    .contact__info-value a {
      color: var(--title-color);
      transition: color .3s;
    }
    .contact__info-value a:hover { color: var(--first-color); }

    /* Social links inside social box */
    .contact__social-link {
      display: flex;
      align-items: center;
      column-gap: .85rem;
      padding: 1rem 0;
      border-bottom: 1px solid hsla(var(--hue), 60%, 64%, .1);
      color: var(--title-color);
      font-weight: var(--font-medium);
      font-size: var(--small-font-size);
      transition: color .3s, transform .3s;
    }
    .contact__social-link:first-child { padding-top: 0; }
    .contact__social-link:last-child { border-bottom: none; padding-bottom: 0; }
    .contact__social-link:hover {
      color: var(--first-color);
      transform: translateX(.3rem);
    }
    .contact__social-link i {
      font-size: 1.25rem;
      width: 40px;
      height: 40px;
      background: hsla(var(--hue), 60%, 64%, .1);
      border: 1px solid hsla(var(--hue), 60%, 64%, .25);
      border-radius: .65rem;
      display: grid;
      place-items: center;
      flex-shrink: 0;
      transition: background .3s, border-color .3s;
    }
    .contact__social-link:hover i {
      background: hsla(var(--hue), 60%, 64%, .2);
      border-color: var(--first-color);
    }
    .contact__social-arrow {
      margin-left: auto;
      font-size: 1.1rem;
      opacity: .5;
    }

    /*=============== FOOTER ===============*/
    .footer {
      position: relative;
      padding-block: 2.5rem;
      overflow: hidden;
    }

    .footer__copyright-box {
      max-width: 1120px;
      margin-inline: auto;
      padding-inline: 1.5rem;
      display: flex;
      justify-content: center;
    }
    .footer__copyright-box > p {
      background-color: var(--container-color);
      border: 1px solid hsla(var(--hue), 60%, 64%, .12);
      border-radius: 1rem;
      padding: 1rem 1.75rem;
    }
    .footer__copy {
      font-size: var(--smaller-font-size);
      color: var(--text-color-light);
      font-family: var(--second-font);
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .footer__copy span { color: var(--first-color); }

    /*=============== STATS BAR ===============*/
    .home__stats {
      display: flex;
      justify-content: center;
      column-gap: 2rem;
      flex-wrap: wrap;
      row-gap: .75rem;
      position: relative;
      z-index: 2;
      margin-top: 1.5rem;
    }
    /* Mobile: hide desktop stats, show mobile copy inside home__info */
    .home__stats--desktop { display: none; }
    .home__stats--mobile { display: flex; margin-top: 1.25rem; }
    .home__stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .home__stat-number {
      font-family: var(--second-font);
      font-size: var(--h1-font-size);
      font-weight: var(--font-semi-bold);
      color: var(--first-color);
      line-height: 1;
      transition: color .3s;
    }
    .home__stat-label {
      font-size: var(--smaller-font-size);
      color: var(--text-color-light);
      text-align: center;
      white-space: pre-line;
    }
    .home__stat-divider {
      width: 1px;
      height: 2.5rem;
      background-color: var(--text-color-light);
      align-self: center;
      opacity: .4;
    }
    /* Count-up animation: number starts at 0, slides up into place */
    @keyframes statSlideUp {
      0%   { opacity: 0; transform: translateY(20px) scale(.85); }
      60%  { opacity: 1; transform: translateY(-4px) scale(1.08); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    .home__stat-number.stat-animate {
      animation: statSlideUp .7s cubic-bezier(.22,1,.36,1) both;
    }
    .home__stat-label.stat-animate {
      animation: statSlideUp .7s cubic-bezier(.22,1,.36,1) .15s both;
    }
    .home__stat-divider.stat-animate {
      animation: statSlideUp .7s cubic-bezier(.22,1,.36,1) .05s both;
    }

    /*=============== OPEN TO WORK BADGE ===============*/
    .home__badge {
      display: inline-flex;
      align-items: center;
      column-gap: .4rem;
      background-color: hsla(var(--hue), 60%, 64%, .12);
      border: 1px solid hsla(var(--hue), 60%, 64%, .4);
      color: var(--first-color);
      font-family: var(--second-font);
      font-size: var(--smaller-font-size);
      padding: .3rem .75rem;
      border-radius: 4rem;
      margin-bottom: .75rem;
    }
    .home__badge-dot {
      width: 7px;
      height: 7px;
      background-color: #4ade80;
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50%       { opacity: .6; transform: scale(1.3); }
    }

    /*=============== BACK TO TOP ===============*/
    .back-to-top {
      position: fixed;
      right: 1.5rem;
      bottom: -4rem;
      background-color: var(--container-color);
      border: 2px solid var(--first-color);
      color: var(--title-color);
      width: 44px;
      height: 44px;
      border-radius: .75rem;
      display: grid;
      place-items: center;
      font-size: 1.4rem;
      z-index: var(--z-fixed);
      cursor: pointer;
      transition: bottom .4s, box-shadow .4s;
    }
    .back-to-top:hover { box-shadow: 0 0 24px var(--first-color); }
    .back-to-top.show-scroll { bottom: 2rem; }

    /*=============== CONTACT MAILTO ===============*/
    .contact__address a {
      color: var(--title-color);
      text-decoration: none;
      transition: color .3s;
    }
    .contact__address a:hover { color: var(--first-color); }

    /*=============== SCROLL BAR ===============*/
    ::-webkit-scrollbar {
      width: .6rem;
      background-color: hsla(240, 6%, 12%);
      border-radius: .5rem;
    }
    ::-webkit-scrollbar-thumb {
      background-color: hsla(240, 6%, 20%);
      border-radius: .5rem;
    }
    ::-webkit-scrollbar-thumb:hover { background-color: hsla(240, 6%, 24%); }

    /*=============== BREAKPOINTS ===============*/
    @media screen and (max-width: 320px) {
      .container { margin-inline: 1rem; }
      .blob,
      .home__image .blob-animate {
        width: 220px;
        height: 220px;
      }
      .projects__card { padding-inline: 1rem; }
      .work__tabs { padding-inline: 1rem; }
    }
    @media screen and (min-width: 540px) {
      .home__container {
        width: 460px;
        margin-inline: auto;
      }
      .about__container,
      .work__container {
        grid-template-columns: 460px;
        justify-content: center;
      }
      .about__data,
      .about__data .section__title {
        text-align: center;
      }
      .projects .section__title {
        text-align: center;
        margin-left: 0;
      }
      .projects__card { width: 350px; }
      .work__tabs {
        width: 330px;
        justify-self: center;
      }
    }
    @media screen and (min-width: 768px) {
      .home__container { width: 600px; }
      .work__container { grid-template-columns: 600px; }
      .work__area { padding-left: 0; }
      .work__card {
        grid-template-columns: repeat(2, 270px);
        justify-content: center;
        column-gap: 3rem;
      }
      .work__line {
        left: 0;
        right: 0;
        margin-inline: auto;
      }
      .skills__grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media screen and (min-width: 1150px) {
      .container { margin-inline: auto; }
      .section { padding-block: 7rem 2rem; }
      .section__title { margin-bottom: 4rem; }
      /* Home section specifically gets less top padding so animation sits close to nav */
      .home { padding-block-start: 7rem; }
      .blob {
        width: 300px;
        height: 300px;
      }
      .nav {
        height: calc(var(--header-height) + 2rem);
        align-items: center;
      }
      .nav__logo { align-self: initial; }
      .nav__list {
        flex-direction: row;
        column-gap: 5.5rem;
      }
      .home__container {
        width: initial;
        padding-top: 0.5rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        row-gap: 0;
      }
      .home__perfil { width: 600px; }
      .home__image .blob-animate {
        width: 450px;
        height: 450px;
        bottom: 2rem;
        filter: blur(50px);
      }
      .home__shadow {
        display: block;
        width: 700px;
        height: 700px;
        left: 0;
        right: 0;
        margin-inline: auto;
        background: linear-gradient(180deg, hsla(240, 100%, 2%, 0) 60%, hsl(240, 100%, 2%) 95%);
      }
      /* On desktop: animation occupies its grid row, content row sits below */
      .home__image {
        grid-column: 1 / -1;
        grid-row: 1;
        position: relative;
        z-index: 1;
      }
      .home__data {
        position: static;
        grid-column: 1;
        grid-row: 2;
        z-index: 2;
        margin-top: 0.75rem;
        padding-left: 3rem;
      }
      .home__info {
        position: static;
        grid-column: 1;
        grid-row: 2;
        bottom: initial;
        text-align: initial;
        margin-top: 0;
        padding-right: 1rem;
        justify-self: end;
        align-self: start;
        margin-top: 0.75rem;
      }
      /* Lay data and info side-by-side in the second row */
      .home__container {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto;
        position: relative;
      }
      .home__image {
        grid-column: 1 / -1;
        grid-row: 1;
      }
      .home__data {
        grid-column: 1;
        grid-row: 2;
      }
      .home__info {
        grid-column: 2;
        grid-row: 2;
      }
      .home__social {
        position: absolute;
        left: 0;
        bottom: 3rem;
        flex-direction: column;
        row-gap: 1.5rem;
        padding-left: 0;
        margin-top: 0;
      }
      .home__split { font-size: var(--h2-font-size); }
      .home__profession-1 {
        font-size: var(--bigger-font-size);
        text-align: initial;
      }
      .home__profession-2 {
        font-size: var(--biggest-font-size);
        transform: translateY(-1.5rem);
      }
      .home__social-link { font-size: 1.5rem; }
      .home__profession-row {
        display: block;
      }
      .home__profession-text { flex: initial; }
      /* Desktop: show original stats, hide mobile copy */
      .home__stats--desktop { display: flex; grid-column: 1 / -1; grid-row: 3; justify-content: center; margin-top: 1rem; padding-left: 0; }
      .home__stats--mobile { display: none; }
      .home__cv {
        position: static;
        font-size: var(--normal-font-size);
        rotate: 0deg;
        margin-top: 1.5rem;
        display: inline-flex;
      }      .about__container {
        grid-template-columns: repeat(2, 500px);
        align-items: center;
        column-gap: 5.5rem;
        padding-top: 2rem;
      }
      .about__data,
      .about__data .section__title {
        text-align: initial;
        z-index: 2;
      }
      .about__description { margin-bottom: 3rem; }
      .about__perfil {
        width: 390px;
        border-radius: 2rem;
        border: 2px solid hsla(var(--hue), 60%, 64%, .45);
        box-shadow: 0 0 48px hsla(var(--hue), 80%, 56%, .3), 0 0 12px hsla(var(--hue), 60%, 64%, .2);
      }
      .about__image { order: -1; }
      .about__shadow { display: none; }
      .about__image .blob-animate {
        width: 200px;
        height: 200px;
        filter: blur(50px);
      }
      .about__image .blob-animate:nth-child(1) {
        left: 4rem;
        top: 4rem;
      }
      .about__image .blob-animate:nth-child(2) {
        right: -1rem;
        bottom: 3rem;
      }
      .about__shadow {
        height: 600px;
        bottom: 0;
      }
      .projects { padding-block: 9rem 4rem; }
      .projects__swiper { padding-bottom: 4rem; }
      .projects__container { max-width: 1380px; }
      .projects__card {
        width: 440px;
        padding: 2.5rem;
        border-radius: 4rem;
      }
      .projects__swiper .swiper-wrapper { justify-content: center; }
      .projects__card {
        width: 440px;
        padding: 2.5rem;
        border-radius: 4rem;
      }
      .projects__subtitle,
      .projects__description {
        font-size: var(--normal-font-size);
      }
      .projects__img { border-radius: 2rem; }
      .projects__buttons {
        top: 1.5rem;
        right: 1.5rem;
      }
      .work__container {
        grid-template-columns: 1050px;
        row-gap: 3rem;
      }
      .work__content { row-gap: 5rem; }
      .work__card {
        grid-template-columns: 1fr 1fr;
        column-gap: 4rem;
      }
      .work__title { font-size: var(--bigger-font-size); }
      .work__subtitle { font-size: var(--h3-font-size); }
      .work__description { font-size: var(--small-font-size); }
      .skills__grid { grid-template-columns: repeat(4, 1fr); }
      .contact { padding-block: 9rem 4rem; }
      .contact__grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        align-items: start;
      }
      .contact__box:first-child { grid-column: 1 / -1; }
      .contact__box:first-child .contact__form {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto;
        column-gap: 1.25rem;
      }
      .contact__box:first-child .form__group:nth-child(1) { grid-column: 1; grid-row: 1; }
      .contact__box:first-child .form__group:nth-child(2) { grid-column: 1; grid-row: 2; }
      .contact__box:first-child .form__group:nth-child(3) { grid-column: 2; grid-row: 1 / 3; }
      .contact__box:first-child .form__group:nth-child(3) .form__textarea { min-height: 148px; height: 100%; box-sizing: border-box; }
      .contact__box:first-child .form__submit { grid-column: 1 / -1; justify-self: start; }
      .contact__box:first-child .form__status { grid-column: 1 / -1; }
      .contact__box-title { font-size: var(--h1-font-size); }
      .contact__box-sub { font-size: var(--normal-font-size); }
    }
    @media screen and (min-width: 2040px) { body { zoom: 1.4; } }
    @media (pointer: coarse) { .cursor { display: none; } }
    @media (prefers-reduced-motion: reduce) {
      .cursor { display: none; }
      .blob-animate { animation: none; }
      * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }
  `}</style>
);

/*=============== ABOUT DESCRIPTION ===============*/
const AboutDescription = ({ description, boldWords }) => {
  let result = description;
  boldWords.forEach((word) => {
    result = result.replace(word, `<b>${word}</b>`);
  });
  return (
    <p
      className="about__description"
      dangerouslySetInnerHTML={{ __html: result }}
    />
  );
};

/*=============== MAIN PORTFOLIO COMPONENT ===============*/
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("#experience");
  const [copyLabel, setCopyLabel] = useState("copy");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [formSending, setFormSending] = useState(false);

  const cursorRef = useRef(null);

  const currentYear = new Date().getFullYear();

  /*=============== INIT THIRD-PARTY LIBS ===============*/
  useEffect(() => {
    if (window.Swiper) {
      new window.Swiper(".projects__swiper", {
        loop: true,
        spaceBetween: 24,
        slidesPerView: "auto",
        grabCursor: true,
        speed: 600,
        pagination: { el: ".swiper-pagination", clickable: true },
        autoplay: { delay: 3000, disableOnInteraction: false },
      });
    }

    if (window.anime) {
      const { animate, text, stagger } = window.anime;
      const { chars: chars1 } = text.split(".home__profession-1", { chars: true });
      const { chars: chars2 } = text.split(".home__profession-2", { chars: true });
      const animCfg = {
        y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
        duration: 900,
        ease: "out(3)",
        delay: stagger(80),
        loop: true,
      };
      animate(chars1, animCfg);
      animate(chars2, animCfg);
    }

    if (window.ScrollReveal) {
      const sr = window.ScrollReveal({ origin: "top", distance: "60px", duration: 2000, delay: 300 });
      sr.reveal(".home__image, .projects__container, .work__container, .contact__container");
      sr.reveal(".home__data", { delay: 900, origin: "bottom" });
      sr.reveal(".home__info", { delay: 1200, origin: "bottom" });
      sr.reveal(".home__social, .home__cv", { delay: 1500 });
      sr.reveal(".home__data", { origin: "left" });
      sr.reveal(".home__image", { origin: "right" });
      sr.reveal(".skills__card", { interval: 100, origin: "bottom" });
    }

    /*===== STATS COUNT-UP ANIMATION =====*/
    const statNumbers = document.querySelectorAll(".home__stat-number");
    const statLabels  = document.querySelectorAll(".home__stat-label");
    const statDivs    = document.querySelectorAll(".home__stat-divider");

    // Store targets BEFORE any text is changed
    const targets = Array.from(statNumbers).map(el => {
      const raw = el.textContent.trim();
      const match = raw.match(/^(\d+)(.*)$/);
      return match ? { target: parseInt(match[1]), suffix: match[2] } : null;
    });

    function countUp(el, target, suffix, duration, delay) {
      const start = performance.now() + delay;
      function step(now) {
        const elapsed = Math.max(0, now - start);
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    function runStatsAnimation() {
      statNumbers.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.15}s`;
        el.classList.add("stat-animate");
      });
      statLabels.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.15 + 0.15}s`;
        el.classList.add("stat-animate");
      });
      statDivs.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.15 + 0.05}s`;
        el.classList.add("stat-animate");
      });
      statNumbers.forEach((el, i) => {
        const parsed = targets[i];
        if (!parsed) return;
        el.textContent = "0" + parsed.suffix;
        countUp(el, parsed.target, parsed.suffix, 1200, i * 150);
      });
    }

    // Observe whichever stats container is visible in the viewport
    const desktopStats = document.querySelector(".home__stats--desktop");
    const mobileStats  = document.querySelector(".home__stats--mobile");
    const statsEl = (desktopStats && getComputedStyle(desktopStats).display !== "none")
      ? desktopStats : mobileStats;

    if (statsEl) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runStatsAnimation();
            observer.disconnect();
          }
        });
      }, { threshold: 0.3 });
      observer.observe(statsEl);
    }
  }, []);

  /*=============== CUSTOM CURSOR ===============*/
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = () => {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
      cursor.style.transform = "translate(-50%, -50%)";
      requestAnimationFrame(moveCursor);
    };

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", onMove);
    moveCursor();

    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseover", () => cursor.classList.add("hide-cursor"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("hide-cursor"));
    });

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  /*=============== SCROLL ACTIVE LINK + BACK TO TOP ===============*/
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        const id = section.id;
        const top = section.offsetTop - 50;
        const height = section.offsetHeight;
        const link = document.querySelector(`.nav__menu a[href*=${id}]`);
        if (!link) return;
        link.classList.toggle("active-link", scrollY > top && scrollY <= top + height);
      });
      const btn = document.querySelector(".back-to-top");
      if (btn) btn.classList.toggle("show-scroll", scrollY >= 400);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  /*=============== COPY EMAIL ===============*/
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email).then(() => {
      setCopyLabel("copied");
      setTimeout(() => setCopyLabel("copy"), 2000);
    });
  };

  /*=============== CONTACT FORM ===============*/
  const handleFormChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }
    setFormSending(true);
    setFormStatus("");

    // ── EmailJS Integration ──────────────────────────────────────────
    // 1. Sign up at https://emailjs.com (free)
    // 2. Add a Gmail service → copy the Service ID below
    // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
    //    Copy the Template ID below
    // 4. Go to Account → copy your Public Key below
    // ────────────────────────────────────────────────────────────────
    const SERVICE_ID  = "service_y90ag88";   // e.g. "service_abc123"
    const TEMPLATE_ID = "template_8k5qjoa";  // e.g. "template_xyz789"
    const PUBLIC_KEY  = "DxfBe3RIl0GYV231B";   // e.g. "aB1cD2eF3gH4iJ5k"

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id:  SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id:     PUBLIC_KEY,
          template_params: {
            from_name:  formState.name,
            from_email: formState.email,
            message:    formState.message,
          },
        }),
      });
      if (res.ok) {
        setFormStatus("Message sent! I'll get back to you soon.");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setFormStatus("Something went wrong. Try emailing me directly.");
      }
    } catch {
      setFormStatus("Something went wrong. Try emailing me directly.");
    }
    setFormSending(false);
  };

  return (
    <>
      <GlobalStyles />

      {/*==================== HEADER ====================*/}
      <header className="header" id="header">
        <div className="blob-animate"></div>
        <nav className="nav container">
          <a href="/" className="nav__logo">{PERSONAL.firstName}</a>
          <div className="nav__menu">
            <ul className="nav__list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="nav__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/*==================== MAIN ====================*/}
      <main className="main">
        {/* CUSTOM CURSOR */}
        <div className="cursor" ref={cursorRef}></div>

        {/*==================== HOME ====================*/}
        <section className="home section">
          <div className="home__shadow"></div>
          <div className="home__container container grid">
            <div className="home__data">
              <div className="home__badge">
                <span className="home__badge-dot"></span>
                Open to Opportunities
              </div>
              <h3 className="home__greeting">{PERSONAL.greeting}</h3>
              <h1 className="home__name">
                {PERSONAL.name.split(" ").map((word, i, arr) => (
                  <span key={i}>{word}{i < arr.length - 1 ? <br /> : ""}</span>
                ))}
              </h1>
            </div>

            <div className="home__image">
              <PCSetupAnimation />
            </div>

            <div className="home__info">
              <h3 className="home__split">{PERSONAL.tagline}</h3>
              <div className="home__profession-row">
                <div className="home__profession-text">
                  <h2 className="home__profession-1">{PERSONAL.profession1}</h2>
                  <h2 className="home__profession-2">{PERSONAL.profession2}</h2>
                </div>
                <a href={PERSONAL.resumeUrl} download target="_blank" rel="noreferrer" className="home__cv home__cv--inline">
                  RESUME <i className="ri-file-list-2-line"></i>
                </a>
              </div>
              <div className="home__stats home__stats--mobile">
                {STATS.map((stat, i) => (
                  <>
                    {i > 0 && <div key={`div-m-${i}`} className="home__stat-divider"></div>}
                    <div key={`m-${stat.label}`} className="home__stat">
                      <span className="home__stat-number">{stat.number}</span>
                      <span className="home__stat-label">{stat.label}</span>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {/* Stats shown below "Creative Full Stack Developer" on mobile only */}
            <div className="home__social">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="home__social-link" aria-label={s.label}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>

            <div className="home__stats home__stats--desktop">
              {STATS.map((stat, i) => (
                <>
                  {i > 0 && <div key={`div-${i}`} className="home__stat-divider"></div>}
                  <div key={stat.label} className="home__stat">
                    <span className="home__stat-number">{stat.number}</span>
                    <span className="home__stat-label">{stat.label}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>

        {/*==================== ABOUT ====================*/}
        <section className="about section" id="about">
          <div className="about__shadow"></div>
          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title">
                <span>{ABOUT.titleHighlight}</span><br />{ABOUT.titleRest}
              </h2>
              <AboutDescription description={ABOUT.description} boldWords={ABOUT.boldWords} />
              <a href={PERSONAL.resumeUrl} download target="_blank" rel="noreferrer" className="button">
                Resume <i className="ri-file-list-2-line"></i>
              </a>
            </div>
            <div className="about__image">
              <div className="blob-animate"></div>
              <div className="blob-animate"></div>
              <img src={PERSONAL.profileImgAbout} alt="Haneesh Yadav" className="about__perfil" />
              <div className="about__shadow"></div>
            </div>
          </div>
        </section>

        {/*==================== PROJECTS ====================*/}
        <section className="projects section" id="projects">
          <h2 className="section__title">
            I Make Incredible <br /><span>Projects</span>
          </h2>
          <div className="projects__container container grid">
            <div className="projects__swiper swiper">
              <div className="swiper-wrapper">
                {PROJECTS.map((p) => (
                  <article key={p.num} className="projects__card swiper-slide">
                    <div className="blob"></div>
                    <div className="projects__number">
                      <h1>{p.num}</h1>
                      <h3>{p.type}</h3>
                    </div>
                    <div className="projects__data">
                      <h1 className="projects__title">{p.title}</h1>
                      <p className="projects__subtitle-text">{p.subtitle}</p>
                      <p className="projects__subtitle">Technologies used</p>
                      <p className="projects__description">{p.tech}</p>
                      {p.highlights && (
                        <ul className="projects__highlights">
                          {p.highlights.map((h, i) => (
                            <li key={i} className="projects__highlight">
                              <i className="ri-arrow-right-s-line"></i>
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="projects__image" style={{ position: "relative" }}>
                      <img src={p.img} alt={p.title} className="projects__img" />
                      <div className="projects__buttons">
                        {p.github && p.github !== "#" && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="projects__button projects__button--github"
                            aria-label="View source code on GitHub"
                          >
                            <i className="ri-github-line"></i>
                          </a>
                        )}
                        {p.link && p.link !== "#" && (
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noreferrer"
                            className="projects__button"
                            aria-label="View live project"
                          >
                            <i className="ri-arrow-right-up-long-line"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        {/*==================== WORK ====================*/}
        <section className="work section" id="work">
          <h2 className="section__title">
            <span>My Work</span><br /> Experience
          </h2>
          <div className="work__container container grid">
            <div className="work__tabs">
              <button
                className={`work__button${activeTab === "#experience" ? " work-active" : ""}`}
                onClick={() => setActiveTab("#experience")}
              >
                Responsibilities <i className="ri-briefcase-3-line"></i>
              </button>
              <button
                className={`work__button${activeTab === "#education" ? " work-active" : ""}`}
                onClick={() => setActiveTab("#education")}
              >
                Education <i className="ri-graduation-cap-line"></i>
              </button>
            </div>
            <div className="work__area">
              <div className="work__line"></div>

              <div
                className="work__content"
                data-content=""
                id="experience"
                style={{ display: activeTab === "#experience" ? "grid" : "none" }}
              >
                {EXPERIENCE.map((c, i) => (
                  <div key={i} className="work__card">
                    <div className="work__data">
                      <h1
                        className="work__title"
                        dangerouslySetInnerHTML={{ __html: c.title.replace(" & ", " &amp; <br/>") }}
                      ></h1>
                      <h3 className="work__subtitle">{c.subtitle}</h3>
                    </div>
                    <div className="work__right">
                      <h2 className="work__year">{c.year}</h2>
                      <p className="work__description">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="work__content"
                data-content=""
                id="education"
                style={{ display: activeTab === "#education" ? "grid" : "none" }}
              >
                {EDUCATION.map((c, i) => (
                  <div key={i} className="work__card">
                    <div className="work__data">
                      <h1
                        className="work__title"
                        dangerouslySetInnerHTML={{ __html: c.title.replace("/", "/<br/>") }}
                      ></h1>
                      <h3 className="work__subtitle">{c.subtitle}</h3>
                    </div>
                    <div className="work__right">
                      <h2 className="work__year">{c.year}</h2>
                      <p className="work__description">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/*==================== SKILLS ====================*/}
        <section className="skills section" id="skills">
          <h2 className="section__title">
            My <span>Tech Stack</span>
          </h2>
          <div className="skills__container container">
            <div className="skills__grid">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="skills__card">
                  <div className="blob"></div>
                  <div className="skills__card-content">
                    <div className="skills__card-header">
                      <div className="skills__card-icon">
                        <i className={cat.icon}></i>
                      </div>
                      <h3 className="skills__card-title">{cat.category}</h3>
                    </div>
                    <div className="skills__tags">
                      {cat.skills.map((skill) => (
                        <span key={skill} className="skills__tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/*==================== CONTACT ====================*/}
        <section className="contact section" id="contact">
          <div className="contact__container container">
            <h2 className="section__title">Get In <span>Touch</span></h2>

            <div className="contact__grid">

              {/* BOX 1 — Contact Form */}
              <div className="contact__box">
                <div className="blob"></div>
                <div className="contact__box-content">
                  <h3 className="contact__box-title">Tell me about your<br />next project.</h3>
                  <p className="contact__box-sub">I'll get back to you within 24 hours.</p>

                  <form className="contact__form" onSubmit={handleFormSubmit} noValidate>
                    <div className="form__group">
                      <label className="form__label" htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form__input"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <label className="form__label" htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form__input"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={handleFormChange}
                        required
                      />
                    </div>
                    <div className="form__group">
                      <label className="form__label" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form__textarea"
                        placeholder="Tell me about your project..."
                        value={formState.message}
                        onChange={handleFormChange}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="button form__submit" disabled={formSending}>
                      {formSending ? "Sending..." : "Send Message"} <i className="ri-send-plane-line"></i>
                    </button>
                    {formStatus && (
                      <p className="form__status">
                        {formStatus}
                        {formStatus.includes("sent") && (
                          <i className="ri-checkbox-circle-line" style={{ marginLeft: "6px", color: "#4ade80" }}></i>
                        )}
                      </p>
                    )}
                  </form>
                </div>
              </div>

              {/* BOX 2 — Email & Location */}
              <div className="contact__box">
                <div className="contact__box-content">
                  <h3 className="contact__box-title">Contact Info</h3>
                  <p className="contact__box-sub">Reach out directly.</p>

                  <div className="contact__info-row">
                    <div className="contact__info-icon">
                      <i className="ri-mail-line"></i>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="contact__info-label">Email</p>
                      <div style={{ display: "flex", alignItems: "center", gap: ".75rem", flexWrap: "wrap" }}>
                        <address className="contact__info-value" style={{ fontStyle: "normal" }}>
                          <a href={`mailto:${CONTACT.email}`}>{CONTACT.displayEmail}</a>
                        </address>
                        <button className="button" onClick={handleCopyEmail} style={{ fontSize: "var(--smaller-font-size)", padding: ".45rem 1rem", flexShrink: 0 }}>
                          {copyLabel === "copy" ? (
                            <>Copy <i className="ri-file-copy-line"></i></>
                          ) : (
                            <>Copied! <i className="ri-check-line"></i></>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="contact__info-row">
                    <div className="contact__info-icon">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <div>
                      <p className="contact__info-label">Location</p>
                      <address className="contact__info-value">{CONTACT.location}</address>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOX 3 — Social Media */}
              <div className="contact__box">
                <div className="contact__box-content">
                  <h3 className="contact__box-title">Find Me Online</h3>
                  <p className="contact__box-sub">Let's connect.</p>

                  {CONTACT.socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="contact__social-link"
                    >
                      <i className={
                        s.label === "LinkedIn" ? "ri-linkedin-box-line"
                        : s.label === "GitHub"  ? "ri-github-line"
                        : "ri-link"
                      }></i>
                      {s.label}
                      <i className="ri-arrow-right-up-line contact__social-arrow"></i>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/*==================== BACK TO TOP ====================*/}
      <button
        className="back-to-top"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="ri-arrow-up-line"></i>
      </button>

      {/*==================== FOOTER ====================*/}
      <footer className="footer">
        <div className="footer__copyright-box">
          <p className="footer__copy">
            COPYRIGHT &copy; {currentYear} | <span>{FOOTER.ownerName.toUpperCase()}</span>
          </p>
        </div>
      </footer>
    </>
  );
}

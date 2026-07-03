import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Search, RotateCcw, CheckCircle2, Circle, Shield, MapPin, Star, AlertTriangle } from 'lucide-react';
import { chapters } from './data/chapters';
import './styles.css';

const storeKey = 'cp2077-100-guide-progress-v1';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(storeKey) || '{}'); } catch { return {}; }
}
function saveProgress(progress) { localStorage.setItem(storeKey, JSON.stringify(progress)); }

function App() {
  const [selectedId, setSelectedId] = useState(chapters[0].id);
  const [query, setQuery] = useState('');
  const [progress, setProgress] = useState(loadProgress);
  const selected = chapters.find(c => c.id === selectedId) || chapters[0];

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return chapters;
    return chapters.filter(c => JSON.stringify(c).toLowerCase().includes(q));
  }, [query]);

  const allItems = chapters.flatMap(ch => ch.checklist.map((_, i) => `${ch.id}-${i}`));
  const doneCount = allItems.filter(k => progress[k]).length;
  const percent = Math.round((doneCount / allItems.length) * 100);

  function toggle(chapterId, index) {
    const key = `${chapterId}-${index}`;
    const next = { ...progress, [key]: !progress[key] };
    setProgress(next);
    saveProgress(next);
  }

  function resetProgress() {
    if (!confirm('Reset all checklist progress?')) return;
    setProgress({});
    saveProgress({});
  }

  return <div className="app">
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">CP</div>
        <div>
          <h1>Cyberpunk 2077</h1>
          <p>100% Route</p>
        </div>
      </div>

      <div className="progressCard">
        <div className="progressTop"><span>Overall progress</span><strong>{percent}%</strong></div>
        <div className="bar"><div style={{ width: `${percent}%` }} /></div>
        <small>{doneCount} / {allItems.length} checklist items</small>
      </div>

      <label className="search">
        <Search size={18}/>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search: Satori, Dogtown..." />
      </label>

      <nav className="chapters">
        {filtered.map(ch => {
          const total = ch.checklist.length;
          const done = ch.checklist.filter((_, i) => progress[`${ch.id}-${i}`]).length;
          return <button key={ch.id} className={selected.id === ch.id ? 'active' : ''} onClick={() => setSelectedId(ch.id)}>
            <span>{ch.title}</span>
            <small>{done}/{total} · {ch.level}</small>
          </button>
        })}
      </nav>

      <button className="reset" onClick={resetProgress}><RotateCcw size={16}/> Reset progress</button>
    </aside>

    <main className="content">
      <section className="hero">
        <div>
          <p className="eyebrow"><MapPin size={16}/> {selected.zone}</p>
          <h2>{selected.title}</h2>
          <p>{selected.target}</p>
        </div>
        <div className="levelBadge">{selected.level}</div>
      </section>

      <Section icon={<Shield/>} title="Build updates">
        <ul>{selected.build.map((x, i) => <li key={i}>{x}</li>)}</ul>
      </Section>

      <Section icon={<MapPin/>} title="Route">
        <ol>{selected.route.map((x, i) => <li key={i}>{x}</li>)}</ol>
      </Section>

      <Section icon={<CheckCircle2/>} title="Checklist before moving on">
        <div className="checklist">
          {selected.checklist.map((item, i) => {
            const key = `${selected.id}-${i}`;
            return <button key={key} onClick={() => toggle(selected.id, i)} className={progress[key] ? 'checked' : ''}>
              {progress[key] ? <CheckCircle2/> : <Circle/>}
              <span>{item}</span>
            </button>
          })}
        </div>
      </Section>

      <div className="grid">
        <Section icon={<Star/>} title="Missables / watch-outs">
          <ul>{selected.missables.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </Section>
        <Section icon={<AlertTriangle/>} title="Do not do yet">
          <ul>{selected.dont.map((x, i) => <li key={i}>{x}</li>)}</ul>
        </Section>
      </div>
    </main>
  </div>
}

function Section({ icon, title, children }) {
  return <section className="section">
    <h3>{React.cloneElement(icon, { size: 19 })} {title}</h3>
    {children}
  </section>
}

createRoot(document.getElementById('root')).render(<App />);

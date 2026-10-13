import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, ArrowDownRight, ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, Clock3, HeartPulse, MapPin, Menu, Search, ShieldCheck, Sparkles, Stethoscope, Video, X } from 'lucide-react';
import './styles.css';

const doctors = [
  {name:'Dr. Amara Nkosi',specialty:'General Practitioner',area:'Sandton, Johannesburg',experience:'12 years experience',fee:'R650',rating:'4.9',initials:'AN',tone:'sage',availability:'Today, 14:30',about:'Thoughtful, whole-person primary care for every stage of life.'},
  {name:'Dr. Daniel Mokoena',specialty:'Cardiologist',area:'Rosebank, Johannesburg',experience:'15 years experience',fee:'R1,100',rating:'4.9',initials:'DM',tone:'blue',availability:'Tomorrow, 09:00',about:'Heart health, prevention and evidence-led treatment plans.'},
  {name:'Dr. Priya Naidoo',specialty:'Dermatologist',area:'Pretoria East, Pretoria',experience:'9 years experience',fee:'R850',rating:'4.8',initials:'PN',tone:'peach',availability:'Thu, 11:15',about:'Clear, practical care for skin health and long-term confidence.'},
  {name:'Dr. Thabo Dlamini',specialty:'Paediatrician',area:'Centurion, Pretoria',experience:'11 years experience',fee:'R780',rating:'5.0',initials:'TD',tone:'lavender',availability:'Today, 16:00',about:'Calm, family-centred care for babies, children and teenagers.'},
];
const specialties = ['All specialties','General Practitioner','Cardiologist','Dermatologist','Paediatrician'];
function App(){
  const [query,setQuery] = useState('');
  const [specialty,setSpecialty] = useState('All specialties');
  const [location,setLocation] = useState('');
  const [menuOpen,setMenuOpen] = useState(false);
  const [selected,setSelected] = useState(null);
  const [booking,setBooking] = useState({name:'',email:'',date:'',time:'',type:'In-person'});
  const [submitted,setSubmitted] = useState(false);
  const filtered = useMemo(()=>doctors.filter(d=>(specialty==='All specialties'||d.specialty===specialty)&&(`${d.name} ${d.specialty} ${d.area}`.toLowerCase().includes(query.toLowerCase()))&&(!location||d.area.toLowerCase().includes(location.toLowerCase()))),[query,specialty,location]);
  const scrollToDoctors=()=>document.getElementById('doctors')?.scrollIntoView({behavior:'smooth'});
  const openBooking=(doctor)=>{setSelected(doctor);setSubmitted(false);setBooking({name:'',email:'',date:'',time:'',type:'In-person'});};
  const submitBooking=(e)=>{e.preventDefault();setSubmitted(true);};
  return <div className="app">
    <div className="topline"><span><span className="live-dot"></span> Care that fits your life</span><span className="topline-right"><ShieldCheck size={14}/> Your health information deserves care.</span></div>
    <header className="header">
      <a className="brand" href="#" aria-label="Carepoint home"><span className="brand-mark"><Activity size={21}/></span><span>carepoint<span className="brand-period">.</span></span></a>
      <button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?'nav nav-open':'nav'}><a href="#doctors" onClick={()=>setMenuOpen(false)}>Find a doctor</a><a href="#how" onClick={()=>setMenuOpen(false)}>How it works</a><a href="#care" onClick={()=>setMenuOpen(false)}>Our approach</a><button className="nav-cta" onClick={scrollToDoctors}>Book a visit <ArrowUpRight size={16}/></button></nav>
    </header>
    <main>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-icon"><HeartPulse size={14}/></span> HEALTHCARE, ON YOUR TERMS</div>
          <h1>Good health starts with <span>the right person.</span></h1>
          <p className="hero-lede">Meet trusted doctors who listen, explain and put your wellbeing first. Find the right care, without the runaround.</p>
          <div className="hero-actions"><button className="primary-btn" onClick={scrollToDoctors}>Find your doctor <ArrowRight size={17}/></button><a href="#how" className="text-link">How it works <ArrowDownRight size={16}/></a></div>
          <div className="trust-row"><div className="avatar-stack"><span>AN</span><span>DM</span><span>PN</span><span>TD</span></div><div><div className="trust-stars">★★★★★ <b>4.9/5</b></div><p>Care starts with confidence</p></div></div>
        </div>
        <div className="hero-art">
          <div className="art-glow"></div><div className="art-grid"></div>
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="portrait-card"><div className="portrait-top"><span className="available"><span></span> Available for appointments</span><span className="portrait-icon"><Stethoscope size={17}/></span></div><div className="doctor-illustration"><div className="illustration-halo"></div><div className="doctor-hair"></div><div className="doctor-head"><div className="doctor-ear left"></div><div className="doctor-ear right"></div><div className="doctor-face"><span className="brow brow-left"></span><span className="brow brow-right"></span><span className="eye eye-left"></span><span className="eye eye-right"></span><span className="nose"></span><span className="smile"></span></div></div><div className="doctor-neck"></div><div className="doctor-body"><div className="coat-left"></div><div className="coat-right"></div><div className="scrubs"></div><div className="stethoscope-line"></div></div></div><div className="portrait-caption"><div><strong>Care, with a human touch.</strong><span>Because you’re more than a symptom.</span></div><span className="caption-check"><Check size={17}/></span></div></div>
          <div className="floating-note note-top"><span className="note-icon mint"><ShieldCheck size={17}/></span><div><strong>Care you can trust</strong><small>Professionals, not guesswork</small></div></div>
          <div className="floating-note note-bottom"><span className="note-icon peach"><CalendarDays size={17}/></span><div><strong>Your time matters</strong><small>Simple appointment requests</small></div></div>
          <div className="art-stamp"><HeartPulse size={20}/></div>
        </div>
        <div className="hero-foot"><span>PERSONAL CARE. CLEAR CHOICES.</span><span>01 / YOUR HEALTH, YOUR WAY <ArrowDownRight size={14}/></span></div>
      </section>
      <section className="search-section" aria-label="Find a doctor">
        <div className="search-heading"><div><span className="section-kicker">START HERE</span><h2>Who can we help you find?</h2></div><span className="search-side-note"><ShieldCheck size={15}/> A clearer way to find care</span></div>
        <div className="search-panel">
          <label className="search-field"><span className="field-icon"><Search size={19}/></span><span className="field-content"><small>Doctor or specialty</small><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Name, specialty or keyword"/></span></label>
          <span className="search-divider"></span>
          <label className="search-field"><span className="field-icon"><MapPin size={19}/></span><span className="field-content"><small>Location</small><input value={location} onChange={e=>setLocation(e.target.value)} placeholder="City or neighbourhood"/></span></label>
          <span className="search-divider"></span>
          <label className="search-field select-field"><span className="field-icon"><Stethoscope size={19}/></span><span className="field-content"><small>Specialty</small><select value={specialty} onChange={e=>setSpecialty(e.target.value)}>{specialties.map(s=><option key={s}>{s}</option>)}</select></span><ChevronDown size={15}/></label>
          <button className="search-btn" onClick={scrollToDoctors}><Search size={17}/> Search doctors</button>
        </div>
        <div className="popular"><span>POPULAR:</span>{['General practice','Heart health','Skin health','Children'].map((s,i)=><button key={s} onClick={()=>{setSpecialty(['General Practitioner','Cardiologist','Dermatologist','Paediatrician'][i]);scrollToDoctors();}}>{s}</button>)}</div>
      </section>
      <section className="doctors-section" id="doctors">
        <div className="section-heading"><div><span className="section-kicker">MEET YOUR CARE TEAM</span><h2>People first. Medicine always.</h2><p>Find a professional who fits your needs and makes you feel heard.</p></div><span className="results-count">{filtered.length} professionals <span>↗</span></span></div>
        <div className="doctor-grid">{filtered.map((d,i)=><article className="doctor-card" key={d.name}><div className={`doctor-card-top ${d.tone}`}><span className="verified"><ShieldCheck size={13}/> Profile preview</span><span className="rating">★ {d.rating}</span><div className={`doctor-avatar ${d.tone}`}><div className="avatar-head"></div><div className="avatar-body"></div><span>{d.initials}</span></div><div className="card-specialty">{d.specialty}</div></div><div className="doctor-info"><h3>{d.name}</h3><p className="doctor-area"><MapPin size={14}/>{d.area}</p><p className="doctor-about">{d.about}</p><div className="doctor-meta"><span><Clock3 size={14}/>{d.experience}</span><strong>{d.fee}<small> / visit</small></strong></div><div className="next-slot"><span><span className="slot-dot"></span> Next opening</span><b>{d.availability}</b></div><button className="card-button" onClick={()=>openBooking(d)}>Request appointment <ArrowRight size={16}/></button></div></article>)}</div>
        {filtered.length===0&&<div className="empty-state"><Search size={24}/><h3>No matches just yet</h3><p>Try another specialty or location to explore available profiles.</p><button className="text-link" onClick={()=>{setQuery('');setLocation('');setSpecialty('All specialties');}}>Clear filters <ArrowRight size={15}/></button></div>}
        <p className="directory-note"><ShieldCheck size={15}/> Sample profiles for website demonstration. Please verify practitioner credentials and availability independently.</p>
      </section>
      <section className="how-section" id="how"><div className="how-intro"><span className="section-kicker">A LITTLE LESS STRESS</span><h2>From searching to care, in a few steps.</h2><p>Healthcare can be complicated. Finding someone to talk to shouldn’t be.</p><button className="outline-btn" onClick={scrollToDoctors}>Explore doctors <ArrowRight size={16}/></button></div><div className="steps"><div className="step"><span className="step-num">01</span><div className="step-icon"><Search size={20}/></div><div><h3>Find your fit</h3><p>Search by specialty, name or location to explore care options that make sense for you.</p></div></div><div className="step"><span className="step-num">02</span><div className="step-icon"><CalendarDays size={20}/></div><div><h3>Request a visit</h3><p>Choose a preferred date and consultation type, then send your appointment request.</p></div></div><div className="step"><span className="step-num">03</span><div className="step-icon"><HeartPulse size={20}/></div><div><h3>Focus on you</h3><p>Follow up directly with the practice to confirm your booking and prepare for your visit.</p></div></div></div></section>
      <section className="care-banner" id="care"><div className="banner-symbol"><Sparkles size={24}/></div><div><span className="section-kicker">A MORE HUMAN KIND OF HEALTHCARE</span><h2>You bring your questions.<br/><span>We’ll help you find the right conversation.</span></h2></div><button className="banner-btn" onClick={scrollToDoctors}>Meet the doctors <ArrowUpRight size={17}/></button><div className="banner-decoration"></div></section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#"><span className="brand-mark"><Activity size={18}/></span><span>carepoint<span className="brand-period">.</span></span></a><p>Making the next step in your healthcare feel simpler.</p><div className="footer-right"><span>Built for better conversations.</span><span>© 2026 Carepoint demo</span></div></footer>
    {selected&&<div className="modal-backdrop" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null);}}><section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title"><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close booking form"><X size={20}/></button>{submitted?<div className="success-state"><span className="success-icon"><Check size={28}/></span><span className="section-kicker">REQUEST PREPARED</span><h2>One step closer to care.</h2><p>Your demo request for <strong>{selected.name}</strong> has been prepared. This website is a prototype and has not sent your information to a clinic. Please contact the practice directly to confirm a real appointment.</p><button className="primary-btn" onClick={()=>setSelected(null)}>Done <ArrowRight size={16}/></button></div>:<><span className="section-kicker">APPOINTMENT REQUEST</span><h2 id="booking-title">Let’s find a time.</h2><p className="modal-subtitle">Request a visit with {selected.name}. Your booking is not confirmed until the practice responds.</p><div className="modal-doctor"><span className={`modal-avatar ${selected.tone}`}>{selected.initials}</span><div><strong>{selected.name}</strong><span>{selected.specialty} · {selected.fee} / visit</span></div></div><form onSubmit={submitBooking} className="booking-form"><label>Your full name<input required value={booking.name} onChange={e=>setBooking({...booking,name:e.target.value})} placeholder="e.g. Sam Mokoena"/></label><label>Email address<input required type="email" value={booking.email} onChange={e=>setBooking({...booking,email:e.target.value})} placeholder="you@example.com"/></label><div className="form-row"><label>Preferred date<input required type="date" min={new Date().toISOString().slice(0,10)} value={booking.date} onChange={e=>setBooking({...booking,date:e.target.value})}/></label><label>Preferred time<select required value={booking.time} onChange={e=>setBooking({...booking,time:e.target.value})}><option value="">Choose time</option>{['09:00','10:00','11:30','13:00','14:30','16:00'].map(t=><option key={t}>{t}</option>)}</select></label></div><label>Consultation type<select value={booking.type} onChange={e=>setBooking({...booking,type:e.target.value})}><option>In-person</option><option>Video consultation (request only)</option></select></label><button className="primary-btn form-submit" type="submit">Prepare request <ArrowRight size={16}/></button><p className="privacy-note"><ShieldCheck size={14}/> Demo only. Do not enter medical or other sensitive information.</p></form></>}</section></div>}
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
'use client';
import React, {useEffect, useRef, useState} from 'react';
import services from '../services.json';
const base='https://dermapuritys.com';
import {Arrow} from './Icons';
import ConsultationForm from './ConsultationForm';
import {CareContent,WhyChooseUs,DoctorTeam,SkinFAQs} from './SkinSections';
const groups=['Facials','Facials','Facials','Facials','Rejuvenation','Other skin services','Rejuvenation','Other skin services','Rejuvenation','Facials','Resurfacing','Resurfacing','Resurfacing','Rejuvenation','Other skin services'];
const descriptions=['Explore the ZO Obagi brightening facial.','Discover the Derma Genesis facial experience.','A facial focused on cleansing and hydration.','Explore the Preime DermaFacial experience.','Discover an advanced skin booster treatment.','Explore permanent makeup for your everyday look.','Learn more about Good Gene Therapy.','Discover NAD+ IV infusion therapy.','Explore PRP for skin rejuvenation.','Discover the Hydrafacial Elite experience.','Explore a skin exfoliation treatment.','Explore peel options for acne, pigmentation and dullness.','Discover microneedling for skin texture.','Explore the 4D ClearLift treatment.','Discuss skin tag assessment and removal.'];
const items=services.map((s,i)=>({...s,group:groups[i],description:descriptions[i]}));
export default function SkinCategory(){
 const [active,setActive]=useState('All treatments'),[query,setQuery]=useState(''),[expanded,setExpanded]=useState(false),[menu,setMenu]=useState(false),[ready,setReady]=useState(false);
 const menuButton = useRef(null);
 useEffect(() => {
  if (!menu) return;
  const dismiss = event => { if (event.key === 'Escape') { setMenu(false); menuButton.current?.focus(); } };
  document.addEventListener('keydown', dismiss);
  return () => document.removeEventListener('keydown', dismiss);
 }, [menu]);
 const found=items.filter(s=>(active==='All treatments'||s.group===active)&&s.name.toLowerCase().includes(query.trim().toLowerCase()));
 const shown=expanded?found:found.slice(0,6);
 function book() {
  setReady(false);
  setMenu(false);
  document.getElementById('full-name').focus({preventScroll:true});
  document.getElementById('consultation-form').scrollIntoView({behavior:'instant',block:'start'});
 }

 return <><a className="skip" href="#main">Skip to content</a><header><div className="nav wrap"><a href={base} aria-label="Dermapuritys home"><img className="logo" src="/assets/logo.png" alt="dermapuritys" width="180" height="72"/></a><nav id="main-navigation" aria-label="Main navigation" className={menu?'open':''}><a className="current" href="#treatments" onClick={()=>setMenu(false)}>Services <span className="chevron"/></a><a href="https://dermalogycare.com/">Products</a><a href={base+'/about-us'}>About Us</a><a href={base+'/contact-us'}>Contact Us</a></nav><button className="btn nav-cta" onClick={()=>book()}>Talk To Experts</button><button ref={menuButton} aria-controls="main-navigation" className="menu" aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu} onClick={()=>setMenu(!menu)}><span/><span/></button></div></header>
 <main id="main" tabIndex={-1}><div className="breadcrumb wrap"><a href={base}>Home</a><span>/</span><a href="#treatments">Services</a><span>/</span><span>Skin</span></div>
 <section className="hero hero-with-form" aria-label="Skin care and consultation"><div className="hero-main wrap"><div className="hero-story"><div className="hero-copy"><h1>Skin care.<br/>Personal to <em>you.</em></h1><p>Explore advanced skin treatments and facials, with a consultation to find the right approach for your skin.</p><div className="hero-actions"><a className="text-link" href="#treatments">Explore treatments <span>↓</span></a></div><div className="hero-caption"><span className="line"/> Your skin. Your concerns. Your consultation.</div></div><div className="hero-image"><img src="/assets/skin.webp" alt="Dermapuritys skin care category portrait" fetchPriority="high"/></div></div><div className="hero-form"><ConsultationForm ready={ready} setReady={setReady}/></div></div></section>
 <section className="trust-bar" aria-label="Dermapuritys at a glance"><div className="wrap trust-items"><div><strong>29,000+</strong><span>clients</span></div><div><strong>Experienced care</strong><span>Dermatology & aesthetic professionals</span></div><div><strong>Modern treatments</strong><span>Skin, laser & aesthetic options</span></div><div><strong>Multiple locations</strong><span>Delhi · Gurugram · Mumbai · Lucknow</span></div></div></section>
 <section id="treatments" className="treatments wrap"><div className="section-head"><div><h2>Find your skin treatment</h2><p>Discover the options. Let a consultation guide your choice.</p></div><div className="search"><svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5" aria-hidden="true"><circle cx="10" cy="10" r="6.5"/><path d="m15 15 5 5"/></svg><input aria-label="Search skin treatments" placeholder="Search treatments" value={query} onChange={e=>{setQuery(e.target.value);setExpanded(true)}}/>{query&&<button onClick={()=>setQuery('')} aria-label="Clear search"><svg width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button>}</div></div>
 <div className="filter-row"><div className="filters" aria-label="Filter treatments">{['All treatments','Facials','Rejuvenation','Resurfacing','Other skin services'].map(g=><button key={g} aria-pressed={active===g} className={active===g?'selected':''} onClick={()=>{setActive(g);setExpanded(g!=='All treatments')}}>{g}</button>)}</div><span className="count" aria-live="polite">{found.length} {found.length === 1 ? 'treatment' : 'treatments'}</span></div>
 <div className="grid">{shown.map((s,i)=><article className={'treatment '+(!s.image?'no-image':'')} key={s.name}>{s.image?<a href={s.url} className="card-photo" aria-label={'View '+s.name}><img src={s.image} alt={s.name} loading={i < 6 ? 'eager' : 'lazy'}/></a>:<div className="photo-placeholder"><span>Skin tag removal</span><p>Start with a consultation</p></div>}<div className="card-copy"><h3><a href={s.url}>{s.name}</a></h3><p>{s.description}</p><div className="card-actions"><a href={s.url}>View Details <Arrow/></a><button aria-label={'Book '+s.name} onClick={()=>book()}>Book Now <Arrow/></button></div></div></article>)}</div>
 {!found.length&&<div className="empty"><h3>No matching treatments</h3><p>Try a different name or browse the full skin treatment list.</p><button className="btn" onClick={()=>{setQuery('');setActive('All treatments')}}>Show all treatments</button></div>}
 {found.length>6&&!expanded&&<button className="btn outline show-all" onClick={()=>setExpanded(true)}>View all {found.length} skin treatments <span>↓</span></button>}
 <div className="help-strip"><div><h3>Not sure where to start?</h3><p>Tell us about your skin. We’ll help you explore your options.</p></div><button className="text-link" onClick={()=>book()}>Talk to an Expert <Arrow/></button></div></section>
 <CareContent onBook={()=>book()}/>
 <WhyChooseUs/>
 <DoctorTeam/>
 <section className="consultation consultation-banner" id="consultation"><div className="wrap consult-banner-layout"><div><h2>Your next step starts<br/>with a <em>conversation.</em></h2><p>Choose a skin treatment, or let our team help you decide.</p></div><div className="consult-banner-actions"><button className="btn" onClick={()=>book()}>Book a Consultation</button><a href="tel:+919717076048">Call +91 97170 76048</a><a href={base+'/contact-us'}>Contact Us</a></div></div></section>
 <SkinFAQs/>
 </main><footer><div className="wrap footer-main"><div><a href={base}><img src="/assets/logo.png" alt="dermapuritys" width="190" height="76"/></a><p>Skin, hair and aesthetic care.<br/>A conversation away.</p></div><div><h3>Explore Dermapuritys</h3><a href={base+'/about-us'}>About Us</a><a href={base+'/blog'}>Blogs</a><a href={base+'/location/greater-kailash'}>Our Locations</a></div><div><h3>How can we help?</h3><a href={base+'/contact-us'}>Contact Us</a><a href={base+'/faqs'}>FAQs</a><a href="https://wa.me/919717076048">Chat on WhatsApp</a></div><div><h3>Stay connected</h3><a href="https://www.instagram.com/dermapuritys/">Instagram</a><a href="https://www.facebook.com/dermapuritys/">Facebook</a><a href={base+'/privacy-policy'}>Privacy Policy</a></div></div><div className="wrap footer-bottom"><span>© 2026 Dermapuritys. All rights reserved.</span><a href={base+'/terms'}>Terms & Conditions</a></div></footer><div className="mobile-book"><span>Skin care, made personal.</span><button className="btn" onClick={()=>book()}>Book Now <Arrow/></button></div></>;
}

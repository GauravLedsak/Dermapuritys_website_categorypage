import {Arrow} from './Icons';

const doctors = [
  {name:'Dr. B.H. Nasir', image:'/assets/doctor-nasir.jpg', role:'Dermatologist', qualification:'MBBS, MD (DVL)', description:'Dermatology and laser treatments.'},
  {name:'Dr. Riya Agrawal', image:'/assets/doctor-riya.jpg', role:'Dermatologist & Venereologist', qualification:'Clinical dermatology & aesthetics', description:'Clinical dermatology, laser treatments and aesthetic procedures.'},
  {name:'Dr. Neha Sherwani', image:'/assets/doctor-neha.jpg', role:'Certified Aesthetic Physician', qualification:'Skin & aesthetic treatments', description:'Chemical peels, PRP, RF facial and laser-based treatments.'},
];
const questions = [
  ['Which skin treatments can I explore at Dermapuritys?', 'This category includes facials, skin boosters, peels, microneedling and other skin services. Browse the treatment catalogue for individual service information.'],
  ['Do I need to choose a treatment before booking?', 'No. Enter your name, email, phone and preferred branch in the consultation form. You can discuss your skin concerns and treatment options with the team.'],
  ['How is a skin treatment selected?', 'A consultation gives you the opportunity to discuss your concerns, goals and relevant history. Ask the clinician about suitability, alternatives and what to expect before deciding.'],
  ['How much will my treatment cost?', 'Pricing depends on the service and the treatment plan. Contact the clinic for current prices and an individual estimate; this page does not display treatment prices.'],
  ['Will I need more than one session?', 'The number of sessions varies by treatment and individual needs. Your clinician can explain the proposed schedule and review process during your consultation.'],
  ['Where can I book a consultation?', 'Choose Delhi, Gurugram, Mumbai or Lucknow in the enquiry form, or contact Dermapuritys directly to confirm the most convenient clinic and availability.'],
];

export function CareContent({onBook}) {
  return <section className="care-content wrap" aria-labelledby="care-heading">
    <div className="care-explanation"><h2 id="care-heading">Advanced skin treatments<br/>at Dermapuritys</h2><p>Every skin journey starts with understanding your skin. Explore options for hydration, dullness, uneven tone, texture and signs of ageing, then discuss the right approach for you.</p><p>A treatment name is a starting point. A consultation helps you ask the questions that matter before making your choice.</p><button className="text-link" onClick={onBook}>Book a Consultation <Arrow/></button></div>
    <div className="consultation-guide"><h3>Make your consultation count</h3><ul><li><strong>Share your concerns.</strong><span>Tell the team what you would like to discuss and what you hope to understand.</span></li><li><strong>Understand your options.</strong><span>Ask about suitability, the treatment process and alternatives.</span></li><li><strong>Plan your next step.</strong><span>Discuss sessions, aftercare, costs and follow-up before booking a procedure.</span></li></ul></div>
  </section>;
}

export function WhyChooseUs() {
  return <section className="why-section" aria-labelledby="why-heading"><div className="wrap why-layout"><div><h2 id="why-heading">Why choose <br/><em>Dermapuritys?</em></h2><p>Care that starts with your individual needs.</p><a className="text-link" href="https://dermapuritys.com/about-us">About Dermapuritys <Arrow/></a></div><div className="benefit-list"><article><h3>A personal approach</h3><p>The team assesses individual concerns to discuss an appropriate treatment approach.</p></article><article><h3>Skin care expertise</h3><p>Dermatology and aesthetic professionals with a range of clinical interests.</p></article><article><h3>Options in one place</h3><p>Explore facials, skin rejuvenation, resurfacing and other skin services.</p></article><article><h3>Care closer to you</h3><p>Choose from locations in Delhi, Gurugram, Mumbai and Lucknow.</p></article></div></div></section>;
}

export function DoctorTeam() {
  return <section className="team-section wrap" aria-labelledby="team-heading"><div className="section-head"><div><h2 id="team-heading">Meet the people behind your care</h2><p>Dermapuritys’ dermatology and aesthetic team.</p></div><a className="text-link" href="https://dermapuritys.com/">Explore Dermapuritys <Arrow/></a></div><div className="doctor-grid">{doctors.map(d=><article className="doctor-card" key={d.name}><img src={d.image} alt={d.name} width="420" height="420" loading="eager"/><div className="doctor-copy"><p className="doctor-role">{d.role}</p><h3>{d.name}</h3><p className="doctor-qualification">{d.qualification}</p><p>{d.description}</p></div></article>)}</div><p className="team-note">Contact the clinic to confirm clinician availability at your preferred location.</p></section>;
}

export function SkinFAQs() {
  return <section className="faq-section wrap" aria-labelledby="faq-heading"><div className="faq-intro"><h2 id="faq-heading">A few things<br/>you may be wondering.</h2><p>Questions about exploring skin treatments and booking your consultation.</p><a className="text-link" href="https://dermapuritys.com/contact-us">Ask our team <Arrow/></a></div><div className="faq-list">{questions.map(([question,answer])=><details key={question}><summary>{question}<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14"/><path className="faq-plus" d="M12 5v14"/></svg></summary><p>{answer}</p></details>)}</div></section>;
}

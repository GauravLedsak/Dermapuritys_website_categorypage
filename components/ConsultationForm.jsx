'use client';
import {Arrow} from './Icons';
const base = 'https://dermapuritys.com';

export default function ConsultationForm({ready,setReady}) {
 const clearStatus = () => setReady(false);
 return (
  <form id="consultation-form" aria-labelledby="consultation-heading" onSubmit={event=>{event.preventDefault();setReady(true)}}>
   <div className="form-heading"><h2 id="consultation-heading">Book a Consultation</h2></div>
   <p className="form-subtitle">Tell us how to reach you. All fields are required.</p>
   <div className="fields">
    <label htmlFor="full-name">Name<input id="full-name" name="name" autoComplete="name" placeholder="Enter your name" required pattern={".*\\S.*"} maxLength={100} onChange={clearStatus}/></label>
    <label htmlFor="email">Email<input id="email" name="email" type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} placeholder="Enter your email" required maxLength={254} onChange={clearStatus}/></label>
    <label htmlFor="mobile-number">Phone<input id="mobile-number" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone number" required pattern={"\\+?(?:[0-9][ ()\\-]?){8,15}"} title="Enter a phone number with 8 to 15 digits; spaces, brackets and hyphens are allowed" onChange={clearStatus}/></label>
    <label htmlFor="branch">Branch<select id="branch" name="branch" defaultValue="" required onChange={clearStatus}><option value="" disabled>Select a branch</option>{['Delhi','Gurugram','Mumbai','Lucknow'].map(branch=><option key={branch}>{branch}</option>)}</select></label>
   </div>
   <label className="consent"><input type="checkbox" required onChange={clearStatus}/><span>I agree to be contacted about my enquiry and have read the <a href={base+'/privacy-policy'}>Privacy Policy</a>.</span></label>
   <button className="btn form-button" type="submit">Request a Consultation <Arrow/></button>
   <p className="prototype-note">Design preview — this form does not submit enquiries.</p>
   {ready&&<div className="form-status" role="status"><strong>Your enquiry details are ready.</strong><p>This preview is not connected to the clinic’s booking system. Contact Dermapuritys to arrange your consultation.</p><a href={base+'/contact-us'}>Continue to Dermapuritys <Arrow/></a></div>}
  </form>
 );
}

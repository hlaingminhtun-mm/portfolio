import React, { useEffect, useRef, useState } from 'react';
import { certificates } from './credentials';

function ImageViewer({ item, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const trigger = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    return () => { document.body.style.overflow = overflow; trigger?.focus(); };
  }, []);
  return <dialog ref={dialog} className="image-viewer" aria-labelledby="image-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="viewer-toolbar"><div><p className="eyebrow">{item.issuer || 'A LITTLE MORE PERSONAL'}</p><h3 id="image-title">{item.title}</h3></div><button type="button" className="viewer-close" onClick={onClose} aria-label="Close image viewer">✕</button></div>
    <div className="viewer-image"><img src={item.image} alt={item.alt || `${item.title} — Hlaing Min Htun`}/></div>
    <div className="viewer-footer"><span>{item.date || 'Hlaing Min Htun'}</span><a href={item.image} download>Download image <span aria-hidden="true">↓</span></a></div>
  </dialog>;
}

export function CertificateGallery() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const items = certificates.filter(item => filter === 'All' || item.category === filter);
  return <section id="certificates" className="credentials-section"><div className="section-wrap section-space">
    <div className="section-heading"><div><p className="eyebrow"><span>05</span> CURIOSITY, WITH COMMITMENT</p><h2>Always learning.<br/>Always <span className="serif">growing.</span><span className="title-spark" aria-hidden="true">✧</span></h2></div><p className="section-intro">A collection of learning milestones and community recognition, from project management to showing up for others.</p></div>
    <div className="certificate-filter" role="group" aria-label="Filter certificates">{['All', 'Management', 'Leadership', 'Technology', 'Community'].map(category => <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}<span>{certificates.filter(item => category === 'All' || item.category === category).length}</span></button>)}</div>
    <p className="gallery-count" aria-live="polite">{items.length} {items.length === 1 ? 'milestone' : 'milestones'} · Select a certificate to take a closer look</p>
    <div className="certificate-grid">{items.map(item => <article className="certificate-card" key={item.title}>
      {item.image ? <button type="button" className="certificate-preview" onClick={() => setSelected(item)} aria-label={`View ${item.title} certificate`}><img src={item.thumbnail} alt={`${item.title} certificate awarded to Hlaing Min Htun`} loading="lazy" width="800" height="566"/><span className="certificate-zoom" aria-hidden="true">↗</span></button> : <div className="training-preview"><span aria-hidden="true">&lt;/&gt;</span><strong>A technical beginning.</strong><small>WEB DEVELOPMENT · PHP</small></div>}
      <div className="certificate-copy"><div className="certificate-category"><span>{item.category}</span><span>{item.image ? 'Certificate' : 'Training'}</span></div><h3>{item.title}</h3><p>{item.issuer}</p><div className="certificate-date"><span>{item.date}</span>{item.image && <button type="button" onClick={() => setSelected(item)} aria-label={`Open ${item.title}`}>View <span aria-hidden="true">↗</span></button>}</div>{item.note && <p className="training-note">{item.note}</p>}</div>
    </article>)}</div>
    {selected && <ImageViewer item={selected} onClose={() => setSelected(null)}/>}
  </div></section>;
}

const photos = [
  { title: 'In the Evercomm Singapore office', image: '/images/portraits/singapore-office.jpg', alt: 'Hlaing Min Htun sitting in the Evercomm Singapore office in front of Evercomm ESG banners', caption: 'Office days, Singapore edition.', width: 1600, height: 1200 },
  { title: 'With the Evercomm Singapore team', image: '/images/portraits/evercomm-singapore-team.jpg', alt: 'Hlaing Min Htun with the Evercomm Singapore team in an elevator selfie', caption: 'Elevator pitch: these people.', width: 1477, height: 1108 },
  { title: 'Lunch with the Evercomm CEO & ISO 27001 auditor', image: '/images/portraits/lunch-evercomm-iso27001.jpg', alt: 'Hlaing Min Htun at lunch with the Evercomm CEO and the ISO 27001 auditor', caption: 'Good food, greater company.', width: 1280, height: 960 },
  { title: 'Night out at the Merlion', image: '/images/portraits/singapore-merlion.jpg', alt: 'Hlaing Min Htun taking a night selfie at the Merlion in Singapore', caption: 'Tourist mode: on.', width: 1600, height: 1200 },
  { title: 'Remote catch-up with the Bangkok team', image: '/images/portraits/remote-team-bangkok.jpg', alt: 'Video call between Hlaing Min Htun and his remote team members in Bangkok', caption: 'Remote, never distant.', width: 1600, height: 701 },
  { title: 'With the Kumo Solutions team', image: '/images/portraits/kumo-solutions-team.jpg', alt: 'Hlaing Min Htun with the Kumo Solutions team outside a restaurant', caption: 'The crew that feels like home.', width: 1600, height: 1200 },
];

export function PersonalGallery() {
  const [selected, setSelected] = useState(null);
  return <section className="section-wrap personal-section" aria-labelledby="personal-title"><div className="personal-intro"><p className="eyebrow">A PERSON BEHIND THE PROJECTS</p><h2 id="personal-title">Thoughtful work.<br/>A little <span className="serif">personality.</span></h2><p>Part-time mood maker, full-time people person — powered by movies, music, and really good food.</p><span className="handwritten">Friendly by default. <span aria-hidden="true">♡</span></span></div><div className="photo-pair">{photos.map(photo => <button key={photo.title} type="button" className="photo-print" onClick={() => setSelected(photo)} aria-label={`Enlarge ${photo.title}`}><img src={photo.image} alt={photo.alt} loading="lazy" width={photo.width} height={photo.height}/><span>{photo.caption}<span aria-hidden="true">↗</span></span></button>)}<span className="photo-spark" aria-hidden="true">✳</span></div>{selected && <ImageViewer item={selected} onClose={() => setSelected(null)}/>}</section>;
}

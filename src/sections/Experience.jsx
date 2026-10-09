import { useState } from 'react';
import design1 from '../assets/design1.mp4';
import design2 from '../assets/design2.png';
import design3 from '../assets/design3.png';
import community1 from '../assets/community1.mp4';
import community2 from '../assets/community2.png';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.jpg';

const experienceLabels = [
    { label: 'design', color: '#71ded7' },
    { label: 'community', color: '#f5a623' },
    { label: 'product', color: '#cfeaf5' },
];

// Edit each card's media, title, section text, and description here.
const experienceCards = {
    design: [
        { media: design1, title: 'Agrowtech', section: 'design', description: 'Designed and built a smart-farming system connecting irrigation sensors to mobile apps. Won Samsung challenge regional finalist, YRDSB Applause award, and featured in 3 articles.', link: 'https://www2.yrdsb.ca/students-unionville-hs-recognized-development-innovative-agricultural-tech-company' },
        { media: design2, title: 'AIHealth', section: 'design', description: 'Drafted website frontend for homepage and products, making healthcare support more accessible. Featured in local news article.', link: 'https://aihealth.icu/' },
        { media: design3, title: 'Medicine4Youth', section: 'design', description: 'Created content and managed social media for medical education platform of 27k+ followers.', link: 'https://www.instagram.com/medicine4youth/' },
    ],
    community: [
        { media: community1, title: 'DECA Executive', section: 'community', description: 'Elected executive to manage nation-wide competitions and school-wide events for 200+ aspiring entrepreneurs.', link: 'https://www.instagram.com/decaunionville/' },
        { media: community2, title: 'Key Club Founder', section: 'community', description: 'Hosted community events promoting volunteerism and creative leadership. Raised $5k+ and accumulated 100 members. ', link: 'https://www.instagram.com/unionvillekey/' },
    ],
    product: [
        { media: product1, title: 'REMINISCE', section: 'product', description: 'Add a short description of this work.'},
        { media: product2, title: 'Model Car', section: 'product', description: 'Add a short description of this work.'},
        { media: product3, title: 'Amojistudios', section: 'product', description: 'Add a short description of this work.', link: 'https://www.instagram.com/amojistudios/' },
    ],
};

export const Experience = () => {
    const [activeLabel, setActiveLabel] = useState('design');
    const activeCards = experienceCards[activeLabel];

    return (
        <section id="experience" className="py-16 relative overflow-hidden">
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground font-bold text-sm tracking-wider animate-fade-in">
                    experience.
                </span>
            </div>

            {/* new div for new rows of components -- dots*/}
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6">
                {experienceLabels.map((label) => {
                    const isActive = activeLabel === label.label;

                    // loops
                    return (
                    <button
                        // is tab focused/not
                        key={label.label}
                        type="button"
                        onClick={() => setActiveLabel(label.label)}
                        className={`flex items-center gap-3 text-sm tracking-wider transition-colors duration-200 hover:text-white ${
                            // switch text color based on focus
                            isActive ? 'text-white' : 'text-white/45'
                        }`}
                        aria-label={`Show ${label.label} experience`}
                        aria-pressed={isActive}
                    >
                        <span
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{ backgroundColor: label.color }}
                        />
                        <span>{label.label}</span>
                    </button>
                    );
                })}
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-12 px-6">
                {activeCards.map((card) => {
                    const isAgrowtech = card.title === 'Agrowtech';
                    const isVideoCard = isAgrowtech || (typeof card.media === 'string' && card.media.toLowerCase().endsWith('.mp4'));
                    const isTopFocusedImage = card.title === 'AIHealth';

                    return (
                    <article key={`${activeLabel}-${card.title}-${card.section}`} className="w-full max-w-[360px]">
                        <div className="aspect-video overflow-hidden group">
                            {card.link ? (
                                <a href={card.link} target="_blank" rel="noreferrer" className="block h-full w-full">
                                    {isAgrowtech ? (
                                        <video
                                            key="agrowtech-video"
                                            src={design1}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                            onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    ) : isVideoCard ? (
                                        <video
                                            src={card.media}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    ) : (
                                        <img
                                            src={card.media}
                                            alt={card.title}
                                            className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${isTopFocusedImage ? 'object-top' : ''}`}
                                            style={isTopFocusedImage ? { objectPosition: 'center top' } : undefined}
                                        />
                                    )}
                                </a>
                            ) : (
                                <>
                                    {isAgrowtech ? (
                                        <video
                                            key="agrowtech-video"
                                            src={design1}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                            onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    ) : isVideoCard ? (
                                        <video
                                            src={card.media}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="auto"
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    ) : (
                                        <img
                                            src={card.media}
                                            alt={card.title}
                                            className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${isTopFocusedImage ? 'object-top' : ''}`}
                                            style={isTopFocusedImage ? { objectPosition: 'center top' } : undefined}
                                        />
                                    )}
                                </>
                            )}
                        </div>

                        <div className="mt-3 flex items-baseline justify-between gap-4 text-white">
                            <h3 className="text-sm font-semibold tracking-tight">{card.title}</h3>
                            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 whitespace-nowrap">
                                {card.section}
                            </span>
                        </div>
                        <p className="mt-1 text-xs text-white/65">{card.description}</p>
                    </article>
                    );
                })}
            </div>
        </section>
    );
};
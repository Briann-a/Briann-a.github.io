import { useEffect, useRef, useState } from 'react';
import cupVideo from '../assets/Cupmp42.webm';

export const About = () => {
    // references for section + cup animation
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const [isTyping, setIsTyping] = useState(false);
    const [typedText, setTypedText] = useState('');
    const scrollToExperience = () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleExperienceKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            scrollToExperience();
        }
    };

    useEffect(() => {
        if (!isTyping) {
            return undefined;
        }

        let characterIndex = 0;
        const typingTimer = window.setInterval(() => {
            characterIndex += 1;
            setTypedText('experience?'.slice(0, characterIndex));

            if (characterIndex === 'what experience?'.length) {
                window.clearInterval(typingTimer);
            }
        }, 50); //typing effect timeframe

        return () => window.clearInterval(typingTimer);
    }, [isTyping]);

    // intersection observer (enter/leave visible screen)
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.playbackRate = 1.5;
        }

        const stopBeforeEnd = () => {
            if (video.duration && video.currentTime >= video.duration - 2) {
                video.pause();
                video.currentTime = Math.max(0, video.duration - 2); //remove last 2s video
                setIsTyping(true);
            }
        };

        video?.addEventListener('timeupdate', stopBeforeEnd);

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;

                if (entry.isIntersecting) {
                    //if visible + has video, play
                    if (videoRef.current) {
                        setIsTyping(false);
                        setTypedText('');
                        videoRef.current.playbackRate = 2.4;
                        videoRef.current.currentTime=0;
                        videoRef.current.play();
                    }
                } else {
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }
            },
            {
                threshold: 0.5, //atleast 50% visible play
            }
        );

        if (sectionRef.current) { //observer watch section
            observer.observe(sectionRef.current);
        }

        return () => {
            video?.removeEventListener('timeupdate', stopBeforeEnd);
            observer.disconnect();
        };
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-22 relative overflow-hidden">
            <div className="absolute top-22 left-1/2 -translate-x-1/2 z-10 animate-fade-in whitespace-nowrap">
                <span className="text-secondary-foreground text-sm font-bold tracking-wider">
                    behind the screen.
                </span>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,0.6fr)] gap-10 items-center">
                    {/* left column */}
                    {/* title of section */}
                    <div className="space-y-8">
                        <div className="animate-fade-in invisible">
                            <span className="text-secondary-foreground text-sm font-bold tracking-wider">
                                behind the screen.
                            </span>
                        </div>

                        <h2 className="text-4xl md: text-3xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            engineering
                            <span className="font-serif italic font-normal text-white"> @ Queen's University</span>
                        </h2>

                        <div>
                            <p className="text-white">
                                {">"} <span className="font-bold italic">2026 chancellor's scholar (1 of 50 across Canada)</span>
                                <br />
                                {">"} prev @amojistudios founder, international design company {"("}shipped worldwide{")"}
                                <br />
                                {">"} designed product and content for <u>aihealth</u>, <u>DECA</u>, <u>medicine4youth</u>
                                <br />
                                {">"} expirementing building cross-device <u>desktop games</u> using ElectronJS
                                <br />
                                {">"} seeking <u>summer 2027</u> internship opportunities
                            </p>
                        </div>
                    </div>

                    {/* animation. */}
                    <div
                        className="flex justify-center lg:justify-start lg:-translate-x-4 w-full cursor-pointer transition-transform duration-200 hover:scale-[1.02] pt-14"
                        role="button"
                        tabIndex={0}
                        onClick={scrollToExperience}
                        onKeyDown={handleExperienceKeyDown}
                        aria-label="Go to experience section"
                    >
                        <video //dropshadow, w-full largest
                            ref={videoRef} muted className="w-full max-w-md rounded-xl">
                                <source src={cupVideo} type="video/webm"/>
                            </video>
                    </div>

                    <div
                        className="flex items-center justify-center lg:justify-start text-3xl font-serif italic text-white min-h-12 cursor-pointer transition-transform duration-200 hover:scale-[1.02] origin-left pt-16"
                        role="button"
                        tabIndex={0}
                        onClick={scrollToExperience}
                        onKeyDown={handleExperienceKeyDown}
                        aria-label="Go to experience"
                    >
                        {typedText}
                    </div>
                </div>
            </div>
        </section>
    );
};
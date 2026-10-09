import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project4 from "../assets/project4.png";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.mp4";
import project2 from "../assets/project2.png";
import project5 from "../assets/project5.mp4";

const projects = [
    {
        title: "frames (june '26)",
        description:
            "A universal modern photobooth-style desktop app allowing users to express themselves through custom frames. (100+ users)",
        image: project4,
        tags: ["electron", "Node.js"],
        github: "https://github.com/Briann-a/mobilePhotobooth",
    },
    {
        title: "mr. goose (june '25)",
        description:
            "A coding companion built directly into VSCode. Experience a more engaging developer environment alongside our animated goose coach. Navigate the technical learning curve with generated questions, real-time error correction, and project-specific chatbot.",
        image: project1,
        tags: ["vscode extensions", "TypeScript"],
        github: "https://github.com/Briann-a/jamhacks-2025",
    },
    {
        title: "grow your flow (jan '25)",
        description:
            "Automated virtual exercise programs and planning. It allows seniors and youth without access to classes to practice and consistently stay fit anywhere.",
        video: project3,
        tags: ["google teachable machine", "blender", "tensorflow.js"],
        link: "https://devpost.com/software/grow-your-flow",
    },
    {
        title: "nightwave (july '24)",
        description:
            "Product design for portable smart-pad using EEG sensors to personalize quality sleep. Users would have access to thermoelectric coolers, music, and full sleep data to fall asleep faster, and wake up better.",
        image: project2,
        tags: ["CAD", "Figma"],
    },
    {
        title: "amojistudios (sep '20)",
        description: "Amojistudios is a global design company built by youth for all, offering custom stickers, prints, and more. ($2500 sold)",
        video: project5,
        tags: ["etsy", "adobe tools"],
        link: "https://www.etsy.com/shop/AmojiStudios"
    },
];

export const Projects = () => {
    const [activeProject, setActiveProject] = useState(0);
    const videoRefs = useRef([]);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video && index !== activeProject) {
                video.pause();
            }
        });

        const focusedVideo = videoRefs.current[activeProject];
        if (!focusedVideo) {
            return undefined;
        }

        const playFocusedVideo = () => {
            focusedVideo.currentTime = 0;
            focusedVideo.play().catch(() => {});
        };

        if (focusedVideo.readyState >= 2) {
            playFocusedVideo();
            return undefined;
        }

        focusedVideo.addEventListener("loadeddata", playFocusedVideo, { once: true });
        return () => focusedVideo.removeEventListener("loadeddata", playFocusedVideo);
    }, [activeProject]);

    const moveProject = (direction) => {
        setActiveProject((current) => (current + direction + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="py-16 relative overflow-hidden">
            {/* bg glow */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10"></div>
            <div className="container mx-auto px-6 relative z-10"> </div>
                {/* section header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground font-bold text-sm tracking-wider animate-fade-in">
                        projects.
                    </span>
                </div>

                <div className="flex w-full max-w-6xl mx-auto items-center justify-between gap-0 px-4 sm:px-8">
                    <button
                        type="button"
                        onClick={() => moveProject(-1)}
                        className="relative z-20 shrink-0 cursor-pointer text-white transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-white"
                        aria-label="Previous project"
                    >
                        <ChevronLeft size={34} strokeWidth={1.5} />
                    </button>

                    <div className="relative w-full max-w-[440px] min-h-[390px]">
                    {projects.map((project, idx) => {
                        const offset = (idx - activeProject + projects.length) % projects.length;
                        const isActive = offset === 0;
                        const isNext = offset === 1;
                        const isPrevious = offset === projects.length - 1;
                        const translateX = isActive ? 0 : isNext ? 34 : isPrevious ? -34 : 18;
                        const rotation = isActive ? 0 : isNext ? 4 : isPrevious ? -4 : 2;
                        const scale = isActive ? 1 : 0.96;

                        const href = project.link || project.github || null;
                        const content = (
                            <div className="flex flex-col">
                                <div className="relative overflow-hidden aspect-video">
                                    {project.video ? (
                                        <video
                                            ref={(element) => {
                                                videoRefs.current[idx] = element;
                                            }}
                                            src={project.video}
                                            autoPlay={isActive}
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                </div>

                                <div className="mt-3 px-4 pb-3 text-left text-white text-xs">
                                    {project.description}
                                </div>
                                    <div className=" px-4 pb-4">
                                        <div className="flex flex-wrap gap-2 items-center">
                                            {project.tags?.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-3 py-1 rounded-full border border-white/40 text-white/80 hover:text-white hover:border-white transition-all duration-200"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                            </div>
                        );

                        // card animation slide
                        const outerProps = {
                            key: idx,
                            // card backgrounds
                            className: "group glass bg-black/10 rounded-2xl overflow-hidden absolute top-0 left-0 w-full transition-all duration-500 ease-out",
                            style: {
                                transform: `translateX(${translateX}px) rotate(${rotation}deg) scale(${scale})`,
                                zIndex: projects.length - offset,
                                opacity: offset > 1 && !isPrevious ? 0 : 1,
                                pointerEvents: isActive ? "auto" : "none",
                            },
                        };

                        return href ? (
                            <a
                                {...outerProps}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={outerProps.className + " cursor-external"}
                            >
                                {content}
                            </a>
                        ) : (
                            <div {...outerProps}>{content}</div>
                        );
                        
                    })}
                    </div>

                    <button
                        type="button"
                        onClick={() => moveProject(1)}
                        className="relative z-20 shrink-0 cursor-pointer text-white transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-white"
                        aria-label="Next project"
                    >
                        <ChevronRight size={34} strokeWidth={1.5} />
                    </button>
                </div>
        </section>
    );
};
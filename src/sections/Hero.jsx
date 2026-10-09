// first section you see -> scroll down
import githublogo from "../assets/github.png";
import linkedinlogo from "../assets/linkedin.png";
import instagramlogo from "../assets/instagram.png";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* background */}
            <div className="absolute inset-0">
                <img src="src\assets\hero-bg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-80"/>
                {/* div / = self-closing div */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"/>
            {/* gradient from bottom > from 20% opacity > 80% > full opacity */}
            </div>

            {/* content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                {/* large screen 2 col. grid*/}
                <div className="grid lg:grid-cols-2 gap-5 items-center">
                    {/* left column (text content) */}
                    <div className="space-y-4">
                        {/* space of 8 from other text below/above */}
                        <div className="animate-fade-in">
                            {/* span=no inherent style to it, good for applying style w/o side effects*/}
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-foreground"> 
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    toronto, ON
                                    {/* using self-closing span makes formatting auto, animate-pulse comes w/ tailwindcss*/}
                            </span>
                        </div>

                        {/* headline */}
                        <div className="space-y-2 mt-2">
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in animation-delay-100 flex flex-col items-start">
                                <span 
                                    className="inline-block text-primary glow-text"
                                        style={{
                                            transform: "scaleY(1.6)",
                                            transformOrigin: "center top",
                                            display: "inline-block",
                                            letterSpacing: "0.04em",
                                            marginBottom: "0.1rem"
                                        }}
                                    >
                                        BRIANNA
                                    </span>
                                <span className="font-serif italic font-normal text-white inline-block mt-2">azan.</span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 mt-4">
                                designing and building products to feel like second nature. 
                            </p>
                        </div>

                        {/* socials - github/linkedin/instagram=components*/}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">follow along:</span>
                            {/* array of objects */}
                            {[
                                {imgSrc: githublogo, alt: "github", href: "https://github.com/Briann-a"},
                                {imgSrc: linkedinlogo, alt: "linkedin", href: "https://www.linkedin.com/in/briannaazan/"},
                                {imgSrc: instagramlogo, alt: "instagram", href: "https://www.instagram.com/briann.aaa/"},
                            ].map((social, idx) => (
                                <a 
                                    key={idx}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:opacity-80 transition-all duration-300"
                                >
                                <img src={social.imgSrc} alt={social.alt} className="w-5 h-5 object-contain"/> 
                            </a>
                        ))}
                    </div>
                </div>
                {/* right column (profile image) */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* profile image */}
                    <div className="relative max-w-md mx-auto">
                        {/* ^^screen width container */}
                        <div
                            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            {/* ^^outer card container */}
                            <img 
                                src="src\assets\profile-photo.jpg" 
                                alt="brianna azan" 
                                className="w-full aspect-[4/5] object-cover rounded-2xl"
                            />

                            {/* stats */}
                            <div className="absolute top-6 -left-7 glass rounded-3xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-md font-bold text-muted-foreground">•   •   •</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};
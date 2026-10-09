import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
    // #=where it takes you to based on which section has that id
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
    {href: "#testimonials", label: "Testimonials"},
    {href: "#contact", label: "Contact"},
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //only show if mobile menu open is true
    const [isScrolled, setIsScrolled] = useState(false);

    // runs when components first render -> listens to if user scrolls mouse
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll);
        // removes event listener when not above 50/scrolled away from nav bar
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        // z-50 stacking order ontop of dots, ` ` = dynamic, 1st after ?=yes scrolled, 2nd=no scrolled
        <header 
            className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
                isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
            } z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary"> 
                    {/* tight letter spacing, right-0 left-0 for full width start to end */}
                    BA<span className="text-primary-foreground">.</span> 
                </a>

                {/* Desktop Nav elements*/}
                <div className="hidden md:flex items-center gap-1">
                {/* hidden=nav hide, md:flex=show on med screen+ */}
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                    {/* padding x 2 padding y 1 flex=expands evenly*/}
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-full hover:bg-surface">
                            {/* text-sm=small text, bg-surface=unique background rounded for each text when hover */}
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA button lead to contect sec.*/}
                <div className="hidden md:block">
                    <Button size="sm">contact!</Button>
                </div>

                {/* Mobile menu button (only for small screens) */}
                <button 
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile menu*/}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {/* flex-col=stack ontop of each other */}
                    {navLinks.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            onClick={() => setIsMobileMenuOpen(false)}
                                // ^^closes navbar auto when any link/section clicked
                            className="text-lg text-muted-foreground hover:text-foreground py-2"
                        >
                            {link.label}
                        </a>
                    ))}

                    <Button onClick={() => setIsMobileMenuOpen(false)}>Contact me</Button>
                </div>
            </div>
            )}
        </header>
    );
};
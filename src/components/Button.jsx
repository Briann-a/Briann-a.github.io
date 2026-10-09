export const Button = ({ className = "", size="default", children }) => {
    const baseClasses = 
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";
    // ring=border outline, hover 90% opacity, no outline when focus
    //applies to every button

    const sizeClasses = {
        //if want small button, size=sm
        //medium, size=default
        //large, size=lg
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
    //!!not regular apostrophes, backticks for template literals, ${} for variables
    return (
        <button className={classes}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
};
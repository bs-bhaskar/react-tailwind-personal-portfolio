

export const Button=({className="",size="default",children, ...props})=>{
    const baseClasses="relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[#20b2a6e6] shadow-lg shadow-[0_4px_10px_#20b2a640]"
    const sizeClasses={
        sm:"px-4 py-2 text-sm",
        default:"px-6 py-3 text-base",
        lg:"px-8 py-4 text-lg",
    }
    const classes=`${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${className}`;
    return(
        <button className={classes} {...props}>
            <span className="relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    )
}
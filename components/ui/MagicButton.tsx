
type MagicButtonVariantType = "primary" | "outline";

interface MagicButtonProps {
    title: string;
    icon?: React.ReactNode;
    position?: 'left' | 'right';
    handleClick?: () => void;
    otherClasses?: string;
    variant?: MagicButtonVariantType
}

const MagicButton = ({ title, icon, position, handleClick, otherClasses, variant = "primary" }: MagicButtonProps) => {
    return (
        <button className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-px focus:outline-none md:w-60 md:mt-6">
            {variant == "primary" && (
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            )}
            {variant == "outline" && (
                <span className="absolute inset-0 rounded-lg bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-70 transition-opacity group-hover:opacity-100" />
            )}
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton
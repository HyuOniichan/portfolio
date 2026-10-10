import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[12rem] md:auto-rows-[4rem] lg:auto-rows-[8rem]",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    id,
    title,
    description,
    img,
    link,
    icon,
    className,
}: {
    id: number;
    title: string;
    description?: string | React.ReactNode;
    img?: string;
    link?: string;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    titleClassName?: string;
}) => {
    return (
        <div
            className={cn(
                "group/bento relative shadow-input row-span-2 flex flex-col justify-between space-y-4 rounded-2xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-blue-400/50 dark:bg-black dark:shadow-none",
                className,
            )}
        >
            {/* {header} */}
            <div className={`${id == 1 && 'flex justify-center h-full'}`}>
                <div className="w-full h-full absolute">
                    {img && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={img}
                            alt={title || "Project's thumbnail"}
                            className={`${id == 1 ? 'md:h-[80%] lg:h-[75%]' : 'md:h-[70%] lg:h-[65%]'} h-[70%] object-cover rounded-t-2xl w-full`}
                        />
                    )}
                </div>
            </div>
            <div className="transition duration-200 group-hover/bento:translate-x-2 p-4">
                <Link
                    href={link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {icon}
                    {/* Make the first item larger */}
                    <div className={`text-lg font-sans font-bold text-neutral-600 dark:text-neutral-200 ${id == 1 && 'md:text-2xl lg:text-4xl md:mb-1 lg:mb-2'}`}>
                        {title}
                    </div>
                    <div className={`text-sm font-sans font-normal text-neutral-600 dark:text-neutral-300 ${id == 1 && 'md:text-md lg:text-xl'}`}>
                        {description}
                    </div>
                </Link>
            </div>
        </div>
    );
};

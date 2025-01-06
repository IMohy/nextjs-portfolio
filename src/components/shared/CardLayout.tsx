import React, { ReactNode } from "react";

type CardLayoutProps = {
    children: ReactNode;
    href?: string;
    className?: string;
};
const CardLayout: React.FC<CardLayoutProps> = ({ children, href, className = "h-full w-full" }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`${className} boxShodow hover:transition-all !duration-200 hover:scale-[1.01] ease-linear rounded-xl`}
        >
            {children}
        </a>
    );
};

export default CardLayout;

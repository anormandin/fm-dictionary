import React from 'react';
import './designSystem.scss';

interface SubsectionProperties {
    className?:string;
    title:string;
    children?:React.ReactNode;
}

function Subsection({className, title, children}: SubsectionProperties) {
    return (
        <div className={`container ${className}`}>
            <h2 className="heading-m text-accent">{title}</h2>
            {children}
        </div>
    );
}

export default Subsection;
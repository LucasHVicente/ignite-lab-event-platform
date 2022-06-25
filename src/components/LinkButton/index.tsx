import classNames from "classnames";
import { ReactNode } from "react";
import './styles.css'

interface LinkButtonProps {
    href: string,
    children: ReactNode,
    buttonType?: 'primary' | 'secondary',
}

export function LinkButton(props:LinkButtonProps){
    const { href, children, buttonType = 'primary' } = props;

    return(
        <a href={href} className={`${buttonType}-button`}>
            {children}
        </a>
    )
}
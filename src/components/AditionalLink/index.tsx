import { CaretRight } from "phosphor-react";
import './styles.css'

export function AditionalLink(props:any){
    const { icon, href, title, text } = props;
    return (
        <a 
            href={href}
            className="video-aditional-link"
        >
            <div className="aditional-link-icon">
                {icon}
            </div>
            <div className="aditional-link-info">
                <strong className="link-title">
                    {title}
                </strong>
                <p className="link-text">
                    {text}
                </p>
            </div>
            <div className="aditional-link-arrow">
                <CaretRight size={24}/>
            </div>
        </a>
    )
}
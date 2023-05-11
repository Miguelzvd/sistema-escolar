import style from './style.module.css'
import { Link as LinkItem } from "react-router-dom"
interface linkProps{
    link:string;
    text:string;
}

export function Link({text, link}:linkProps){
    return(
        <LinkItem to={link} className={style['nav-item']}>{text}</LinkItem>
    );
}
import style from './style.module.css'

interface linkProps{
    link:string;
}

export function Link({link}:linkProps){
    return(
        <a href="" className={style['nav-item']}>{link}</a>
    );
}
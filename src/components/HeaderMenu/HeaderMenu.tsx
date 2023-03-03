import style from './HeaderMenu.module.css'

export const HeaderMenu = () => {
    return (
        <div className={style.HeaderLinks}>
            <a href="#">Home </a>
            <a href="#">News</a>
            <a href="#">Messages </a>
        </div>
    )
}
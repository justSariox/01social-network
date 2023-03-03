import style from './SearchPanel.module.css'

export const SearchPanel = () => {
    return (
        <div className={style.HeaderSearch}>
            <img className={style.SearchLogo} src="https://avatars.githubusercontent.com/u/36278390?s=64&v=4" alt="search"/>
            <input className={style.SearchInput} type="text" placeholder={'Search'}/>
        </div>
    )
}
import './styles.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className="header__container">
                <div>
                    <a href="/task-board" className="header__logo">Logo</a>
                </div>
                <div className='header__nav'>
                    <a href="/task-board" className="header__link">Task Board</a>
                    <a href="/task-board" className="header__link">Job Listings</a>
                </div>
            </div>
        </div>
    )
}

export default Header
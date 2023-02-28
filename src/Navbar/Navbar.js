import "./navbar.scss";
import "./responsive_nav.scss";

export function Navbar() {
    return (
        <>
        <div className="header">
            <p>Give the new way of learning to your career</p>
        </div>
        <div className='navbar'>
            <div className='logo'>
                <img src="./images/main-logo.png" alt="website logo" class="main-logo"/>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Course  <i class="fa-solid fa-caret-down"></i></a>
                        <div className="other-navlinks">
                            <div>
                                <a href="/">HTML5</a>
                                <a href="/">CSS3</a>
                                <a href="/">Java Script</a>
                                <a href="/">JQurey</a>
                            </div>
                            <div>
                                <a href="/">Bootstrap</a>
                                <a href="/">SASS</a>
                                <a href="/">React Js</a>
                                <a href="/">Node Js</a>
                            </div>
                            <div>
                                <a href="/">Express.Js</a>
                                <a href="/">MongoDB</a>
                                <a href="/">PHP</a>
                                <a href="/">SQL</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="/">Tools</a></li>
                    <li><a href="/">Blogs</a></li>
                    <li><a href="/">Shopping</a></li>
                    <li><a href="/">Hire Us <i class="fa-solid fa-caret-down"></i></a>
                        <div className="other-navlinks">
                            <div>
                                <a href="/">App Developer</a>
                                <a href="/">Web Designer</a>
                                <a href="/">Ui/Ux Designer</a>
                            </div>
                            <div>
                                <a href="/">Graphic Designer</a>
                                <a href="/">Backend Developer</a>
                                <a href="/">Full Stack Developer</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className='contact-btn'>
                    <a href="/">Contact-us</a>
                </div>
            </div>
        </div>
        </>
    )
}
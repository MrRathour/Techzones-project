import './form.scss';

export function Form() {
    return (
        <div className='getting-help'>
            <div className="get-help">
                <h2>If you have any porject or need help. Contact Us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                    emndustry lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown print only five centuries,
                    but also the leap into electronic.</p>
            </div>
            <div className="contact-form">
                <form action="#" method="get">
                    <input type="text" placeholder="Name" className="name input" />
                    <input type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        className="email input" required /><br/>
                        <input type="tel" placeholder="Phone" pattern="[0-9]{10}" title="Ten digits code" required
                            className="phone input" />
                        <input type="text" placeholder="Subject" className="subject input" /><br />
                        <textarea className="comment" cols="30" rows="10" placeholder="Comment"></textarea>
                        <input type="submit" value="Submit  Message" className="btn input" />
                </form>
            </div>
        </div>
    )
}
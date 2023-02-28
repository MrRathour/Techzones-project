import "./firstsection.scss";

export function Firstsection() {
    return (
        <>
            <div class="slider">
                <div className="content">
                    <div className="first">
                        <h1>Find The Best Online Course & Learn</h1>
                        <p>Education is a never-ending source of knowledge.</p>
                        <a href="/" className="btn free-btn">Free Course</a>
                        <a href="/" className="btn paid-btn">Paid Course</a>
                    </div>
                    <div className="second">
                        <div className="msg1 msg">Huge Collection Of Study Material</div>
                        <div className="msg2 msg">Best Way To Learn Technologhy</div>
                        <img src="./images/sitgirl.png" alt="sit-Avatar" className="sitgirl"/>
                    </div>
                </div>
            </div>
        </>
    )
}
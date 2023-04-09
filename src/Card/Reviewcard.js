import "./reviewcard.scss";

export function Reviewcard(props) {
    return (
        props.data.map((val, index) => {
            return (
                <div key={index} className="card">
                    <p>{val.review}</p>
                    <div className="profile">
                        <div className="pic">
                            <img src={val.img} alt="image" />
                        </div>
                        <div className="introduce">
                            <h3>{val.name}</h3>
                            <p>{val.place}</p>
                        </div>
                    </div>
                    <img src={val.arrow} className="arrow" alt="arrow" />
                </div>
            )
        })
    )
}


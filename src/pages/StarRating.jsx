import StarRaingHandel from "./StarRaingHandel";


const StarRating = (totalStar) => {
    const {
        stars,
        hoverd,
        rated,
        handleSetHovered,
        handleSetRated,
        handleReset
    } = StarRaingHandel(totalStar);

    return (
        <>
            <div className="star-container">
                <div>
                    {[...Array(stars)].map((each, i) => (
                        <span
                            key={i}
                            onMouseOver={() => {
                                handleSetHovered(i);
                            }}
                            onMouseOut={() => {
                                handleSetHovered(rated);
                            }}
                            onClick={() => {
                                handleSetRated(i);
                            }}
                            className={i <= hoverd ? "hovered" : ""}
                        >
                            ★
                        </span>
                    ))}
                </div>
                <button className="btn btn-sm btn-info" onClick={() => handleReset()}>Reset Rating</button>
            </div>
        </>
    )

}

export default StarRating

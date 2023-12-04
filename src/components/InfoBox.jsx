
import React from 'react';

const InfoBox = ({title, lines}) => {
    return(
        <div className = "index-infoboxes-box">
            <section>
                <div className = "index-infoboxes-insidebox">
                    <h1>{title}</h1>
                    {lines.map((line, index) => (
                        <p key={index}>{line}</p> // key helps React identify which items have changed, are added, or are removed.
                    ))}
                </div>
            </section>
        </div>

    );
}

export default InfoBox
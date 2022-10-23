import React from "react";
import icons from "glyphicons";


const Page = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();

    }
    const handleNext = () => {
        onNext();
    }



    return (
        <nav>
            <ul className="pagination justify-content-center">
                {prev ? (
                    <li className="page-item">
                        <button onClick={handlePrevious}>{icons.arrowL}</button>
                    </li>) : null}
                    {next ? (
                    <li className="page-item">
                        <button onClick={handleNext}> {icons.arrowR}</button>
                    </li>): null}
            </ul>

        </nav>)
}

export default Page
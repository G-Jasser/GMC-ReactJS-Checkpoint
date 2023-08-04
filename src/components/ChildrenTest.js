import { useEffect, useState } from "react";


function useDate(dateUpdateInterval, getDate) {
    const [date, setDate] = useState(getDate);
    useEffect(() => {
        const intervalID = setInterval(() => setDate(getDate()), dateUpdateInterval);
        return function () {
            clearInterval(intervalID);
        }
    }, []
    );
    return date;
}
const getCurrentDate = () => new Date();

const ChildrenTest = () => {

    const clock = useDate(1000, getCurrentDate);
    return (
        <p>We are at {clock.toLocaleString("fr-FR")}</p>
    )
}

export default ChildrenTest
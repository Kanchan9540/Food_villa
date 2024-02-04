import { useRouteError } from "react-router-dom";   // its give the information about the error or give the more information anout thr error.

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOps!!!!!</h1>
            <h2>Something went wrong!!!!!</h2>
            <h2> {err.status + " : " + err.statusText}</h2>
        </div>
    );
};

export default Error;
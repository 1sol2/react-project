import {Link} from "react-router-dom";

function Main() {

    return (

        <Link to="/animal">
            <div className="content-row">
                <h1>동물보호센터</h1>
            </div>
        </Link>
    )
}

export default Main;
import {Link} from "react-router-dom"

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand" style={{ backgroundColor: "#51bb8a" }}>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Taskify</Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/tasks" class="nav-link active" aria-current="page" >TaskList</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to= "/create-task">CreateTask</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )
}

export default NavBar
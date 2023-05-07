import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>

            <nav className="navbar navbar-expand-lg " style={{ "background-color": "rgb(78 78 78)" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="" style={{ color: "white" }} onClick={() => { navigate("/") }}>Harry Potter</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" style={{ color: "white" }} href="#">Page 1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white" }} href="">Page 2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white" }} href="">Page 3</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar
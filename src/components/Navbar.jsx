import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect } from "react";

export const NavigationBar = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [show]);

    const handleClickAway = () => {
        if (show) {
            setShow(false)
        } 
    }

    return(
        <>
            <div className="py-4 py-lg-5 position-relative">
                <div onClick={handleClickAway} className="position-fixed w-100 bg-transparent" style={{ inset: "0", zIndex: show ? "999" : "-1" }}>
                    <h1></h1>
                </div>
                <div className="container py-1 px-3 justify-content-lg-start w-100">
                    <div className="d-flex justify-content-between justify-content-lg-start position-relative">
                        <a className="navbar-brand" href="#">
                                <img src="/logo.svg" alt="Logo" className="d-inline-block align-text-top" />
                        </a>
                        <button className="bg-transparent d-lg-none p-0 border-0" >
                            <AiOutlineMenu onClick={() => setShow(prev => !prev)} size={"2rem"} color="hsl(0, 0%, 75%)" />
                        </button>
                        <div className={`${show ? "d-block" : "d-none"} bg-navbar py-lg-0 py-5 px-3 px-lg-0 w-100 d-lg-flex p-fixed rounded-3 text-light`}>
                            <div className="text-center text-lg-start ms-lg-5">
                                <h6 className="fw-700 d-lg-inline mb-4 mb-lg-0 font-navbar">Features</h6>
                                <h6 className="fw-700 d-lg-inline mb-4 mb-lg-0 ms-lg-4 font-navbar">Pricing</h6>
                                <h6 className="fw-700 d-lg-inline mb-4 mb-lg-0 ms-lg-4 font-navbar">Resources</h6>
                            </div>
                            <h6 className="w-100 bg-secondary d-lg-none" style={{ height: "1px"}}>

                            </h6>
                            <div className="text-center text-lg-start ms-auto pt-lg-0 pt-4">
                                <h6 className="fw-700 d-lg-inline mb-4 mb-lg-0 font-navbar">Login</h6>
                                <div className="bg-cyan mx-auto d-lg-inline text-light fw-700 ms-lg-4 py-2 px-lg-4 rounded-5 w-100">SignUp</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
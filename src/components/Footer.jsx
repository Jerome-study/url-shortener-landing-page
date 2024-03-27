export const Footer = () => {
    return(
        <>
            <div className="py-5 bg-very-dark-violet">
                <div className="container">
                    <div className="row">
                        <div className="text-center text-lg-start mb-5 col-12 col-lg-4">
                            <img src="/footer-logo.svg" alt="footer logo" />
                        </div>
                        <div className="text-center text-lg-start col-12 col-lg-8 d-lg-flex justify-content-lg-between">
                            <div className="text-light mb-5">
                                <h6 className="mb-4">Features</h6>
                                <div className="fc-gray">
                                    <p>Link Shortening</p>
                                    <p>Branded Links</p>
                                    <p>Analytics</p>
                                </div>
                            </div>
                            <div className="text-light mb-5">
                                <h6 className="mb-4">Resources</h6>
                                <div className="fc-gray">
                                    <p>Blog</p>
                                    <p>Developers</p>
                                    <p>Support</p>
                                </div>
                            </div>
                            <div className="text-light">
                                <h6 className="mb-4">Company</h6>
                                <div className="fc-gray">
                                    <p>About</p>
                                    <p>Our Team</p>
                                    <p>Careers</p>
                                    <p>Contact</p>
                                </div>
                            </div>
                            <div className="">
                                <span className="me-4">
                                    <img src="/icon-facebook.svg" alt="" />
                                </span>
                                <span className="me-4">
                                    <img src="/icon-twitter.svg" alt="" />
                                </span>
                                <span className="me-4">
                                    <img src="/icon-pinterest.svg" alt="" />
                                </span>
                                <span>
                                    <img src="/icon-instagram.svg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}
export const Hero = () => {
    return(
        <div style={{ marginBottom: "8.4rem"}}>
            <div className="container px-3">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 order-lg-2">
                        <img className="d-xl-none ms-3 ms-lg-5 ps-lg-5" style={{ maxWidth: "27rem"}} src="/illustration-working.svg" alt="illustration" />
                        <img className="d-none d-xl-block ps-lg-5" style={{ marginLeft: "5rem", maxWidth: "50rem"}} src="/illustration-working.svg" alt="illustration" />
                    </div>
                    <div className="text-center text-lg-start py-5 col-12 col-lg-6">
                        <h1 className="display-3 fw-bold">More than just shorter links</h1>
                        <h5 className="py-2 font-color-cyan fw-500 hero-details mb-xl-4">Build your brand's recognition and get detailed insigths on how your links are performing.</h5>
                        <div className="bg-cyan mx-auto mx-lg-0 text-light fw-700 py-3 py-lg-2 rounded-5 text-center" style={{ maxWidth: "11rem"}}>Get Started</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const LinkShorter = () => {{
    
    return(
        <div className="px-2" style={{ top: "0", marginTop: "-6rem", marginBottom: "4rem"}}>
            <div className="container">
                <div className="p-4 p-lg-0 gx-0 py-lg-4 px-lg-2 bg-dark-violet rounded-3 link-shorter-bg" >
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-9">
                            <input className="w-100 form-control p-2 text-danger mb-3 col-12 p-lg-0 px-lg-4 py-lg-3" placeholder="Shorten a link here..."/>
                        </div>
                        <div className="col-12 col-lg-2">
                            <div className="bg-cyan text-center py-2 py-lg-3 rounded-3 text-light fw-700">Shorten it!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}}
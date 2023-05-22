const HeroImage = () => {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                    <div className="col-10 col-sm-8 col-lg-6">
                        <div className="container px-5">
                            <img src="https://shreethemes.in/landrick/landing/assets/images/illustrator/working_with_computer.svg" className="img-fluid" alt="VPROHero" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">VPRO</h1>
                        <p className="col-lg-10 fs-4">”A good programmer is someone who always looks both ways before crossing a one-way street.” – Doug Linder2</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default HeroImage

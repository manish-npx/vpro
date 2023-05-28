import React from 'react'
import LineChart from '../components/LineChart'

function About() {
    return (
        <>
            {/*  <LineChart /> */}

            <section className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="position-relative">
                                <img src="https://shreethemes.in/landrick/landing/assets/images/company/about.jpg" className="rounded img-fluid mx-auto d-block" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="section-title ms-lg-4">
                                <h4 className="title mb-4">Our Story</h4>
                                <p className="text-muted">Start working with <span className="text-primary fw-bold">&VPRO</span> that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                                <a href="javascript:void(0)" className="btn btn-primary mt-3">View More <i className="uil uil-angle-right-b"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
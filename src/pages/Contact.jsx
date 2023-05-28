import React from 'react'

const Contact = () => {
    return (
        <React.Fragment>
            <section className="section pb-0">
                <div className="row align-items-center">
                    <div className='col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1'>
                        <div className="row align-items-center">
                            <div className="col-lg-6 offset-lg-6 col-md-7 offset-md-5">
                                <div className="title-heading mt-5 pt-4">
                                    <h1 className="heading">Let's talk about your portfolio</h1>
                                    <p className="text-dark">Start working with <span className="text-primary fw-bold">&VPRO</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                                    <div className="d-flex contact-detail align-items-center mt-3">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail fea icon-m-md text-dark me-3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </div>
                                        <div className="flex-1 content">
                                            <h5 className="title fw-bold mb-0">Email</h5>
                                            <a href="mailto:contact@example.com" className="text-primary">contact@example.com</a>
                                        </div>
                                    </div>

                                    <div className="d-flex contact-detail align-items-center mt-3">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone fea icon-m-md text-dark me-3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                        <div className="flex-1 content">
                                            <h5 className="title fw-bold mb-0">Phone</h5>
                                            <a href="tel:+152534-468-854" className="text-primary">+152 534-468-854</a>
                                        </div>
                                    </div>

                                    <div className="d-flex contact-detail align-items-center mt-3">
                                        <div className="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin fea icon-m-md text-dark me-3"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        </div>
                                        <div className="flex-1 content">
                                            <h5 className="title fw-bold mb-0">Location</h5>
                                            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" data-type="iframe" className="video-play-icon text-primary lightbox">View on Google map</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 order-1 order-md-2">
                        <div className="card border-0">
                            <div className="card-body p-0">
                                <img src="https://shreethemes.in/landrick/landing/assets/images/contact.svg" height={400} width={550} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment >
    )
}

export default Contact
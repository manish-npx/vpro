import { Link } from "react-router-dom";
import book from "../assets/images/book/book.png";

const HeroImage = () => {
    return (
        <>
            <section className="bg-half-170 d-table w-100 bg-light">
                <div className="container">

                    <div className="row mt-5 mt-sm-0 align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="title-heading me-lg-4">
                                <h4 className="display-4 fw-bold mb-3"> The Most <br /> Comprehensive <br /> Book! </h4>
                                <p className="text-muted para-desc mb-0">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                <div className="mt-4 pt-2">
                                    <Link to="#!" className="btn btn-soft-primary m-1">Buy Now @ $18</Link>
                                    <Link to="#!" data-type="youtube" data-id="yba7hPeTSjk" className="btn btn-icon btn-pills btn-soft-primary m-1 lightbox">
                                        <i data-feather="video" className="icons"></i>
                                    </Link><span className="fw-bold text-uppercase small align-middle ms-1">Watch Now</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <div className="bg-white p-5 rounded-md">
                                <img src={book} className="img-fluid mx-auto d-block" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default HeroImage

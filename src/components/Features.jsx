import FeatureCarousel from './FeatureCarousel';


const Features = () => {



    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row justify-content-center">

                    </div>
                </div>
            </section>
            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2 border-bottom">Features</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

                    <FeatureCarousel />
                    <FeatureCarousel />
                    <FeatureCarousel />

                </div>
            </div>

        </>
    )
}

export default Features;
import { FaBookOpen, FaMugHot } from "react-icons/fa"

export const HeroSection = ({ handleOrder }) => {
    return (
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 coffee-cream">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold title-font text-coffee mb-6">
                        Crafted Coffee, <span className="text-beige">Perfected</span> Experience
                    </h1>
                    <p className="text-lg text-coffee mb-8">
                        Discover the art of coffee at Brewwise. Each cup is a journey of flavors, carefully brewed to perfection.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            onClick={() => handleOrder()}
                            className="coffee-brown text-cream px-6 py-3 rounded-full hover:bg-opacity-90 transition flex items-center justify-center"
                        >
                            <FaMugHot className="mr-2" /> Order Now
                        </button>
                        <a
                            href="#menu"
                            className="border-2 border-coffee text-coffee px-6 py-3 rounded-full hover:bg-coffee hover:text-cream transition flex items-center justify-center"
                        >
                            <FaBookOpen className="mr-2" /> See Menu
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2" data-aos="fade-left">
                    <img
                        src="https://images.unsplash.com/photo-1701256407204-2e48db2d31ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMHBob3RvfGVufDB8fDB8fHww"
                        alt="Premium Coffee"
                        className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
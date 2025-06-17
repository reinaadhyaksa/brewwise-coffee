import { FaStore } from "react-icons/fa";
import { features } from "../data";

export const AboutSection = () => {
    return (
        <section id="about" className="py-16 coffee-cream">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold title-font text-coffee mb-4">
                        Our <span className="text-beige">Coffee</span> Story
                    </h2>
                    <p className="text-lg text-coffee max-w-2xl mx-auto">
                        From bean to cup, our journey is filled with passion and dedication.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10" data-aos="fade-right">
                        <img
                            src="https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                            alt="Coffee Beans"
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2" data-aos="fade-left">
                        <h3 className="text-2xl font-bold title-font text-coffee mb-4">The Brewwise Philosophy</h3>
                        <p className="text-coffee mb-6">
                            At Brewwise Coffee, we believe that great coffee starts with exceptional beans. We source our beans directly from ethical farmers who share our commitment to quality and sustainability.
                        </p>
                        <div className="space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    {feature.icon}
                                    <div>
                                        <h4 className="font-bold text-coffee">{feature.title}</h4>
                                        <p className="text-coffee">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className="mt-6 inline-block coffee-brown text-cream px-6 py-3 rounded-full hover:bg-opacity-90 transition"
                        >
                            <FaStore className="inline mr-2" /> Visit Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
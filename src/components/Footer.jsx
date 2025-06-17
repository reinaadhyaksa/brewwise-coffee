import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { SiVisa, SiMastercard, SiPaypal } from "react-icons/si";

export const FooterSection = ({ handleOrder }) => {
    return (
        <footer className="coffee-brown text-cream py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <a href="#" className="text-cream title-font text-2xl font-bold mb-4 inline-block">
                            Brewwise <span className="text-beige">Coffee</span>
                        </a>
                        <p className="max-w-xs text-beige">
                            Crafting exceptional coffee experiences since 2015. Quality, passion, and community in every cup.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-bold text-xl text-beige mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#home" className="hover:text-beige transition">Home</a></li>
                                <li><a href="#menu" className="hover:text-beige transition">Menu</a></li>
                                <li><a href="#about" className="hover:text-beige transition">About</a></li>
                                <li><a href="#testimonials" className="hover:text-beige transition">Testimonials</a></li>
                                <li><a href="#contact" className="hover:text-beige transition">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-beige mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <FaMapMarkerAlt className="mt-1 mr-3 text-beige" />
                                    <span>123 Coffee Street, Brew City</span>
                                </li>
                                <li className="flex items-start">
                                    <FaPhoneAlt className="mt-1 mr-3 text-beige" />
                                    <span>(123) 456-7890</span>
                                </li>
                                <li className="flex items-start">
                                    <FaPaperPlane className="mt-1 mr-3 text-beige" />
                                    <span>hello@brewwise.coffee</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-xl text-beige mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-cream hover:text-beige transition">
                                    <FiFacebook className="text-xl" />
                                </a>
                                <a href="#" className="text-cream hover:text-beige transition">
                                    <FiInstagram className="text-xl" />
                                </a>
                                <a href="#" className="text-cream hover:text-beige transition">
                                    <FiTwitter className="text-xl" />
                                </a>
                                <button
                                    onClick={() => handleOrder()}
                                    className="text-cream hover:text-beige transition"
                                >
                                    <FaWhatsapp className="text-xl" />
                                </button>
                            </div>

                            <h3 className="font-bold text-xl text-beige mt-6 mb-4">Payment Methods</h3>
                            <div className="flex space-x-3">
                                <SiVisa className="text-2xl" />
                                <SiMastercard className="text-2xl" />
                                <SiPaypal className="text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-beige border-opacity-30 mt-12 pt-8 text-center text-beige">
                    <p>&copy; {new Date().getFullYear()} Brewwise Coffee. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
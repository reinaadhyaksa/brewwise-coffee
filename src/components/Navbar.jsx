import { FaBars, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Navbar = ({ handleOrder, setMobileMenuOpen }) => {
    return (
        <nav className="coffee-brown fixed w-full z-50 shadow-md">
            <div className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <a href="#" className="text-cream title-font text-2xl font-bold">
                            Brewwise <span className="text-beige">Coffee</span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-cream hover:text-beige transition">Home</a>
                        <a href="#menu" className="text-cream hover:text-beige transition">Menu</a>
                        <a href="#about" className="text-cream hover:text-beige transition">About</a>
                        <a href="#testimonials" className="text-cream hover:text-beige transition">Testimonials</a>
                        <a href="#contact" className="text-cream hover:text-beige transition">Contact</a>
                        <button
                            onClick={() => handleOrder()}
                            className="bg-beige text-coffee px-4 py-2 rounded-full hover:bg-cream transition flex items-center"
                        >
                            <FaWhatsapp className="mr-2" /> Order Now
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="text-cream focus:outline-none"
                        >
                            <FaBars className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export const NavbarMobile = ({ setMobileMenuOpen, handleOrder, mobileMenuOpen }) => {
    return (
        <>
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 md:hidden">
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-3xl hover:text-gray-300 transition"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-xl hover:text-gray-300 transition"
            >
              Home
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-xl hover:text-gray-300 transition"
            >
              Menu
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-xl hover:text-gray-300 transition"
            >
              About
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-xl hover:text-gray-300 transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-xl hover:text-gray-300 transition"
            >
              Contact
            </a>
            <button
              onClick={() => {
                handleOrder();
                setMobileMenuOpen(false);
              }}
              className="bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-200 transition flex items-center text-xl"
            >
              <FaWhatsapp className="mr-2" /> Order Now
            </button>
          </div>
        </div>
        <style jsx global>
          {`
            body {
                    overflow: ${mobileMenuOpen ? 'hidden' : 'auto'};
                  }
          `}
        </style>
        </>
    )
}
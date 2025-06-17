import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 coffee-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold title-font text-coffee mb-4">
            Visit <span className="text-beige">Our</span> Cafe
          </h2>
          <p className="text-lg text-coffee max-w-2xl mx-auto">
            We'd love to see you at our cozy coffee spot in the heart of the city.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10" data-aos="fade-right">
            <div className="bg-white rounded-lg shadow-xl p-6 h-full">
              <h3 className="text-2xl font-bold title-font text-coffee mb-6">Location & Hours</h3>

              <div className="flex items-start mb-6">
                <FaMapMarkerAlt className="text-beige text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-coffee mb-1">Address</h4>
                  <p className="text-coffee">123 Coffee Street, Java District<br />Brew City, BC 12345</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <FaClock className="text-beige text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-coffee mb-1">Opening Hours</h4>
                  <p className="text-coffee">
                    Monday - Friday: 7:00 AM - 8:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <FaPhoneAlt className="text-beige text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-coffee mb-1">Contact</h4>
                  <p className="text-coffee">
                    Phone: (123) 456-7890<br />
                    Email: hello@brewwise.coffee
                  </p>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a href="#" className="text-coffee hover:text-beige transition">
                  <FiFacebook className="text-2xl" />
                </a>
                <a href="#" className="text-coffee hover:text-beige transition">
                  <FiInstagram className="text-2xl" />
                </a>
                <a href="#" className="text-coffee hover:text-beige transition">
                  <FiTwitter className="text-2xl" />
                </a>
                <a
                  href="https://wa.me/6282313931717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coffee hover:text-beige transition"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.923110198012!2d107.6089753152944!3d-6.897780769332023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64a3a11b0ab%3A0x1b2a3e5b1a0b5b1!2sBandung%20City%20Hall!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
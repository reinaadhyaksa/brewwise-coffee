import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export const NewsletterSection = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Thank you for subscribing with ${email}!`)
        setEmail('')
    }

    return (
        <section className="py-16 coffee-brown">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-bold title-font text-cream mb-4">
                        Join Our <span className="text-beige">Coffee</span> Community
                    </h2>
                    <p className="text-lg text-beige mb-8">
                        Subscribe to our newsletter for exclusive offers, brewing tips, and the latest updates.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-grow px-4 py-3 rounded-full focus:outline-none text-coffee"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-coffee px-6 py-3 rounded-full hover:bg-cream transition font-medium flex items-center justify-center gap-2"
                        >
                            <span>Subscribe</span>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}  
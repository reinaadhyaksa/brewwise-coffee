import { testimonials } from "../data"

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 coffee-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold title-font text-coffee mb-4">
            What Our <span className="text-cream">Customers</span> Say
          </h2>
          <p className="text-lg text-coffee max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-coffee">{testimonial.name}</h4>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(testimonial.rating) ? (
                          <span>★</span>
                        ) : i < testimonial.rating ? (
                          <span>½</span>
                        ) : (
                          <span>☆</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-coffee">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
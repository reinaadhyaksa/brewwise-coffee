import { FaShoppingCart } from "react-icons/fa"
import { menuItems } from "../data"

export const MenuSection = ({ handleOrder }) => {
  return (
    <section id="menu" className="py-16 coffee-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold title-font text-coffee mb-4">
            Our <span className="text-cream">Special</span> Menu
          </h2>
          <p className="text-lg text-coffee max-w-2xl mx-auto">
            Explore our carefully curated selection of coffee, tea, and pastries that will delight your senses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold title-font text-coffee">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map(item => (
                    <li key={item.name} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleOrder(category.title.toLowerCase())}
                  className="mt-4 inline-block coffee-brown text-cream px-4 py-2 rounded-full hover:bg-opacity-90 transition"
                >
                  <FaShoppingCart className="inline mr-2" /> Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
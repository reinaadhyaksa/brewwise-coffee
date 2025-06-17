import { FaMugHot, FaLeaf, FaBirthdayCake, FaSeedling, FaFire, FaHeart } from "react-icons/fa"

export const menuItems = [
    {
        title: "Coffee Selection",
        icon: <FaMugHot className="text-2xl text-coffee mr-3" />,
        image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        items: [
            { name: "Espresso", price: "IDR 25K" },
            { name: "Americano", price: "IDR 28K" },
            { name: "Cappuccino", price: "IDR 32K" },
            { name: "Latte", price: "IDR 35K" },
            { name: "Cold Brew", price: "IDR 38K" }
        ]
    },
    {
        title: "Tea Selection",
        icon: <FaLeaf className="text-2xl text-green-600 mr-3" />,
        image: "https://images.unsplash.com/photo-1589009649715-641c60b982ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGVhJTIwU2VsZWN0aW9ufGVufDB8fDB8fHww",
        items: [
            { name: "Earl Grey", price: "IDR 22K" },
            { name: "Green Tea", price: "IDR 20K" },
            { name: "Chamomile", price: "IDR 25K" },
            { name: "Jasmine", price: "IDR 23K" },
            { name: "Peppermint", price: "IDR 20K" }
        ]
    },
    {
        title: "Pastry Selection",
        icon: <FaBirthdayCake className="text-2xl text-amber-600 mr-3" />,
        image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        items: [
            { name: "Croissant", price: "IDR 35K" },
            { name: "Chocolate Cake", price: "IDR 45K" },
            { name: "Blueberry Muffin", price: "IDR 30K" },
            { name: "Cinnamon Roll", price: "IDR 38K" },
            { name: "Almond Biscotti", price: "IDR 28K" }
        ]
    }
]

export const features = [
    {
        icon: <FaSeedling className="text-beige text-xl mt-1 mr-3" />,
        title: "Premium Quality Beans",
        description: "Only the top 1% of Arabica beans make it to our roastery."
    },
    {
        icon: <FaFire className="text-beige text-xl mt-1 mr-3" />,
        title: "Artisan Roasting",
        description: "Small-batch roasted to perfection to bring out unique flavor profiles."
    },
    {
        icon: <FaHeart className="text-beige text-xl mt-1 mr-3" />,
        title: "Brewed with Passion",
        description: "Every cup is prepared by our certified baristas with care and precision."
    }
]

export const testimonials = [
    {
        name: "Sarah J.",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5,
        comment: "The best latte I've ever had! The atmosphere is so cozy and the baristas really know their craft. I come here every weekend now."
    },
    {
        name: "Michael T.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 5,
        comment: "As a coffee connoisseur, I'm very picky about where I get my brew. Brewwise never disappoints. Their cold brew is exceptional!"
    },
    {
        name: "Lisa M.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 4.5,
        comment: "Perfect spot for remote work. Great WiFi, delicious coffee, and the almond croissants are to die for. My go-to cafe in town."
    }
]
import { useState } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

// Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  
  // Handle add to cart
  const handleAddToCart = () => {
    onAddToCart();
    toast('Added to cart!', { 
      description: `${product.name} has been added to your cart.`,
      icon: <ShoppingCart className="h-4 w-4" />
    });
  };
  
  // Handle add to wishlist
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsInWishlist(!isInWishlist);
    toast(isInWishlist ? 'Removed from wishlist' : 'Added to wishlist');
  };
  
  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    viewport: { once: true }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  
  return (
    <motion.div
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      variants={cardVariants}
      whileInView={cardVariants.whileInView}
      viewport={cardVariants.viewport}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded">
              Bestseller
            </span>
          )}
          {product.originalPrice && product.price < product.originalPrice && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
          variants={buttonVariants}
        >
          <button
            onClick={handleAddToCart}
            className="w-full py-2 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </motion.div>
        
        {/* Wishlist button */}
        <button
          onClick={handleToggleWishlist}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`w-4 h-4 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </button>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : i < product.rating
                    ? 'fill-yellow-400 text-yellow-400 opacity-50'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>
        
        {/* Product name */}
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <span className="font-semibold text-lg text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && product.price < product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
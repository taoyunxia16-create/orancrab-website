import { motion } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    viewport: { once: true }
  };
  
  const hoverVariants = {
    scale: 1.03,
    transition: { duration: 0.2 }
  };
  
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all"
      variants={cardVariants}
      whileInView={cardVariants.whileInView}
      viewport={cardVariants.viewport}
      whileHover={hoverVariants}
    >
      {/* Category image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      </div>
      
      {/* Category info */}
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
        <p className="text-white/80 text-sm">{category.count} products</p>
        
        {/* Hover effect - view all link */}
        <motion.div 
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: 10 }}
          whileHover={{ x: 0 }}
        >
          <a href="#" className="flex items-center text-white">
            <span className="mr-1 text-sm">View All</span>
            <i className="fa-solid fa-chevron-right text-xs"></i>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
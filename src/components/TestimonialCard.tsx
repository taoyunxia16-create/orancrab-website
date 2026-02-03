import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    viewport: { once: true }
  };
  
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
      variants={cardVariants}
      whileInView={cardVariants.whileInView}
      viewport={cardVariants.viewport}
    >
      {/* Quote icon */}
      <div className="text-orange-100 mb-4">
        <i className="fa-solid fa-quote-left text-3xl"></i>
      </div>
      
      {/* Comment */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        {testimonial.comment}
      </p>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Customer info */}
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  );
}
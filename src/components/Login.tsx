import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/authContext';
import { toast } from 'sonner';
import Navbar from './Navbar';
import Footer from './Footer';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error('Please enter username and password');
      return;
    }
    
    setIsLoading(true);
    
    // 模拟登录请求延迟
    setTimeout(() => {
      const success = login(username, password);
      setIsLoading(false);
      
      if (!success) {
        toast.error('Incorrect username or password, please try again');
        // Clear password field
        setPassword('');
      }
    }, 500);
  };

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <motion.div 
          className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Login to View Inquiry Records
              </h2>
              <p className="mt-2 text-sm text-gray-600">
              Please login with default username and password
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-4 p-3 bg-amber-50 rounded-lg text-amber-800 text-sm"
              variants={itemVariants}
            >
              <i className="fa-solid fa-info-circle mr-1"></i>
              Default username: admin | Default password: admin
            </motion.div>
          </div>

          <motion.form className="mt-8 space-y-6" onSubmit={handleSubmit} variants={itemVariants}>
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md -space-y-px">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-user text-gray-400"></i>
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="h-12 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#FF6B00] focus:border-[#FF6B00] sm:text-sm"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-lock text-gray-400"></i>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="h-12 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-[#FF6B00] focus:border-[#FF6B00] sm:text-sm"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full h-12 flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#FF6B00] hover:bg-[#E55A00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B00]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <i className="fa-solid fa-circle-notch fa-spin mr-2"></i>
                     Logging in...
                  </div>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}
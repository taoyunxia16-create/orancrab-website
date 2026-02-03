import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Eye, X, Calendar, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../contexts/authContext';
import Navbar from './Navbar';
import Footer from './Footer';

// 定义提交数据的接口
interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export function SubmissionViewer() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logout } = useAuth();

  // 从localStorage加载提交数据
  useEffect(() => {
    const loadSubmissions = () => {
      try {
        const storedSubmissions = localStorage.getItem('contactSubmissions');
        if (storedSubmissions) {
          const parsedSubmissions = JSON.parse(storedSubmissions);
          // 为每条数据添加唯一ID（如果没有）
          const submissionsWithIds = parsedSubmissions.map((sub: any, index: number) => ({
            ...sub,
            id: sub.id || `sub-${index}-${Date.now()}`
          }));
          setSubmissions(submissionsWithIds);
        }
      } catch (error) {
        console.error('加载提交数据失败:', error);
        toast.error('加载提交数据失败，请刷新页面重试');
      }
    };

    loadSubmissions();
  }, []);

  // 删除提交数据
  const handleDelete = (id: string) => {
    if (window.confirm('确定要删除这条咨询记录吗？')) {
      try {
        const updatedSubmissions = submissions.filter(sub => sub.id !== id);
        setSubmissions(updatedSubmissions);
        localStorage.setItem('contactSubmissions', JSON.stringify(updatedSubmissions));
        toast.success('咨询记录已删除');
      } catch (error) {
        console.error('删除提交数据失败:', error);
        toast.error('删除失败，请重试');
      }
    }
  };

  // 查看提交详情
  const handleViewDetails = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  // 格式化日期
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };

  // 清空所有提交
  const handleClearAll = () => {
    if (window.confirm('确定要清空所有咨询记录吗？此操作不可恢复！')) {
      try {
        setSubmissions([]);
        localStorage.removeItem('contactSubmissions');
        toast.success('所有咨询记录已清空');
      } catch (error) {
        console.error('清空提交数据失败:', error);
        toast.error('清空失败，请重试');
      }
    }
  };

  // 处理登出
  const handleLogout = () => {
    logout();
    toast.success('已成功登出');
  };

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-[#1D2129]">My Inquiry Records</h2>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
            >
              <LogOut className="w-4 h-4 mr-2" />
                  Logout
            </button>
          </div>
          <p className="text-gray-600">
            Here you can view all your previously submitted inquiry content
          </p>
        </div>

        {submissions.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <i className="fa-solid fa-inbox text-gray-300 text-5xl mb-4"></i>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No Inquiry Records Yet</h3>
            <p className="text-gray-500">You can go to the "Contact Us" page to submit an inquiry</p>
            <a 
              href="/#contact" 
              className="inline-block mt-4 px-6 py-2 bg-[#FF6B00] text-white rounded-lg hover:bg-[#E55A00] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/#contact";
              }}
            >
            Contact Now
            </a>
          </div>
        ) : (
          <>
            <div className="flex justify-end mb-6">
              <button 
                onClick={handleClearAll}
                className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center"
              >
                <Trash2 className="w-4 h-4 mr-2" />
              Clear All Records
              </button>
            </div>

            <motion.div 
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {submissions.map((submission) => (
                <motion.div
                  key={submission.id}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all"
                  variants={itemVariants}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="w-10 h-10 bg-[#FFF8F1] rounded-full flex items-center justify-center mr-3">
                        <Calendar className="w-5 h-5 text-[#FF6B00]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1D2129]">{submission.subject}</h3>
                        <p className="text-sm text-gray-500">{formatDate(submission.timestamp)}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDetails(submission)}
                        className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center text-sm"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                      View Details
                      </button>
                      <button
                        onClick={() => handleDelete(submission.id)}
                        className="px-3 py-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center text-sm"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                         Delete
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-600 line-clamp-2">{submission.message}</p>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {/* 详情模态框 */}
        {isModalOpen && selectedSubmission && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#1D2129]">Inquiry Details</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Subject</div>
                  <div className="font-semibold text-[#1D2129]">{selectedSubmission.subject}</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Submitted by</div>
                  <div className="font-semibold text-[#1D2129]">{selectedSubmission.name}</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Contact</div>
                  <div className="font-semibold text-[#1D2129]">{selectedSubmission.email}</div>
                </div>
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">Submission time</div>
                  <div className="font-semibold text-[#1D2129]">{formatDate(selectedSubmission.timestamp)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Inquiry content</div>
                  <div className="bg-gray-50 p-4 rounded-lg text-gray-700 whitespace-pre-wrap">
                    {selectedSubmission.message}
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-[#FF6B00] text-white rounded-lg hover:bg-[#E55A00] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
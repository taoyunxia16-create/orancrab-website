import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SubmissionViewer } from "@/components/SubmissionViewer";
import { Login } from "@/components/Login";
import { AuthProvider, useAuth } from "@/contexts/authContext";

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <Login />;
  }
  
  return children;
};

// Main app component
function AppContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/submissions" 
            element={
              <ProtectedRoute>
                <SubmissionViewer />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

// App root component, wrapped with auth provider
export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

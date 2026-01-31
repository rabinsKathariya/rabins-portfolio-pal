import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/profile.png';

const ProfilePicture = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Portfolio</span>
      </Link>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-3xl w-full"
      >
        <img
          src={profileImage}
          alt="Basri Hossain - Profile Picture"
          className="w-full h-auto rounded-2xl shadow-2xl object-contain"
          style={{ imageRendering: 'crisp-edges' }}
        />
      </motion.div>
      
    </div>
  );
};

export default ProfilePicture;

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "919584661610";
  const message = "Hi! I'm interested in creating a digital invitation for my celebration.";
  
  // Using intent URL for Android and direct protocol for iOS/desktop
  const getWhatsAppUrl = () => {
    const encodedMessage = encodeURIComponent(message);
    // This format works across devices without api.whatsapp.com
    return `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  };

  const getMobileWhatsAppUrl = () => {
    const encodedMessage = encodeURIComponent(message);
    return `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
  };

  const handleClick = () => {
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Use whatsapp:// protocol for mobile - opens app directly
      window.location.href = getMobileWhatsAppUrl();
    } else {
      // Use web.whatsapp.com for desktop
      window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
    >
      {/* Tooltip */}
      <span className="hidden sm:block px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us!
      </span>

      {/* Button */}
      <button
        onClick={handleClick}
        className="relative cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        
        {/* Button background */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-105 active:scale-95 transition-all">
          <MessageCircle className="w-7 h-7 text-white fill-white" />
        </div>
      </button>
    </motion.div>
  );
};

export default WhatsAppButton;

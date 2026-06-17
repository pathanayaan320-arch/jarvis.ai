import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="relative z-10 w-full flex flex-col pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0F172A]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[150px] opacity-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[150px] opacity-10 pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">JARVIS AI Voice Assistant Privacy Policy</h1>
              <p className="text-[#94A3B8] text-sm">Last updated: June 11, 2026</p>
            </div>

            <div className="space-y-6 text-[#94A3B8]">
              <section>
                <h2 className="text-2xl font-bold text-white mb-3">1. Information We Collect</h2>
                <p className="leading-relaxed">
                  JARVIS AI Voice Assistant operates primarily on your Android device. We collect minimal information necessary to provide core functionalities, improve our AI performance, and ensure smooth operation. This includes device identifiers, crash logs, and anonymized performance metrics.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">2. How We Use Information</h2>
                <p className="leading-relaxed">
                  Your data is used strictly to execute commands, provide intelligent responses via the Gemini UI, and improve the application's stability. None of your personal device data is sold to third parties or used for external marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">3. Permissions Used By App</h2>
                <p className="leading-relaxed mb-2">JARVIS requires the following Android permissions to function effectively:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Microphone:</strong> To listen to voice commands.</li>
                  <li><strong>Accessibility:</strong> To control the screen, launch apps, and perform system automating tasks.</li>
                  <li><strong>System Settings:</strong> To modify brightness, volume, and connectivity settings (WiFi, Bluetooth).</li>
                  <li><strong>Overlays:</strong> To display the JARVIS floating interface globally across different apps.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">4. Voice Data Handling</h2>
                <p className="leading-relaxed">
                  Voice commands are processed in real-time. We do not permanently store your audio recordings. Text transcripts of your commands may be submitted to the Gemini AI API for generating intelligent responses in accordance with Google's API policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">5. User Security</h2>
                <p className="leading-relaxed">
                  We implement robust security measures to protect your interactions with the AI. Network communications involving the Gemini AI are encrypted using standard TLS/SSL protocols. 
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">6. Third Party Services</h2>
                <p className="leading-relaxed">
                  JARVIS uses third-party services like Google Gemini AI for intelligence processing and Stripe / WhatsApp manual integration for payment verification. These third-party services have their own Privacy Policies which govern the data they collect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">7. Data Protection</h2>
                <p className="leading-relaxed">
                  By using on-device automation and secure cloud APIs, JARVIS aims to protect your device data. We continuously refine our policies and application structure to remain compliant with data protection standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">8. Contact Information</h2>
                <p className="leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy or your data, please contact us on our official support channels or via WhatsApp at +918400815008.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

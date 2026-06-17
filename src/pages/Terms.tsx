import { motion } from 'motion/react';

export default function Terms() {
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
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">JARVIS AI Voice Assistant Terms & Conditions</h1>
              <p className="text-[#94A3B8] text-sm">Last updated: June 11, 2026</p>
            </div>

            <div className="space-y-6 text-[#94A3B8]">
              <section>
                <h2 className="text-2xl font-bold text-white mb-3">1. Service Usage</h2>
                <p className="leading-relaxed">
                  JARVIS AI Voice Assistant is provided to you as a specialized automation tool for Android devices. By installing and using the app, you agree to these terms. The app is intended for personal convenience, productivity, and accessibility automation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">2. User Responsibilities</h2>
                <p className="leading-relaxed">
                  You are responsible for ensuring that JARVIS is used lawfully. Do not use JARVIS to automate malicious actions, violate third-party application terms of service, or perform actions that could cause harm to yourself, your device, or others.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">3. App Permissions</h2>
                <p className="leading-relaxed">
                  JARVIS requires advanced Android permissions (including Accessibility, Display Over Other Apps, and Device Administration) to perform system-level tasks. You acknowledge and grant these permissions willingly for the express purpose of utilizing JARVIS features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">4. Payment Terms</h2>
                <p className="leading-relaxed">
                  JARVIS is offered as a premium application with a lifetime access fee of ₹399 INR. Payment is processed manually via WhatsApp coordination. Upon successful verification of payment, the JARVIS APK file and relevant instructions will be delivered to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">5. Refund Policy</h2>
                <p className="leading-relaxed">
                  Due to the digital nature of the APK format and the lifetime access provided, all purchases are generally final and non-refundable once the APK file has been delivered, unless the application is completely non-functional on compatible, unmodified standard Android hardware.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">6. Updates</h2>
                <p className="leading-relaxed">
                  Lifetime access includes standard future updates and bug fixes for the app. However, it does not guarantee uninterrupted permanent access to any cloud AI APIs that may change their policies or pricing structures independently of JARVIS.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">7. Limitation Of Liability</h2>
                <p className="leading-relaxed">
                  JARVIS performs automation on your device. We are not liable for any data loss, accidental calls or messages, missed notifications, or any related issues arising from the voice commands you issue or the resulting automated responses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-3">8. Contact Information</h2>
                <p className="leading-relaxed">
                  For support concerning these Terms & Conditions, please contact us on our official support channels or via WhatsApp at +918400815008.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

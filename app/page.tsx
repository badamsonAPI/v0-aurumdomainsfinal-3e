"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Playfair_Display, Cormorant } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const domains = [
    "UAEGDP.com",
    "Nohmex.com",
    "TempoVault.com",
    "WalletOracle.com",
    "DigiWin.ai",
    "MetaDebug.com",
    "MetaverseSandbox.com",
    "MetaTimeline.com",
    "DefiFortress.com",
    "XParagon.com",
    "AccountsAPI.com",
    "InvestingAPI.com",
    "FundsAPI.com",
    "RevenueAPI.com",
    "BudgetAPI.com",
    "LuperAI.com",
    "KompactAI.com",
    "ADVBTC.com",
    "SignumX.com",
    "AlgoMind.xy",
    "Duvo.xyz",
    "Tokenaire.xyz",
    "Nefo.xyz",
    "Hovu.xyz",
    "Dexola.xyz",
    "Jepo.xyz",
    "Cryptovia.xyz",
    "Sleekmind.xyz",
    "ParagonX.xyz",
    "ADVBTC.xyz",
    "Xatu.xyz",
    "Skyu.xyz",
    "Ethernals.xyz",
    "Clustered.xyz",
    "BlockCentral.xyz",
    "NFTNexus.xyz",
    "CoinMeta.xyz",
    "Fatu.xyz",
  ];

  return (
    <main className={`min-h-screen bg-black text-white ${playfair.variable} ${cormorant.variable} font-serif`}>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1 className="text-4xl md:text-6xl text-[#D9C379] font-serif">
              Welcome to Aurum Domains
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-screen-lg">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <header className="mb-32 text-center">
              <motion.img
                src="/logo.png"
                alt="Aurum Domains Logo"
                className="mx-auto mb-8 w-48 md:w-192"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              />
              <motion.p
                className="text-[#E7D7B7] text-lg md:text-xl mb-2 font-cormorant tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The Gold Standard of Domains
              </motion.p>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-700 to-transparent"></div>
              </motion.div>
            </header>

            <motion.div
              className="text-center mb-0.8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >

            <motion.div
              className="h-px w-full bg-gradient-to-r from-transparent via-gold-900/50 to-transparent mb-20"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
            ></motion.div>

            <div className="mb-0.8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="how-it-works" className="border-gold-900/30">
                  <AccordionTrigger className="text-[#D9C379] font-cormorant text-xl tracking-wider py-6 hover:text-gold-300 transition-colors">
                    How It Works
                  </AccordionTrigger>
                  <AccordionContent className="text-[#E7D7B7] font-cormorant text-lg leading-relaxed">
                    <div className="space-y-4 py-2 pl-2">
                      <p>Aurum Domains operates on an exclusive silent auction model:</p>
                      <ol className="list-decimal pl-5 space-y-3">
                        <li>Browse our curated collection of premium domains, these domains are not on any public marketplace, only invitees have the opertunity to bid</li>
                        <li>Select the domain you wish to bid for</li>
                        <li>Enter the access code that your dedicated representative provided you in your invitation email</li>
                        <li>Submit confidential bids during the auction period - generally you will have access, to submit your bid, for 7 days</li>
                        <li>Your bid is private, confidential & will not be disclosed to any other party - this process is a silent auction</li>
                        <li>Winning bidders are notified privately</li>
                        <li>Payment should be made via Escrow.com - we will not receive payment until you receive your domain</li>
                        <li>Our team handles the secure transfer process, by maunally pushing the domain to the GoDaddy account of your choice</li>
                      </ol>
                      <p>All invitations, bids & transactions are conducted with the utmost discretion and security.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="about" className="border-gold-900/30">
                  <AccordionTrigger className="text-[#D9C379] font-cormorant text-xl tracking-wider py-6 hover:text-gold-300 transition-colors">
                    About
                  </AccordionTrigger>
                  <AccordionContent className="text-[#E7D7B7] font-cormorant text-lg leading-relaxed">
                    <div className="space-y-4 py-2 pl-2">
                      <p>
                        Aurum Domains specializes in domains within Web3 & crypto ecosystem. Exclusivly offering these domains to the leading innovators, creative minds and companies within the UEA. Our domains are not available on any public marketplace.
                      </p>
                      <p>
                        Our carefully curated portfolio represents the pinnacle of digital real estate, offering unparalleled branding opportunities for discerning clients.
                      </p>
                      <p>
                        Founded by experienced domain industry veterans, we maintain the highest standards of professionalism, confidentiality, and service excellence.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <motion.div
              className="h-px w-full bg-gradient-to-r from-transparent via-gold-900/50 to-transparent mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            ></motion.div>

            <Button className="bg-transparent hover:bg-gold-900/20 text-[#D9C379] border border-gold-800 hover:border-gold-400 px-10 py-6 font-cormorant tracking-widest text-lg transition-all duration-500">
                VIEW COLLECTION
              </Button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {domains.map((domain, index) => (
                <motion.div
                  key={domain}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="group"
                >
                  <a
                    href={`https://${domain}`} target="_blank" rel="noopener noreferrer"
                    className="block border border-gold-900/30 hover:border-gold-600 bg-black p-8 text-center transition-all duration-700 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-900/0 via-gold-900/5 to-gold-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <span className="relative z-10 text-[#D9C379] group-hover:text-gold-400 font-cormorant text-xl tracking-wider transition-colors duration-500">
                      {domain}
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            <footer className="mt-32 pt-8 border-t border-gold-900/30 text-[#D9C379] text-center font-cormorant text-sm tracking-wider">
              <p>© {new Date().getFullYear()} Aurum Domains. All rights reserved.</p>
              <p className="mt-2">By invitation only.</p>
            </footer>
          </motion.div>
        </div>
      )}
    </main>
  );
}

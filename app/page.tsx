"use client"
import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion, AnimatePresence } from "framer-motion"
import { Playfair_Display, Cormorant } from "next/font/google"
import Image from "next/image"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
})

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    // Set timeout to hide welcome message after 3 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 3000)

    // Clean up timer on unmount
    return () => clearTimeout(timer)
  }, [])

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
  ]

  return (
    <div className={`min-h-screen bg-black text-gold-100 ${playfair.variable} ${cormorant.variable} font-serif`}>
      {/* Welcome Screen */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <Image
                src="/logo.png"
                alt="Aurum Domains Logo"
                width={220}
                height={220}
                className="w-[180px] h-auto sm:w-[220px] mx-auto mb-4"
                priority
              />
              <h2 className="text-[#D9C379] text-2xl md:text-3xl font-playfair tracking-wide">Welcome To Aurum Domains</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-screen-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showWelcome ? 0 : 1 }}
          transition={{ duration: 0.8, delay: showWelcome ? 0 : 0.5 }}
        >
          <header className="mb-4 text-center">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showWelcome ? 0 : 1, y: showWelcome ? 20 : 0 }}
              transition={{ duration: 0.8, delay: showWelcome ? 0 : 0.7 }}
            >
              <Image
                src="/logo.png"
                alt="Aurum Domains Logo"
                width={180}
                height={180}
                className="w-[120px] h-auto sm:w-[150px] md:w-[180px] mx-auto"
                priority
              />
            </motion.div>
            <motion.p
              className="text-gold-200 text-lg md:text-xl mb-12 font-cormorant tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showWelcome ? 0 : 1, y: showWelcome ? 20 : 0 }}
              transition={{ duration: 0.8, delay: showWelcome ? 0 : 0.9 }}
            >
              The Gold Standard of Domains
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: showWelcome ? 0 : 1, scaleX: showWelcome ? 0 : 1 }}
              transition={{ duration: 1, delay: showWelcome ? 0 : 1.1 }}
            >
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-700 to-transparent"></div>
            </motion.div>
          </header>

          <motion.div
            className="h-px w-full bg-gradient-to-r from-transparent via-gold-900/50 to-transparent mb-20"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: showWelcome ? 0 : 1, scaleX: showWelcome ? 0 : 1 }}
            transition={{ duration: 1.2, delay: showWelcome ? 0 : 1.3 }}
          ></motion.div>

          <div className="mb-20">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="how-it-works" className="border-gold-900/30">
                <AccordionTrigger className="text-gold-400 font-cormorant text-xl tracking-wider py-6 hover:text-gold-300 transition-colors">
                  How It Works
                </AccordionTrigger>
                <AccordionContent className="text-gold-200 font-cormorant text-lg leading-relaxed">
                  <div className="space-y-4 py-2 pl-2">
                    <p>Aurum Domains operates on an exclusive silent auction model:</p>
                    <ol className="list-decimal pl-5 space-y-3">
                      <li>
                        Explore our exclusive collection of premium domains — these are not listed on any public
                        marketplace
                      </li>
                      <li>Select the domain you'd like to acquire</li>
                      <li>Enter your access code provided by your Aurum Domains representative</li>
                      <li>Place your bid discreetly during the 72 hour auction window</li>
                      <li>All bids are confidential — no information is shared with other parties</li>
                      <li>The highest bidder is notified privately at the end of the auction</li>
                      <li>
                        Payment is completed securely via Escrow.com (Escrow fee paid by the winning bidder) — funds are only released once the transfer is
                        complete
                      </li>
                      <li>Your domain is manually pushed to your GoDaddy account by our team</li>
                    </ol>
                    <p>Every step is conducted with full discretion, premium security, and white-glove support.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="about" className="border-gold-900/30">
                <AccordionTrigger className="text-gold-400 font-cormorant text-xl tracking-wider py-6 hover:text-gold-300 transition-colors">
                  About
                </AccordionTrigger>
                <AccordionContent className="text-gold-200 font-cormorant text-lg leading-relaxed">
                  <div className="space-y-4 py-2 pl-2">
                    <p>
                      Aurum Domains specializes in premium domain assets within the Web3 and crypto ecosystem. We work
                      exclusively with innovators, visionaries, and future-focused companies — with a particular focus
                      on the UAE's elite business community.
                    </p>
                    <p>
                      Our portfolio is meticulously curated to represent the pinnacle of digital real estate, offering
                      rare branding opportunities that are not available on any public marketplace.
                    </p>
                    <p>
                      Founded by experienced domain industry veterans, we operate with the highest standards of
                      professionalism, confidentiality, and discreet service — delivering white-glove support throughout
                      every acquisition.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <motion.div
            className="h-px w-full bg-gradient-to-r from-transparent via-gold-900/50 to-transparent mb-20"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: showWelcome ? 0 : 1, scaleX: showWelcome ? 0 : 1 }}
            transition={{ duration: 1.2, delay: showWelcome ? 0 : 1.5 }}
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {domains.map((domain, index) => (
              <motion.div
                key={domain}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showWelcome ? 0 : 1, y: showWelcome ? 20 : 0 }}
                transition={{ duration: 0.5, delay: showWelcome ? 0 : 1.7 + index * 0.05 }}
                className="group"
              >
                <a
                  href={`https://${domain}`}
                  className="block border border-gold-900/30 hover:border-gold-600 bg-black p-8 text-center transition-all duration-700 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-900/0 via-gold-900/5 to-gold-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <span className="relative z-10 text-gold-300 group-hover:text-gold-400 font-cormorant text-xl tracking-wider transition-colors duration-500">
                    {domain}
                  </span>
                </a>
              </motion.div>
            ))}
          </div>

          <footer className="mt-32 pt-8 border-t border-gold-900/30 text-gold-500 text-center font-cormorant text-sm tracking-wider">
            <p>© {new Date().getFullYear()} Aurum Domains. All rights reserved.</p>
            <p className="mt-2">By invitation only.</p>
          </footer>
        </motion.div>
      </div>
    </div>
  )
}

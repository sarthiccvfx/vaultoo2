"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  ArrowUpRight,
  Shield,
  ShieldCheck,
  Lock,
  FileCheck,
  Award,
  Users,
  Building2,
  GraduationCap,
  FileText,
  Moon,
  Sun,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Vaulten() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null)
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false)
  const [showFounderModal, setShowFounderModal] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleDownloadCapabilityDeck = () => {
    // Create a link to the capability deck document
    const link = document.createElement('a')
    link.href = '/documents/Capbility Deck.pdf' // Path to your PDF file in public folder
    link.download = 'Vaulten-Capability-Deck.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const caseStudies = [
    {
      id: 1,
      title: "Multi-Institution Integrated Quality System – CDE Group",
      subtitle: "(JAGSoM, IFIM, Vijaybhoomi University)",
      content: "Vaulten Advisory designed and deployed a fully integrated management system combining ISO 21001, NAAC, NIRF, and AACSB principles.\n\nDelivered 70+ baselined processes, governance committees, executive dashboards, student lifecycle improvements, and institutional risk registers.\n\nEnabled the leadership to shift from fragmented operations to a unified governance model, improving audit readiness and institutional performance.",
    },
    {
      id: 2,
      title: "HITRUST CSF Implementation – KanTime Health",
      subtitle: "(US Healthcare SaaS)",
      content: "Implemented HITRUST CSF v11.5.2 with operational controls for access management, system security, evidence management, and VAPT readiness.\n\nDeveloped professional, audit-ready SOPs, incident logs, evidence packs, and compliance dashboards.\n\nEnabled the client's security team to present a clear, structured compliance posture to US regulators and auditor teams.",
    },
    {
      id: 3,
      title: "ISO 27001/27701 Implementation – IT & SaaS Companies",
      subtitle: "(India + Middle East)",
      content: "Supported multiple clients in achieving full ISMS/PIMS readiness including documentation, risk assessment, asset inventory, access control, vendor due diligence, and internal audit.\n\nDesigned cloud and on-prem hardening checklists, IAM policies, and incident response structures.\n\nImproved security posture while reducing audit effort through automation roadmaps and evidence structuring.",
    },
    {
      id: 4,
      title: "Admissions & Placements Transformation",
      subtitle: "(Leading Business School in India)",
      content: "Revamped the entire admissions and placements process through surveys, risk mapping, student engagement frameworks, and automated compliance mechanisms.\n\nIntroduced motivation and barriers analysis, 30-day readiness plans, and transparent dashboards.\n\nEnabled a shift from low participation to structured, data-driven placement outcomes.",
    },
    {
      id: 5,
      title: "Organizational Process Reengineering",
      subtitle: "(EdTech & Professional Training Company)",
      content: "Streamlined operations across marketing, admissions, academic delivery, and student support.\n\nCreated SOPs, RACI matrices, and risk-controlled workflows integrated with CRM/ERP systems.\n\nDelivered 30–45% reduction in process leakage, improved student experience, and better tracking of outcomes.",
    },
  ]

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${scrollY > 50 ? "shadow-md" : ""}`}
      >
        <div className="w-full flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-10 w-10 rounded-3xl bg-primary flex items-center justify-center"
              >
                <Shield className="h-5 w-5 text-primary-foreground" />
              </motion.div>
              <span className="font-bold text-xl">Vaulten</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-3">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#casestudies" className="text-sm font-medium transition-colors hover:text-primary">
              Case Studies
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#whowework" className="text-sm font-medium transition-colors hover:text-primary">
              Who We Serve
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-3xl"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="outline" size="sm" className="rounded-3xl" onClick={handleDownloadCapabilityDeck}>
              Download Capability Deck
            </Button>
            <Button size="sm" className="rounded-3xl">
              Book a Strategy Call
            </Button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-3xl"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <button onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background md:hidden"
        >
          <div className="w-full flex h-16 items-center justify-between px-4 md:px-8">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-3xl bg-primary flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">Vaulten</span>
              </Link>
            </div>
            <button onClick={toggleMenu}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <motion.nav
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full px-4 md:px-8 grid gap-3 pb-8 pt-6"
          >
            {["Services", "Case Studies", "About", "Who We Serve", "Contact"].map((item, index) => (
              <motion.div key={index} variants={itemFadeIn}>
                <Link
                  href={`#${item.toLowerCase().replace(/ /g, '')}`}
                  className="flex items-center justify-between rounded-3xl px-3 py-2 text-lg font-medium hover:bg-accent"
                  onClick={toggleMenu}
                >
                  {item}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
            <motion.div variants={itemFadeIn} className="flex flex-col gap-3 pt-4">
              <Button variant="outline" className="w-full rounded-3xl" onClick={handleDownloadCapabilityDeck}>
                Download Capability Deck
              </Button>
              <Button className="w-full rounded-3xl">Book a Strategy Call</Button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20 lg:py-32 xl:py-40 overflow-hidden px-4 md:px-8 lg:px-12">
          <div className="w-full rounded-3xl bg-gradient-to-br from-background to-muted/30 mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-8 xl:grid-cols-[1fr_500px] px-4 md:px-8 py-8 md:py-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-3xl bg-muted px-3 py-1 text-sm"
                  >
                    <ShieldCheck className="mr-1 h-3 w-3" />
                    Governance. Security. Compliance.
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none leading-tight"
                  >
                    Governance. Security. Compliance.{" "}
                    <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      Done Right.
                    </span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="max-w-[600px] text-muted-foreground md:text-lg leading-relaxed"
                  >
                    We help organisations build resilient, audit-ready systems aligned with modern regulatory, privacy, and quality frameworks.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col gap-4 sm:flex-row pt-2"
                >
                  <Button size="lg" className="rounded-3xl group">
                    Book a Strategy Call
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.span>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-3xl" onClick={handleDownloadCapabilityDeck}>
                    Download Capability Deck
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden rounded-3xl">
                  <Image
                    src="/images/hero.png"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section id="whowework" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-3xl bg-muted/20 mx-auto max-w-7xl"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Our Clients
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                >
                  Who We Serve
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  We work with diverse organisations across industries to build robust governance systems
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto grid grid-cols-2 items-center gap-4 py-8 px-6 md:gap-6 md:grid-cols-3 lg:grid-cols-3 lg:gap-6"
            >
              {[
                { icon: <GraduationCap className="h-8 w-8 text-primary" />, label: "Higher Education Institutions" },
                { icon: <Building2 className="h-8 w-8 text-primary" />, label: "IT/Software Companies" },
                { icon: <Shield className="h-8 w-8 text-primary" />, label: "Healthcare & Hospitals" },
                { icon: <Lock className="h-8 w-8 text-primary" />, label: "BFSI & FinTech" },
                { icon: <FileCheck className="h-8 w-8 text-primary" />, label: "Manufacturing & SMEs" },
                { icon: <Users className="h-8 w-8 text-primary" />, label: "NGOs & Government" },
              ].map((sector, i) => (
                <motion.div
                  key={i}
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="rounded-3xl p-4 md:p-6 bg-background/80 hover:bg-background/90 transition-all w-full">
                    <div className="flex justify-center mb-3">{sector.icon}</div>
                    <p className="text-sm md:text-base font-medium">{sector.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-3xl mx-auto max-w-7xl"
          >
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-12">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Services
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                >
                  What We Do
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed"
                >
                  At Vaulten, we bridge the gap between policies and real-world implementation. Our consulting services cover end-to-end governance, risk, compliance, cybersecurity, and institutional excellence.
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto w-full px-4 md:px-6 grid max-w-5xl items-center gap-4 py-12 md:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            >
              {[
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "DPDP Act Compliance",
                  description:
                    "Complete Digital Personal Data Protection Act compliance through data mapping, privacy frameworks, and DPIA execution.",
                },
                {
                  icon: <Lock className="h-10 w-10 text-primary" />,
                  title: "ISO 27001 & ISO 27701",
                  description:
                    "End-to-end implementation of Information Security and Privacy Information Management frameworks with certification support.",
                },
                {
                  icon: <GraduationCap className="h-10 w-10 text-primary" />,
                  title: "ISO 21001 for Education",
                  description:
                    "Educational quality management systems for institutions seeking better governance and accreditation readiness.",
                },
                {
                  icon: <ShieldCheck className="h-10 w-10 text-primary" />,
                  title: "HITRUST CSF",
                  description: "Healthcare compliance and security frameworks for organizations handling sensitive health data.",
                },
                {
                  icon: <Award className="h-10 w-10 text-primary" />,
                  title: "NAAC & NIRF Support",
                  description:
                    "Accreditation and ranking support through IQAC strengthening, documentation, and evidence management.",
                },
                {
                  icon: <FileCheck className="h-10 w-10 text-primary" />,
                  title: "Cybersecurity Advisory",
                  description: "Vulnerability assessments, risk management, incident response planning, and security governance.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-3xl p-6 transition-all bg-background/80"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                  <div className="relative space-y-3">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Portfolio/Case Studies Bento Grid */}
        <section id="casestudies" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-3xl bg-muted/10 mx-auto max-w-7xl"
          >
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-12">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm"
                >
                  Case Studies
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                >
                  Featured Projects
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed"
                >
                  Real-world governance and compliance transformations we've delivered
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto w-full px-4 md:px-6 grid max-w-7xl gap-4 py-12 md:gap-6 md:grid-cols-4 md:grid-rows-2 lg:gap-6"
            >
              {/* Bento Grid Items */}
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 h-[400px] md:h-auto cursor-pointer"
                onClick={() => setSelectedCaseStudy(0)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/50"></div>
                <Image
                  src="/images/cs-university.png"
                  alt="ISO 21001 for University"
                  fill
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 blur-[2px] group-hover:blur-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white drop-shadow-lg">
                  <h3 className="text-xl font-bold drop-shadow-md">ISO 21001 for University</h3>
                  <p className="text-sm drop-shadow-md">Complete framework implementation for academic quality management</p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-3xl bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30"
                      onClick={() => setSelectedCaseStudy(0)}
                    >
                      View Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl h-[200px] cursor-pointer"
                onClick={() => setSelectedCaseStudy(1)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/50"></div>
                <Image
                  src="/images/cs-dpdp.png"
                  alt="DPDP Readiness"
                  fill
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 blur-[2px] group-hover:blur-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white drop-shadow-lg">
                  <h3 className="text-xl font-bold drop-shadow-md">HITRUST CSF Implementation</h3>
                  <p className="text-sm drop-shadow-md">Security framework for healthcare SaaS</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl h-[200px] cursor-pointer"
                onClick={() => setSelectedCaseStudy(2)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/50"></div>
                <Image
                  src="/images/cs-accreditation.png"
                  alt="ISO 27001 Implementation"
                  fill
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 blur-[2px] group-hover:blur-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white drop-shadow-lg">
                  <h3 className="text-xl font-bold drop-shadow-md">ISO 27001/27701 Implementation</h3>
                  <p className="text-sm drop-shadow-md">ISMS/PIMS for IT & SaaS companies</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl h-[200px] cursor-pointer"
                onClick={() => setSelectedCaseStudy(3)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/50"></div>
                <Image
                  src="/images/cs-healthcare.png"
                  alt="Admissions & Placements Transformation"
                  fill
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 blur-[2px] group-hover:blur-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white drop-shadow-lg">
                  <h3 className="text-xl font-bold drop-shadow-md">Admissions & Placements Transformation</h3>
                  <p className="text-sm drop-shadow-md">Business school process optimization</p>
                </div>
              </motion.div>
              <motion.div
                variants={itemFadeIn}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl md:col-span-2 h-[200px] cursor-pointer"
                onClick={() => setSelectedCaseStudy(4)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/50"></div>
                <Image
                  src="/images/cs-fintech.png"
                  alt="Organizational Process Reengineering"
                  fill
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 blur-[2px] group-hover:blur-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white drop-shadow-lg">
                  <h3 className="text-xl font-bold drop-shadow-md">Organizational Process Reengineering</h3>
                  <p className="text-sm drop-shadow-md">EdTech & professional training transformation</p>
                </div>
              </motion.div>
            </motion.div>
            <div className="flex justify-center pb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="rounded-3xl group" onClick={() => setShowAllCaseStudies(true)}>
                  View All Case Studies
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Why Vaulten Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-3xl bg-muted/20 mx-auto max-w-7xl"
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center py-10">
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-background px-3 py-1 text-sm"
                >
                  Why Vaulten
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                >
                  Practical. Modern. Implementation-Focused.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                >
                  When organisations choose Vaulten, they gain more than consulting — they gain partners in building resilient systems.
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto w-full px-4 md:px-6 grid max-w-5xl gap-3 py-12 lg:grid-cols-2"
            >
              {[
                {
                  title: "Domain Expertise",
                  description:
                    "Decades of collective experience across security, privacy, and compliance frameworks.",
                },
                {
                  title: "End-to-End Execution",
                  description:
                    "From framework design to audits and continuous monitoring — we see it through.",
                },
                {
                  title: "Custom, Scalable Systems",
                  description:
                    "Built to fit the organisation's culture, leadership, and goals — not cookie-cutter solutions.",
                },
                {
                  title: "Measurable Outcomes",
                  description:
                    "Policies, processes, and controls that work — not documents that gather dust.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10 }}
                  className="flex flex-col justify-between rounded-3xl border bg-background p-6 shadow-sm"
                >
                  <div>
                    <div className="flex gap-0.5 text-primary mb-4">
                      <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* About/Team Section */}
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-3xl mx-auto max-w-7xl"
          >
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6 p-6"
              >
                <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Who We Are</h2>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  Vaulten is a governance, security, and compliance consulting firm helping organisations build robust, audit-ready systems that stand the test of regulatory scrutiny.
                </p>
                <p className="text-muted-foreground md:text-lg/relaxed">
                  We combine deep domain expertise with modern, practical frameworks that work in the real-world environments our clients operate in. For us, compliance isn't just about documentation — it's about embedding discipline and governance into the DNA of an organisation.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row pt-2">
                  <Button variant="outline" size="lg" className="rounded-3xl" onClick={() => setShowFounderModal(true)}>
                    Meet the Founder
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center p-6"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Our Philosophy</h3>
                  <div className="space-y-4">
                    {["Simple", "Sustainable", "Actionable", "Integrated", "Outcome-driven"].map((value, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="rounded-full bg-primary/10 p-2">
                          <ShieldCheck className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-lg font-medium">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="rounded-3xl bg-muted/20 mx-auto max-w-7xl"
          >
            <div className="flex flex-col items-center justify-center space-y-6 text-center py-12">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block rounded-3xl bg-background px-3 py-1 text-sm"
                >
                  Client Success
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                >
                  What Our Clients Say
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-[900px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed"
                >
                  Hear from organisations we've helped strengthen their governance and compliance systems
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto w-full px-4 md:px-6 grid max-w-5xl gap-4 py-12 md:gap-6 lg:grid-cols-2"
            >
              {[
                {
                  quote:
                    "Dr. Fayaz has made a substantial contribution to strengthening IFIM's institutional governance and compliance systems. His leadership in streamlining ISO 21001 processes, enhancing NAAC/NIRF documentation, and refining EC/QC workflows has brought exceptional clarity and structure. He proactively identified operational risks, developed comprehensive risk registers, and introduced robust process compliance mechanisms. His ability to convert complex requirements into practical, repeatable systems has added significant institutional value.",
                  author: "Rohit Prasad",
                  company: "VP- IT Systems, IFIM",
                },
                {
                  quote:
                    "Dr. Fayaz has made a meaningful impact on enhancing KanTime's security and compliance framework. His strong command of HITRUST, SOC 2 and GDPR requirements enabled us to strengthen controls, documentation and audit preparedness. He demonstrated exceptional clarity in identifying risks and providing structured, actionable guidance. His contributions to refining our security processes and evidence management were highly valuable.",
                  author: "Prem Kumar",
                  company: "Director- IT & Strategic Initiatives, KanTime",
                },
                {
                  quote:
                    "Dr. Fayas's instrumental involvement was a key to the effective transition of our organization from ISO 27001:2013 to ISO 27001:2022 standards. Valuable guidance on emerging controls in areas like Cloud security, Cyber-security, and Privacy showcased his forward-thinking approach and dedication to excellence. He also led the revamp of our ISMS manual, creating a framework perfectly aligned with the updated new standards. Beyond the technical aspects, Dr. Fayas delivered exceptional training sessions that engaged senior management and project teams. These sessions didn't just build awareness but instilled a sense of accountability and commitment to information security. His contributions have not only strengthened our organization's adherence to ISO 2022 standards but have also embedded a culture of responsibility and continuous improvement in our information security practices.",
                  author: "Suresh Subramaniam",
                  company: "Client",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemFadeIn}
                  whileHover={{ y: -10 }}
                  className="flex flex-col justify-between rounded-3xl bg-background p-6"
                >
                  <div>
                    <div className="flex gap-0.5 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="mt-4 text-lg font-medium leading-relaxed">"{testimonial.quote}"</blockquote>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-muted"></div>
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid items-center gap-4 lg:gap-6 lg:grid-cols-2 rounded-3xl mx-auto max-w-7xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 p-6"
            >
              <div className="inline-block rounded-3xl bg-muted px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Ready to Strengthen Your Organisation?</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Get in touch to discuss how we can help you build resilient, audit-ready governance systems aligned with your regulatory and quality frameworks.
              </p>
              <div className="mt-8 space-y-5">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-muted p-2">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-sm text-muted-foreground">syedfayaz@vaulten.co.in</p>
                  </div>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
                  <div className="rounded-3xl bg-muted p-2">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-sm text-muted-foreground">Schedule a consultation call</p>
                  </div>
                </motion.div>
              </div>
              <div className="mt-8 flex space-x-3">
                {[
                  { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", url: "https://www.linkedin.com/in/sfayazs?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                ].map((social, index) => (
                  <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-3xl border p-2 text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                    >
                      {social.icon}
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-background p-6"
            >
              <h3 className="text-xl font-bold">Send Us a Message</h3>
              <p className="text-sm text-muted-foreground">
                Fill out the form below and we'll get back to you shortly.
              </p>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" className="rounded-3xl" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" className="rounded-3xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" className="rounded-3xl" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px] rounded-3xl" />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
                  <Button type="submit" className="w-full rounded-3xl">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Case Study Modal */}
      {selectedCaseStudy !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCaseStudy(null)}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-3xl max-w-2xl max-h-[90vh] overflow-y-auto w-full"
          >
            <div className="p-6 md:p-10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Case Study {caseStudies[selectedCaseStudy].id}: {caseStudies[selectedCaseStudy].title}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base">{caseStudies[selectedCaseStudy].subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  className="flex-shrink-0 p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="border-t pt-6">
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {caseStudies[selectedCaseStudy].content}
                </p>
              </div>
              <div className="flex gap-3 pt-4">
                <Button className="rounded-3xl" onClick={() => setSelectedCaseStudy(null)}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* All Case Studies Modal */}
      {showAllCaseStudies && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowAllCaseStudies(false)}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto w-full"
          >
            <div className="p-6 md:p-10">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    All Case Studies
                  </h2>
                  <p className="text-muted-foreground mt-1">Real-world governance and compliance transformations</p>
                </div>
                <button
                  onClick={() => setShowAllCaseStudies(false)}
                  className="flex-shrink-0 p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="space-y-4">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setShowAllCaseStudies(false)
                      setSelectedCaseStudy(index)
                    }}
                    className="p-4 md:p-6 rounded-2xl bg-muted/50 hover:bg-muted cursor-pointer transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                            Case Study {study.id}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{study.subtitle}</p>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {study.content.split('\n\n')[0]}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center pt-6">
                <Button className="rounded-3xl" onClick={() => setShowAllCaseStudies(false)}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Founder Modal */}
      {showFounderModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowFounderModal(false)}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-3xl max-w-3xl max-h-[90vh] overflow-y-auto w-full"
          >
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Meet the Founder
                  </h2>
                  <p className="text-muted-foreground mt-1">Dr. S Fayaz</p>
                </div>
                <div className="flex-shrink-0 flex items-start gap-4">
                  <img
                    src="/images/image.png"
                    alt="Dr. S Fayaz"
                    className="h-32 w-32 md:h-40 md:w-40 rounded-3xl object-cover"
                  />
                  <button
                    onClick={() => setShowFounderModal(false)}
                    className="flex-shrink-0 p-2 hover:bg-muted rounded-full transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Dr. S Fayaz</span> is the Founder & Principal Consultant at Vaulten Advisory, a strategic consulting firm specializing in Integrated Management Systems, Information Security, Educational Governance, and Organizational Excellence.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  With <span className="font-semibold text-foreground">20+ years</span> of cross-sector consulting experience across higher education, IT/ITES, HealthTech, and global service organizations, Dr. Fayaz is known for transforming complex governance requirements into simple, scalable, and audit-ready systems.
                </p>

                <div>
                  <h3 className="font-bold text-lg mb-3">His expertise spans:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>ISO 21001 (EOMS) Implementation & Governance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>ISO 27001 (ISMS) & ISO 27701 (PIMS)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>HITRUST CSF for healthcare & SaaS firms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>NAAC, NIRF, AACSB alignment through structured processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Risk Management Frameworks & Organizational Dashboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Process Re-engineering for Admissions, Placements, Academics, HR & IT</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-3">Dr. Fayaz is recognized for his ability to convert fragmented operations into integrated, high-performance systems through:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Clear processes & RACI structures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Evidence-based governance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Automation roadmaps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Quality councils & steering committees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Risk & compliance frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Institutional and organizational restructuring</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  He has successfully consulted <span className="font-semibold text-foreground">30+ organizations</span> across India, UAE, and Southeast Asia, and is known for his strategic clarity, execution discipline, and people-centric approach.
                </p>
              </div>

              <div className="flex justify-center pt-6">
                <Button className="rounded-3xl" onClick={() => setShowFounderModal(false)}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

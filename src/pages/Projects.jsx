import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'

import tnjImg from '../assets/OurWorks/tnj.jpeg'
import kanchi from '../assets/OurWorks/kanchipuram.jpeg'
import karaikudi from '../assets/OurWorks/karaikudi.jpeg'
import ChidamImg from '../assets/OurWorks/chidambarm.jpeg'
import DindigalImg from '../assets/OurWorks/Dindugal.jpeg'
import PotheriImg from '../assets/OurWorks/Potheri.jpeg'
import DharmaImg from '../assets/OurWorks/Dharmapuri.jpeg'
import KallakurichiImg from '../assets/OurWorks/Kallakurichi.jpeg'
import CumbumImg from '../assets/OurWorks/Cumbum.jpeg'
import VilluhairImg from '../assets/OurWorks/villu - hair.jpeg'
import ContonImg from '../assets/OurWorks/conton.jpeg'
import VilluskinImg from '../assets/OurWorks/villu - skin.jpeg'
import ThrissurImg from '../assets/OurWorks/Thrissur.jpeg'
import KottivakkamImg from '../assets/OurWorks/Kottivakam.jpeg'
import KovilambakkamImg from '../assets/OurWorks/Kovilambakam.jpeg'
import VelloreImg from '../assets/OurWorks/Vellore.jpeg'
import CuddaloreImg from '../assets/OurWorks/cuddalore.jpeg'
import RKSalaiImg from '../assets/OurWorks/rksalai.jpeg'
import EdumedcbeImg from '../assets/OurWorks/Edumed Coimbatore.jpeg'
import EdumedchnImg from '../assets/OurWorks/Edumend Chennai.jpeg'
import NaturalsImg from '../assets/OurWorks/naturals.jpeg'
import BonitaSalem from '../assets/OurWorks/bonita salem.jpeg'
import BonitaPudukottai from '../assets/OurWorks/bonita pudukottai.jpeg'
import MSMS from '../assets/OurWorks/msms.jpeg'
import Jaswanthini from '../assets/OurWorks/jas.jpeg'
import Adhi from '../assets/OurWorks/aadhimind.jpeg'
import Portfolio from '../assets/OurWorks/ganeshportfolio.jpeg'
import Intelvidhyalaya from '../assets/OurWorks/intelvidhyalaya.jpeg'
import Timeline from '../assets/OurWorks/timeline.jpeg'
import Littleella from '../assets/OurWorks/littleella.jpeg'
import Envisol from '../assets/OurWorks/envisol.jpeg'
import Schoolmate from '../assets/OurWorks/schoolmate.jpeg'
import AraDiscoveries from '../assets/OurWorks/ara_discoveries.jpeg'
import AraTech from '../assets/OurWorks/araTech1.jpeg'
import AraMarketing from '../assets/OurWorks/araMarketing.jpeg'

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }
const fadeUp = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } } }

const corporate = [
  { id: 1, title: 'GroHair Thanjavur', role: 'Aesthetic Clinic', url: 'https://adgrohairgloskinthanjavur.com/', thumbnail: tnjImg },
  { id: 2, title: 'GroHair Kanchipuram', role: 'Aesthetic Clinic', url: 'https://adgrohairgloskinkanchipuram.in/', thumbnail: kanchi },
  { id: 3, title: 'GroHair Karaikudi', role: 'Aesthetic Clinic', url: 'https://adgrohairkaraikudi.in/', thumbnail: karaikudi },
  { id: 4, title: 'GroHair Chidambaram', role: 'Aesthetic Clinic', url: 'https://adgrohairgloskinchidambaram.in/', thumbnail: ChidamImg },
  { id: 5, title: 'GroHair Dindugal', role: 'Aesthetic Clinic', url: 'https://adgrohairgloskindindigul.in/', thumbnail: DindigalImg },
  { id: 6, title: 'GroHair Potheri', role: 'Aesthetic Clinic', url: 'https://adgrohairpotheri.in/', thumbnail: PotheriImg },
  { id: 7, title: 'GroHair Dharmapuri', role: 'Aesthetic Clinic', url: 'https://adgrohairgloskindharmapuri.in/', thumbnail: DharmaImg },
  { id: 8, title: 'GroHair Kallakurichi', role: 'Aesthetic Clinic', url: 'https://adgrohairgloskinkallakurichi.com/', thumbnail: KallakurichiImg },
  { id: 9, title: 'GroHair Cumbum', role: 'Aesthetic Clinic', url: 'https://adgrohairgloskincumbum.in/', thumbnail: CumbumImg },
  { id: 10, title: 'GroHair Villupuram', role: 'Aesthetic Clinic', url: 'https://adgrohairviluppuram.in/', thumbnail: VilluhairImg },
  { id: 11, title: 'GroHair Cantonment', role: 'Aesthetic Clinic', url: 'https://adgrohaircantonment.in/', thumbnail: ContonImg },
  { id: 12, title: 'GloSkin Villupuram', role: 'Aesthetic Clinic', url: 'https://adgloskinviluppuram.in/', thumbnail: VilluskinImg },
  { id: 13, title: 'GroHair Thrissur', role: 'Aesthetic Clinic', url: 'https://adgrohairthrissur.in/', thumbnail: ThrissurImg },
  { id: 14, title: 'GroHair Kottivakkam', role: 'Aesthetic Clinic', url: 'https://adgrohairkottivakkam.in/', thumbnail: KottivakkamImg },
  { id: 15, title: 'GroHair Kovilambakkam', role: 'Aesthetic Clinic', url: 'https://adgrohairkovilambakkam.com/', thumbnail: KovilambakkamImg },
  { id: 16, title: 'GroHair Vellore', role: 'Aesthetic Clinic', url: 'https://adgrohairgloskinvellore.in/', thumbnail: VelloreImg },
  { id: 17, title: 'GroHair Cuddalore', role: 'Aesthetic Clinic', url: 'https://adgrocuddalore.com/', thumbnail: CuddaloreImg },
  { id: 18, title: 'GroHair RK Salai', role: 'Aesthetic Clinic', url: 'https://adgrohairrksalai.in/', thumbnail: RKSalaiImg },
  { id: 19, title: 'Edumed Coimbatore', role: 'Aesthetic Clinic', url: 'https://dredumedcoimbatore.com/', thumbnail: EdumedcbeImg },
  { id: 20, title: 'Edumed Anna Nagar', role: 'Aesthetic Clinic', url: 'https://dredumedchennai.com/', thumbnail: EdumedchnImg },
  { id: 21, title: 'Naturals', role: 'Beauty & Salon', url: 'http://naturalsthanjavur.com/', thumbnail: NaturalsImg },
  { id: 22, title: 'Bonita Salem', role: 'Aesthetic Clinic', url: 'https://bonitaasalem.in/', thumbnail: BonitaSalem },
  { id: 23, title: 'Bonita Pudukottai', role: 'Aesthetic Clinic', url: 'https://bonitaapudukkottai.in/', thumbnail: BonitaPudukottai },
]

const clients = [
  { id: 24, title: 'MSMS', role: 'Education', url: 'https://msmstj.in/', thumbnail: MSMS },
  { id: 25, title: 'Dr. Jaswanthini Clinic', role: 'Aesthetic Clinic', url: 'https://drjaswanthini.com/', thumbnail: Jaswanthini },
  { id: 26, title: 'Adhi Mind Wellness Centre', role: 'Wellness Centre', url: 'https://adhimindwellnesscentre.com/', thumbnail: Adhi },
  { id: 27, title: 'Portfolio', role: 'Portfolio', url: 'https://gp10.co/', thumbnail: Portfolio },
  { id: 28, title: 'Envisol', role: 'Eco-Friendly', url: 'https://envisolbioplast.com/', thumbnail: Envisol },
  { id: 29, title: 'Intelvidhyalaya', role: 'Education', url: 'https://intelvidyalaya.in/', thumbnail: Intelvidhyalaya },
  { id: 30, title: 'Timeline Studios', role: 'Photography', url: 'https://timelinestudios.in/', thumbnail: Timeline },
  { id: 31, title: 'Little Ella', role: 'Education', url: 'https://littleella.school/', thumbnail: Littleella },
]

const araProjects = [
  { id: 32, title: 'Schoolmate', role: 'Ara Software', url: 'http://araschoolmate.com/', thumbnail: Schoolmate },
  { id: 33, title: 'Ara Discoveries', role: 'Ara Discoveries', url: 'http://aradiscoveries.com/', thumbnail: AraDiscoveries },
  { id: 34, title: 'Ara Tech', role: 'Ara Discover Technologies', url: 'http://discovertechnologies.co/', thumbnail: AraTech },
  { id: 35, title: 'Ara Marketing', role: 'Ara Discover Marketing', url: 'http://discovermarketing.co/', thumbnail: AraMarketing },
]

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { delay: index * 0.05, duration: 0.5 } } }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl overflow-hidden bg-white border border-black/6 hover:border-black/12 hover:shadow-xl hover:shadow-black/8 transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ExternalLink size={14} className="text-[#0a0a0a]" />
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-[#ed2024] text-xs font-bold uppercase tracking-widest mb-1">{project.role}</div>
        <h3 className="text-[#0a0a0a] font-black text-base group-hover:text-[#ed2024] transition-colors duration-200 leading-snug">{project.title}</h3>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-gray-400 text-xs font-medium">View live site</span>
          <ArrowRight size={14} className="text-gray-300 group-hover:text-[#ed2024] group-hover:translate-x-1 transition-all duration-200" />
        </div>
      </div>
    </motion.a>
  )
}

function ProjectSection({ label, title, projects }) {
  return (
    <div className="mb-20">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-4 uppercase tracking-widest">
          {label}
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-[#0a0a0a]">{title}</h2>
      </motion.div>
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </motion.div>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ed2024]/5 rounded-full blur-[110px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ed2024]/8 border border-[#ed2024]/20 text-[#ed2024] text-xs font-semibold mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed2024]" /> Our Work
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-[#0a0a0a] mb-6 leading-tight">
              Our Work Speaks<br /><span className="text-[#ed2024]">For Itself</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-500 text-xl leading-relaxed mb-8">
              From corporate clients to startups — websites, platforms, and digital products we've built and shipped across industries.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center gap-8">
              {[['35+', 'Projects Delivered'], ['3', 'Categories'], ['100%', 'Live & Running']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-black text-[#ed2024]">{val}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ProjectSection
            label="Corporate Clients"
            title="Our Corporate Client Projects"
            projects={corporate}
          />
          <ProjectSection
            label="Client Projects"
            title="Our Valuable Client Projects"
            projects={clients}
          />
          <ProjectSection
            label="In-House"
            title="Ara In-House Projects"
            projects={araProjects}
          />
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl border border-white/8 p-12 md:p-20 text-center overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-[0.04]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#ed2024]/12 rounded-full blur-[70px]" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Your Project Could Be Next</h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto mb-8">Join our growing list of clients who trust ARA Discover Technologies to deliver exceptional results.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ed2024] text-white font-bold hover:bg-[#c0181c] transition-all shadow-xl shadow-[#ed2024]/25 hover:scale-105">
                Start Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Projects

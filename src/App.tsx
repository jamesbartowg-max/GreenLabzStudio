import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Services from './pages/Services'
import AuditPage from './pages/AuditPage'
import Projects from './pages/Projects'
import ProcessPage from './pages/ProcessPage'
import PricingPage from './pages/PricingPage'
import Guide from './pages/Guide'
import ArticleDetail from './pages/ArticleDetail'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import AGB from './pages/AGB'
import ProjectDetail from './pages/ProjectDetail'

import CookieBanner from './components/CookieBanner'
import FloatingContact from './components/FloatingContact'
import Loader from './components/Loader'
import SmoothScroll from './components/SmoothScroll'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <SmoothScroll />
      <Loader />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Services />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/projekte" element={<Projects />} />
          <Route path="/ablauf" element={<ProcessPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/ratgeber" element={<Guide />} />
          <Route path="/ratgeber/:slug" element={<ArticleDetail />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          
          {/* Specific Wibify subpages */}
          <Route path="/die-lackier-werkstatt" element={<ProjectDetail />} />
          <Route path="/unfallfix24" element={<ProjectDetail />} />
          <Route path="/mousaexport" element={<ProjectDetail />} />
          <Route path="/steakclub" element={<ProjectDetail />} />
          <Route path="/joshjabs" element={<ProjectDetail />} />
          <Route path="/umzugsservice" element={<ProjectDetail />} />
          
          {/* Generic fallback for any other project subpages */}
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
      </Routes>
      <FloatingContact />
      <CookieBanner />
    </div>
  )
}

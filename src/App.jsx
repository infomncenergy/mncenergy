import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Layout
import TopBar    from './components/layout/TopBar';
import Header    from './components/layout/Header';
import Navbar    from './components/layout/Navbar';
import Footer    from './components/layout/Footer';

// Pages
import HomePage    from './pages/HomePage';
import BlogPage    from './pages/BlogPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import FaqsPage    from './pages/FaqsPage';

// Electrical pages
import ResidentialEICRPage   from './pages/electrical/ResidentialEICRPage';
import ResidentialFuseBoxPage from './pages/electrical/ResidentialFuseBoxPage';
import CommercialEICRPage    from './pages/electrical/CommercialEICRPage';
import PATTestingPage        from './pages/electrical/PATTestingPage';
import FaultFindingPage      from './pages/electrical/FaultFindingPage';

// Gas pages
import LandlordGasSafetyPage   from './pages/gas/LandlordGasSafetyPage';
import CommercialGasSafetyPage from './pages/gas/CommercialGasSafetyPage';
import BoilerInstallationPage  from './pages/gas/BoilerInstallationPage';
import BoilerRepairPage        from './pages/gas/BoilerRepairPage';
import GasEngineerPage         from './pages/gas/GasEngineerPage';
import CommercialGasEngineerPage from './pages/gas/CommercialGasEngineerPage';

// Fire pages
import FireSafetyCheckPage           from './pages/fire/FireSafetyCheckPage';
import ResidentialFRAPage             from './pages/fire/ResidentialFRAPage';
import CommercialFRAPage              from './pages/fire/CommercialFRAPage';
import ResidentialFireAlarmPage       from './pages/fire/ResidentialFireAlarmPage';
import FireExtinguisherPage           from './pages/fire/FireExtinguisherPage';
import ResidentialEmergencyLightsPage from './pages/fire/ResidentialEmergencyLightsPage';
import ResidentialFireDoorPage        from './pages/fire/ResidentialFireDoorPage';
import FireRiskAsbestosPage           from './pages/fire/FireRiskAsbestosPage';

// Asbestos pages
import ResidentialAsbestosPage from './pages/asbestos/ResidentialAsbestosPage';

// EPC pages
import ResidentialEPCPage from './pages/epc/ResidentialEPCPage';

// Floating widgets
import WhatsAppFloat   from './components/ui/WhatsAppFloat';
import ScrollToTopBtn  from './components/ui/ScrollToTopBtn';

// Scroll to top on route change
function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <TopBar />
      <Header />
      <Navbar />
      <RouteScrollReset />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/book-now"  element={<BookingPage />} />
          <Route path="/blog"      element={<BlogPage />} />
          <Route path="/contact"   element={<ContactPage />} />
          <Route path="/faqs"      element={<FaqsPage />} />

          {/* Electrical */}
          <Route path="/electrical/residential-eicr"      element={<ResidentialEICRPage />} />
          <Route path="/electrical/commercial-eicr"       element={<CommercialEICRPage />} />
          <Route path="/electrical/fault-finding"         element={<FaultFindingPage />} />
          <Route path="/electrical/residential-fuse-box"  element={<ResidentialFuseBoxPage />} />
          <Route path="/electrical/pat-testing"           element={<PATTestingPage />} />

          {/* Gas */}
          <Route path="/gas/landlord-gas-safety"        element={<LandlordGasSafetyPage />} />
          <Route path="/gas/commercial-gas-safety"      element={<CommercialGasSafetyPage />} />
          <Route path="/gas/boiler-installation"        element={<BoilerInstallationPage />} />
          <Route path="/gas/boiler-repair"              element={<BoilerRepairPage />} />
          <Route path="/gas/gas-engineer"               element={<GasEngineerPage />} />
          <Route path="/gas/commercial-gas-engineer"    element={<CommercialGasEngineerPage />} />

          {/* Fire */}
          <Route path="/fire/fire-safety-check"             element={<FireSafetyCheckPage />} />
          <Route path="/fire/residential-fra"               element={<ResidentialFRAPage />} />
          <Route path="/fire/commercial-fra"                element={<CommercialFRAPage />} />
          <Route path="/fire/residential-fire-alarm"        element={<ResidentialFireAlarmPage />} />
          <Route path="/fire/fire-extinguisher"             element={<FireExtinguisherPage />} />
          <Route path="/fire/residential-emergency-lights"  element={<ResidentialEmergencyLightsPage />} />
          <Route path="/fire/residential-fire-door"         element={<ResidentialFireDoorPage />} />
          <Route path="/fire/fire-risk-asbestos"            element={<FireRiskAsbestosPage />} />

          {/* Asbestos */}
          <Route path="/asbestos/residential" element={<ResidentialAsbestosPage />} />

          {/* EPC */}
          <Route path="/epc/residential" element={<ResidentialEPCPage />} />

          {/* 404 */}
          <Route path="*" element={<ResidentialEICRPage />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTopBtn />
    </div>
  );
}

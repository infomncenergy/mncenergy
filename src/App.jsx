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

// Electrical pages
import ResidentialEICRPage   from './pages/electrical/ResidentialEICRPage';
import ResidentialEICPage    from './pages/electrical/ResidentialEICPage';
import ResidentialFuseBoxPage from './pages/electrical/ResidentialFuseBoxPage';
import CommercialEICRPage    from './pages/electrical/CommercialEICRPage';
import CommercialEICPage     from './pages/electrical/CommercialEICPage';
import CommercialFuseBoxPage from './pages/electrical/CommercialFuseBoxPage';

// Gas pages
import LandlordGasSafetyPage  from './pages/gas/LandlordGasSafetyPage';
import HomeownerGasPage       from './pages/gas/HomeownerGasPage';
import BoilerServicePage      from './pages/gas/BoilerServicePage';
import CommercialCP15Page     from './pages/gas/CommercialCP15Page';
import CommercialCP16Page     from './pages/gas/CommercialCP16Page';
import CommercialCP17Page     from './pages/gas/CommercialCP17Page';
import CommercialCP42Page     from './pages/gas/CommercialCP42Page';

// Fire pages
import ResidentialFRAPage             from './pages/fire/ResidentialFRAPage';
import ResidentialEmergencyLightsPage from './pages/fire/ResidentialEmergencyLightsPage';
import ResidentialFireAlarmPage       from './pages/fire/ResidentialFireAlarmPage';
import ResidentialFireDoorPage        from './pages/fire/ResidentialFireDoorPage';
import CommercialFRAPage              from './pages/fire/CommercialFRAPage';
import CommercialEmergencyLightsPage  from './pages/fire/CommercialEmergencyLightsPage';
import CommercialFireAlarmPage        from './pages/fire/CommercialFireAlarmPage';
import CommercialFireDoorPage         from './pages/fire/CommercialFireDoorPage';

// Asbestos pages
import ResidentialAsbestosPage from './pages/asbestos/ResidentialAsbestosPage';
import CommercialAsbestosPage  from './pages/asbestos/CommercialAsbestosPage';

// EPC pages
import ResidentialEPCPage from './pages/epc/ResidentialEPCPage';
import CommercialEPCPage  from './pages/epc/CommercialEPCPage';

// Floating widgets
import WhatsAppFloat   from './components/ui/WhatsAppFloat';
import ScrollToTopBtn  from './components/ui/ScrollToTopBtn';

// Scroll to top on route change
function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Placeholder for pages not yet built
function ComingSoon({ label }) {
  return (
    <div className="container py-5 text-center" style={{ minHeight: '50vh' }}>
      <h2 className="fw-bold mb-3">{label}</h2>
      <p className="text-muted">This page is coming soon. Check back shortly.</p>
    </div>
  );
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
          {/* Electrical */}
          <Route path="/electrical"                        element={<ComingSoon label="Electrical Certificates" />} />
          <Route path="/electrical/residential-eicr"      element={<ResidentialEICRPage />} />
          <Route path="/electrical/residential-eic"       element={<ResidentialEICPage />} />
          <Route path="/electrical/residential-fuse-box"  element={<ResidentialFuseBoxPage />} />
          <Route path="/electrical/commercial-eicr"       element={<CommercialEICRPage />} />
          <Route path="/electrical/commercial-eic"        element={<CommercialEICPage />} />
          <Route path="/electrical/commercial-fuse-box"   element={<CommercialFuseBoxPage />} />
          {/* Gas */}
          <Route path="/gas"                               element={<ComingSoon label="Gas Services" />} />
          <Route path="/gas/landlord-gas-safety"           element={<LandlordGasSafetyPage />} />
          <Route path="/gas/homeowner-gas-safety"          element={<HomeownerGasPage />} />
          <Route path="/gas/boiler-service"                element={<BoilerServicePage />} />
          <Route path="/gas/commercial-boiler-cp15"        element={<CommercialCP15Page />} />
          <Route path="/gas/commercial-installation-cp16"  element={<CommercialCP16Page />} />
          <Route path="/gas/commercial-safety-report-cp17" element={<CommercialCP17Page />} />
          <Route path="/gas/commercial-catering-cp42"      element={<CommercialCP42Page />} />
          {/* Fire */}
          <Route path="/fire"                              element={<ComingSoon label="Fire Services" />} />
          <Route path="/fire/residential-fra"              element={<ResidentialFRAPage />} />
          <Route path="/fire/residential-emergency-lights" element={<ResidentialEmergencyLightsPage />} />
          <Route path="/fire/residential-fire-alarm"       element={<ResidentialFireAlarmPage />} />
          <Route path="/fire/residential-fire-door"        element={<ResidentialFireDoorPage />} />
          <Route path="/fire/commercial-fra"               element={<CommercialFRAPage />} />
          <Route path="/fire/commercial-emergency-lights"  element={<CommercialEmergencyLightsPage />} />
          <Route path="/fire/commercial-fire-alarm"        element={<CommercialFireAlarmPage />} />
          <Route path="/fire/commercial-fire-door"         element={<CommercialFireDoorPage />} />
          {/* Asbestos */}
          <Route path="/asbestos/residential" element={<ResidentialAsbestosPage />} />
          <Route path="/asbestos/commercial"  element={<CommercialAsbestosPage />} />
          {/* EPC */}
          <Route path="/epc/residential" element={<ResidentialEPCPage />} />
          <Route path="/epc/commercial"  element={<CommercialEPCPage />} />
          {/* 404 */}
          <Route path="*" element={<ComingSoon label="Page Not Found" />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTopBtn />
    </div>
  );
}

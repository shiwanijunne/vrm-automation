import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import AssessmentList from "./pages/AssessmentList";
import TemplateList from "./pages/TemplateList";
import CreateTemplate from "./pages/CreateTemplate";
import ReviewQueue from "./pages/ReviewQueue";
import ReviewDetail from "./pages/ReviewDetail";
import RemediationList from "./pages/RemediationList";
import RemediationDetail from "./pages/RemediationDetail";
import VendorRemediationResponse from "./pages/VendorRemediationResponse";
import Renewals from "./pages/Renewals";
import Reports from "./pages/Reports";
import VendorMyAssessments from "./pages/VendorMyAssessments";
import Questionnaire from "./pages/Questionnaire";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path="/assessments" element={<AssessmentList />} />
        <Route path="/templates" element={<TemplateList />} />
        <Route path="/templates/create" element={<CreateTemplate />} />
        <Route path="/reviews" element={<ReviewQueue />} />
        <Route path="/reviews/:id" element={<ReviewDetail/>} />
        <Route path="/remediations" element={<RemediationList />} />
        <Route path="/remediations/:id" element={<RemediationDetail />} />
        <Route path="/vendor/remediation/:id" element={<VendorRemediationResponse />} />
        <Route path ="/renewals" element={<Renewals />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/vendor/assessments" element={<VendorMyAssessments />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
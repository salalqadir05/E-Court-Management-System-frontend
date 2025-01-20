import React from "react";
import "./App.css"
import Main from "./pages/Main";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import LoginApplicant from "./pages/LoginApplicant";
import RegisterApplicant from "./pages/RegisterApplicant";
import SignUpLawyer from "./pages/SignUpLawyer";
import LoginLawyer from "./pages/LoginLawyer";
import SignUpcasemanager from "./pages/SignUpcasemanager";
import Logincasemanager from "./pages/Logincasemanager";
import Layout from "./Layout/Layout";
import CaseManagerLayout from "./Layout/Casemanager/CaseManagerLayout";
import Casemanagercaselidtpage from "./Layout/Casemanager/Casemanagercaselidtpage";
import Caseschedule from "./Layout/Casemanager/Caseschedule";
import Employeelist from "./Layout/Casemanager/Employeelist";
import Lawyerlist from "./Layout/Casemanager/Lawyerlist";
import Documents from "./Layout/Casemanager/Documents";
import Setting from "./Layout/Casemanager/Setting";
import Mainlawyer from "./Layout/lawyer/Mainlawyer";
import ReadArticles from "./Layout/lawyer/ReadArticles";
import WriteArticle from "./Layout/lawyer/writeArticle"
import Schedule from "./Layout/lawyer/Schedule";

import Listlawyerinlawyer from "./Layout/lawyer/Listlawyerinlawyer";
import DocumentsofLawyers from "./Layout/lawyer/DocumentsofLawyers";
import Settingslawyer from "./Layout/lawyer/Settingslawyer";
import Casetracking from "./Layout/lawyer/Casetracklawyer";
import LawyerCases from "./components/Lawyer Panel/LawyerCases";
import MainPanel from "./Layout/applicant/MainPanel";
import CaseNumberShow from "./Layout/lawyer/CaseNumberShow";
import AssignAjudge from "./Layout/Casemanager/AssignAjudge";
import AssignAcourt from "./Layout/Casemanager/AssignAcourt";
import Reviews from "./Layout/Casemanager/Reviews";
import ApplicantCasesno from "./Layout/applicant/ApplicantCasesno";
import Casetrackbyapplicant from "./Layout/applicant/Casetrackbyapplicant";
import CaseDatesbyapplicant from "./Layout/applicant/CaseDatesbyapplicant";
import Lawyerlistapplicant from "./Layout/applicant/Lawyerlistapplicant";
import Updatedetails from "./Layout/applicant/Updatedetails";
import ComplainSubmit from "./Layout/applicant/ComplainSubmit";
import Uploaddocuments from "./Layout/Casemanager/Uploaddocuments";

function App() {

  return (
  <>
  <Router>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/applicantregister" element={<RegisterApplicant />} />
      <Route exact path="/applicantlogin" element={<LoginApplicant />} />
      <Route exact path="/lawyerregister" element={<SignUpLawyer />} />
      <Route exact path="/lawyerlogin" element={<LoginLawyer />} />
      <Route exact path="/casemanagerregister" element={<SignUpcasemanager />} />
      <Route exact path="/casemanagerlogin" element={<Logincasemanager />} />
      <Route exact path="/managementpanel" element={<CaseManagerLayout />} />
      <Route exact path="/managementcaselist" element={<Casemanagercaselidtpage />} />
      <Route exact path="/managementcaseschedule" element={<Caseschedule />} />
      <Route exact path="/employeelist" element={<Employeelist />} />
      <Route exact path="/lawyerlist" element={<Lawyerlist />} />
      <Route exact path="/documents" element={<Documents />} />
      <Route exact path="/assignajudge" element={<AssignAjudge />} />
      <Route exact path="/assignacourt" element={<AssignAcourt />} />
      <Route exact path="/updatecomments" element={<Reviews />} />
      
      
      <Route exact path="/setting" element={<Setting />} />
      <Route exact path="/lawyerpanel" element={<Mainlawyer />} />
      <Route exact path="/articles" element={<ReadArticles />} />
      <Route exact path="/writearticles" element={<WriteArticle />} />
      <Route exact path="/scheduledates" element={<Schedule />} />
      <Route exact path="/lawyerlistinlawyer" element={<Listlawyerinlawyer />} />
      <Route exact path="/lawyerdocuments" element={<DocumentsofLawyers />} />
     <Route exact path="/lawyercasetrack" element={<Casetracking />} />
    
     <Route exact path="/lawyercasenumber" element={<CaseNumberShow />} />
      <Route exact path="/lawyersettings" element={<Settingslawyer />} />
      <Route exact path="/lawyercases" element={<LawyerCases />} />


      <Route exact path="/applicantpanel" element={<MainPanel />} />
      <Route exact path="/fetchcasebyapplicant" element={<ApplicantCasesno />} />
      <Route exact path="/applicantcasetrack" element={<Casetrackbyapplicant />} />
      <Route exact path="/applicantcaseschedule" element={<CaseDatesbyapplicant />} />
      <Route exact path="/lawyerlistinapplicant" element={<Lawyerlistapplicant />} />
      <Route exact path="/updateapplicant" element={<Updatedetails />} />     
      <Route exact path="/complain" element={<ComplainSubmit />} /> 
      <Route exact path="/uploaddocs" element={<Uploaddocuments />} />  

      
      
  </Routes>
  </Router>
  </>
  );
}

export default App;

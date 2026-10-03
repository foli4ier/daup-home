import { Route, Routes } from "react-router-dom";
import {
  AppEateryPage,
  AppEatInPage,
  AppEatOutPage,
  AppHubPage,
  AppsPage,
  DocsPage,
  HashScroller,
  HomePage,
  InvitePage,
  LegalPage,
  NotFound,
  SetupPage,
  StaffInviteRedirect,
  TuesdayPage,
} from "./pages";

export default function App() {
  return (
    <>
      <HashScroller />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/apps/eatery" element={<AppEateryPage />} />
        <Route path="/apps/eat-in" element={<AppEatInPage />} />
        <Route path="/apps/eat-out" element={<AppEatOutPage />} />
        <Route path="/apps/hub" element={<AppHubPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/eatery/tuesday-lunch" element={<TuesdayPage />} />
        <Route path="/docs/hub/set-up-eatery" element={<SetupPage />} />
        <Route path="/invite" element={<InvitePage />} />
        <Route path="/privacy" element={<LegalPage page="privacy" />} />
        <Route path="/terms" element={<LegalPage page="terms" />} />
        <Route path="/popia" element={<LegalPage page="popia" />} />
        <Route path="/docs/staff-invite" element={<StaffInviteRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

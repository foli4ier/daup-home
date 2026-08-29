import { Route, Routes } from "react-router-dom";
import {
  AppEateryPage,
  AppHubPage,
  AppsPage,
  DocsPage,
  HashScroller,
  HomePage,
  InvitePage,
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
        <Route path="/apps/hub" element={<AppHubPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/eatery/tuesday-lunch" element={<TuesdayPage />} />
        <Route path="/docs/hub/set-up-eatery" element={<SetupPage />} />
        <Route path="/invite" element={<InvitePage />} />
        <Route path="/docs/staff-invite" element={<StaffInviteRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const HomePage = lazy(() => import("@/pages/home"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfUse = lazy(() => import("@/pages/terms-of-use"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/politica-de-privacidade" component={PrivacyPolicy} />
        <Route path="/termos-de-uso" component={TermsOfUse} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;

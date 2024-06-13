import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "../router/config";
import { Preloader } from "@/widgets/preloader/preloader.component";

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter {...RouterConfig}>
    <Suspense fallback={<Preloader />}>{component()}</Suspense>
  </BrowserRouter>
);

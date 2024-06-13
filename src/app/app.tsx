import React, { FC } from "react";
import { withProviders } from "./providers";
import { AppRouting } from "@/pages";

export const App: FC = withProviders((): React.ReactElement => {
  return <AppRouting />;
});

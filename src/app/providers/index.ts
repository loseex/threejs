import { compose } from "@reduxjs/toolkit";
import { FC } from "react";

import { withRouter } from "./with-router.provider";

export const withProviders = compose<FC>(withRouter);

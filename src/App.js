import React from "react";
import { Router } from "./router/Router";
import { UserProviders } from "./providers/UserProviders";

import "./styles.css";

export default function App() {
  return (
    <UserProviders>
      <Router />
    </UserProviders>
  );
}

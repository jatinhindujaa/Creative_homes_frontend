"use client";
import { OpeningsProvider } from "./parts/OpeningsContext.jsx";
import Row from "../../ui/Row.jsx";
import OpeningsTable from "./parts/OpeningsTable";
import AppLayout from "../navbarAdmin/AppLayout.jsx";
import OpeningsTableOperations from "./parts/OpeningsTableOperations";
import Heading from "../../ui/Heading.jsx";
import ProtectedRoute from "../login/parts/ProtectedRoute.jsx";

export default function Openings() {
  return (
    <ProtectedRoute>
    <OpeningsProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Openings</Heading>
          <OpeningsTableOperations />
        </Row>
        <OpeningsTable />
      </AppLayout>
    </OpeningsProvider>
    </ProtectedRoute>

  );
}


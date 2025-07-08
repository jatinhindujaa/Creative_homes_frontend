"use client";
import { CareersProvider } from "./parts/CareersContext.jsx";
import Row from "../../ui/Row.jsx";
import CareersTable from "./parts/CareersTable";
import AppLayout from "../navbarAdmin/AppLayout.jsx";
import CareersTableOperations from "./parts/CareersTableOperations";
import Heading from "../../ui/Heading.jsx";
import ProtectedRoute from "../login/parts/ProtectedRoute.jsx";

export default function Careers() {
  return (
    <ProtectedRoute>
    <CareersProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Careers</Heading>
          <CareersTableOperations />
        </Row>
        <CareersTable />
      </AppLayout>
    </CareersProvider>
    </ProtectedRoute>

  );
}


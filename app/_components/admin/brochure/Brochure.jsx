"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import ProtectedRoute from "../login/parts/ProtectedRoute";
import AppLayout from "../navbarAdmin/AppLayout";
import { BrochureProvider } from "./parts/BrochureContext";
import BrochureTable from "./parts/BrochureTable";
import BrochureTableOperations from "./parts/BrochureTableOperations";

export default function Brochure() {
  return (
    <ProtectedRoute>

    <BrochureProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Brochure</Heading>
          <BrochureTableOperations />
        </Row>
        <BrochureTable />
      </AppLayout>
    </BrochureProvider>
    </ProtectedRoute>

  );
}

"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import ProtectedRoute from "../login/parts/ProtectedRoute";
import AppLayout from "../navbarAdmin/AppLayout";
import { WhatsapProvider } from "./parts/WhatsapContext";
import WhatsapTable from "./parts/WhatsapTable";
import WhatsapTableOperations from "./parts/WhatsapTableOperations";

export default function Whatsap() {
  return (
    <ProtectedRoute>

    <WhatsapProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Whatsap</Heading>
          <WhatsapTableOperations />
        </Row>
        <WhatsapTable />
      </AppLayout>
    </WhatsapProvider>
    </ProtectedRoute>

  );
}

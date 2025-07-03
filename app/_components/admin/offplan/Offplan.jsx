"use client";
import OffplanTableOperations from "./parts/OffplanTableOperations";
import { OffplanProvider } from "./parts/OffplanContext.jsx";
import Row from "../../ui/Row.jsx";
import Heading from "../../ui/Heading";
import OffplanTable from "./parts/OffplanTable";
import AppLayout from "../navbarAdmin/AppLayout";
import ProtectedRoute from "../login/parts/ProtectedRoute";

export default function Offplan() {
  return (
    <ProtectedRoute>

    <OffplanProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Offplan</Heading>
          <OffplanTableOperations />
        </Row>
        <OffplanTable />
      </AppLayout>
    </OffplanProvider>
    </ProtectedRoute>

  );
}

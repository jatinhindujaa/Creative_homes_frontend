"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import ProtectedRoute from "../login/parts/ProtectedRoute";
import AppLayout from "../navbarAdmin/AppLayout";
import { BrousherProvider } from "./parts/BrousherContext";
import BrousherTable from "./parts/BrousherTable";
import BrousherTableOperations from "./parts/BrousherTableOperations";

export default function Brousher() {
  return (
    <ProtectedRoute>

    <BrousherProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Brousher</Heading>
          <BrousherTableOperations />
        </Row>
        <BrousherTable />
      </AppLayout>
    </BrousherProvider>
    </ProtectedRoute>

  );
}

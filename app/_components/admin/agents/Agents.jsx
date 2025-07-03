"use client";
import { AgentsProvider } from "./parts/AgentsContext";
import AgentsTableOperations from "./parts/AgentsTableOperations";
import Row from "../../ui/Row.jsx";
import Heading from "../../ui/Heading.jsx";
import AgentsTable from "./parts/AgentsTable";
import AppLayout from "../navbarAdmin/AppLayout";
import ProtectedRoute from "../login/parts/ProtectedRoute";

export default function Agents() {
  return (
    <ProtectedRoute>
      <AgentsProvider>
        <AppLayout>
          <Row type="horizontal">
            <Heading as="h2">Agents</Heading>
            <AgentsTableOperations />
          </Row>
          <AgentsTable />
        </AppLayout>
      </AgentsProvider>
    </ProtectedRoute>
  );
}

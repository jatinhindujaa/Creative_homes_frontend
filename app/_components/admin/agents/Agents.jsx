"use client";
import { AgentsProvider } from "./parts/AgentsContext";
import AgentsTableOperations from "./parts/AgentsTableOperations";
import Row from "../../ui/Row.jsx";
import Heading from "../../ui/Heading.jsx";
import AgentsTable from "./parts/AgentsTable";
// import AppLayout from "../navbarAdmin/AppLayout";

export default function Agents() {
  return (
    <AgentsProvider>
      <Row type="horizontal">
        <Heading as="h2">Agents</Heading>
        <AgentsTableOperations />
      </Row>
      <AgentsTable />
      {/* <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Agents accreditations</Heading>
          <AgentsTableOperations />
        </Row>
        <AgentsTable />
      </AppLayout> */}
    </AgentsProvider>
  );
}

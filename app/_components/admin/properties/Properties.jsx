"use client";
import { PropertiesProvider } from "./parts/PropertiesContext";
import PropertiesTableOperations from "./parts/PropertiesTableOperations";
import Row from "../../ui/Row.jsx";
import Heading from "../../ui/Heading.jsx";
import PropertiesTable from "./parts/PropertiesTable";
import AppLayout from "../navbarAdmin/AppLayout";

export default function Properties() {
  return (
    <PropertiesProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Properties</Heading>
          <PropertiesTableOperations />
        </Row>
        <PropertiesTable />
      </AppLayout>
    </PropertiesProvider>
  );
}

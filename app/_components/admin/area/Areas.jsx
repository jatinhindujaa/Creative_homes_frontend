"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { AreasProvider } from "./parts/AreaContext";
import AreasTable from "./parts/AreaTable";
import AreasTableOperations from "./parts/AreaTableOperations";

export default function Areas() {
  return (
    <AreasProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Areas</Heading>
          <AreasTableOperations />
        </Row>
        <AreasTable />
      </AppLayout>
    </AreasProvider>
  );
}

"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { WhatsapProvider } from "./parts/WhatsapContext";
import WhatsapTable from "./parts/WhatsapTable";
import WhatsapTableOperations from "./parts/WhatsapTableOperations";

export default function Whatsap() {
  return (
    <WhatsapProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Whatsap</Heading>
          <WhatsapTableOperations />
        </Row>
        <WhatsapTable />
      </AppLayout>
    </WhatsapProvider>
  );
}

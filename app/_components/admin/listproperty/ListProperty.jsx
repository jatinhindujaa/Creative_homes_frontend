"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { ListpropertyProvider } from "./parts/ListpropertyContext";
import ListpropertyTableOperations from "./parts/ListpropertyOperations";
import ListpropertyTable from "./parts/ListpropertyTable";

export default function Listproperty() {
  return (
    <ListpropertyProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Listproperty</Heading>
          <ListpropertyTableOperations />
        </Row>
        <ListpropertyTable />
      </AppLayout>
    </ListpropertyProvider>
  );
}

"use client";
import { InquiryProvider } from "./parts/InquiryContext.jsx";
import Row from "../../ui/Row.jsx";
import InquiryTable from "./parts/InquiryTable";
import AppLayout from "../navbarAdmin/AppLayout.jsx";
import InquiryTableOperations from "./parts/InquiryTableOperations";
import Heading from "../../ui/Heading.jsx";

export default function Inquiry() {
  return (
    <InquiryProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Inquiry</Heading>
          <InquiryTableOperations />
        </Row>
        <InquiryTable />
      </AppLayout>
    </InquiryProvider>
  );
}


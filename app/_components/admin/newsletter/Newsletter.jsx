"use client";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import ProtectedRoute from "../login/parts/ProtectedRoute";
import AppLayout from "../navbarAdmin/AppLayout";
import { NewsletterProvider } from "./parts/NewsletterContext";
import NewsletterTable from "./parts/NewsletterTable";
import NewsletterTableOperations from "./parts/NewsletterTableOperations";

export default function Newsletter() {
  return (
    <ProtectedRoute>

    <NewsletterProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Newsletter</Heading>
          <NewsletterTableOperations />
        </Row>
        <NewsletterTable />
      </AppLayout>
    </NewsletterProvider>
    </ProtectedRoute>

  );
}

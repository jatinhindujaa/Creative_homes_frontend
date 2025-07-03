"use client";
import { NewsProvider } from "./parts/NewsContext.jsx";
import Row from "../../ui/Row.jsx";
import NewsTable from "./parts/NewsTable.jsx";
import AppLayout from "../navbarAdmin/AppLayout";
import NewsTableOperations from "./parts/NewsTableOperations.jsx";
import Heading from "../../ui/Heading.jsx";
import ProtectedRoute from "../login/parts/ProtectedRoute.jsx";

export default function News() {
  return (
    <ProtectedRoute>

    <NewsProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">News</Heading>
          <NewsTableOperations />
        </Row>
        <NewsTable />
      </AppLayout>
    </NewsProvider>
    </ProtectedRoute>

  );
}

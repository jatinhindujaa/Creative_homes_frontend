"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { NewsProvider } from "../News/parts/NewsContext";
import NewsTable from "../News/parts/NewsTable";
import NewsTableOperations from "../News/parts/NewsTableOperations";
import AppLayout from "../navbarAdmin/AppLayout";

export default function News() {
  return (
    <NewsProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">News</Heading>
          <NewsTableOperations />
        </Row>
        <NewsTable />
      </AppLayout>
    </NewsProvider>
  );
}

import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useNewsContext } from "./NewsContext";
import { useNews } from "../useNews.js";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";
import NewsRow from "./NewsRow";

function NewsTable() {
  const { filter, sort } = useNewsContext();
  const { data, isLoading, error } = useNews();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading News: {error.message}</div>;

  const sortedNews = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredNews = sortedNews;

  if (filter !== "All") {
    filteredNews = sortedNews.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="News" />;
  return (
    <Menus>
      <Table columns="grid-cols-6">
        <Table.Header>
          <div>title</div>
          <div>description</div>
          {/* <div>Experience</div> */}
          <div>date</div>
          {/* <div>About</div> */}
          <div>Image</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredNews}
          render={(News) => <NewsRow key={News.id} News={News} />}
        />
        <Table.Footer>
          {/* <Pagination count={NewsData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default NewsTable;

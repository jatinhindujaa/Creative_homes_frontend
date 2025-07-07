import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useNewsletterContext } from "./NewsletterContext";
import NewsletterRow from "./NewsletterRow.jsx";
import { useNewsletter } from "../useNewsletter.js";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";

function NewsletterTable() {
  const { filter, sort } = useNewsletterContext();
  const { data, isLoading, error } = useNewsletter();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Newsletter: {error.message}</div>;

  const sortedNewsletter = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredNewsletter = sortedNewsletter;

  if (filter !== "All") {
    filteredNewsletter = sortedNewsletter.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="Property" />;
  return (
    <Menus>
      <Table columns="grid-cols-4">
        <Table.Header>
          <div>id</div>
          <div>email</div>
          <div>created </div>
          <div>Status</div>
        </Table.Header>

        <Table.Body
          data={filteredNewsletter}
          render={(property, index) => (
            <NewsletterRow key={property._id || index} newsletter={property} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={propertiesData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default NewsletterTable;

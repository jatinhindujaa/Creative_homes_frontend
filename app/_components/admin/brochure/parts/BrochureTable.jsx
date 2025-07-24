import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useBrochureContext } from "./BrochureContext";
import BrochureRow from "./BrochureRow.jsx";
import { useBrochure } from "../useBrochure.js";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";

function BrochureTable() {
  const { filter, sort } = useBrochureContext();
  const { data, isLoading, error } = useBrochure();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Brochure: {error.message}</div>;

  const sortedBrochure = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredBrochure = sortedBrochure;

  if (filter !== "All") {
    filteredBrochure = sortedBrochure.filter((el) => {
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
      <Table columns="grid-cols-5">
        <Table.Header>
          <div>email</div>
          <div>name </div>
          <div>phone</div>
          <div>propertyName</div>
          <div>message</div>
        </Table.Header>

        <Table.Body
          data={filteredBrochure}
          render={(property, index) => (
            <BrochureRow key={property._id || index} brochure={property} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={propertiesData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BrochureTable;

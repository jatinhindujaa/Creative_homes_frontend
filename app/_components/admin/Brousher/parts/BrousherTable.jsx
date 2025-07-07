import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useBrousherContext } from "./BrousherContext";
import BrousherRow from "./BrousherRow.jsx";
import { useBrousher } from "../useBrousher.js";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";

function BrousherTable() {
  const { filter, sort } = useBrousherContext();
  const { data, isLoading, error } = useBrousher();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Brousher: {error.message}</div>;

  const sortedBrousher = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredBrousher = sortedBrousher;

  if (filter !== "All") {
    filteredBrousher = sortedBrousher.filter((el) => {
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
          data={filteredBrousher}
          render={(property, index) => (
            <BrousherRow key={property._id || index} brousher={property} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={propertiesData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BrousherTable;

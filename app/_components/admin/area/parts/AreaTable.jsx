import Menus from "@/app/_components/ui/Menus";
import Table from "@/app/_components/ui/Table";
import { useAreasContext } from "./AreaContext";
import AreasRow from "./AreaRow.jsx";
import Spinner from "@/app/_components/ui/Spinner.jsx";
import Empty from "@/app/_components/ui/Empty.jsx";
import { useAreas } from "../useArea";

function AreasTable() {
  const { filter, sort } = useAreasContext();
  const { data, isLoading, error } = useAreas();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Areas: {error.message}</div>;

  const sortedAreas = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredAreas = sortedAreas;

  if (filter !== "All") {
    filteredAreas = sortedAreas.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="Areas" />;
  return (
    <Menus>
      <Table columns="grid-cols-4">
        <Table.Header>
          <div>Name</div>
          <div>Image</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredAreas}
          render={(Areas, index) => <AreasRow key={Areas.id  || index} Areas={Areas} />}
        />
        <Table.Footer>
          {/* <Pagination count={AreasData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default AreasTable;

import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className="border border-gray-200 text-sm bg-white rounded-lg overflow-hidden"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children, columns }) {
  return (
    <div
      role="row"
      className={`grid ${columns} grid-flow-col auto-cols-fr gap-4 p-4 text-xs bg-gray-100 border-b border-gray-200 uppercase tracking-wide font-semibold text-gray-600`}
    >
      {children}
    </div>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className={`grid ${columns} gap-4  p-3 border-b border-gray-200 last:border-none`}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return (
      <p className="text-lg font-medium text-center my-6">No data to show</p>
    );
  return <section className="my-2">{data.map(render)}</section>;
}

function Footer({ children }) {
  return children ? (
    <footer className="bg-gray-100 flex justify-center p-4">{children}</footer>
  ) : null;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;

import React from 'react';

type Column = {
  key: string;
  header: string;
};

type DataTableProps = {
  columns: Column[];
  data: any[];
};

export const DataTable: React.FC<DataTableProps> = ({ columns, data }) => {
  return (
    <div className="w-full overflow-x-auto border-t-2 border-b-2 border-foreground">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {columns.map((col) => (
              <th 
                key={col.key} 
                className="py-4 px-4 font-sans font-bold text-sm tracking-wide uppercase border-b-2 border-foreground"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-foreground/10 last:border-b-0">
              {columns.map((col) => (
                <td key={col.key} className="py-4 px-4 font-sans text-base leading-relaxed align-top">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

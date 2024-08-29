'use client';

import { DataTable } from '@/components/data-table';
import { formatDate } from '@/utils/date';
import ExportNewsletter from './export-newsletter';

export default function NewsLetterTable({ newsletters }) {
  const columns = [
    {
      accessorKey: 'email',
      header: () => {
        return <div className="text-start lg:w-[70px]">email</div>;
      },
      cell: ({ row }) => {
        const image = row?.original?.image;
        return (
          <div className="">
            <span className="font-semibold">{row.getValue('email')}</span>
          </div>
        );
      },
    },
    {
      accessorKey: 'createdAt',
      header: () => {
        return <div className="text-center">Date</div>;
      },
      cell: ({ row }) => {
        return (
          <div className="text-center capitalize">
            {formatDate(row?.getValue('createdAt'))}
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <DataTable
        tableTitle="Newsletters"
        data={newsletters}
        columns={columns}
        extraFilterActions={<ExportNewsletter />}
        searchBy={'email'}
        enablePagination={false}
        enableShowPerPage={false}
      />
    </div>
  );
}

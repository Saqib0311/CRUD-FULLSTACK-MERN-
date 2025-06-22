import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from "flowbite-react";

const EnquiryTable = ({ enquiryList , onDelete,onEdit}) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-[40px] font-bold py-6">EnquiryList</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Sr No</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell><span className="sr-only">Edit</span></TableHeadCell>
            <TableHeadCell><span className="sr-only">Delete</span></TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {enquiryList.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7}>No enquiries found</TableCell>
            </TableRow>
          ) : (
            enquiryList.map((enquiry, index) => (
              <TableRow key={enquiry._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{enquiry.name}</TableCell>
                <TableCell>{enquiry.email}</TableCell>
                <TableCell>{enquiry.phone}</TableCell>
                <TableCell>{enquiry.message}</TableCell>
                <TableCell>
                  <button onClick= {() => onEdit(enquiry)} 
                   className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Edit
                  </button>
                </TableCell>
                <TableCell>
                <button
                  onClick={() => onDelete(enquiry._id)} className="font-medium text-red-600 hover:underline dark:text-red-500"  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default EnquiryTable;

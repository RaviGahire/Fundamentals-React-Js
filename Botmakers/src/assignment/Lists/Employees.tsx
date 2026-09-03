import React from 'react'

export const Employees = ({data}:any) => {
  return (
    <table className="w-full max-w-7xl mx-auto border-collapse border">
          <caption className="py-4 text-lg font-semibold text-start  text-red-500">
            Employee List
          </caption>
          <thead className="bg-gray-100">
            <tr className="border-b capitalize ">
              <th className="p-4 text-left font-medium">Sr.No</th>
              <th className="p-4 text-left font-medium">Avatar</th>
              <th className="p-4 text-left font-medium">Name</th>
              <th className="p-4 text-left font-medium">Emp-Id</th>
              <th className="p-4 text-left font-medium">Role</th>              
            </tr>
          </thead>
          <tbody>
            {data?.map((item:any, index:number) => (
              <tr
                key={item?.name || index}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4 ">{index + 1}</td>
                 <td className="p-4">
                  <img
                    src={item?.profileImg}
                    alt={item?.name}
                    className="size-20 rounded-md object-cover"
                  />
                </td>
                 <td className="p-4">{item?.name}</td>
                 <td className="p-4">{item?.empId}</td>
                 <td className="p-4">{item.role}</td>               
              </tr>
            ))}
          </tbody>
        </table>
  )
}

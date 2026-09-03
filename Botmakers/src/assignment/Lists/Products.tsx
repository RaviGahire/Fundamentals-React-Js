
export const Products = ({data}:any) => {
   return (
    <table className="w-full max-w-7xl mx-auto border-collapse border">
          <caption className="py-4 text-lg font-semibold text-start text-red-500 ">
            Product List
          </caption>
          <thead className="bg-gray-100">
            <tr className="border-b capitalize ">
              <th className="p-4 text-left font-medium">Sr.No</th>
              <th className="p-4 text-left font-medium">Image</th>
              <th className="p-4 text-left font-medium">Name</th>
              <th className="p-4 text-left font-medium">price</th>                         
              <th className="p-4 text-left font-medium">Description</th>                         
              <th className="p-4 text-left font-medium">Last updated</th>                         
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
                    src={item?.img}
                    alt={item?.name}
                    className="size-20 rounded-md object-cover"
                  />
                </td>
                 <td className="p-4">{item?.name}</td>
                <td className="p-4">${item.price}</td>
                <td className="p-4">{item.decs}</td>
                <td className="p-4">{item.updateDate}</td>                
              </tr>
            ))}
          </tbody>
        </table>
  )
}

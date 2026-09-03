import { useState } from "react";
import { students } from "../Props/PropExamples";
import { employees } from "../Props/PropExamples";
import { products } from "../Props/PropExamples";
import { Students } from "./Students";
import { Products } from "./Products";
import { Employees } from "./Employees";
import Footer from "../../components/Footer";

export const Lists = () => {
  // Inital state
  const [data, setData] = useState(students);

  // change data function 
  const handleData = (e: any) => {
    let value = e?.target?.value;
    if (value === "student") setData(students);
    if (value === "product") setData(products);
    if (value === "employee") setData(employees);  
  };
  return (
    <>
      <div className="h-screen pt-18">
        {/* filter */}
        <div className="bg-linear-to-r from-purple-400 from-0% to-purple-300/20">
          <div className="w-full max-w-7xl mx-auto flex justify-between items-center  ">
            <h4 className="text-2xl font-semibold font-mono py-2 tracking-normal text-white">
              Filter
            </h4>
            <div>
              <select
                name="list"
                id="list"
                onChange={handleData}
                className="outline-1 outline-blue-700 rounded-2xl px-4 py-1 text-[18px] font-semibold text-zinc-600 capitalize cursor-pointer"
              >
                <option hidden>select list</option>
                <option value="student">students</option>
                <option value="product">Products</option>
                <option value="employee">eployess</option>
              </select>
            </div>
          </div>
        </div>
        {/* List's */}
        {data[0]?.price && <Products data={data}/>}
        {data[0]?.rolleNo && <Students data={data}/>}
        {data[0]?.empId && <Employees data={data}/>}
        </div>
      <Footer />
    </>
  );
};

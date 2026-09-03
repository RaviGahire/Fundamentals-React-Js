import { IconArrowRightToArc } from "@tabler/icons-react";
import { ProductCard } from "./ProductCard";
import Footer from "../../components/Footer";
import { Card } from "./Card";

type Product = {
  name: string;
  price: number;
  updateDate: string;
  decs: string;
  img: string;
};

export const products: Product[] = [
  {
    name: "Wireless Headphones",
    price: 79.99,
    updateDate: "2026-08-01",
    decs: "High-quality wireless headphones with noise cancellation.",
    img: "https://media.istockphoto.com/id/2204825940/photo/wireless-headphone.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZRH-l1oGQ3ABVX4khCl4r3v9UyDTPHn4U_J5q0Jfulo=",
  },
  {
    name: "Smart Watch",
    price: 149.99,
    updateDate: "2026-08-02",
    decs: "Track your fitness, heart rate, and notifications.",
    img: "https://images.unsplash.com/photo-1637160151663-a410315e4e75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Bluetooth Speaker",
    price: 39.99,
    updateDate: "2026-08-03",
    decs: "Portable speaker with powerful bass and clear sound.",
    img: "https://images.unsplash.com/photo-1588131153911-a4ea5189fe19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJsdWV0b290aCUyMFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Gaming Mouse",
    price: 29.99,
    updateDate: "2026-08-04",
    decs: "Ergonomic mouse with customizable RGB lights.",
    img: "https://images.unsplash.com/photo-1613141412501-9012977f1969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdhbWluZyUyME1vdXNlfGVufDB8fDB8fHww",
  },
];

export const students = [
  {
    bgImage:"https://images.unsplash.com/vector-1783697544784-a08ca5e08f87?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Ravi gahire",
    profileImg:"https://media.istockphoto.com/id/1624710058/photo/portrait-of-confident-smiling-teenage-boy-standing-isolated-against-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=59-NpB6jbFNeAcQqAvSnyBVjWbO3Pft3OfRrF7iK6-U=",
    rolleNo: 1,
    role: "Student",
  },
  {
    bgImage:"https://images.unsplash.com/vector-1783697544784-a08ca5e08f87?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Amit Sharma",
    profileImg:"https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJveXxlbnwwfHwwfHx8MA%3D%3D",
    rolleNo: 2,
    role: "Student",
  },
  {
    bgImage:"https://images.unsplash.com/vector-1783697544784-a08ca5e08f87?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Priya Patil",
    profileImg:"https://images.unsplash.com/photo-1729101145906-e9274c012ed7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rolleNo: 3,
    role: "Student",
  },
  {
    bgImage:"https://images.unsplash.com/vector-1783697544784-a08ca5e08f87?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Neha Yadav",
    profileImg:"https://images.unsplash.com/photo-1610980458985-24fa031d8e0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5laGF8ZW58MHx8MHx8fDA%3D",
    rolleNo: 4,
    role: "Student",
  },
];

export const employees = [
  {
    name: "Ravi Gahire",
    desc: "Frontend Developer Builds responsive and modern web interfaces.",
    bgImage:"https://images.unsplash.com/vector-1783697544959-920d10d3039f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoYWRlcnxlbnwwfHwwfHx8MA%3D%3D",
    profileImg:"https://media.istockphoto.com/id/1624710058/photo/portrait-of-confident-smiling-teenage-boy-standing-isolated-against-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=59-NpB6jbFNeAcQqAvSnyBVjWbO3Pft3OfRrF7iK6-U=",
    role: "Developer",
    empId: 1001,
  },
  {
    name: "Amit Sharma",
    desc: "UI/UX Designer Creates user-friendly and visually appealing designs.",
    bgImage:"https://images.unsplash.com/vector-1783697544959-920d10d3039f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoYWRlcnxlbnwwfHwwfHx8MA%3D%3D",
    profileImg:"https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJveXxlbnwwfHwwfHx8MA%3D%3D",
    role: "Designer",
    empId: 2002,
  },
  {
    name: "Priya Patil",
    desc: "Project Manager Manages tasks and ensures smooth project delivery.",
    bgImage:"https://images.unsplash.com/vector-1783697544959-920d10d3039f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoYWRlcnxlbnwwfHwwfHx8MA%3D%3D",
    profileImg:"https://images.unsplash.com/photo-1729101145906-e9274c012ed7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    role: "Manager",
    empId: 3003,
  },
  {
    name: "Neha Yadav",
   desc: "HR Executive Handles recruitment and employee support.",
    bgImage:"https://images.unsplash.com/vector-1783697544959-920d10d3039f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNoYWRlcnxlbnwwfHwwfHx8MA%3D%3D",
    profileImg:"https://images.unsplash.com/photo-1610980458985-24fa031d8e0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5laGF8ZW58MHx8MHx8fDA%3D",
    role: "HR",
    empId: 4004,
  },
];

export const PropExamples = () => {
  return (
    <div className="pt-18">
      {/* Products */}
      <div className="pl-14">
        <h3 className="text-2xl py-4 capitalize font-semibold tracking-tight underline">
          Product example
        </h3>
      </div>
      <div className="flex items-start justify-center mb-2  flex-wrap gap-4">
        {products.map((data) => (
          <ProductCard
            decs={data.decs}
            img={data.img}
            name={data.name}
            price={data.price}
            updateDate={data.updateDate}
          />
        ))}
      </div>

      {/* Students */}
      <div className="pl-14">
        <h3 className="text-2xl py-4 capitalize font-semibold tracking-tight underline">
          student example
        </h3>
      </div>

      <div className="flex items-center justify-center mb-2 flex-wrap gap-2 px-2">
        {students.map((data) => (
          <Card
            bgImage={data.bgImage}
            name={data.name}
            profileImg={data.profileImg}
            rolleNo={data.rolleNo}
            role={data.role}
          />
        ))}
      </div>
      {/* Employees */}
      <div className="pl-14">
        <h3 className="text-2xl py-4 capitalize font-semibold tracking-tight underline">
          Employees example
        </h3>
      </div>

      <div className="flex items-center justify-center mb-2 flex-wrap gap-2 px-2">
        {employees.map((data) => (
          <Card
            bgImage={data.bgImage}
            name={data.name}
            profileImg={data.profileImg}
            empId={data.empId}
            role={data.role}
            desc={data.desc}
          />
        ))}
      </div>
      {/* Blog Link */}
      <div className="flex items-center justify-between px-12 py-4 my-1">
        <span>
          <IconArrowRightToArc className="text-red-500" size={20} stroke={2} />
        </span>
        <a
          className="text-blue-500 underline uppercase font-mono"
          target="_blank"
          href="https://blog.logrocket.com/react-children-prop-typescript/"
        >
          read blog on props
        </a>
      </div>
      <Footer />
    </div>
  );
};

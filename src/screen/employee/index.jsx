import EmployeeCard from "../../feature/employee/widgets/employee-card";

const Employee = () => {
  return (
    <div className="mt-6 p-6 bg-white rounded-lg">
      <div className="text-start">
        <div className="text-2xl font-bold">Employee</div>
        <div className="text-sm font-medium ">Our Dedicated Team</div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  );
};

export default Employee;

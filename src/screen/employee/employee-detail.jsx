import { Divider, Tabs } from "antd";
import { image } from "../../constants/images-icons";
import Experience from "../../feature/employee/widgets/experience";
import EducationSteps from "../../feature/employee/widgets/Education";
import Membership from "../../feature/employee/widgets/Membership";

const tabItems = [
  { label: `Work Experience`, key: "1", children: <Experience /> },
  { label: `Educational`, key: "2", children: <EducationSteps /> },
  { label: `Association or Membership`, key: "3", children: <Membership /> },
];
const EmployeeDetail = ({}) => {
  return (
    <div className="flex mt-6 p-6 bg-white rounded-lg gap-4">
      <div className="w-[30%] border rounded-md border-gray-300 p-2">
        <div className="flex gap-3">
          <img
            src={image.employeeAvatar}
            className="w-16 h-16 rounded-sm overflow-hidden"
          />
          <div>
            <div className="text-base font-semibold">Mohit</div>
            <div className="text-gray-500">Physiotherapist</div>
          </div>
        </div>
        <Divider />
        <div className="text-base font-semibold">About</div>
        <div className="flex flex-col gap-2 mt-2">
          <InfoItem title={"Email"} data={"mohit82842@gmail.com"} />
          <InfoItem title={"Contact"} data={"+91 884733579"} />
          <InfoItem title={"Gender"} data={"Male"} />
          <InfoItem title={"Age"} data={"25"} />
          <InfoItem title={"Dob"} data={" 02 oct 1999"} />
          <InfoItem title={"Communication"} data={" Hindi, Punjab"} />
          <InfoItem title={"Location"} data={"Sector 71"} />
          <InfoItem title={"Status"} data={"On-Leave"} />
          <InfoItem title={"Hired Date"} data={"Feb-14"} />
        </div>
        <Divider />
        <div className="text-base font-semibold">Identification</div>
        <div className="flex flex-col gap-2 mt-2">
          <InfoItem title={"Employee ID"} data={"23738743"} />
          <InfoItem title={"License No"} data={"23738743"} />
        </div>
        <Divider />
        <div className="text-base font-semibold">Roles & Responsibilities</div>
        <div className="flex flex-col gap-2 mt-2">
          <InfoItem title={"Position"} data={"Physiotherapy"} />
          <InfoItem title={"Shift"} data={"Morning"} />
          <InfoItem title={"Job Type"} data={"Full Time"} />
          <div className="flex flex-col justify-between">
            <div className="text-gray-700"> Responsibilities:</div>
            <div className="font-medium flex flex-col gap-2 mt-2">
              <div>
                Attendance and Punctuality: Track employee attendance and
                punctuality using a points system to ensure adequate staffing
                levels at all times. This helps in minimizing disruptions to
                patient care.
              </div>
              <div>
                Patient Care Metrics: Use metrics related to patient care, such
                as response times, patient satisfaction scores, and adherence to
                protocols, to evaluate staff performance and allocate points
                accordingly.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-grow">
        <Tabs
          defaultActiveKey="1"
          type="card"
          size={"middle"}
          items={tabItems.map((val, i) => val)}
        />
      </div>
    </div>
  );
};

export default EmployeeDetail;
const InfoItem = ({ title, data }) => (
  <div className="flex justify-between">
    <div className="text-gray-700">{title} :</div>
    <div className="font-medium"> {data}</div>
  </div>
);

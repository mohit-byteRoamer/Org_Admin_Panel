import { image } from "../../../constants/images-icons";
import { navigate } from "../../../utils/common-function";

const EmployeeCard = ({
  id,
  pic,
  name,
  email,
  phone,
  type,
  state,
  hiredDate,
}) => (
  <div
    key={id}
    onClick={() => navigate("")}
    className="flex shadow-md cursor-pointer flex-col border rounded-lg border-gray-300 p-2"
  >
    <div className="flex items-center gap-4">
      <img src={image.employeeAvatar} className="w-10 h-10 rounded-full" />
      <div className="flex flex-col">
        <div className="text-base font-semibold">Mohit</div>
        <div className="text-gray-500">Physiotherapist</div>
      </div>
    </div>
    <div className="flex flex-col gap-2 mt-2">
      <InfoItem title={"Email"} data={"mohit82842@gmail.com"} />
      <InfoItem title={"Contact"} data={"+91 884733579"} />
      <InfoItem title={"Status"} data={"On-Leave"} />
      <InfoItem title={"Hired Date"} data={"Feb-14"} />
    </div>
  </div>
);

export default EmployeeCard;

const InfoItem = ({ title, data }) => (
  <div className="flex justify-between">
    <div className="text-gray-700">{title} :</div>
    <div className="font-semibold"> {data}</div>
  </div>
);

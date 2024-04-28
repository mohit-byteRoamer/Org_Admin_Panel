const HeaderSection = ({}) => (
  <div className="w-full p-2 flex gap-2 my-4">
    <UpperCard title={"Total Patients"} number={100} />
    <UpperCard title={"Total Patients"} number={100} />
    <UpperCard title={"Total Patients"} number={100} />
  </div>
);

export default HeaderSection

const UpperCard = ({ title, number }) => (
  <div className="w-1/3 flex flex-col h-auto p-2 gap-y-4 bg-white rounded-lg">
    <div className="self-start text-sm font-semibold text-gray-500">
      {title}
    </div>
    <div className="self-end text-2xl font-bold tracking-widest">{number}</div>
  </div>
);

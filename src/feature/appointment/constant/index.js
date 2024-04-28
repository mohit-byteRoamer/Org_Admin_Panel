import { getStatusColors } from "../../../constants";
import { formatDate, formatTimeTo12Hour } from "../../../utils/common-function";

const bankList = [
  {
    id: 0,
    value: "State Bank of India (SBI)",
    label: "State Bank of India (SBI)",
  },
  { id: 1, value: "HDFC Bank", label: "HDFC Bank" },
  { id: 2, value: "ICICI Bank", label: "ICICI Bank" },
  {
    id: 3,
    value: "Punjab National Bank (PNB)",
    label: "Punjab National Bank (PNB)",
  },
  { id: 4, value: "Axis Bank", label: "Axis Bank" },
  {
    id: 5,
    value: "Bank of Baroda (BoB)",
    label: "Bank of Baroda (BoB)",
  },
  { id: 6, value: "Canara Bank", label: "Canara Bank" },
  { id: 7, value: "Union Bank of India", label: "Union Bank of India" },
  { id: 8, value: "IDBI Bank", label: "IDBI Bank" },
  { id: 9, value: "Bank of India", label: "Bank of India" },
  {
    id: 10,
    value: "Kotak Mahindra Bank",
    label: "Kotak Mahindra Bank",
  },
  { id: 11, value: "IndusInd Bank", label: "IndusInd Bank" },
  { id: 12, value: "Yes Bank", label: "Yes Bank" },
  {
    id: 13,
    value: "Central Bank of India",
    label: "Central Bank of India",
  },
  {
    id: 14,
    value: "Indian Overseas Bank",
    label: "Indian Overseas Bank",
  },
  { id: 15, value: "Punjab & Sind Bank", label: "Punjab & Sind Bank" },
  { id: 16, value: "Federal Bank", label: "Federal Bank" },
  { id: 17, value: "IDFC First Bank", label: "IDFC First Bank" },
  { id: 18, value: "Karur Vysya Bank", label: "Karur Vysya Bank" },
  { id: 19, value: "RBL Bank", label: "RBL Bank" },
];

const servicesList = [
  {
    _id: "44d30da3f01942909493b8fcbb6e90b8",
    title: "Hydro therapy",
    value: "Hydro therapy",
    label: "Hydro therapy",
  },
  {
    _id: "d714e6a7d707487ba39e276cc1040d94",
    title: "Suspension therapy",
    value: "Suspension therapy",
    label: "Suspension therapy",
  },
  {
    _id: "dbdeffd2b7b04dde872ae020151f1399",
    title: "Relaxation",
    value: "Relaxation",
    label: "Relaxation",
  },
  {
    _id: "8e6ec628318c4e5789ff6e6b839b9310",
    title: "Chest physiotherapy",
    value: "Chest physiotherapy",
    label: "Chest physiotherapy",
  },
  {
    _id: "d7aa6361397b40a69e703ae1aa5c47de",
    title: "Electrotherapy",
    value: "Electrotherapy",
    label: "Electrotherapy",
  },
  {
    _id: "f4dfae14019943f6a8ecf154dbac78a8",
    title: "Neurological Physiotherapy",
    value: "Neurological Physiotherapy",
    label: "Neurological Physiotherapy",
  },
  {
    _id: "9b2de1ee7c214ad797a5ee806b8fe38b",
    title: "Orthopaedic Physiotherapy",
    value: "Orthopaedic Physiotherapy",
    label: "Orthopaedic Physiotherapy",
  },
  {
    _id: "c736c948837540e5a9e20e9e1a82596f",
    title: "Paediatric Conditions",
    value: "Paediatric Conditions",
    label: "Paediatric Conditions",
  },
  {
    _id: "65219c8d4a0c4cd4bd7007b7f4f638fb",
    title: "Surgical condition",
    value: "Surgical condition",
    label: "Surgical condition",
  },
  {
    _id: "90eec755595a407ab79e42f690f8e2c4",
    title: "Orthotics and prosthetics",
    value: "Orthotics and prosthetics",
    label: "Orthotics and prosthetics",
  },
  {
    _id: "a80a8c823cd0488e934d8d9a467d5ccb",
    title: "Geriatric physiotherapy",
    value: "Geriatric physiotherapy",
    label: "Geriatric physiotherapy",
  },
  {
    _id: "5ce555d1cfad4ae8b05ccfc1514961af",
    title: "Magnetic therapy ",
    value: "Magnetic therapy ",
    label: "Magnetic therapy ",
  },
  {
    _id: "b5357c19a7d74a119b6b5f2e267434e1",
    title: "Dry needling and",
    value: "Dry needling and",
    label: "Dry needling and",
  },
  {
    _id: "4808df78c8aa4f949b44d2a113e2bc98",
    title: "Kinesio Taping",
    value: "Kinesio Taping",
    label: "Kinesio Taping",
  },
  {
    _id: "26cb53f32db74a2e90387624ecaa0cfc",
    title: "Joint mobilization",
    value: "Joint mobilization",
    label: "Joint mobilization",
  },
  {
    _id: "605b0899d20144258fb82f77e727d4ad",
    title: "Stretches and exercises",
    value: "Stretches and exercises",
    label: "Stretches and exercises",
  },
  {
    _id: "bdd896a4d63447e7ba8b54d0cc1210a6",
    title: "Rehabilitation",
    value: "Rehabilitation",
    label: "Rehabilitation",
  },
  {
    _id: "ede5507e6cb249bba123ff618053290d",
    title: "Strengthening and conditioning programs",
    value: "Strengthening and conditioning programs",
    label: "Strengthening and conditioning programs",
  },
  {
    _id: "c12bec93eeef455ea206ed0c6b0b416f",
    title: "Chiropractic Treatment",
    value: "Chiropractic Treatment",
    label: "Chiropractic Treatment",
  },
];

const packageList = [
  { id: 1, title: "Everyday", value: "Everyday", label: "Everyday" },
  { id: 2, title: "7 days", value: "7 days", label: "7 days" },
  { id: 3, title: "10 days", value: "10 days", label: "10 days" },
];

const sessionTypeList = [
  { id: 1, title: "Everyday", value: "Everyday", label: "Everyday" },
  { id: 2, title: "Alternate", value: "Alternate", label: "Alternate" },
  { id: 3, title: "Weekdays", value: "Weekdays", label: "Weekdays" },
  { id: 4, title: "Weekends", value: "Weekends", label: "Weekends" },
];

const sessionModeList = [
  { id: 1, title: "At Home", value: "At Home", label: "At Home" },
  { id: 2, title: "At Clinic", value: "At Clinic", label: "At Clinic" },
];

const genderList = [
  { id: 1, title: "Male", value: "Male", label: "Male" },
  { id: 2, title: "Female", value: "Female", label: "Female" },
];

const paymentModeList = [
  { id: 1, value: "online", label: "Online" },
  { id: 2, value: "Cash", label: "Cash" },
];

const issuesList = [
  {
    id: 0,
    value: "Sports injuries",
    label: "Sports injuries",
  },
  {
    id: 1,
    value: "Sciatica",
    label: "Sciatica",
  },
  {
    id: 2,
    value: "Shoulder impingement",
    label: "Shoulder impingement",
  },
  {
    id: 3,
    value: "Adhesive capsulitis (frozen shoulder)",
    label: "Adhesive capsulitis (frozen shoulder)",
  },
  {
    id: 4,
    value: "Repetitive strain injuries (RSIs)",
    label: "Repetitive strain injuries (RSIs)",
  },
  {
    id: 5,
    value: "Tendonitis and tendon tears",
    label: "Tendonitis and tendon tears",
  },
  {
    id: 6,
    value: "Bursitis",
    label: "Bursitis",
  },
  {
    id: 7,
    value: "Sprains and strains",
    label: "Sprains and strains",
  },
  {
    id: 8,
    value: "Joint dislocation",
    label: "Joint dislocation",
  },
  {
    id: 9,
    value: "Muscular Dystrophy",
    label: "Muscular Dystrophy",
  },
  {
    id: 10,
    value: "Vertigo",
    label: "Vertigo",
  },
  {
    id: 11,
    value: "Carpal Tunnel Syndrome",
    label: "Carpal Tunnel Syndrome",
  },
  {
    id: 12,
    value: "Chronic Fatigue Syndrome",
    label: "Chronic Fatigue Syndrome",
  },
  {
    id: 13,
    value: "Ankle sprain",
    label: "Ankle sprain",
  },
  {
    id: 14,
    value: "Parkinson’s Disease",
    label: "Parkinson’s Disease",
  },
  {
    id: 15,
    value: "Huntington’s Disease",
    label: "Huntington’s Disease",
  },
  {
    id: 16,
    value: "Pelvic Floor Dysfunction",
    label: "Pelvic Floor Dysfunction",
  },
  {
    id: 17,
    value: "Knee Ligament Injury",
    label: "Knee Ligament Injury",
  },
];

// Table Data Format
const tableListColumns = [
  {
    title: "S_no",
    dataIndex: "key",
    key: "s_no",
  },
  {
    title: "Patient ID",
    dataIndex: "fic",
    key: "patientID",
  },
  {
    title: "Patient Name",
    dataIndex: "patientName",
    key: "patientName",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Session mode",
    dataIndex: "mode",
    key: "mode",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (time) => <div>{formatDate(time)}</div>,
  },
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
    render: (time) => <div>{formatTimeTo12Hour(time)}</div>,
  },
  {
    title: "Issues",
    dataIndex: "issues",
    key: "issues",
    render: (issues) => {
      const issuesArray = issues.length > 2 ? [issues[0], issues[1]] : issues;
      const more = issues.length - issuesArray.length;
      return (
        <div className="flex max-w-60 gap-1">
          {issuesArray.map((issue, index) => (
            <div
              className="max-w-36  border border-gray-300 p-1 rounded-md bg-gray-50 text-xs"
              key={index}
              style={{
                whiteSpace: "nowrap", // Prevents text from wrapping
                overflow: "hidden", // Hides any content that overflows the container
                textOverflow: "ellipsis", // Renders an ellipsis (...) to indicate text overflow
              }}
            >
              {issue}
            </div>
          ))}
          {more > 0 && (
            <div className="border border-gray-300 px-2 rounded-md bg-gray-50 text-xs flex items-center justify-center">
              {more}+
            </div>
          )}
        </div>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => (
      <div
        className={`text-xs ${getStatusColors(text)?.textColor} ${
          getStatusColors(text)?.bgColor
        } font-semibold text-center  p-1 rounded-md m-1`}
      >
        {getStatusColors(text)?.text}
      </div>
    ),
  },
];

export {
  bankList,
  servicesList,
  packageList,
  sessionTypeList,
  sessionModeList,
  genderList,
  paymentModeList,
  issuesList,
  tableListColumns,
};

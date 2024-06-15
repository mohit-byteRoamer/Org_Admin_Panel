const localDataManagerConst = {
  access_token: "access_token",
  user_id: "user_id",
  userName: "userName",
  userRole: "artist",
};

const status = {
  Upcoming: { text: "Upcoming", textColor: "text-blue-500", bgColor: "bg-blue-50" },
  Ongoing: { text: "Ongoing", textColor: "text-yellow-500", bgColor: "bg-yellow-50" },
  Completed: { text: "Completed", textColor: "text-green-500", bgColor: "bg-green-50" },
  Canceled: { text: "Cancelled", textColor: "text-red-500", bgColor: "bg-red-50" },
};

const servicesList = [
  {
    id: "44d30da3f01942909493b8fcbb6e90b8",
    title: "Hydro therapy",
    value: "Hydro therapy",
    label: "Hydro therapy",
  },
  {
    id: "d714e6a7d707487ba39e276cc1040d94",
    title: "Suspension therapy",
    value: "Suspension therapy",
    label: "Suspension therapy",
  },
  {
    id: "dbdeffd2b7b04dde872ae020151f1399",
    title: "Relaxation",
    value: "Relaxation",
    label: "Relaxation",
  },
  {
    id: "8e6ec628318c4e5789ff6e6b839b9310",
    title: "Chest physiotherapy",
    value: "Chest physiotherapy",
    label: "Chest physiotherapy",
  },
  {
    id: "d7aa6361397b40a69e703ae1aa5c47de",
    title: "Electrotherapy",
    value: "Electrotherapy",
    label: "Electrotherapy",
  },
  {
    id: "f4dfae14019943f6a8ecf154dbac78a8",
    title: "Neurological Physiotherapy",
    value: "Neurological Physiotherapy",
    label: "Neurological Physiotherapy",
  },
  {
    id: "9b2de1ee7c214ad797a5ee806b8fe38b",
    title: "Orthopaedic Physiotherapy",
    value: "Orthopaedic Physiotherapy",
    label: "Orthopaedic Physiotherapy",
  },
  {
    id: "c736c948837540e5a9e20e9e1a82596f",
    title: "Paediatric Conditions",
    value: "Paediatric Conditions",
    label: "Paediatric Conditions",
  },
  {
    id: "65219c8d4a0c4cd4bd7007b7f4f638fb",
    title: "Surgical condition",
    value: "Surgical condition",
    label: "Surgical condition",
  },
  {
    id: "90eec755595a407ab79e42f690f8e2c4",
    title: "Orthotics and prosthetics",
    value: "Orthotics and prosthetics",
    label: "Orthotics and prosthetics",
  },
  {
    id: "a80a8c823cd0488e934d8d9a467d5ccb",
    title: "Geriatric physiotherapy",
    value: "Geriatric physiotherapy",
    label: "Geriatric physiotherapy",
  },
  {
    id: "5ce555d1cfad4ae8b05ccfc1514961af",
    title: "Magnetic therapy ",
    value: "Magnetic therapy ",
    label: "Magnetic therapy ",
  },
  {
    id: "b5357c19a7d74a119b6b5f2e267434e1",
    title: "Dry needling and",
    value: "Dry needling and",
    label: "Dry needling and",
  },
  {
    id: "4808df78c8aa4f949b44d2a113e2bc98",
    title: "Kinesio Taping",
    value: "Kinesio Taping",
    label: "Kinesio Taping",
  },
  {
    id: "26cb53f32db74a2e90387624ecaa0cfc",
    title: "Joint mobilization",
    value: "Joint mobilization",
    label: "Joint mobilization",
  },
  {
    id: "605b0899d20144258fb82f77e727d4ad",
    title: "Stretches and exercises",
    value: "Stretches and exercises",
    label: "Stretches and exercises",
  },
  {
    id: "bdd896a4d63447e7ba8b54d0cc1210a6",
    title: "Rehabilitation",
    value: "Rehabilitation",
    label: "Rehabilitation",
  },
  {
    id: "ede5507e6cb249bba123ff618053290d",
    title: "Strengthening and conditioning programs",
    value: "Strengthening and conditioning programs",
    label: "Strengthening and conditioning programs",
  },
  {
    id: "c12bec93eeef455ea206ed0c6b0b416f",
    title: "Chiropractic Treatment",
    value: "Chiropractic Treatment",
    label: "Chiropractic Treatment",
  },
];


const getStatusColors = (typeStatus) => {
  return status[typeStatus];
};

export { localDataManagerConst, status, getStatusColors,servicesList };

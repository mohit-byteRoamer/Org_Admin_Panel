const correctionGetOnGoingSessions = (data, type) => {
  const retunData = data.map((val, index) => ({
    id: val._id,
    key: index,
    issues: val.appointment_info.issues,
    date: val.appointment_info.day,
    time: val.appointment_info.time,
    mode: val.appointment_info.mode,
    patientName: val.patient_info.name,
    gender: val.patient_info.gender,
    fic: val.patient_info.pId,
    // fic: "FIC12332",
    status: type,
  }));

  return retunData;
};

const update_reqGetAppointmentsDetails = (idsArray, data, action) => {
  const correctionData = data?.sessions_records?.filter((val) => {
    const obj = val;
    if (idsArray.includes(val._id)) {
      obj.status = action;
    }
    return obj;
  });
  return { ...data, sessions_records: correctionData };
};

export { correctionGetOnGoingSessions, update_reqGetAppointmentsDetails };

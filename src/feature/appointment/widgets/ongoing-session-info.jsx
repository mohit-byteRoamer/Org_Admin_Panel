import React, { useEffect, useState } from "react";
import { Checkbox, Divider, Drawer } from "antd";
import { formatDate, formatTimeTo12Hour } from "../../../utils/common-function";
import Calendar from "../../../components/calendar/calendar";
import { useMutation } from "react-query";
import {
  cancelSessions,
  completedSession,
  reqGetAppointmentsDetails,
} from "../api";
import Loader from "../../../components/loader";
import { getStatusColors } from "../../../constants";
import AppButton from "../../../components/button/button";
import { update_reqGetAppointmentsDetails } from "../utils";

const OnGoingSessionInfo = ({ open, setOpen, id }) => {
  const [aboutCelenderSessionDrawer, setAboutCelenderSessionDrawer] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [onGoingSessionInfoData, setOnGoingSessionInfoData] = useState();
  const bookAppointmentMutation = useMutation(reqGetAppointmentsDetails, {
    onSuccess: (Data) => {
      const data = Data.result.data;
      setIsLoading(false);
      setOnGoingSessionInfoData(data);
    },
  });
  const patient_info = onGoingSessionInfoData?.patient_info;
  const appointmentDetailData = onGoingSessionInfoData?.appointment_info;
  const currentSessionInfoData = onGoingSessionInfoData?.current_session_info;
  const sessions_records = onGoingSessionInfoData?.sessions_records;

  useEffect(() => {
    open &&
      bookAppointmentMutation.mutate({
        id,
        onLoad: setIsLoading,
      });
  }, [open]);

  const onClose = () => {
    setOpen(false);
  };
  const updateLocalDetailData = (type, idsArray) =>
    setOnGoingSessionInfoData(
      update_reqGetAppointmentsDetails(idsArray, onGoingSessionInfoData, type)
    );
  return (
    <>
      <Drawer
        title={"On Going Session Detail"}
        width={"65%"}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <Section
              SectionName={"Patient Detail"}
              content={<PatientInformation {...patient_info} />}
            />
            <Divider />

            <Section
              SectionName={"Appointment Detail"}
              content={<AppointmentDetail {...appointmentDetailData} />}
            />
            <Divider />

            <Section
              SectionName={"Current Session Detail"}
              content={<CurrentSessionInfo {...currentSessionInfoData} />}
            />
            <Divider />
            <Section
              SectionName={"Sessions Records"}
              content={
                <Calendar
                  itemAction={() => setAboutCelenderSessionDrawer(true)}
                  data={sessions_records}
                />
              }
            />
          </div>
        )}
        {sessions_records?.length > 0 && (
          <AboutCelenderSessionDrawer
            appointmentId={id}
            updateLocalDetailData={(idArray, type) =>
              updateLocalDetailData(idArray, type)
            }
            rootMutation={bookAppointmentMutation}
            data={sessions_records}
            currentSessionData={currentSessionInfoData}
            isOpen={aboutCelenderSessionDrawer}
            drawerHandler={setAboutCelenderSessionDrawer}
          />
        )}
      </Drawer>
    </>
  );
};

export default OnGoingSessionInfo;

const Section = ({ SectionName, content }) => (
  <div>
    <div className="text-sm mb-2 font-semibold">{SectionName}</div>
    <div className="border border-gray-300 p-2 rounded-md">{content}</div>
  </div>
);

const SectionItemBox = ({ title, data }) => (
  <div className="flex flex-col gap-2 p-2">
    <div className="text-xs font-semibold">{title}</div>
    <div className="">{data}</div>
  </div>
);

const PatientInformation = ({ name, gender, phone, email, pId }) => (
  <>
    <div className="text-3xl mb-3 font-normal">{name}</div>
    <div className="flex gap-4 ">
      <SectionItemBox title={"Patient ID"} data={pId} />
      <SectionItemBox title={"Phone Number"} data={phone} />
      <SectionItemBox title={"Email"} data={email} />
      <SectionItemBox title={"Gender"} data={gender} />
    </div>
  </>
);

const AppointmentDetail = ({
  day,
  time,
  status,
  mode,
  type,
  issues,
  recurrenceType,
  vop,
  specialistObservation,
}) => (
  <>
    <div className="flex flex-col flex-wrap gap-4 ">
      <div className="flex gap-5">
        <SectionItemBox title={"Day"} data={formatDate(day)} />
        <SectionItemBox title={"Time"} data={formatTimeTo12Hour(time)} />
        <SectionItemBox title={"Status"} data={status} />
        <SectionItemBox title={"Session Mode"} data={mode} />
        <SectionItemBox title={"Appointment Type"} data={type} />
      </div>
      <div>
        <div className="p-2">
          <div className="text-sm font-semibold">{"Issues"}</div>
          <div className="flex gap-3 mt-1">
            {issues?.map((text) => (
              <div className="text-sm font-normal p-1.5 rounded-md border ">
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <SectionItemBox title={"Recurrence Type"} data={recurrenceType} />
        <SectionItemBox title={"Voice of Patient"} data={vop} />
        <SectionItemBox
          title={"Specialist Observation"}
          data={specialistObservation}
        />
      </div>
    </div>
  </>
);

const CurrentSessionInfo = ({
  fromDate = "",
  total_session = "",
  mode = "",
  time = "",
  package_type = "",
  session_type = "",
  fees = "",
  paid_amount = "",
  payment_info = "",
}) => (
  <>
    <div className="flex flex-col flex-wrap gap-4 ">
      <div className="flex gap-5">
        <SectionItemBox title={"Start From"} data={formatDate(fromDate)} />
        <SectionItemBox title={"Time"} data={formatTimeTo12Hour(time)} />
        <SectionItemBox
          title={"Total Number Of Sessions"}
          data={total_session}
        />
        <SectionItemBox title={"Session Mode"} data={mode} />
        <SectionItemBox title={"Session Type"} data={session_type} />
        <SectionItemBox title={"Package Type"} data={package_type} />
      </div>
      <div>
        <div className="text-sm font-semibold">{"Payment Details"}</div>
        <div className="flex gap-5">
          <SectionItemBox title={"Payment Mode"} data={payment_info.mode} />
          <SectionItemBox title={"Amount"} data={payment_info.amount} />
          <SectionItemBox title={"Bank Name"} data={payment_info.bank} />
          <SectionItemBox title={"VPA"} data={payment_info.vpa} />
        </div>
      </div>
    </div>
  </>
);

let whichButton;
const AboutCelenderSessionDrawer = ({
  appointmentId,
  updateLocalDetailData,
  rootMutation,
  data = [],
  currentSessionData,
  isOpen = false,
  drawerHandler = () => {},
}) => {
  const final_date = data[data.length - 1].date;
  const { fromDate, time, session_type, fees } = currentSessionData;
  const [actionLoader, setAcitonLoader] = useState();
  const [checkedItemIds, setCheckedItemIds] = useState([]);

  const cancelSessionMutation = useMutation(cancelSessions, {
    onSuccess: (Data) => {
      setAcitonLoader(false);
      updateLocalDetailData("Canceled", checkedItemIds);
      setCheckedItemIds([]);
    },
  });

  const completedSessionMutation = useMutation(completedSession, {
    onSuccess: (Data) => {
      const data = Data.result.data;
      setAcitonLoader(false);
      updateLocalDetailData("Completed", checkedItemIds);
      setCheckedItemIds([]);
    },
  });

  const ItemCheckHandler = (id) => {
    const checkIsExist = checkedItemIds.includes(id);
    if (checkIsExist) {
      const updatedCheckedItemIds = checkedItemIds.filter(
        (itemId) => itemId !== id
      );
      setCheckedItemIds(updatedCheckedItemIds);
    } else {
      setCheckedItemIds([...checkedItemIds, id]);
    }
  };

  const CancelSessionHandler = (type) => {
    whichButton = type;
    if (type == "cancel") {
      const ApiPayload = {
        payload: {
          aId: appointmentId,
          sId: checkedItemIds,
          fromDate,
          final_date,
          time,
          cReason: "not well cancellation Reason",
          sessionType: session_type,
          fees,
        },
        onLoad: setAcitonLoader,
      };
      cancelSessionMutation.mutate(ApiPayload);
    } else {
      const ApiPayload = {
        payload: {
          aId: appointmentId,
          sId: checkedItemIds[0],
        },
        onLoad: setAcitonLoader,
      };
      completedSessionMutation.mutate(ApiPayload);
    }
  };

  return (
    <Drawer
      title="About Session"
      width={450}
      onClose={() => drawerHandler(false)}
      open={isOpen}
    >
      <Section
        SectionName={"All Session Records"}
        content={
          <div>
            <div className="flex justify-between">
              <div className="flex gap-2 text-base font-medium">
                <div>Number of Session</div>
                <div>{data?.length}</div>
              </div>
              <div className="flex gap-2">
                <AppButton
                  onClick={() => CancelSessionHandler("cancel")}
                  size={"small"}
                  style={"bg-red-600"}
                  text="Cancel"
                  loading={actionLoader && whichButton == "cancel"}
                />

                <AppButton
                  size={"small"}
                  onClick={() => CancelSessionHandler("complete")}
                  style={
                    checkedItemIds.length <= 1 ? "bg-green-600" : "bg-green-300"
                  }
                  text="Completed"
                  disabled={!checkedItemIds.length > 1}
                  loading={actionLoader && whichButton == "complete"}
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              {data?.map((val) => (
                <SessionRecordsItem
                  ItemCheckHandler={ItemCheckHandler}
                  {...val}
                />
              ))}
            </div>
          </div>
        }
      />
    </Drawer>
  );
};

const SessionRecordsItem = ({ ItemCheckHandler, _id, date, status }) => (
  <div className="flex border p-2 rounded-md items-center justify-between">
    <div className=" flex gap-2 items-center">
      {status == "Upcoming" && (
        <Checkbox onChange={() => ItemCheckHandler(_id)} />
      )}
      <div className="text-sm">
        Session on :{" "}
        <span className="text-sm font-semibold">{formatDate(date)}</span>
      </div>
    </div>
    <div
      className={`text-xs ${getStatusColors(status)?.textColor} ${
        getStatusColors(status)?.bgColor
      } font-semibold text-center  p-1 rounded-md m-1`}
    >
      {getStatusColors(status)?.text}
    </div>
  </div>
);

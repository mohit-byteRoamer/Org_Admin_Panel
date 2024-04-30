import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useMutation } from "react-query";
import { correctionGetOnGoingSessions } from "../../feature/appointment/utils";
import { reqGetOnGoingSessions } from "../../feature/appointment/api";
import OnGoingSessionInfo from "../../feature/appointment/widgets/ongoing-session-info";
import { tableListColumns } from "../../feature/appointment/constant";
import HeaderSection from "../../feature/appointment/widgets/header-section";

let selectedListItemId = undefined;
const OnGoingAppointment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [onGoingSessionList, setOnGoingSessionList] = useState();
  const bookAppointmentMutation = useMutation(reqGetOnGoingSessions, {
    onSuccess: (data) => {
      const list = data.result.data;
      setIsLoading(false);
      const correctionData = correctionGetOnGoingSessions(list, "Ongoing");
      setOnGoingSessionList(correctionData);
    },
  });

  useEffect(() => {
    bookAppointmentMutation.mutate({
      id: "65ffe611c79982916009c475",
      onLoad: setIsLoading,
    });
  }, []);

  const [isViewSessionInfo, setIsViewSessionInfo] = useState(false);
  return (
    <div>
      <HeaderSection />
      <Table
        columns={tableListColumns}
        dataSource={onGoingSessionList}
        loading={isLoading}
        onRow={(record) => ({
          onClick: () => {
            selectedListItemId = record.id;
            setIsViewSessionInfo(true);
          },
        })}
        className="w-auto"
      />
      <OnGoingSessionInfo
        id={selectedListItemId}
        open={isViewSessionInfo}
        setOpen={setIsViewSessionInfo}
      />
    </div>
  );
};

export default OnGoingAppointment;

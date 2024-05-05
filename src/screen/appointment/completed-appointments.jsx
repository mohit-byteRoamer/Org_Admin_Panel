import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useMutation } from "react-query";
import { correctionGetOnGoingSessions } from "../../feature/appointment/utils";
import { completedSessionListAPI } from "../../feature/appointment/api";
import { tableListColumns } from "../../feature/appointment/constant";
import HeaderSection from "../../feature/appointment/widgets/header-section";

const CompletedAppointment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [onGoingSessionList, setOnGoingSessionList] = useState();
  const bookAppointmentMutation = useMutation(completedSessionListAPI, {
    onSuccess: (data) => {
      const list = data.result.data;
      setIsLoading(false);
      const correctionData = correctionGetOnGoingSessions(list, "Completed");
      setOnGoingSessionList(correctionData);
    },
  });

  useEffect(() => {
    bookAppointmentMutation.mutate({
      id: "65ffe611c79982916009c475",
      onLoad: setIsLoading,
    });
  }, []);

  return (
    <div>
      <HeaderSection />
      <Table
        scroll={{ x: true }}
        columns={tableListColumns}
        dataSource={onGoingSessionList}
        loading={isLoading}
      />
    </div>
  );
};

export default CompletedAppointment;

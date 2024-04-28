import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import { useMutation } from "react-query";
import { formatDate } from "../../utils/common-function";
import { paymentListAPI } from "../../feature/payment/api";
import { correctionPaymentList } from "../../feature/payment/utils";
import CustomModal from "../../components/modal";

const columns = [
  {
    title: "S_no",
    dataIndex: "key",
    key: "s_no",
  },
  {
    title: "Payment Amount",
    dataIndex: "paymentAmount",
    key: "paymentAmount",
  },
  {
    title: "Session mode",
    dataIndex: "sessionMode",
    key: "sessionMode",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (time) => <div>{formatDate(time)}</div>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text) => <Tag color="green">{text}</Tag>,
  },
];

let selectedListItemId = undefined;

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [onGoingSessionList, setOnGoingSessionList] = useState();
  const [isViewPaymentInfo, setIsViewPaymentInfo] = useState(false);

  const gatPaymenList = useMutation(paymentListAPI, {
    onSuccess: (data) => {
      const list = data.result.data;
      setIsLoading(false);
      const correctionData = correctionPaymentList(list);
      setOnGoingSessionList(correctionData);
    },
  });

  useEffect(() => {
    gatPaymenList.mutate({
      id: "65ffe611c79982916009c475",
      onLoad: setIsLoading,
    });
  }, []);

  return (
    <div>
      <div className="w-full p-2 flex gap-2 my-4">
        <UpperCard title={"Total Patients"} number={100} />
        <UpperCard title={"Total Patients"} number={100} />
        <UpperCard title={"Total Patients"} number={100} />
      </div>
      <Table
        columns={columns}
        dataSource={onGoingSessionList}
        loading={isLoading}
        onRow={(record) => ({
          onClick: () => {
            selectedListItemId = record.id;
            setIsViewPaymentInfo(true);
          },
        })}
      />
      <CustomModal isModalOpen={isViewPaymentInfo} />
    </div>
  );
};

const UpperCard = ({ title, number }) => (
  <div className="w-1/3 flex flex-col h-auto p-2 gap-y-4 bg-white rounded-lg">
    <div className="self-start text-sm font-semibold text-gray-500">
      {title}
    </div>
    <div className="self-end text-2xl font-bold tracking-widest">{number}</div>
  </div>
);
export default Payment;

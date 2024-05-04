import React, { useEffect, useState } from "react";
import { Divider, Table, Tag } from "antd";
import { useMutation } from "react-query";
import { formatDate } from "../../utils/common-function";
import {
  paymentDetails,
  paymentDetailsAPI,
  paymentListAPI,
} from "../../feature/payment/api";
import { correctionPaymentList } from "../../feature/payment/utils";
import CustomModal from "../../components/modal";
import AppButton from "../../components/button/button";
import Loader from "../../components/loader";

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
      {isViewPaymentInfo && (
        <CustomModal
          modalTItle={"Transaction Details"}
          ModalContent={<PaymentModal id={selectedListItemId} />}
          footer={[
            <AppButton
              onClick={() => setIsViewPaymentInfo(false)}
              size={"small"}
              style={"bg-red-600"}
              text="Cancel"
              loading={false}
            />,
          ]}
          isModalOpen={isViewPaymentInfo}
        />
      )}
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

const PaymentModal = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});
  const getPaymentDetails = useMutation(paymentDetailsAPI, {
    onSuccess: (data) => {
      const Data = data.result.data;
      setIsLoading(false);
      setPaymentDetails(Data);
    },
  });
  useEffect(() => {
    getPaymentDetails.mutate({
      id,
      onLoad: setIsLoading,
    });
  }, []);
  console.log(paymentDetails,"paymentDetails");
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div>
            <div className="font-semibold text-base">Transaction Id</div>
            <div className="text-xs">{paymentDetails?.transcation_id}</div>
          </div>
          <Divider />
          <div className="flex gap-2">
            <div className="flex-grow border rounded-lg p-2">
              <div className="text-center text-base font-semibold">
                Received From
              </div>
              <div className="flex mt-3 flex-col gap-2">
                <PaymentInfoItem title={"Sender"} data={"Sender Name"} />
                <PaymentInfoItem title={"Account Number"} data={"2000"} />
                <PaymentInfoItem title={"Payment"} data={"2000"} />
                <PaymentInfoItem title={"Status"} data={"Completed"} />
              </div>
            </div>
            <div className="flex-grow border rounded-lg p-2">
              <div className="text-center text-base font-semibold">
                Credited To
              </div>
              <div className="flex mt-3 flex-col gap-2">
                <PaymentInfoItem title={"Receiver"} data={"Mohit"} />
                <PaymentInfoItem title={"Account Number"} data={"2000"} />
                <PaymentInfoItem title={"Payment"} data={"2000"} />
                <PaymentInfoItem title={"Status"} data={"Completed"} />
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <div className="flex-grow border rounded-lg p-2">
              <div className="text-center text-base font-semibold">
                Payment From
              </div>
              <div className="flex mt-3 flex-col gap-2">
                <PaymentInfoItem title={"Payment Amount"} data={"500"} />
                <div className="flex justify-between">
                  <div className="text-gray-500">Fee</div>
                  <div className="text-red-500 font-semibold">-100</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-500">Total Amount</div>
                  <div className="text-green-500 font-semibold">350</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const PaymentInfoItem = ({ title, data }) => (
  <div className="flex justify-between">
    <div className="text-gray-500">{title}</div>
    <div className="text-primary-color font-semibold">{data}</div>
  </div>
);
export default Payment;

import React from "react";
import { Calendar } from "antd";
import { getDateNumber } from "../../utils/common-function";
import { getStatusColors, status } from "../../constants";
import moment from "moment";

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const Calender = ({ data, itemAction }) => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const matchDate = data?.find(
      (val) => getDateNumber(val.date) === value.format("YYYY-MM-DD")
    );

    return (
      <div className="h-full w-full overflow-hidden" onClick={matchDate && itemAction}>
        {matchDate && (
          <div
            className={`text-xs ${
              getStatusColors(matchDate?.status)?.textColor
            } ${
              getStatusColors(matchDate?.status)?.bgColor
            } font-semibold text-center  p-1 rounded-md m-1`}
          >
            {getStatusColors(matchDate?.status)?.text}
          </div>
        )}
      </div>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return (
    <Calendar
      disabledDate={
        true
          ? (current) => {
              return current && current < moment().startOf("day");
            }
          : undefined
      }
      cellRender={cellRender}
    />
  );
};
export default Calender;

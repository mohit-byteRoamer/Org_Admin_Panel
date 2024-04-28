import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loader = ({ size = 24, text = "Data Fetching .....", color = "" }) => (
  <div className="flex flex-col gap-2 text-center justify-center">
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: size,
          }}
          spin
        />
      }
    />
    <div className="text-xs text-gray-500">{text}</div>
  </div>
);

export default Loader;

import React from "react";
import {
  HomeFilled,
  CalendarFilled,
  MoneyCollectFilled,
  TeamOutlined,
} from "@ant-design/icons";
import { Routes, Route } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { navigate } from "../../utils/common-function";
import OnGoingAppointment from "../../screen/appointment/onGoing-appointment";
import CreateAppointment from "../../screen/appointment/book-appointment-form";
import CompletedAppointments from "../../screen/appointment/completed-appointments";
import Payment from "../../screen/payment/payment-list";
import Dashboard from "../../screen/dashboard";
import Employee from "../../screen/employee";
import EmployeeDetail from "../../screen/employee/employee-detail";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children, onClick, childrenStyle) {
  return {
    key,
    label,
    icon,
    onClick,
    children,
    childrenStyle,
  };
}

const items = [
  getItem("Book Appointment", "1", <CalendarFilled />, null, () =>
    navigate("")
  ),
  getItem("Dashboard", "2", <HomeFilled />, null, () => navigate("dashboard")),
  getItem("Appointment", "sub1", <CalendarFilled />, [
    getItem("OnGoing Session", "A1", null, null, () =>
      navigate("onGoing-session")
    ),
    getItem("Completed Appointments", "A2", null, null, () =>
      navigate("completed-appointments")
    ),
  ]),
  getItem("Payments", "3", <MoneyCollectFilled />, null, () =>
    navigate("payments")
  ),
  getItem("Employee", "4", <TeamOutlined />, null, () => navigate("employee")),
];

const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        width={230}
        theme="light"
        title="mohti"
        className="custom-sider"
        breakpoint="lg" // Set the breakpoint to trigger responsive behavior
        collapsedWidth="0" // Specify the collapsed width when the sidebar is collapsed
        collapsible // Enable collapsible behavior
      >
        <div className="text-primary-color text-center tracking-widest text-2xl font-extrabold mt-4 mb-4">
          Fornax
        </div>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          dangerItemColor={"red"}
          items={items}
          style={{ textAlign: "start", backgroundColor: "#ffffff" }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            // background: "red",
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div className="container w-full overflow-hidden h-full">
            <Routes>
              <Route path="/" element={<CreateAppointment />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/onGoing-session" element={<OnGoingAppointment />} />
              <Route
                path="/completed-appointments"
                element={<CompletedAppointments />}
              />
              <Route path="/payments" element={<Payment />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/employee-detail" element={<EmployeeDetail />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;

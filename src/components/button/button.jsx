import { Button } from "antd";

const Size = "default" | "small" | "large";
const AppButton = ({
  icon = null,
  text,
  loading = false,
  onClick = () => {},
  size = Size,
  style,
  disabled,
}) => (
  <Button
    disabled={disabled}
    type="primary"
    size={size}
    icon={icon}
    loading={loading}
    onClick={onClick}
  
    className={style}
  >
    {text}
  </Button>
);

export default AppButton;

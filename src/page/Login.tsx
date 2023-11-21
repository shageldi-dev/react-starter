import { Button, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <Button onClick={() => navigate("/")}>Click me</Button>
      </Content>
    </Layout>
  );
};

export default Login;

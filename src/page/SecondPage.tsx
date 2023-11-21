import { Typography } from "antd";
import ParticleCanvas from "../components/home/ParticalCanvas";
import MusicCanvas from "../components/home/MusicCanvas";

const SecondPage = () => {
  return (
    <div
      style={{
        minWidth: "80%",
        minHeight: "80vh",
        overflow: "hidden",
        position: "absolute",
      }}
    >
      <div style={{ position: "absolute" }}>
        <Typography>This is second page</Typography>
        <Typography>This is second page</Typography>
        <Typography>This is second page</Typography>
        <Typography>This is second page</Typography>
        <Typography>This is second page</Typography>
        <Typography>This is second page</Typography>
        <Typography>This is second page</Typography>
        <Typography>This is second page</Typography>
        <Typography>This is second page</Typography>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          overflow: "hidden",
        }}
      >
        <MusicCanvas />
      </div>
    </div>
  );
};

export default SecondPage;

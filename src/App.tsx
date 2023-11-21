import { ConfigProvider } from "antd";
import Router from "./components/routes/Router";
import { useSelector } from "react-redux";
import { selectThemeMode } from "./store/slices/theme.slice";
import { darkTheme, lightTheme } from "./common/theme/antd.theme";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  const themeMode = useSelector(selectThemeMode);

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={themeMode == "dark" ? darkTheme : lightTheme}>
        <Router />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

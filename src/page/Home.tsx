import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import PostsList from "../components/posts/PostsList";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography>{t("home_page")}</Typography>
      <PostsList />
    </div>
  );
};

export default Home;

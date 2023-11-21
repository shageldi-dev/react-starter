import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Typography } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "../../common/language/i18n";

const LanguageSelect: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      label: (
        <Typography onClick={() => i18n.changeLanguage("tm")}>
          Turkmen
        </Typography>
      ),
      key: "0",
    },
    {
      label: (
        <Typography onClick={() => i18n.changeLanguage("en")}>
          English
        </Typography>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Select your favorite language",
      key: "3",
      disabled: true,
    },
  ];

  const { t } = useTranslation();

  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {t("select_lang")}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default LanguageSelect;

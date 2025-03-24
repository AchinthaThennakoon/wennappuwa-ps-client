import React from "react";
import { useTranslation } from "react-i18next";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import contactData from "../../data/contactData";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full md:w-1/2 p-8">
      <h3 className="text-indigo-600 font-semibold">{t("contact_us")}</h3>
      <h2 className="text-3xl font-bold my-2">{t("get_in_touch")}</h2>
      <p className="text-gray-600 mb-6">{t("contact_us_txt")}</p>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <LocationOn className="text-blue-500" />
          <div>
            <h4 className="font-semibold">{t("address-label")}</h4>
            <p className="text-gray-500">{t("address")}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Phone className="text-blue-500" />
          <div>
            <h4 className="font-semibold">{t("phone_number")}</h4>
            <p className="text-gray-500">{contactData.phone}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Email className="text-blue-500" />
          <div>
            <h4 className="font-semibold">{t("email_address")}</h4>
            <p className="text-gray-500">{contactData.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

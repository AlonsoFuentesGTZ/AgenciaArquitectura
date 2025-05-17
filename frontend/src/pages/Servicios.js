import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Servicios.css";
import Footer from "../components/Footer";

const Servicios = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="servicios">
        <h2>{t("services_title")}</h2>
        <div className="card-container">
          <div className="card">
            <h3>{t("services_design")}</h3>
            <p>{t("services_design_desc")}</p>
          </div>
          <div className="card">
            <h3>{t("services_consulting")}</h3>
            <p>{t("services_consulting_desc")}</p>
          </div>
          <div className="card">
            <h3>{t("services_renovation")}</h3>
            <p>{t("services_renovation_desc")}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Servicios;

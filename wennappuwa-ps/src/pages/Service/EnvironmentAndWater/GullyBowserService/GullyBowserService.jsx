import React from "react";
import Section from "../../../../components/SectionedText/SectionedText";
import { Typography } from "@mui/material";
import DownloadButton from "../../../../components/DownloadButton/DownloadButton";
import pdfData from "../../../../data/pdfData.json";

const GullyBowserService = () => {
  return (
    <div className="p-6">
      <div className="relative mb-12 w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center filter brightness-[40%] sepia-[100%] saturate-[120%] hue-rotate-[-0deg] bg-[url('../../../images/gully_bowser.jpg')]">
        <Typography
          variant="h2"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-center"
        >
          GULLY BOWSER
        </Typography>
      </div>

      <Section title="All you Need to Know">
        <Typography className="pl-10">
          If yours is a non-profit organisation and is not part of government,
          you can apply for registration. You can submit your non-profit
          organisation (NPO) application at your nearest provincial social
          development office.
        </Typography>
        <Typography className="mt-2 pl-10">
          NPOs include trusts, companies or other associations of persons
          established for a public purpose.
        </Typography>
        <Typography className="mt-2 pl-10">
          Registering your NPO is beneficial because its certificate:
        </Typography>
        <ul className="list-disc pl-15 mt-2 ">
          <li>Improves your credibility and funding opportunities</li>
          <li>Allows your organisation to open a bank account</li>
          <li>Helps your organisation with tax incentives</li>
        </ul>
        <Typography className="mt-2 pl-10">
          To register, you must be one of the following:
        </Typography>
        <ul className="list-disc pl-15 mt-2">
          <li>Non-governmental organisation (NGO)</li>
          <li>Community-based organisation (CBO)</li>
        </ul>
      </Section>

      <Section title="Conditions to be Met">
        <Typography className="pl-10">
          a. Tappayers property being situated within the local authority
        </Typography>
        <Typography className="pl-10">
          b. Being the occupant of a land or building who belongs to any of the
          following categories; Owner of Immovable property
        </Typography>
      </Section>
    </div>
  );
};

export default GullyBowserService;

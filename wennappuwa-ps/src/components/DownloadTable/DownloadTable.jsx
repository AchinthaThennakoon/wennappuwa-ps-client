import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { useTranslation } from "react-i18next";

const DownloadTable = ({ title, data, isYearBased = false }) => {
  const { t } = useTranslation();
  console.log(title);

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{t(title)}</h2>
      <TableContainer
        component={Paper}
        className="shadow-md"
        sx={{ maxHeight: 500 }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow className="bg-gray-100">
              <TableCell className="font-semibold">
                {isYearBased ? "Year" : t(title)}
              </TableCell>
              <TableCell className="font-semibold">{t("download")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell>{item.name || item.year}</TableCell>
                <TableCell>
                  <a href={`/pdfs/${item.file}`} download>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      startIcon={<DownloadIcon />}
                    >
                      {t("download")}
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DownloadTable;

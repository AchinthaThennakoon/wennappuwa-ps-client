import React, { useEffect, useState } from "react";
import DownloadTable from "../../components/DownloadTable/DownloadTable";
import pdfData from "../../data/pdfData.json";

function Downloads() {
  const [data, setData] = useState({
    applications: [],
    budgets: [],
    finalAccounts: [],
    generalAssemblyReports: [],
    budgetReports: [],
    localGovPolicy: [],
  });

  useEffect(() => {
    // Simulated API fetch (Replace with backend API in the future)
    setData(pdfData);
    console.log(pdfData);
  }, []);

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600 text-center mb-6">
          Downloads
        </h1>
        <DownloadTable title="Applications" data={data.applications} />
        <DownloadTable title="Budget" data={data.budgets} isYearBased />
        <DownloadTable title="Final accounts" data={data.finalAccounts} />
        <DownloadTable
          title="General Assembly Reports"
          data={data.generalAssemblyReports}
        />
        <DownloadTable title="Budget reports" data={data.budgetReports} />
        <DownloadTable
          title="Local Government Policy Statement"
          data={data.localGovPolicy}
        />
      </div>
    </>
  );
}

export default Downloads;

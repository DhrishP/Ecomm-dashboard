"use client";
import React from "react";
import JsonEditorModal from "../editors/JSON-editor";
import { defaultBills } from "@/utils/quick-data";
import axios from "axios";
import { useParams } from "next/navigation";
type OnSubmitProps = {
  categories?: string[];
  colors?: Record<string, string>;
  sizes?: Record<string, string>;
  bills?: Record<string, string>;
};

const SampleDataModalBill = () => {
  const param = useParams();
  const onSubmit = async (data: OnSubmitProps) => {
    console.log(data);
    const putBills = await axios.post(`/api/${param.StoreId}/multipleBills`, {
      dataObj: data.bills,
    });
    if (putBills.status === 200) {
      console.log("Bills added successfully");
    } else {
      return;
    }
  };
  return (
    <JsonEditorModal
      title="Edit Store and Add Sample Data"
      description="Make changes to your profile and add sample data for billboards in JSON format."
      fields={[
        {
          name: "bills",
          defaultValue: defaultBills,
          label: "Bills{billboard text : billboard url}",
        },
      ]}
      onSubmit={onSubmit}
      triggerButtonText="Add Quick Data⚡"
    />
  );
};

export default SampleDataModalBill;

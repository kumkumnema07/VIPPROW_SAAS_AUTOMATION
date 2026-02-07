"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PersonalForm() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    gender: "",
  });

  const handleChange = (name: string, value: string) => {
    setValues((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Personal:", values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Details</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          placeholder="First Name"
          value={values.first_name}
          onChange={(e) => handleChange("first_name", e.target.value)}
        />

        <Input
          placeholder="Last Name"
          value={values.last_name}
          onChange={(e) => handleChange("last_name", e.target.value)}
        />

        <Input
          type="date"
          value={values.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
        />

        <Button onClick={handleSubmit}>Save Personal</Button>
      </CardContent>
    </Card>
  );
}

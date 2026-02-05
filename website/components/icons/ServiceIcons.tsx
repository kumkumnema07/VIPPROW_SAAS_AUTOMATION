import React from "react";
import { GoCopilot } from "react-icons/go";

/* ================= ICON TYPE ================= */
export type IconType = React.ComponentType<{ className?: string }>;

/* ================= ICONS ================= */

export const DigitalMarketingIcon: IconType = ({ className }) => {
  return (
    <div className={`rounded-full bg-orange-400 ${className}`} />
  );
};

export const AutomationIcon: IconType = ({ className }) => {
  return (
    <GoCopilot className={className} />
  );
};

export const AnalyticsIcon: IconType = ({ className }) => {
  return (
    <div className={`rounded-full bg-blue-500 ${className}`} />
  );
};

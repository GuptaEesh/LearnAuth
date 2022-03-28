import React from "react";
import { Navigate } from "react-router-dom";

export function Private({ component }) {
  return !localStorage.getItem("info") ? (
    <Navigate to="/login" replace />
  ) : (
    component
  );
}

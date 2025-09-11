import React from "react";
import { useAuth } from "@clerk/clerk-react";

export default function GetTokenButton() {
  const { getToken, isSignedIn } = useAuth();

  const handleGetToken = async () => {
    if (!isSignedIn) {
      alert("You must be signed in to get a token!");
      return;
    }

    try {
      const token = await getToken({ template: "default" });
      console.log("Clerk JWT:", token);
      alert("Token printed in console. Copy it for Postman.");
    } catch (err) {
      console.error("Error getting token:", err);
    }
  };

  return (
    <button
      onClick={handleGetToken}
      style={{
        padding: "10px 20px",
        background: "teal",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        marginTop: "20px"
      }}
    >
      Get Clerk JWT
    </button>
  );
}

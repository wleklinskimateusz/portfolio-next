"use client";

import { useEffect } from "react";

export const WelcomeMessage = () => {
  useEffect(() => {
    console.log("Welcome to my portfolio! I hope you enjoy your stay!");
  }, []);

  return null;
};

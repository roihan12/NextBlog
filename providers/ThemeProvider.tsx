"use client";

import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const ThemeProviders = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProviders;

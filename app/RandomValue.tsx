"use client";

import { useEffect, useState } from "react";

export default function RandomValue() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(Math.random());
  }, []);

  return <h6>{number}</h6>;
}

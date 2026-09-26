"use client";

import { useEffect, useState } from "react";
import { Config } from "@/config";

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: Config.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "shortOffset",
});

/** Current time where Rashad is based. Rendered client-side only. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return <time suppressHydrationWarning>{time ?? "--:--"}</time>;
}

import {Calendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function App() {
  return (
    <Calendar
      aria-label="Date (Min Date Value)"
      defaultValue={today(getLocalTimeZone())}
      minValue={today(getLocalTimeZone())}
    />
  );
}
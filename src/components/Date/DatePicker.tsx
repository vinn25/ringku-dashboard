import React, { useEffect, useRef, useState } from "react";
import AirDatepicker, { AirDatepickerOptions } from "air-datepicker";
import moment from "moment";

const DatePicker = ({ ...props }: AirDatepickerOptions) => {
  let input = useRef<HTMLInputElement | any>("");
  let dp = useRef<AirDatepicker | null>(null);

  //   const [getDate, setGetDate] = useState<string>();

  //   const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const date = e.target.value;
  //     const formattedDate = moment(date).toISOString();
  //     setGetDate(date);
  //     console.log(getDate);
  //   };

  useEffect(() => {
    dp.current = new AirDatepicker(input.current, { ...props });
  }, []);

  useEffect(() => {
    dp.current?.update({ ...props });
  }, [props]);

  return (
    <input
      className="text-center text-text-md px-2 focus-visible:outline-none"
      //   onChange={handleChangeDate}
      ref={input}
    />
  );
};

export default DatePicker;

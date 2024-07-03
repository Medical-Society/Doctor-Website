import { useState, useCallback, useMemo } from "react";
import { IWeekDays } from "../interfaces";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { updateAvailableTime } from "../services/settingsService";
import { useDispatch } from "react-redux";
import { updateDoctor } from "../app/features/authSlice";

const AvailableTime = () => {
  const doctor = useMemo(() => JSON.parse(Cookies.get("doctor") || "{}"), []);
  const dispatch = useDispatch();
  const doctorLimit = doctor?.availableTime?.limit || 0;
  const doctorWeekDays = doctor?.availableTime?.weekdays || {};
  console.log(doctorWeekDays);
  console.log(doctorLimit);
  const [limit, setLimit] = useState<number>(doctorLimit);
  const [weekDays, setWeekDays] = useState<IWeekDays>(doctorWeekDays);
  const [loading, setLoading] = useState<boolean>(false);

  const remainingDays = useMemo(
    () => ["SATURDAY", "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"]
      .filter((day) => !Object.keys(weekDays).includes(day)),
    [weekDays]
  );

  const handleAddDay = useCallback(() => {
    if (!remainingDays.length) return;

    setWeekDays((prev) => ({
      ...prev,
      [remainingDays[0]]: {
        from: { hour: 0, minute: 0 },
        to: { hour: 0, minute: 0 },
      },
    }));
  }, [remainingDays]);

  const handleUpdateAvailableTime = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const isValid = Object.values(weekDays).every((time) => {
      if (time.from.hour > time.to.hour) return false;
      if (time.from.hour === time.to.hour && time.from.minute >= time.to.minute) return false;
      if (time.to.hour - time.from.hour === 0 && time.to.minute - time.from.minute < 30) return false;
      return true;
    });

    if (!isValid) {
      toast.error("Invalid time range");
      return;
    }

    const availableTime = { limit, weekdays: weekDays };

    try {
      setLoading(true);
      await updateAvailableTime(availableTime);
      toast.success("Available time updated successfully");
      dispatch(updateDoctor({ ...doctor, availableTime }));
    } catch (error) {
      console.error(error);
      toast.error("Failed to update available time");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveDay = useCallback((day: string) => {
    setWeekDays((prev) => {
      const { [day]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const handleChange = useCallback((day: string, field: string, value: any) => {
    setWeekDays((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  }, []);

  const handleDayChange = useCallback((oldDay: string, newDay: string) => {
    setWeekDays((prev) => {
      const { [oldDay]: time, ...rest } = prev;
      return {
        ...rest,
        [newDay]: time,
      };
    });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-primary text-3xl font-medium font-cairo mb-4">Update Available Time</h1>
        <button
          className="p-2 bg-primary text-white rounded"
          onClick={handleUpdateAvailableTime}
          disabled={loading}
        >
          {loading ? "Loading..." : "Save Changes"}
        </button>
      </div>
      <div className="space-y-4">
        <div className="mb-4">
          <label className="block font-cairo">How many patients can you see in an hour?</label>
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        {Object.entries(weekDays).map(([day, time], index) => (
          <TimeRangeInput
            key={index}
            day={day}
            time={time}
            onRemove={handleRemoveDay}
            onChange={handleChange}
            onDayChange={handleDayChange}
          />
        ))}
        <button
          onClick={handleAddDay}
          className="p-2 px-9 bg-primary text-white rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
          disabled={!remainingDays.length}
        >
          Add Day
        </button>
      </div>
    </div>
  );
};

interface TimeRangeInputProps {
  day: string;
  time: {
    from: { hour: number; minute: number };
    to: { hour: number; minute: number };
  };
  onRemove: (day: string) => void;
  onChange: (day: string, field: string, value: any) => void;
  onDayChange: (oldDay: string, newDay: string) => void;
}

const TimeRangeInput: React.FC<TimeRangeInputProps> = ({ day, time, onRemove, onChange, onDayChange }) => {
  return (
    <div className="mb-4 p-2  border border-gray-300 rounded-md  ">
      <div className="flex justify-between items-center mb-2">
        <select
          value={day}
          onChange={(e) => onDayChange(day, e.target.value)}
          className="p-2 border border-gray-300 rounded-md font-cairo"
        >
          <option value="SATURDAY">Saturday</option>
          <option value="SUNDAY">Sunday</option>
          <option value="MONDAY">Monday</option>
          <option value="TUESDAY">Tuesday</option>
          <option value="WEDNESDAY">Wednesday</option>
          <option value="THURSDAY">Thursday</option>
          <option value="FRIDAY">Friday</option>
        </select>
        <button
          onClick={() => onRemove(day)}
          className="p-2 bg-red-500 text-white rounded"
        >
          Remove
        </button>
      </div>
      <TimeInput label="From" time={time.from} onChange={(newTime) => onChange(day, "from", newTime)} />
      <TimeInput label="To" time={time.to} onChange={(newTime) => onChange(day, "to", newTime)} />
    </div>
  );
};

interface TimeInputProps {
  label: string;
  time: { hour: number; minute: number };
  onChange: (time: { hour: number; minute: number }) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ label, time, onChange }) => (
  <div>
    <label className="block">{label}</label>
    <div className="flex space-x-2 items-center">
      <div className="space-x-1 font-cairo">
        <input
          type="number"
          value={time.hour}
          onChange={(e) => onChange({ ...time, hour: Number(e.target.value) })}
          min={0}
          max={23}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary w-16"
        />
        <span>h</span>
      </div>
      <span className="text-gray-500">:</span>
      <div className="space-x-1">
        <input
          type="number"
          value={time.minute}
          onChange={(e) => onChange({ ...time, minute: Number(e.target.value) })}
          min={0}
          max={59}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary w-16"
        />
        <span>m</span>
      </div>
    </div>
  </div>
);

export default AvailableTime;

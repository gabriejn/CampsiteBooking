import React, { useState } from 'react';
import './Calander.css';

// Utility functions to get date information
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(null);
  const [flash, setFlash] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const handlePreviousMonth = () => {
    if (month > today.getMonth() || year > today.getFullYear()) {
      setCurrentDate(new Date(year, month - 1, 1));
    }
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day) => {
    const selected = new Date(year, month, day);
    if (selected < today) {
      setFlash(day);
      setTimeout(() => setFlash(null), 300); // Reduce the duration to 300ms
    } else {
      setSelectedDate(selected);
    }
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
      const isSelected = selectedDate && day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear();
      const isFlash = flash === day;

      days.push(
        <div
          key={day}
          className={`calendar-day${isToday ? ' today' : ''}${isSelected ? ' selected' : ''}${isFlash ? ' flash' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth} disabled={month <= today.getMonth() && year <= today.getFullYear()}>
          Previous
        </button>
        <span>{currentDate.toLocaleString('default', { month: 'long' })} {year}</span>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-day-name">{day}</div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
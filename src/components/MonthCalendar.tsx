import React from 'react';

const MonthCalendar = ({ currentDate, activityItems, getDaysInMonth, getStartDayOfMonth, months }) => {
  const currentYear = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();
  const monthName = months[monthIndex];
  const daysInMonth = getDaysInMonth(currentYear, monthIndex);
  const startDayOffset = getStartDayOfMonth(currentYear, monthIndex); // 0 for Sunday, 1 for Monday

  const today = new Date();

  const days = [];

  // Add empty cells for days before the start of the month
  for (let i = 0; i < startDayOffset; i++) {
    days.push(null);
  }

  // Add days from the current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: i,
      month: monthIndex,
      year: currentYear,
      isCurrentMonth: true,
    });
  }

  // Add days from the next month to fill the grid (up to 42 cells for 6 weeks)
  const remainingCells = 42 - days.length;
  for (let i = 1; i <= remainingCells; i++) {
    days.push({
      date: i,
      month: monthIndex + 1,
      year: currentYear,
      isCurrentMonth: false,
    });
  }

  const getDayClass = (dayObj) => {
    let classes = 'p-2 rounded-lg text-center relative h-28 border border-gray-200';
    if (dayObj) {
      const fullDate = new Date(dayObj.year, dayObj.month, dayObj.date);

      // Highlight today's date
      if (fullDate.getDate() === today.getDate() && fullDate.getMonth() === today.getMonth() && fullDate.getFullYear() === today.getFullYear()) {
        classes += ' bg-blue-100 border-blue-400';
      }

      // Grey out days not in the current month
      if (!dayObj.isCurrentMonth) {
        classes += ' text-gray-400';
      }
    }
    return classes;
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md col-span-4">
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-500 mb-1">
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, i) => <div key={i}>{day}</div>)}
      </div>
      <div className="grid grid-cols-7 text-center text-sm">
        {days.map((dayObj, index) => {
          const activitiesForDay = dayObj ? activityItems.filter(item => {
            const [itemDay, itemMonth, itemYear] = item.dueDate.split('/').map(Number);
            const itemDate = new Date(itemYear, itemMonth - 1, itemDay);
            return itemDate.getDate() === dayObj.date &&
                   itemDate.getMonth() === dayObj.month &&
                   itemDate.getFullYear() === dayObj.year;
          }) : [];

          return (
            <div
              key={`${monthName}-${dayObj ? dayObj.date : 'empty'}-${index}`}
              className={getDayClass(dayObj)}
            >
              {dayObj ? (
                <>
                  <div className="text-right font-semibold text-sm pr-1">{dayObj.date}</div>
                  <div className="mt-1 space-y-1">
                    {activitiesForDay.map((activity, activityIndex) => (
                      <div key={activityIndex} className={`${activity.color} p-1 rounded-lg border text-xs text-left`}>
                        <h4 className="font-semibold">{activity.title}</h4>
                      </div>
                    ))}
                  </div>
                </>
              ) : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthCalendar;
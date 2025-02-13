const Schedule = () => {
  return (
    <section className="bg-[#191516] text-white py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 relative">
          <span className="relative">
            Schedule
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00dc82] via-[#36e4da] to-[#16a79e]"></div>
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-6 text-center">Day 1</h3>
            <div className="space-y-4">
              <div className="relative">
                <TimeBlock time="9:00 AM - 9:15 AM" event="DigiPen Presentation" icon="🎓" />
                <TimeBlock time="9:15 AM - 9:35 AM" event="Keynote Speech(es)" icon="🎤" />
                <TimeBlock time="9:35 AM - 9:45 AM" event="Schedule & Safety Presentation" icon="📋" />
                <TimeBlock time="9:45 AM - 11:00 AM" event="Work Time" icon="💻" />
                <TimeBlock time="11:00 AM - 11:30 AM" event="Workshop 1" icon="🔧" />
                <TimeBlock time="11:30 AM - 12:30 PM" event="Work Time" icon="💻" />
                <TimeBlock time="12:30 PM - 1:30 PM" event="Lunch" icon="🍽️" />
                <TimeBlock time="1:30 PM - 2:30 PM" event="Work Time" icon="💻" />
                <TimeBlock time="2:30 PM - 3:00 PM" event="Workshop 2" icon="🔧" />
                <TimeBlock time="3:00 PM - 5:00 PM" event="Work Time" icon="💻" />
              </div>
            </div>
          </div>

          <div className="relative">
            <h3 className="text-2xl font-semibold mb-6 text-center">Day 2</h3>
            <div className="space-y-4">
              <div className="relative">
                <TimeBlock time="9:00 AM - 9:30 AM" event="Keynote + Day 2 Introduction" icon="🎤" />
                <TimeBlock time="9:30 AM - 11:00 AM" event="Work Time" icon="💻" />
                <TimeBlock time="11:00 AM - 11:30 AM" event="Workshop 3" icon="🔧" />
                <TimeBlock time="11:30 AM - 12:30 PM" event="Work Time" icon="💻" />
                <TimeBlock time="12:30 PM - 1:30 PM" event="Lunch" icon="🍽️" />
                <TimeBlock time="1:30 PM - 2:00 PM" event="Workshop 4" icon="🔧" />
                <TimeBlock time="2:00 PM - 2:30 PM" event="FINAL STRETCH Work Time" icon="⚡" isHighlighted />
                <TimeBlock time="2:30 PM - 4:30 PM" event="Showcase + Judging" icon="🏆" isHighlighted />
                <TimeBlock time="4:30 PM - 5:00 PM" event="Awards Ceremony + Final Speech" icon="🎉" isHighlighted />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TimeBlock = ({ time, event, icon, isHighlighted }) => {
  return (
    <div
      className={`
      relative mb-4 p-3 rounded-lg
      ${
        isHighlighted
          ? "bg-gradient-to-r from-[#00dc82] via-[#36e4da] to-[#16a79e] text-white"
          : "bg-[#2a2a2a] hover:bg-[#333333] transition-colors"
      }
    `}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <div>
          <div className="font-medium">{event}</div>
          <div className="text-sm text-gray-400">{time}</div>
        </div>
      </div>
    </div>
  )
}

export default Schedule;
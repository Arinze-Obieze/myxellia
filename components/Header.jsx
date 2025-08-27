import { FaBell } from "react-icons/fa";
import { TbCalculatorFilled } from "react-icons/tb";

export default function Header() {
  const navIcons = [
    { icon: FaBell, label: "Notifications" },
    { icon: TbCalculatorFilled, label: "Calculator" },
    { icon: "/icons/calendar.svg", label: "Calendar", isImage: true }, // For image icons
    { icon: "/icons/message-notif.svg", label: "Messages", isImage: true },
  ];

  return (
    <header className="w-full bg-secondary text-white flex items-center justify-between px-6 py-3 h-21">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img 
          src="/logo/secondary-logo.svg" 
          alt="Company Logo" 
          className="font-semibold text-lg"
        />
      </div> 

      {/* Icons + Profile */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-6">
          {/* 2. Map over the array to render each icon */}
          {navIcons.map((item, index) => (
            <div key={index} className="tooltip" data-tip={item.label}> {/* Optional: Add a tooltip */}
              {item.isImage ? (
                // Render an image icon
                <img 
                  src={item.icon} 
                  alt={item.label}
                  className="w-5 h-5 cursor-pointer" 
                />
              ) : (
                // Render a React Icon component
                <item.icon className="w-5 h-5 cursor-pointer" />
              )}
            </div>
          ))}
        </div>

        {/* Profile Avatar */}
        <div>
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-semibold">
            D
          </div>
        </div>
      </div>
    </header>
  );
}
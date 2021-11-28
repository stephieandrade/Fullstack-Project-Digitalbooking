import { useEffect, useState } from "react";

import "./avatar-initials.scoped.css";

const AvatarInitials = ({ name }) => {
  const [initials, setInitials] = useState("");
  useEffect(() => {
    setInitials(getInitials(name));
  }, [name]);

  function getInitials(name) {
    if (name === undefined) return "";
    const [firstName, lastName] = name.split(" ");
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    }
    return firstName.charAt(0).toUpperCase();
  }

  return (
    <div className="initials">
      <p>{initials}</p>
    </div>
  );
};

export default AvatarInitials;

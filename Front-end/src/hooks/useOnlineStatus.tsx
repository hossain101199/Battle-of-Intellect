import { useEffect, useState } from "react";

const useOnlineStatus: () => boolean = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineOrOfflineStatus = (event: Event) => {
      if (event.type === "online") {
        setIsOnline(true);
      } else if (event.type === "offline") {
        setIsOnline(false);
      }
    };

    window.addEventListener("online", handleOnlineOrOfflineStatus);
    window.addEventListener("offline", handleOnlineOrOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineOrOfflineStatus);
      window.removeEventListener("offline", handleOnlineOrOfflineStatus);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;

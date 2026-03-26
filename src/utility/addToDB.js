const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("installedApps");
  return storedAppSTR ? JSON.parse(storedAppSTR) : [];
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();

  if (!storedAppData.includes(id)) {
    storedAppData.push(id);
    localStorage.setItem("installedApps", JSON.stringify(storedAppData));
  }
};

const removeFromStoredDB = (id) => {
  const storedAppData = getStoredApp();
  const updated = storedAppData.filter((item) => String(item) !== String(id));
  localStorage.setItem("installedApps", JSON.stringify(updated));
};

const formatDownloadsNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num;
};

export {
  getStoredApp,
  addToStoredDB,
  removeFromStoredDB,
  formatDownloadsNumber,
};

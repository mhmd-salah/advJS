let battryEl = document.querySelector(".batteryEl");

if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    let level = battery.level * 100;
    const updateBattryStatus = () => {
      const chargingStatus = battery.charging ? "⚡" : "";
      battryEl.innerHTML = `${level.toFixed(0)}% ${chargingStatus}`;
    };
    updateBattryStatus();
    battery.addEventListener("chargingchange", updateBattryStatus);
    battery.addEventListener("levelchange", updateBattryStatus);
  });
} else {
  battryEl.innerHTML = "Battery API not supported";
}

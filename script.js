// Auto Year Update
var d = new Date();
var n = d.getFullYear();
document.getElementById('getYear').innerHTML = n;

// Maintenance Mode
const dayDisplay = document.querySelector(".days"),
    hourDisplay = document.querySelector(".hours"),
    minuteDisplay = document.querySelector(".minutes"),
    secondDisplay = document.querySelector(".seconds"),
    maintainCont = document.querySelector(".mntCont"),
    endDate = new Date("August 1 2025 00:00:00");
let maintenanceDone = !1;
const updateTimer = () => {
    let e = new Date; var t = endDate.getTime() - e.getTime();
    t <= 1e3 && (maintenanceDone = !0); var n = 36e5,
        o = Math.floor(t / 864e5),
        a = Math.floor(t % 864e5 / n),
        n = Math.floor(t % n / 6e4),
        t = Math.floor(t % 6e4 / 1e3);
    dayDisplay.innerText = o < 10 ? "0" + o : o, hourDisplay.innerText = a < 10 ? "0" + a : a, minuteDisplay.innerText = n < 10 ? "0" + n : n, secondDisplay.innerText = t < 10 ? "0" + t : t
};
setInterval(() => { maintenanceDone ? (maintainCont.classList.add("hdn")) : updateTimer() }, 1e3);
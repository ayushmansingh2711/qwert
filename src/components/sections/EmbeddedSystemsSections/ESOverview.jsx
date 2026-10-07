import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const courseFacts = [
  ["Duration", "6 Months"],
  ["Batches", "Weekday / Weekend / Fast-Track"],
  ["Modes", "Classroom, Online or Hybrid"],
  ["Certificate", "NASSCOM's + Dual Certificate"],
  ["Projects", "10+ Live Industry Projects"],
  ["Placement", "100% Placement Support"],
  ["Trainers", "Working Industry Professionals"],
  ["Eligibility", "BE / B.Tech / Diploma / BSc"],
];

const tools = [
  "Arduino", "Raspberry Pi", "STM32 Nucleo", "Keil uVision", "MPLAB",
  "STM32CubeIDE", "NodeMCU / ESP32", "Robotic Kits", "Proteus Simulation",
];

const curriculum = [
  "C Programming and Embedded C fundamentals",
  "Microcontrollers, ARM architecture and peripherals",
  "Sensors, actuators and communication protocols",
  "RTOS, robotics and IoT device connectivity",
  "Live hardware projects and industry applications",
];

const ESOverview = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 17, minutes: 59, seconds: 59 });
  const tabs = ["Overview", "Curriculum", "Tools & Skills"];

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setTimeLeft((time) => {
        if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) return time;

        let { days, hours, minutes, seconds } = time;
        if (seconds > 0) seconds -= 1;
        else {
          seconds = 59;
          if (minutes > 0) minutes -= 1;
          else {
            minutes = 59;
            if (hours > 0) hours -= 1;
            else {
              hours = 23;
              days -= 1;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  return (
  <>
    <section className="relative overflow-hidden bg-[#0d152a] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 92% 38%, transparent 0 135px, #17223b 136px 177px, transparent 178px), radial-gradient(circle at 92% 38%, transparent 0 230px, #121d35 231px 268px, transparent 269px), linear-gradient(90deg, transparent 49px, rgba(37, 53, 82, .16) 50px), linear-gradient(rgba(37, 53, 82, .16) 1px, transparent 1px)", backgroundSize: "auto, auto, 50px 50px, 50px 50px" }} />
      <div className="relative mx-auto grid min-h-[680px] max-w-[1500px] items-center gap-12 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-14 lg:px-8 xl:px-12">
        <div className="max-w-[700px]">
          <div className="mb-5 flex flex-wrap gap-2 text-sm text-slate-300">
            <span className="rounded border border-slate-700 px-2 py-1"><span className="text-orange-400">✓</span> ISO 9001:2015 Certified</span>
            <span className="rounded border border-slate-700 px-2 py-1"><span className="text-orange-400">⌖</span> Top Rated in Jaipur</span>
            <span className="rounded border border-slate-700 px-2 py-1">Est. 2016 · 8+ Years</span>
          </div>
          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl">Embedded Systems &amp; Robotics with <span className="text-orange-500">IoT</span> Course in Jaipur</h1>
          <p className="mb-6 text-base leading-7 text-slate-300">A hands-on, industry-aligned training program covering Embedded C, Microcontrollers, ARM, RTOS, Robotics and IoT — build real hardware projects and get placement support until you're hired.</p>
          <div className="mb-6 flex flex-wrap gap-3 text-sm text-slate-200">
            {["✓ 100% Placement Support", "⌁ Live Hardware Projects", "▦ Working Industry Experts", "□ Classroom + Online"].map((item) => <span key={item} className="rounded-full border border-slate-700 px-4 py-2.5">{item}</span>)}
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#demo-enquiry" className="rounded-md bg-orange-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-orange-400">Apply for Free Counselling&nbsp; →</a>
            <a href="tel:+919876543210" className="rounded-md border border-slate-600 px-4 py-3 text-sm">♧&nbsp; Call Now</a>
          </div>
          <p className="mt-3 text-xs text-slate-400"><span className="text-orange-400">✓</span>&nbsp; Free career counselling&nbsp;&nbsp; <span className="text-orange-400">✓</span>&nbsp; No commitment required&nbsp;&nbsp; <span className="text-orange-400">✓</span>&nbsp; Response within 30 min</p>
        </div>

        <form id="demo-enquiry" className="rounded-xl bg-white p-8 text-slate-900 shadow-xl" onSubmit={(event) => event.preventDefault()}>
          <div className="mb-5 space-y-2">
            <p className="text-sm font-medium tracking-widest text-orange-500">☆ START YOUR JOURNEY</p>
            <h2 className="text-3xl font-bold leading-tight">Register for Free Demo</h2>
            <p className="text-sm leading-5 text-slate-500">Talk to our course counsellor, free, no obligation.</p>
          </div>
          <div className="mb-5 rounded-md border border-orange-100 bg-orange-50 p-5 text-center">
            <span className="block text-xs tracking-widest text-orange-500">● NEXT BATCH STARTS IN</span>
            <div className="mt-2 grid grid-cols-4 gap-2 text-xl font-bold text-white">
              {[["days", "DAYS"], ["hours", "HRS"], ["minutes", "MINS"], ["seconds", "SEC"]].map(([unit, label]) => (
                <span key={unit} className="rounded bg-[#0d152a] py-2">{String(timeLeft[unit]).padStart(2, "0")}<small className="block text-[10px] font-normal text-slate-400">{label}</small></span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm leading-5">First Name *<input required placeholder="e.g. Priya" className="mt-1.5 w-full rounded border border-slate-300 px-2.5 py-2.5 text-sm" /></label>
            <label className="block text-sm leading-5">Last Name *<input required placeholder="e.g. Sharma" className="mt-1.5 w-full rounded border border-slate-300 px-2.5 py-2.5 text-sm" /></label>
          </div>
          <label className="mt-4 block text-base leading-6">Phone / WhatsApp *<input required type="tel" placeholder="+91 98765 43210" className="mt-2 w-full rounded border border-slate-300 px-3 py-3 text-base" /></label>
          <label className="mt-4 block text-base leading-6">Email Address *<input required type="email" placeholder="you@example.com" className="mt-2 w-full rounded border border-slate-300 px-3 py-3 text-base" /></label>
          <label className="mt-4 block text-base leading-6">Interested Course *<select required defaultValue="" className="mt-2 w-full rounded border border-slate-300 px-3 py-3 text-base text-slate-500"><option value="" disabled>Select a course</option><option>Embedded Systems &amp; Robotics with IoT</option></select></label>
          <button className="mt-4 w-full rounded bg-orange-500 px-3 py-3.5 text-base font-semibold text-slate-950">Get Free Counselling&nbsp;&nbsp; →</button>
          <p className="mt-3 text-center text-sm leading-5 text-slate-400">♙ Your details are safe with us. No spam, ever.</p>
        </form>
      </div>
    </section>

    <section className="bg-[#f5f6fa] px-6 py-12 text-slate-900">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="mb-2 text-base tracking-widest text-orange-500">COURSE DETAILS</p>
          <h2 className="text-2xl font-bold">Embedded Systems &amp; Robotics<br className="hidden sm:block" /> with IoT</h2>
          <p className="mt-3 text-base leading-6 text-slate-600">A comprehensive, project-driven program covering C fundamentals through ARM, RTOS, robotics and IoT device connectivity.</p>
          <div className="mt-5 flex flex-wrap gap-6 border-b border-slate-200 text-lg text-slate-600" role="tablist" aria-label="Course details">
            {tabs.map((tab) => <button key={tab} id={`es-tab-${tab.toLowerCase().replaceAll(" ", "-")}`} type="button" role="tab" aria-selected={activeTab === tab} onClick={() => setActiveTab(tab)} className={`border-b-2 pb-2 transition-colors ${activeTab === tab ? "border-orange-500 font-semibold text-orange-600" : "border-transparent hover:text-orange-600"}`}>{tab === "Overview" ? "◎  " : tab === "Curriculum" ? "☷  " : "⚒  "}{tab}</button>)}
          </div>
          <div role="tabpanel" aria-labelledby={`es-tab-${activeTab.toLowerCase().replaceAll(" ", "-")}`} className="pt-4">
            {activeTab === "Overview" && <div className="space-y-3 text-lg leading-7 text-slate-700"><p>Build practical skills in Embedded C, microcontrollers, ARM, RTOS, robotics and IoT through guided instruction and hands-on hardware work.</p><p>Learn by developing real projects with industry tools and receive placement support throughout your career journey.</p></div>}
            {activeTab === "Curriculum" && <ol className="list-inside list-decimal space-y-3 text-lg leading-7 text-slate-700">{curriculum.map((item) => <li key={item}>{item}</li>)}</ol>}
            {activeTab === "Tools & Skills" && <div className="flex flex-wrap gap-2">{tools.map((tool) => <span key={tool} className="rounded-full bg-white px-4 py-2.5 text-base text-slate-600 shadow-sm">⚙&nbsp; {tool}</span>)}</div>}
          </div>
        </div>
        <aside className="rounded-lg border border-slate-200 bg-white p-4">
          <h3 className="mb-2 text-lg font-bold">Course At a Glance</h3>
          <dl>{courseFacts.map(([label, value]) => <div key={label} className="grid grid-cols-[100px_1fr] gap-2 border-t border-slate-100 py-2.5 text-base"><dt className="text-slate-500">◦&nbsp; {label}</dt><dd className="text-right font-semibold text-slate-700">{value}</dd></div>)}</dl>
        </aside>
      </div>
      <div className="mx-auto mt-4 max-w-5xl text-right"><Link to="/courses" className="text-sm text-orange-600">Explore all courses →</Link></div>
    </section>
  </>
  );
};

export default ESOverview;

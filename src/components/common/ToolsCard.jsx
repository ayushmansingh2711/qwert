import "../../KirtikaCSS.css";

const ToolsCard = (props) => {
  // console.log(color)
  const color = props.color;
  return (
    <div
      className={`rounded-xl px-6 py-4 flex flex-col gap-2 items-center tools-btn tools-btn-${color} hover:border-[${color}] text-[${color}] hover:text-[${color}] text-center text-sm sm:text-lg`}
    >
      <img className="w-10 sm:w-12 lg:w-20" src={props.img} alt="" />
      <p class="text-[1rem]">{props.name}</p>
    </div>
  );
};

export default ToolsCard;

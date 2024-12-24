import Image from "next/image";

function LanuageBt() {
  return (
    <div className="mb-5 mr-4 flex justify-end">
      <Image
        src={"/image/usa.png"}
        alt="usa-logo"
        width={80}
        height={80}
        priority
        className="size-[2rem] rounded-[100%] border-2 border-solid border-white shadow-md shadow-slate-400"
      />
    </div>
  );
}

export default LanuageBt;

const TextField = () => {
  return (
    <input
      type="text"
      placeholder="Search client"
      className="text-xs w-[230px] px-3 py-1"
      style={{
        boxShadow:
          "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)",
      }}
    />
  );
};

export default TextField;

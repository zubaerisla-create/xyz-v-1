import React from "react";

const Title = ({ title }) => {
  return (
    <div className="text-center dark:text-slate-200">
      <h1 className="mt-2 mb-6 text-3xl sm:text-4xl font-bold text-center">{title}</h1>
    </div>
  );
};

export default Title;

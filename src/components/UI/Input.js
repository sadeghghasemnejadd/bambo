import React from "react";

export const Input = ({ name, register, ...rest }) => {
  return <input {...rest} {...register(name)} />;
};

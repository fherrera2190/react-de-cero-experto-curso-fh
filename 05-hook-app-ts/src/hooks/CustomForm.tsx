import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "../components/InputForm";
import "../index.css";
import { FormValues, schema } from "../models/form.model";

const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        control={control}
        error={errors.name}
        name="name"
        label="Name"
        type="text"
      />
      <InputForm
        control={control}
        error={errors.email}
        name="email"
        label="Email"
        type="email"
      />
      <InputForm
        control={control}
        error={errors.password}
        name="password"
        label="Password"
        type="password"
      />
      <InputForm
        control={control}
        error={errors.confirmPassword}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;

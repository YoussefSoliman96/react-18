import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 character(s)" }),
  age: z.number({ invalid_type_error: "Age must be a number" }).min(18),
});

const Form = () => {
  //   interface FormData {
  //     name: string;
  //     age: number;
  //   }

  type FormData = z.infer<typeof schema>;

  // Method 3: [React Form hook]
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* div.mb-3>label.form-label+input.form-control */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          type="text"
          className="form-control"
        />

        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          {...register("age", { valueAsNumber: true })}
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

// Method 1: [Ref hook]
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name: "", age: 0 };
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (nameRef.current !== null) {
//       console.log(`Name is ${nameRef.current.value}`);
//       person.name = nameRef.current.value;
//     }
//     if (ageRef.current !== null) {
//       console.log(`Age is ${ageRef.current.value}`);
//       person.age = parseInt(ageRef.current.value);
//     }
//     console.log(person);

// Method 2: [State hook]
//   const [person, setPerson] = useState({
//     name: "",
//     age: "",
//   });
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log(person);
//   };

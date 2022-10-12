import { ChangeEvent, FormEvent, useState } from "react";

interface IFormState {
  username: string;
  email: string;
}

interface IUseFormCustomHook {
  formData: IFormState;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

function useForm(): IUseFormCustomHook {
  const [formData, setFormData] = useState({ username: "", email: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("handleSubmit", formData);
    handleReset();
  }

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  }

  function handleReset() {
    setFormData((prev) => ({ ...prev, username: "", email: "" }));
  }

  return { formData, handleChange, handleSubmit };
}

export default useForm;

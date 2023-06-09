import { ChangeEvent, useState } from "react";
import { InitialForm } from "../interface/FormInterface";
import { FormValidation } from "../interface/TranslationsInterface";

export const useForm = <T extends Object>(
  initialForm: T,
  validationsForm: any,
  formValidation: FormValidation
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<InitialForm> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    setErrors(validationsForm({ ...form, [name]: value }, e, formValidation));
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    handleChange(e);
    setErrors({ ...validationsForm(form, e, formValidation) });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrors(validationsForm(form, e));
    const isValid = errors && Object.keys(errors).length;

    if (isValid === 0) {
      setIsLoading(true);
      fetch("https://formspree.io/f/xrgvvkjn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Error HTTP: " + res.status);
          return res.json();
        })
        .then((data) => {
          if (data.ok === true) {
            setForm(initialForm);
            setResponse(data.ok);
            setIsLoading(false);
          }

          setTimeout(() => {
            setResponse(false);
          }, 3000);
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
    }
  };

  return {
    form,
    errors,
    isLoading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

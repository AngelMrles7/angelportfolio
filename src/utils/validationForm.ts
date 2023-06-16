import { ChangeEvent } from "react";
import { InitialForm } from "../interface/FormInterface";
import { FormValidation } from "../interface/TranslationsInterface";

const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  commentRegex = /^.{0,255}$/m;

let error: Partial<InitialForm> = {};

export const validationsForm = (
  form: InitialForm,
  e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  formValidation: FormValidation
) => {
  switch (e.target.name) {
    case "name":
      if (!form.name.trim()) {
        error.name = formValidation.name.requerid;
      } else {
        delete error.name;
      }

      break;

    case "email":
      if (!form.email.trim() || form.email.match(emailRegex) === null) {
        error.email = !form.email.trim()
          ? formValidation.email.requerid
          : formValidation.email.invalid;
      } else {
        delete error.email;
      }

      break;

    case "message":
      if (!form.message.trim() || form.message.match(commentRegex) === null) {
        error.message =
          form.message.match(commentRegex) === null
            ? formValidation.message.invalid
            : formValidation.message.requerid;
      } else {
        delete error.message;
      }

      break;

    default:
      break;
  }

  if (e.type === "click") {
    if (!form.name.trim()) {
      error.name = formValidation.name.requerid;
    }

    if (!form.email.trim() || form.email.match(emailRegex) === null) {
      error.email = !form.email.trim()
        ? formValidation.email.requerid
        : formValidation.email.invalid;
    } else {
      delete error.email;
    }

    if (!form.message.trim()) {
      error.message = formValidation.message.requerid;
    }
  }
  return error;
};

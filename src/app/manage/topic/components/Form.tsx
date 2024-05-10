"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateTopicRequestHandler,
  UpdateTopicRequestHandler,
} from "@/lib/services/topic/Handlers";
import { GetTopicResponseModel } from "@/lib/services/topic/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateTopicFormProps extends FormWithPayload<Chapter[]> {}

const createTopicFormInit: BaseResponse<GetTopicResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateTopicForm: React.FC<CreateTopicFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreateTopicRequestHandler,
    createTopicFormInit,
  );
  const router = useRouter();

  useEffect(() => {
    if (formState.message != "") {
      Toast({
        message: formState.message,
        type: formState.success ? "success" : "error",
      });
      if (formState.success) {
        router.refresh();
        router.back();
      }
    }
  }, [formState, router]);

  return (
    <form action={formAction} className="">
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}
      <StyFormInput
        type="text"
        name="title"
        placeholder="Title"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.title && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.title}
        </span>
      )}

      <StyFormInput
        type="text"
        name="description"
        placeholder="Description"
        required
        extras="tracking-wide"
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.description && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.description}
        </span>
      )}

      <StyFormSelect<Chapter & { [key: string]: any }>
        name="chapterId"
        placeholder="Please select chapter"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload}
      />
      {!formState.success && formState.fieldErrors?.chapterId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.chapterId}
        </span>
      )}
      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateTopicFormProps extends FormWithPayload<Chapter[]> {
  topic: Topic;
}

const updateTopicFormInit: BaseResponse<GetTopicResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateTopicForm: React.FC<UpdateTopicFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateTopicRequestHandler,
    updateTopicFormInit,
  );
  const topic = props.topic;
  const router = useRouter();

  useEffect(() => {
    if (formState.message != "") {
      Toast({
        message: formState.message,
        type: formState.success ? "success" : "error",
      });
    }
    if (formState.success) {
      router.refresh();
      router.back();
    }
  }, [formState, router]);

  return (
    <form action={formAction} className="">
      <input type="hidden" name="id" value={topic.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}

      <StyFormInput
        type="text"
        name="title"
        placeholder="Title"
        required
        extras="tracking-wide"
        defaultValue={topic.title}
      />
      {!formState.success && formState.fieldErrors?.title && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.title}
        </span>
      )}

      <StyFormInput
        type="text"
        name="description"
        placeholder="Description"
        required
        extras="tracking-wide"
        defaultValue={topic.description}
      />
      {!formState.success && formState.fieldErrors?.description && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.description}
        </span>
      )}

      <StyFormSelect<Chapter & { [key: string]: any }>
        name="chapterId"
        placeholder="Please select chapter"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload}
        defaultValue={topic.chapter.id}
      />
      {!formState.success && formState.fieldErrors?.chapterId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.chapterId}
        </span>
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateTopicForm, UpdateTopicForm };

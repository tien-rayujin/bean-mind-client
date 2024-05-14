"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateQuestionRequestHandler,
  UpdateQuestionRequestHandler,
} from "@/lib/services/question/Handlers";
import { GetQuestionResponseModel } from "@/lib/services/question/Models";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateQuestionFormProps
  extends FormWithPayload<{
    questionTypes: QuestionType[];
    questionLevels: QuestionLevel[];
    topics: Topic[];
  }> {}

const createQuestionFormInit: BaseResponse<GetQuestionResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateQuestionForm: React.FC<CreateQuestionFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    CreateQuestionRequestHandler,
    createQuestionFormInit,
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
        name="text"
        placeholder="Text"
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
        name="imageUrl"
        placeholder="ImageUrl"
        required
        extras="tracking-wide"
        defaultValue={""}
      />{" "}
      {!formState.success && formState.fieldErrors?.imageUrl && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.imageUrl}
        </span>
      )}
      <StyFormSelect<Topic & { [key: string]: any }>
        name="topicId"
        placeholder="Please select topic"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.topics}
      />
      {!formState.success && formState.fieldErrors?.topicId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.topicId}
        </span>
      )}
      <StyFormSelect<QuestionType & { [key: string]: any }>
        name="questionTypeId"
        placeholder="Please select questionType"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.questionTypes}
      />
      {!formState.success && formState.fieldErrors?.questionTypeId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.questionTypeId}
        </span>
      )}
      <StyFormSelect<QuestionLevel & { [key: string]: any }>
        name="questionLevelId"
        placeholder="Please select questionLevel"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.questionLevels}
      />
      {!formState.success && formState.fieldErrors?.questionLevelId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.questionLevelId}
        </span>
      )}
      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateQuestionFormProps
  extends FormWithPayload<{
    questionTypes: QuestionType[];
    questionLevels: QuestionLevel[];
    topics: Topic[];
  }> {
  question: Question;
}

const updateQuestionFormInit: BaseResponse<GetQuestionResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateQuestionForm: React.FC<UpdateQuestionFormProps> = (props) => {
  const { payload } = props;
  const [formState, formAction] = useFormState(
    UpdateQuestionRequestHandler,
    updateQuestionFormInit,
  );
  const question = props.question;
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
      <input type="hidden" name="id" value={question.id} />
      {!formState.success &&
        formState.errors &&
        formState.errors.map((eMsg) => (
          <p key={eMsg} className="text-sm font-semibold text-accent">
            {eMsg}
          </p>
        ))}
      <StyFormInput
        type="text"
        name="text"
        placeholder="Text"
        required
        extras="tracking-wide"
        defaultValue={question.text}
      />
      {!formState.success && formState.fieldErrors?.text && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.text}
        </span>
      )}
      <StyFormInput
        type="text"
        name="imageUrl"
        placeholder="ImageUrl"
        required
        extras="tracking-wide"
        defaultValue={question.imageUrl}
      />{" "}
      {!formState.success && formState.fieldErrors?.imageUrl && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.imageUrl}
        </span>
      )}
      <StyFormSelect<Topic & { [key: string]: any }>
        name="topicId"
        placeholder="Please select topic"
        required
        displayProp={"title"}
        valueProp={"id"}
        datas={payload?.topics}
      />
      {!formState.success && formState.fieldErrors?.topicId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.topicId}
        </span>
      )}
      <StyFormSelect<QuestionLevel & { [key: string]: any }>
        name="questionLevelId"
        placeholder="Please select questionLevel"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.questionLevels}
        defaultValue={question.questionLevel.id}
      />
      {!formState.success && formState.fieldErrors?.questionLevelId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.questionLevelId}
        </span>
      )}
      <StyFormSelect<QuestionType & { [key: string]: any }>
        name="questionTypeId"
        placeholder="Please select questionType"
        required
        displayProp={"name"}
        valueProp={"id"}
        datas={payload?.questionTypes}
        defaultValue={question.questionType.id}
      />
      {!formState.success && formState.fieldErrors?.questionTypeId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.questionTypeId}
        </span>
      )}
      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

export { CreateQuestionForm, UpdateQuestionForm };

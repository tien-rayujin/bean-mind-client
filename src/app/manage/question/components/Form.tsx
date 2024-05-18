"use client";

import React from "react";
import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateQuestionRequestHandlerWithAnsList,
  UpdateQuestionRequestHandler,
  UpdateQuestionRequestHandlerWithAnsList,
} from "@/lib/services/question/Handlers";
import { GetQuestionResponseModel } from "@/lib/services/question/Models";
import { CreateQuestionAnswerRequestModel } from "@/lib/services/questionAnswer/Models";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { FaPlus, FaTimes } from "react-icons/fa";
import { BiStateButton, StyButton } from "@/components/Button";

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

const answersQuestionInit: CreateQuestionAnswerRequestModel = {
  text: "",
  questionId: "",
  orderIndex: 0,
  isCorrect: false,
};

const CreateQuestionForm: React.FC<CreateQuestionFormProps> = (props) => {
  const { payload } = props;

  const [ansList, setAnsList] = useState<CreateQuestionAnswerRequestModel[]>([
    answersQuestionInit,
  ]);
  const router = useRouter();

  const [formState, formAction] = useFormState(
    CreateQuestionRequestHandlerWithAnsList.bind(null, ansList),
    createQuestionFormInit,
  );

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

      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2 mt-4">
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
        </div>
        <div className="mt-4">
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
        </div>
        <div className="mt-4">
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
        </div>
        <div className="mt-4">
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
        </div>
      </div>

      {/* Answer fields */}
      <div className="mt-4">
        <CreateQuestionAnswerForm
          questionAnswers={ansList}
          setQuestionAnswers={setAnsList}
        />
      </div>
      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

interface AnswerInputProps {
  ans: CreateQuestionAnswerRequestModel;
  index: number;
  onTextChange: Function;
  onToggleState: Function;
  onRemoveOption: Function;
}

const AnswerInput = (props: AnswerInputProps) => {
  const { ans, index, onTextChange, onToggleState, onRemoveOption } = props;
  return (
    <div
      key={ans.text + index}
      className="StyFormInput flex items-center gap-x-2.5"
    >
      <BiStateButton
        active={ans.isCorrect}
        onClick={() => onToggleState(index)}
      />
      <div className="w-full">
        <StyFormInput
          type="text"
          placeholder="Text"
          required
          extras="tracking-wide"
          value={ans.text}
          showLabel={false}
          onChange={(e) => onTextChange(index, e.currentTarget.value)}
        />
      </div>
      <button
        type="button"
        onClick={() => onRemoveOption(index)}
        className="rounded-sm bg-accent p-3 text-text"
      >
        <FaTimes />
      </button>
    </div>
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
  const question = props.question;

  const [ansList, setAnsList] = useState(question.questionAnswers);
  const [formState, formAction] = useFormState(
    UpdateQuestionRequestHandlerWithAnsList.bind(null, ansList),
    updateQuestionFormInit,
  );
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
      {!formState.success && formState.fieldErrors?.title && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.title}
        </span>
      )}

      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2 mt-4">
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
        </div>
        <div className="mt-4">
          <StyFormSelect<Topic & { [key: string]: any }>
            name="topicId"
            placeholder="Please select topic"
            required
            displayProp={"title"}
            valueProp={"id"}
            datas={payload?.topics}
            defaultValue={question.topicId}
          />
          {!formState.success && formState.fieldErrors?.topicId && (
            <span className="text-sm font-semibold text-accent">
              {formState.fieldErrors?.topicId}
            </span>
          )}
        </div>
        <div className="mt-4">
          <StyFormSelect<QuestionType & { [key: string]: any }>
            name="questionTypeId"
            placeholder="Please select questionType"
            required
            displayProp={"name"}
            valueProp={"id"}
            datas={payload?.questionTypes}
            defaultValue={question.questionTypeId}
          />
          {!formState.success && formState.fieldErrors?.questionTypeId && (
            <span className="text-sm font-semibold text-accent">
              {formState.fieldErrors?.questionTypeId}
            </span>
          )}
        </div>
        <div className="mt-4">
          <StyFormSelect<QuestionLevel & { [key: string]: any }>
            name="questionLevelId"
            placeholder="Please select questionLevel"
            required
            displayProp={"name"}
            valueProp={"id"}
            datas={payload?.questionLevels}
            defaultValue={question.questionLevelId}
          />
          {!formState.success && formState.fieldErrors?.questionLevelId && (
            <span className="text-sm font-semibold text-accent">
              {formState.fieldErrors?.questionLevelId}
            </span>
          )}
        </div>
      </div>

      {/* Answer fields */}
      <div className="mt-4">
        <CreateQuestionAnswerForm
          questionAnswers={ansList}
          setQuestionAnswers={setAnsList}
        />
      </div>
      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

// #region QuestionAnswer
interface CreateQuestionAnswerFormProps extends FormWithPayload<{}> {
  questionAnswers: CreateQuestionAnswerRequestModel[];
  setQuestionAnswers: Function;
}

const CreateQuestionAnswerForm: React.FC<CreateQuestionAnswerFormProps> = (
  props,
) => {
  const { questionAnswers, setQuestionAnswers } = props;
  const nextAnswer = {
    ...answersQuestionInit,
    orderIndex: questionAnswers.length,
  };

  const handleAddOption = () => {
    setQuestionAnswers([...questionAnswers, nextAnswer]);
  };

  const handleRemoveOption = (index: number) => {
    // if therer is only one option the do nothing
    if (questionAnswers.length == 1) return;

    const nextQuestionAnswers = questionAnswers.filter(
      (_, idx) => idx !== index,
    );

    setQuestionAnswers(nextQuestionAnswers);
  };

  const handleToggleState = (index: number) => {
    const nextQuestionAnswers = questionAnswers.map((ans, idx) => {
      if (idx === index) {
        return {
          ...ans,
          isCorrect: !ans.isCorrect,
        };
      }
      return {
        ...ans,
        isCorrect: false,
      };
    });

    setQuestionAnswers(nextQuestionAnswers);
  };

  const handleUpdateAnswer = (index: number, text: string) => {
    const ansUpdate = { ...questionAnswers[index], text: text };

    setQuestionAnswers(
      questionAnswers.map((_, idx) => {
        if (idx === index) return ansUpdate;
        return _;
      }),
    );
  };

  return (
    <>
      <div className="flex gap-2.5 text-xl font-semibold">
        <button
          type="button"
          className="grid h-8 w-8 place-items-center rounded-md bg-success text-sm text-text"
          onClick={handleAddOption}
        >
          <FaPlus />
        </button>
        <span>Options</span>
      </div>

      <div className="mt-4">
        {questionAnswers &&
          questionAnswers.map((ans, index) => {
            return (
              <AnswerInput
                key={"___" + ans.orderIndex}
                ans={ans}
                index={index}
                onTextChange={handleUpdateAnswer}
                onToggleState={handleToggleState}
                onRemoveOption={handleRemoveOption}
              />
            );
          })}
      </div>
    </>
  );
};
export { CreateQuestionForm, UpdateQuestionForm };

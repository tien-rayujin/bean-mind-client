"use client";

import { SubmitButton } from "@/components/Form/Button";
import { StyFormInput, StyFormSelect } from "@/components/Form/FormInput";
import { Toast } from "@/components/Toast";
import { BaseResponse } from "@/lib/common/BasePayload";
import { FormWithPayload } from "@/lib/common/FormWithPayload";
import {
  CreateWorksheetRequestHandlerWithQuestionList,
  UpdateWorksheetRequestHandlerWithQuestionList,
} from "@/lib/services/worksheet/Handlers";
import { GetWorksheetResponseModel } from "@/lib/services/worksheet/Models";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

// #region Create
interface CreateWorksheetFormProps
  extends FormWithPayload<{
    activities: Activity[];
    worksheetTemplates: WorksheetTemplate[];
    questions: Question[];
  }> {}

const createWorksheetFormInit: BaseResponse<GetWorksheetResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const CreateWorksheetForm: React.FC<CreateWorksheetFormProps> = (props) => {
  const { payload } = props;
  const [questionList, setQuestionList] = useState<Set<string>>(new Set());
  const [formState, formAction] = useFormState(
    CreateWorksheetRequestHandlerWithQuestionList.bind(null, questionList),
    createWorksheetFormInit,
  );
  const router = useRouter();

  // const defaultActivity = payload?.activities.find(
  //   (a) => a.activityType.name.toLowerCase() === "worksheet",
  // );

  // console.log({ defaultActivity });

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

  useEffect(() => {
    console.log("questionList changed into ");
    console.table(questionList);
  }, [questionList]);

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

      <StyFormSelect<WorksheetTemplate & { [key: string]: any }>
        name="worksheetTemplateId"
        placeholder="Please select worksheetTemplate"
        required
        displayProp={"classification"}
        valueProp={"id"}
        datas={payload?.worksheetTemplates}
        defaultValue={""}
      />
      {!formState.success && formState.fieldErrors?.worksheetTemplateId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.worksheetTemplateId}
        </span>
      )}

      <StyFormSelect<Activity & { [key: string]: any }>
        name="activityId"
        placeholder="Please select activity"
        required
        displayProp={"activityTypeId"}
        valueProp={"id"}
        datas={payload?.activities}
        // defaultValue={defaultActivity?.id}
      />
      {!formState.success && formState.fieldErrors?.activityId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.activityId}
        </span>
      )}

      {/* Pick Questions to add to this worksheet */}
      {payload?.questions && (
        <QuestionPick
          datas={payload.questions}
          questionList={questionList}
          setQuestionList={setQuestionList}
        />
      )}

      <SubmitButton title="Create" extras="w-full" />
    </form>
  );
};

// #region Update
interface UpdateWorksheetFormProps
  extends FormWithPayload<{
    activities: Activity[];
    worksheetTemplates: WorksheetTemplate[];
    questions: Question[];
    worksheetQuestions: WorksheetQuestion[];
  }> {
  worksheet: Worksheet;
}

const updateWorksheetFormInit: BaseResponse<GetWorksheetResponseModel> = {
  success: false,
  message: "",
  data: undefined,
  errors: [],
  fieldErrors: {},
};

const UpdateWorksheetForm: React.FC<UpdateWorksheetFormProps> = (props) => {
  const { payload } = props;
  const questionListIni = payload?.worksheetQuestions.map(
    (worksheetQuestion) => worksheetQuestion.questionId,
  );
  console.log("questionListIni");
  console.table(questionListIni);

  const [questionList, setQuestionList] = useState<Set<string>>(
    new Set(questionListIni),
  );
  console.log("questionList");
  console.table(questionList);

  const [formState, formAction] = useFormState(
    UpdateWorksheetRequestHandlerWithQuestionList.bind(
      null,
      questionList,
      payload?.worksheetQuestions || [],
    ),
    updateWorksheetFormInit,
  );
  const worksheet = props.worksheet;
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
      <input type="hidden" name="id" value={worksheet.id} />
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
        defaultValue={worksheet.title}
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
        defaultValue={worksheet.description}
      />
      {!formState.success && formState.fieldErrors?.description && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.description}
        </span>
      )}

      <StyFormSelect<WorksheetTemplate & { [key: string]: any }>
        name="worksheetTemplateId"
        placeholder="Please select worksheetTemplate"
        required
        displayProp={"classification"}
        valueProp={"id"}
        datas={payload?.worksheetTemplates}
        defaultValue={worksheet.worksheetTemplate?.id}
      />
      {!formState.success && formState.fieldErrors?.worksheetTemplateId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.worksheetTemplateId}
        </span>
      )}

      <StyFormSelect<Activity & { [key: string]: any }>
        name="activityId"
        placeholder="Please select activity"
        required
        displayProp={"activityTypeId"}
        valueProp={"id"}
        datas={payload?.activities}
        defaultValue={worksheet.activity.id}
      />
      {!formState.success && formState.fieldErrors?.activityId && (
        <span className="text-sm font-semibold text-accent">
          {formState.fieldErrors?.activityId}
        </span>
      )}

      {/* Pick Questions to add to this worksheet */}
      {payload?.questions && (
        <QuestionPick
          datas={payload.questions}
          questionList={questionList}
          setQuestionList={setQuestionList}
        />
      )}

      <SubmitButton title="Update" extras="w-full" />
    </form>
  );
};

interface QuestionPickProps {
  datas?: Question[];
  questionList: Set<string>;
  setQuestionList: Function;
}

const QuestionPick: React.FC<QuestionPickProps> = (props) => {
  const { questionList, datas, setQuestionList } = props;

  // add additional property to each question in questionList

  const handleToogle = (id: string) => {
    const nextQuestionList = new Set(questionList);
    if (nextQuestionList.has(id)) {
      nextQuestionList.delete(id);
    } else {
      nextQuestionList.add(id);
    }
    setQuestionList(nextQuestionList);
  };

  const modifiedData =
    datas &&
    datas.map((question) => {
      return { ...question, isSelected: questionList.has(question.id) };
    });

  return (
    <div>
      {modifiedData &&
        modifiedData.map((question) => {
          return (
            <div key={question.id}>
              <AQuestion question={question} handleToogle={handleToogle} />
            </div>
          );
        })}
    </div>
  );
};

interface AQuestionProps {
  question: Question & { isSelected: boolean };
  handleToogle: Function;
}

const AQuestion: React.FC<AQuestionProps> = (props) => {
  const { id, text, questionAnswers, isSelected } = props.question;
  const { handleToogle } = props;

  const handleSelect = () => {
    console.log("question selected");
    handleToogle(id);
  };

  return (
    <div className="mt-4 flex items-center justify-between">
      <details>
        <summary>{text}</summary>
        {questionAnswers &&
          questionAnswers.map((answer) => {
            return <li key={answer.id}>{answer.text}</li>;
          })}
      </details>
      <button
        type="button"
        onClick={handleSelect}
        className="grid h-12 w-12 place-items-center rounded-xl bg-primary/50"
      >
        {isSelected ? (
          <div className="h-6 w-6 rounded-md bg-primary"></div>
        ) : (
          <div className="h-6 w-6 rounded-xl"></div>
        )}
      </button>
    </div>
  );
};

export { CreateWorksheetForm, UpdateWorksheetForm };

import { queryBuilder } from "../utils";

const apiURL = new URL(process.env.NEXT_PUBLIC_API_URL || "");

// #region Auth
const authEndpoint = "/auth";
export const loginRequestEndpoint = apiURL.href.concat(`${authEndpoint}/login`);
export const registerRequestEndpoint = apiURL.href.concat(
  `${authEndpoint}/register`,
);
export const loginGoogleRequestEndpoint = apiURL.href.concat(
  `${authEndpoint}/loginGoogle`,
);
export const resendConfirmEmailRequestEndpoint = apiURL.href.concat(`
  /resendConfirmEmail`);
export const forgotPasswordRequestEndpoint = apiURL.href.concat(
  `${authEndpoint}/forgotPassword`,
);
export const resetPasswordRequestEndpoint = apiURL.href.concat(
  `${authEndpoint}/resetPassword`,
);
export const confirmEmailRequestEndpoint = apiURL.href.concat(
  `${authEndpoint}/confirmEmail`,
);
export const getUserInfoRequestEndpoint = apiURL.href.concat(
  `${authEndpoint}/info`,
);

// #region Activity
const activityEndpoint = "/activities";
export const getActivitiesEndpoint = apiURL.href.concat(`${activityEndpoint}`);
export const getActivityEndpoint = (id: string) =>
  apiURL.href.concat(`${activityEndpoint}/${id}`);
export const createActivityEndpoint = apiURL.href.concat(`${activityEndpoint}`);
export const updateActivityEndpoint = apiURL.href.concat(`${activityEndpoint}`);
export const deleteActivityEndpoint = (id: string) =>
  apiURL.href.concat(`${activityEndpoint}`);

// #region ActivityType
const activityTypeEndpoint = "/activity-types";
export const getActivityTypeTypesEndpoint = apiURL.href.concat(
  `${activityTypeEndpoint}`,
);
export const getActivityTypeEndpoint = (id: string) =>
  apiURL.href.concat(`${activityTypeEndpoint}/${id}`);
export const createActivityTypeEndpoint = apiURL.href.concat(
  `${activityTypeEndpoint}`,
);
export const updateActivityTypeEndpoint = apiURL.href.concat(
  `${activityTypeEndpoint}`,
);
export const deleteActivityTypeEndpoint = (id: string) =>
  apiURL.href.concat(`${activityTypeEndpoint}`);

// #region Chapter
const chapterEndpoint = "/chapters";
export const getChaptersEndpoint = apiURL.href.concat(`${chapterEndpoint}`);
export const getChapterEndpoint = (id: string) =>
  apiURL.href.concat(`${chapterEndpoint}/${id}`);
export const createChapterEndpoint = apiURL.href.concat(`${chapterEndpoint}`);
export const updateChapterEndpoint = apiURL.href.concat(`${chapterEndpoint}`);
export const deleteChapterEndpoint = (id: string) =>
  apiURL.href.concat(`${chapterEndpoint}`);

// #region Question
const questionEndpoint = "/questions";
export const getQuestionsEndpoint = apiURL.href.concat(`${questionEndpoint}`);
export const getQuestionEndpoint = (id: string) =>
  apiURL.href.concat(`${questionEndpoint}/${id}`);
export const createQuestionEndpoint = apiURL.href.concat(`${questionEndpoint}`);
export const updateQuestionEndpoint = apiURL.href.concat(`${questionEndpoint}`);
export const deleteQuestionEndpoint = (id: string) =>
  apiURL.href.concat(`${questionEndpoint}`);

// #region QuestionAnswer
const questionAnswerEndpoint = "/question-answers";
export const getQuestionAnswersEndpoint = apiURL.href.concat(
  `${questionAnswerEndpoint}`,
);
export const getQuestionAnswerEndpoint = (id: string) =>
  apiURL.href.concat(`${questionAnswerEndpoint}/${id}`);
export const createQuestionAnswerEndpoint = apiURL.href.concat(
  `${questionAnswerEndpoint}`,
);
export const updateQuestionAnswerEndpoint = apiURL.href.concat(
  `${questionAnswerEndpoint}`,
);
export const deleteQuestionAnswerEndpoint = (id: string) =>
  apiURL.href.concat(`${questionAnswerEndpoint}`);

// #region QuestionLevel
const questionLevelEndpoint = "/question-levels";
export const getQuestionLevelsEndpoint = apiURL.href.concat(
  `${questionLevelEndpoint}`,
);
export const getQuestionLevelEndpoint = (id: string) =>
  apiURL.href.concat(`${questionLevelEndpoint}/${id}`);
export const createQuestionLevelEndpoint = apiURL.href.concat(
  `${questionLevelEndpoint}`,
);
export const updateQuestionLevelEndpoint = apiURL.href.concat(
  `${questionLevelEndpoint}`,
);
export const deleteQuestionLevelEndpoint = (id: string) =>
  apiURL.href.concat(`${questionLevelEndpoint}`);

// #region QuestionType
const questionTypeEndpoint = "/question-types";
export const getQuestionTypesEndpoint = apiURL.href.concat(
  `${questionTypeEndpoint}`,
);
export const getQuestionTypeEndpoint = (id: string) =>
  apiURL.href.concat(`${questionTypeEndpoint}/${id}`);
export const createQuestionTypeEndpoint = apiURL.href.concat(
  `${questionTypeEndpoint}`,
);
export const updateQuestionTypeEndpoint = apiURL.href.concat(
  `${questionTypeEndpoint}`,
);
export const deleteQuestionTypeEndpoint = (id: string) =>
  apiURL.href.concat(`${questionTypeEndpoint}`);

// #region Subject
const subjectEndpoint = "/subjects";
export const getSubjectsEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${subjectEndpoint}${query && "?".concat(queryBuilder(query))}`,
  );
export const getSubjectEndpoint = (id: string) =>
  apiURL.href.concat(`${subjectEndpoint}/${id}`);
export const createSubjectEndpoint = apiURL.href.concat(`${subjectEndpoint}`);
export const updateSubjectEndpoint = apiURL.href.concat(`${subjectEndpoint}`);
export const deleteSubjectEndpoint = (id: string) =>
  apiURL.href.concat(`${subjectEndpoint}`);

// #region Course
const courseEndpoint = "/courses";
export const getCoursesEndpoint = apiURL.href.concat(`${courseEndpoint}`);
export const getCourseEndpoint = (id: string) =>
  apiURL.href.concat(`${courseEndpoint}/${id}`);
export const createCourseEndpoint = apiURL.href.concat(`${courseEndpoint}`);
export const updateCourseEndpoint = apiURL.href.concat(`${courseEndpoint}`);
export const deleteCourseEndpoint = (id: string) =>
  apiURL.href.concat(`${courseEndpoint}`);

// #region Topic
const topicEndpoint = "/topics";
export const getTopicsEndpoint = apiURL.href.concat(`${topicEndpoint}`);
export const getTopicEndpoint = (id: string) =>
  apiURL.href.concat(`${topicEndpoint}/${id}`);
export const createTopicEndpoint = apiURL.href.concat(`${topicEndpoint}`);
export const updateTopicEndpoint = apiURL.href.concat(`${topicEndpoint}`);
export const deleteTopicEndpoint = (id: string) =>
  apiURL.href.concat(`${topicEndpoint}`);

// #region Worksheet
const worksheetEndpoint = "/worksheets";
export const getWorksheetsEndpoint = apiURL.href.concat(`${worksheetEndpoint}`);
export const getWorksheetEndpoint = (id: string) =>
  apiURL.href.concat(`${worksheetEndpoint}/${id}`);
export const createWorksheetEndpoint = apiURL.href.concat(
  `${worksheetEndpoint}`,
);
export const updateWorksheetEndpoint = apiURL.href.concat(
  `${worksheetEndpoint}`,
);
export const deleteWorksheetEndpoint = (id: string) =>
  apiURL.href.concat(`${worksheetEndpoint}`);

// #region WorksheetQuesiton
const worksheetQuestionEndpoint = "/worksheet-questions";
export const getWorksheetQuestionsEndpoint = apiURL.href.concat(
  `${worksheetQuestionEndpoint}`,
);
export const getWorksheetQuestionEndpoint = (id: string) =>
  apiURL.href.concat(`${worksheetQuestionEndpoint}/${id}`);
export const createWorksheetQuestionEndpoint = apiURL.href.concat(
  `${worksheetQuestionEndpoint}`,
);
export const updateWorksheetQuestionEndpoint = apiURL.href.concat(
  `${worksheetQuestionEndpoint}`,
);
export const deleteWorksheetQuestionEndpoint = (id: string) =>
  apiURL.href.concat(`${worksheetQuestionEndpoint}`);

// #region WorksheetTemplate
const worksheetTemplateEndpoint = "/worksheet-templates";
export const getworksheetTemplatesEndpoint = apiURL.href.concat(
  `${worksheetTemplateEndpoint}`,
);
export const getworksheetTemplateEndpoint = (id: string) =>
  apiURL.href.concat(`${worksheetTemplateEndpoint}/${id}`);
export const createworksheetTemplateEndpoint = apiURL.href.concat(
  `${worksheetTemplateEndpoint}`,
);
export const updateworksheetTemplateEndpoint = apiURL.href.concat(
  `${worksheetTemplateEndpoint}`,
);
export const deleteworksheetTemplateEndpoint = (id: string) =>
  apiURL.href.concat(`${worksheetTemplateEndpoint}`);

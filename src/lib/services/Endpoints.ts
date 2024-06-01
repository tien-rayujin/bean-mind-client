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

// #region Chapter
const chapterEndpoint = "/chapters";
export const getChaptersEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${chapterEndpoint}${query && "?".concat(queryBuilder(query))}`,
  );
export const getChapterEndpoint = (id: string) =>
  apiURL.href.concat(`${chapterEndpoint}/${id}`);
export const createChapterEndpoint = apiURL.href.concat(`${chapterEndpoint}`);
export const updateChapterEndpoint = apiURL.href.concat(`${chapterEndpoint}`);
export const deleteChapterEndpoint = (id: string) =>
  apiURL.href.concat(`${chapterEndpoint}/${id}`);

// #region Question
const questionEndpoint = "/questions";
export const getQuestionsEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${questionEndpoint}${query && "?".concat(queryBuilder(query))}`,
  );
export const getQuestionEndpoint = (id: string) =>
  apiURL.href.concat(`${questionEndpoint}/${id}`);
export const createQuestionEndpoint = apiURL.href.concat(`${questionEndpoint}`);
export const updateQuestionEndpoint = apiURL.href.concat(`${questionEndpoint}`);
export const deleteQuestionEndpoint = (id: string) =>
  apiURL.href.concat(`${questionEndpoint}/${id}`);

// #region QuestionAnswer
const questionAnswerEndpoint = "/question-answers";
export const getQuestionAnswersEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${questionAnswerEndpoint}${query && "?".concat(queryBuilder(query))}`,
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
  apiURL.href.concat(`${questionAnswerEndpoint}/${id}`);

// #region QuestionLevel
const questionLevelEndpoint = "/question-levels";
export const getQuestionLevelsEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${questionLevelEndpoint}${query && "?".concat(queryBuilder(query))}`,
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
  apiURL.href.concat(`${questionLevelEndpoint}/${id}`);

// #region QuestionType
const questionTypeEndpoint = "/question-types";
export const getQuestionTypesEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${questionTypeEndpoint}${query && "?".concat(queryBuilder(query))}`,
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
  apiURL.href.concat(`${questionTypeEndpoint}/${id}`);

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
  apiURL.href.concat(`${subjectEndpoint}/${id}`);

// #region Course
const courseEndpoint = "/courses";
export const getCoursesEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${courseEndpoint}${query && "?".concat(queryBuilder(query))}`,
  );
export const getCourseEndpoint = (id: string) =>
  apiURL.href.concat(`${courseEndpoint}/${id}`);
export const createCourseEndpoint = apiURL.href.concat(`${courseEndpoint}`);
export const updateCourseEndpoint = apiURL.href.concat(`${courseEndpoint}`);
export const deleteCourseEndpoint = (id: string) =>
  apiURL.href.concat(`${courseEndpoint}/${id}`);

// #region Topic
const topicEndpoint = "/topics";
export const getTopicsEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${topicEndpoint}${query && "?".concat(queryBuilder(query))}`,
  );
export const getTopicEndpoint = (id: string) =>
  apiURL.href.concat(`${topicEndpoint}/${id}`);
export const createTopicEndpoint = apiURL.href.concat(`${topicEndpoint}`);
export const updateTopicEndpoint = apiURL.href.concat(`${topicEndpoint}`);
export const deleteTopicEndpoint = (id: string) =>
  apiURL.href.concat(`${topicEndpoint}/${id}`);

// #region Worksheet
const worksheetEndpoint = "/worksheets";
export const getWorksheetsEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${worksheetEndpoint}${query && "?".concat(queryBuilder(query))}`,
  );
export const getWorksheetEndpoint = (id: string) =>
  apiURL.href.concat(`${worksheetEndpoint}/${id}`);
export const createWorksheetEndpoint = apiURL.href.concat(
  `${worksheetEndpoint}`,
);
export const updateWorksheetEndpoint = apiURL.href.concat(
  `${worksheetEndpoint}`,
);
export const deleteWorksheetEndpoint = (id: string) =>
  apiURL.href.concat(`${worksheetEndpoint}/${id}`);

// #region WorksheetQuesiton
const worksheetQuestionEndpoint = "/worksheet-questions";
export const getWorksheetQuestionsEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${worksheetQuestionEndpoint}${query && "?".concat(queryBuilder(query))}`,
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
  apiURL.href.concat(`${worksheetQuestionEndpoint}/${id}`);

// #region WorksheetTemplate
const worksheetTemplateEndpoint = "/worksheet-templates";
export const getWorksheetTemplatesEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${worksheetTemplateEndpoint}${query && "?".concat(queryBuilder(query))}`,
  );
export const getWorksheetTemplateEndpoint = (id: string) =>
  apiURL.href.concat(`${worksheetTemplateEndpoint}/${id}`);
export const createWorksheetTemplateEndpoint = apiURL.href.concat(
  `${worksheetTemplateEndpoint}`,
);
export const updateWorksheetTemplateEndpoint = apiURL.href.concat(
  `${worksheetTemplateEndpoint}`,
);
export const deleteWorksheetTemplateEndpoint = (id: string) =>
  apiURL.href.concat(`${worksheetTemplateEndpoint}/${id}`);

// #region GradeLevel
const gradeLevelEndpoint = "/grade-levels";
export const getGradeLevelsEndpoint = (query: Object) =>
  apiURL.href.concat(
    `${gradeLevelEndpoint}${query && "?".concat(queryBuilder(query))}`,
  );
export const getGradeLevelEndpoint = (id: string) =>
  apiURL.href.concat(`${gradeLevelEndpoint}/${id}`);
export const createGradeLevelEndpoint = apiURL.href.concat(
  `${gradeLevelEndpoint}`,
);
export const updateGradeLevelEndpoint = apiURL.href.concat(
  `${gradeLevelEndpoint}`,
);
export const deleteGradeLevelEndpoint = (id: string) =>
  apiURL.href.concat(`${gradeLevelEndpoint}/${id}`);

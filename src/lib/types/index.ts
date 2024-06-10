interface BaseAuditableEntity {
  id: string;
  created?: Date;
  createdBy?: string;
  LastModified?: Date;
  lastModifiedBy?: string;
  deletedDate?: Date;
  deletedBy?: string;

  isDeleted: boolean;
}

interface AppUser {
  userName: string;
  email: string;
  phoneNumber: string;
  roleNames: Array<string>;

  id: string;
  isDeleted: boolean;
}

interface Student extends BaseAuditableEntity {
  appUserId: string;
  packageOrderId: string;

  appUser: AppUser;
}

interface Lecturer extends BaseAuditableEntity {
  appUserId: string;
  appUser: AppUser;
  worksheets: Array<Worksheet>;
}

interface Manager extends BaseAuditableEntity {
  appUserId: string;
  appUser: AppUser;
}

interface Subject extends BaseAuditableEntity {
  title: string;
  description: string;
  courses: Array<Course>;
}

interface Course extends BaseAuditableEntity {
  title: string;
  description: string;
  subjectId: string;
  gradeLevelId: string;
  subject: Subject;
  gradeLevel: GradeLevel;
  chapters: Array<Chapter>;
}

interface Slot extends BaseAuditableEntity {
  name: string;
  startTime: string;
  endTime: string;
}

interface Chapter extends BaseAuditableEntity {
  title: string;
  description: string;
  courseId: string;
  course: Course;
  topics: Array<Topic>;
}

interface Topic extends BaseAuditableEntity {
  title: string;
  description: string;
  chapterId: string;
  chapter: Chapter;
  worksheets: Array<Worksheet>;
}

interface GradeLevel extends BaseAuditableEntity {
  name: string;
  courses: Array<Course>;
}

interface Question extends BaseAuditableEntity {
  text: string;
  imageUrl: string;
  topicId: string;
  questionLevelId: string;
  questionTypeId: string;
  topic: Topic;
  questionLevel: QuestionLevel;
  questionType: QuestionType;
  questionAnswers: Array<QuestionAnswer>;
  worksheetQuestions: Array<WorksheetQuestion>;
}

interface QuestionAnswer extends BaseAuditableEntity {
  text: string;
  isCorrect: boolean;
  questionId: string;
  question: Question;
}

interface QuestionLevel extends BaseAuditableEntity {
  name: string;
  questions: Array<Question>;
}

interface QuestionType extends BaseAuditableEntity {
  name: string;
  questions: Array<Question>;
}

interface Worksheet extends BaseAuditableEntity {
  title: string;
  description: string;
  topicId: string;
  lecturerId: string;
  worksheetTemplateId?: string;
  topic: Topic;
  lecturer: Lecturer;
  worksheetTemplate?: WorksheetTemplate;
  worksheetQuestions: Array<WorksheetQuestion>;
}

interface WorksheetQuestion extends BaseAuditableEntity {
  worksheetId?: string;
  worksheet?: Worksheet;
  questionId: string;
  question: Question;
}

interface WorksheetTemplate extends BaseAuditableEntity {
  classification: number;
  easyQuestionCount: number;
  normalQuestionCount: number;
  hardQuestionCount: number;
  totalQuestionCount: number;
  subjectId: string;
  chapterId: string;
  topicId: string;
  subject: Subject;
  chapter: Chapter;
  topic: Topic;
  worksheets: Array<Worksheet>;
}

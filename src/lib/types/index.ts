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

interface Indexable {
  orderIndex: number;
}

interface Activity extends BaseAuditableEntity {
  activityTypeId: string;
  activityType: ActivityType;
  topicId: String;
  topic: Topic;
  documents: Array<Document>;
  videos: Array<Video>;
  worksheets: Array<Worksheet>;
}

interface ActivityType extends BaseAuditableEntity {
  name: string;
  activities: Array<Activity>;
}

interface Chapter extends BaseAuditableEntity {
  title: string;
  description: string;
  courseId: string;
  course: Course;
  topics: Array<Topic>;
}

interface Course extends BaseAuditableEntity {
  title: string;
  description: string;
  subjectId: string;
  subject: Subject;
  chapters: Array<Chapter>;
  studentInCourse: Array<StudentInCourse>;
}

interface Document extends BaseAuditableEntity {
  title: string;
  content: string;
  author: string;
  activityId: string;
  activity: Activity;
}

interface Question extends BaseAuditableEntity, Indexable {
  text: string;
  imageUrl: string;
  topicId: string;
  topic: Topic;
  questionLevelId: string;
  questionLevel: QuestionLevel;
  questionTypeId: string;
  questionType: QuestionType;
  questionAnswers: Array<QuestionAnswer>;
  worksheetQuestions: Array<WorksheetQuestion>;
}

interface QuestionAnswer extends BaseAuditableEntity, Indexable {
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

interface StudentInCourse extends BaseAuditableEntity {
  studentId: string;
  // missing student object here
  courseId: string;
  course: Course;
}

interface Subject extends BaseAuditableEntity {
  title: string;
  description: string;
  courses: Array<Course>;
}

interface Topic extends BaseAuditableEntity {
  title: string;
  description: string;
  chapterId: string;
  chapter: Chapter;
  activities: Array<Activity>;
}

interface Video extends BaseAuditableEntity {
  title: string;
  url: string;
  activityId: string;
  activity: Activity;
}

interface Worksheet extends BaseAuditableEntity {
  title: string;
  description: string;
  activityId: string;
  activity: Activity;
  worksheetTemplateId?: string;
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
  classification: string; // subject | chapter | topic
  easyQuestionCount: number;
  normalQuestionCount: number;
  hardQuestionCount: number;
  totalQuestionCount: number;
  suffle: boolean;
  subjectId: string;
  subject: Subject;
  chapterId: string;
  chapter: Chapter;
  topicId: string;
  topic: Topic;
  worksheets: Array<Worksheet>;
}

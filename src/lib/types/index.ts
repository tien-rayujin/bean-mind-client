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
}

interface Student extends BaseAuditableEntity {
  appUserId: string;
  packageOrderId: string;

  appUser: AppUser;
  packageOrder: PackageOrder;
  enrollments: Array<Enrollment>;
}

interface Lecturer extends BaseAuditableEntity {
  appUserId: string;
  appUser: AppUser;
  teachables: Array<Teachable>;
  enrollments: Array<Enrollment>;
  sessions: Array<Session>;
  teachingSlots: Array<TeachingSlot>;
  worksheets: Array<Worksheet>;
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
  coursePackages: Array<CoursePackage>;
  teachables: Array<Teachable>;
}

interface CoursePackage extends BaseAuditableEntity {
  courseId: string;
  packageId: string;
  course: Course;
  package: Package;
}

interface Teachable extends BaseAuditableEntity {
  courseId: string;
  lecturerId: string;
  course: Course;
  lecturer: Lecturer;
}

interface Package extends BaseAuditableEntity {
  name: string;
  gradeLevelId: string;

  gradeLevel: GradeLevel;
  coursePackages: Array<CoursePackage>;
  packageOrders: Array<PackageOrder>;
}

interface PackageOrder extends BaseAuditableEntity {
  packageId: string;
  package: Package;
  payments: Array<Payment>;
  enrollments: Array<Enrollment>;
  students: Array<Student>;
}

interface Payment extends BaseAuditableEntity {
  amount: number;
  paymentDate: Date;
  paymentStatus: number;
  packageOrderId: string;
  packageOrder: PackageOrder;
}

interface Enrollment extends BaseAuditableEntity {
  packageOrderId: string;
  studentId: string;
  lecturerId: string;
  packageOrder: PackageOrder;
  student: Student;
  lecturer: Lecturer;
  sessions: Array<Session>;
}

interface Session extends BaseAuditableEntity {
  enrollmentId: string;
  lecturerId: string;
  teachingSlotId: string;
  enrollment: Enrollment;
  lecturer: Lecturer;
  teachingSlot: TeachingSlot;
}

interface TeachingSlot extends BaseAuditableEntity {
  date: Date;
  gradeLevelId: string;
  lecturerId: string;
  slotId: string;
  gradeLevel: GradeLevel;
  lecturer: Lecturer;
  slot: Slot;
  sessions: Array<Session>;
}

interface Slot extends BaseAuditableEntity {
  name: string;
  startTime: string;
  endTime: string;
  teachingSlots: Array<TeachingSlot>;
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
  packages: Array<Package>;
  teachingSlots: Array<TeachingSlot>;
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

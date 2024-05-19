const seed_Subjects: Subject[] = [
  {
    title: "Toán",
    description:
      "Môn Toán trẻ em giúp phát triển kỹ năng toán học cơ bản cho trẻ qua các hoạt động và trò chơi thú vị. Mục tiêu là tạo nền tảng vững chắc cho sự hiểu biết và tự tin của trẻ khi tiếp cận với toán học.",
    courses: [],
    isDeleted: false,
    id: "subject_id",
  },
];

const seed_Courses: Course[] = [
  {
    id: "course1",
    title: "Số học",
    description:
      "Số học là nền tảng của toán học, tập trung vào việc nghiên cứu và hiểu về các số và phép tính. Trong số học, học sinh học cách thực hiện các phép toán cơ bản như cộng, trừ, nhân, chia, cũng như các khái niệm như số nguyên tố, bội số chung nhỏ nhất và cách áp dụng chúng vào các bài toán thực tế.",
    subjectId: "math_subject1",
    subject: seed_Subjects[0],
    chapters: [],
    studentInCourse: [],
    isDeleted: false,
  },
  {
    id: "course2",
    title: "Hình học nâng cao",
    description:
      "Hình học nghiên cứu về các hình học cơ bản như hình vuông, hình tròn, tam giác và các hình khác, cũng như các phép biến đổi hình học như tịnh tiến, quay và phản xạ. Học sinh được giáo dục về cách tính diện tích, chu vi và khám phá các tính chất đặc biệt của các hình học này.",
    subjectId: "math_subject2",
    subject: seed_Subjects[0],
    chapters: [],
    studentInCourse: [],
    isDeleted: false,
  },
];

const seed_Chapters: Chapter[] = [
  {
    id: "chapter1",
    title: "Biểu thức đại số",
    description:
      "Giới thiệu về các biểu thức đại số, bao gồm các phép toán cơ bản như cộng, trừ, nhân và chia biểu thức",
    courseId: seed_Courses[0].id,
    course: seed_Courses[0],
    topics: [],
    isDeleted: false,
  },
  {
    id: "chapter2",
    title: "Phương trình đại số cơ bản",
    description:
      "Học cách giải các phương trình đơn giản bằng cách tìm giá trị của biến số.",
    courseId: seed_Courses[0].id,
    course: seed_Courses[0],
    topics: [],
    isDeleted: false,
  },
  {
    id: "chapter3",
    title: "Hệ phương trình đại số",
    description:
      "Giải quyết các bài toán liên quan đến hệ phương trình đại số bằng các phương pháp như phương pháp loại trừ hoặc phương pháp thế",
    courseId: seed_Courses[0].id,
    course: seed_Courses[0],
    topics: [],
    isDeleted: false,
  },
];

const seed_Topics: Topic[] = [
  {
    id: "topic1",
    chapterId: seed_Chapters[0].id,
    title: "Biểu thức đại số cơ bản",
    description:
      "Giới thiệu về cấu trúc của biểu thức đại số, bao gồm các phép toán cơ bản như cộng, trừ, nhân và chia",
    chapter: seed_Chapters[0],
    activities: [],
    isDeleted: false,
  },
  {
    id: "topic2",
    chapterId: seed_Chapters[0].id,
    title: "Rút gọn biểu thức",
    description:
      "Học cách rút gọn và đơn giản hóa các biểu thức đại số bằng cách sử dụng các quy tắc phù hợp.",
    chapter: seed_Chapters[0],
    activities: [],
    isDeleted: false,
  },
  {
    id: "topic3",
    chapterId: seed_Chapters[0].id,
    title: "Biểu thức đại số đa biến",
    description:
      "Khám phá về cách xử lý và giải quyết các biểu thức đại số có nhiều hơn một biến số",
    chapter: seed_Chapters[0],
    activities: [],
    isDeleted: false,
  },
];

const seed_ActivityTypes: ActivityType[] = [
  {
    id: "activityType1",
    name: "Documents",
    activities: [],
    isDeleted: false,
  },
  {
    id: "activityType2",
    name: "Videos",
    activities: [],
    isDeleted: false,
  },
  {
    id: "activityType3",
    name: "Worksheets",
    activities: [],
    isDeleted: false,
  },
];

const seed_Activity: Activity[] = [
  {
    id: "activity1",
    activityTypeId: seed_ActivityTypes[2].id,
    activityType: seed_ActivityTypes[2],
    topicId: seed_Topics[0].id,
    topic: seed_Topics[0],
    documents: [],
    videos: [],
    worksheets: [],
    isDeleted: false,
  },
];

const seed_WorksheetTemplates: WorksheetTemplate[] = [
  {
    id: "worksheetTemplate1",
    classification: "2",
    easyQuestionCount: 5,
    normalQuestionCount: 3,
    hardQuestionCount: 2,
    totalQuestionCount: 10,
    suffle: false,
    subjectId: seed_Subjects[0].id,
    subject: seed_Subjects[0],
    chapterId: seed_Chapters[0].id,
    chapter: seed_Chapters[0],
    topicId: seed_Topics[0].id,
    topic: seed_Topics[0],
    worksheets: [],
    isDeleted: false,
  },
];

const seed_Worksheets: Worksheet[] = [
  {
    id: "worksheet1",
    title: "Excercise 1",
    description: "...",
    activityId: seed_Activity[0].id,
    activity: seed_Activity[0],
    worksheetQuestions: [],
    isDeleted: false,
  },
];

const seed_QuestionLevels: QuestionLevel[] = [
  {
    name: "Easy",
    questions: [],
    id: "questionLevel1",
    isDeleted: false,
  },
  {
    name: "Normal",
    questions: [],
    id: "questionLevel2",
    isDeleted: false,
  },
  {
    name: "Hard",
    questions: [],
    id: "questionLevel3",
    isDeleted: false,
  },
];

const seed_QuestionTypes: QuestionType[] = [
  {
    name: "multiple choice",
    questions: [],
    id: "questionType1",
    isDeleted: false,
  },
  {
    name: "number input",
    questions: [],
    id: "questionType2",
    isDeleted: false,
  },
];

const seed_Questions: Question[] = [
  {
    text: "What is [math]20 + 45[/math]",
    imageUrl: "",
    topicId: seed_Topics[0].id,
    topic: seed_Topics[0],
    questionLevelId: seed_QuestionLevels[0].id,
    questionLevel: seed_QuestionLevels[0],
    questionTypeId: seed_QuestionTypes[0].id,
    questionType: seed_QuestionTypes[0],
    questionAnswers: [],
    worksheetQuestions: [],
    id: "question1",
    isDeleted: false,
    orderIndex: 0,
  },
];

const seed_QuestionAnswers: QuestionAnswer[] = [
  {
    text: "[math]55[/math]",
    isCorrect: false,
    questionId: seed_Questions[0].id,
    question: seed_Questions[0],
    id: "questionAnswer1",
    isDeleted: false,
    orderIndex: 0,
  },
  {
    text: "[math]65[/math]",
    isCorrect: true,
    questionId: seed_Questions[0].id,
    question: seed_Questions[0],
    id: "questionAnswer2",
    isDeleted: false,
    orderIndex: 0,
  },
  {
    text: "[math]35[/math]",
    isCorrect: false,
    questionId: seed_Questions[0].id,
    question: seed_Questions[0],
    id: "questionAnswer3",
    isDeleted: false,
    orderIndex: 0,
  },
  {
    text: "[math]50[/math]",
    isCorrect: false,
    questionId: seed_Questions[0].id,
    question: seed_Questions[0],
    id: "questionAnswer4",
    isDeleted: false,
    orderIndex: 0,
  },
];

const seed_WorksheetQuestions: WorksheetQuestion[] = [
  {
    questionId: seed_Questions[0].id,
    question: seed_Questions[0],
    id: "worksheetQuestion1",
    isDeleted: false,
  },
];

export {
  seed_Activity,
  seed_ActivityTypes,
  seed_Chapters,
  seed_Courses,
  seed_QuestionAnswers,
  seed_QuestionLevels,
  seed_QuestionTypes,
  seed_Questions,
  seed_Subjects,
  seed_Topics,
  seed_WorksheetQuestions,
  seed_WorksheetTemplates,
  seed_Worksheets,
};

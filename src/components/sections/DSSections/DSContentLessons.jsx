import React from "react";
import ContentLessons from "../../common/ContentLessons";

const DSContentLesson = () => {
  const DSDemoContent = [
    {
      lesson: "Course Lesson",
      title: "Python Programming",
      description:
        "Join us to master AI & Machine Learning! Learn data science, Linux/Windows commands, GITHUB setup, Python programming, NumPy arrays, file handling, digital image processing, computer vision, and practical manipulation. Start your journey now!",
    },
    {
      lesson: "Course Lesson",
      title: "Data Science and machine Learning",
      description:
        "Explore the realms of Data Science and Machine Learning with Python, TensorFlow, Scikit-learn, and other powerful tools. Gain expertise in extracting insights, building predictive models, and driving innovation across various industries. Unlock endless opportunities by mastering these advanced technologies.",
    },
    {
      lesson: "Course Lesson",
      title: "Artificial intelligence",
      description:
        "Master a range of cutting-edge technologies including advanced algorithms, neural networks, machine learning techniques, data analysis, natural language processing, computer vision, and more.",
    },
    {
      lesson: "Course Lesson",
      title: "Statistics",
      description:
        "Master inferential and descriptive statistics, including measures of central tendency. Utilize NumPy and Statsmodels for analysis, comprehend distributions, hypothesis testing, regression, and probability. Develop skills in data manipulation and visualization for insights from complex datasets.",
    },
    {
      lesson: "Course Lesson",
      title: "Computer Vision",
      description:
        "Gain expertise in CNN architecture for precise image classification and harness the power of OpenCV for seamless image data processing. Additionally, delve into advanced algorithms for in-depth image analysis, pattern recognition, and applications such as facial recognition and object detection.",
    },
    {
      lesson: "Course Lesson",
      title: "Natural language processing",
      description:
        "Discover the transformative potential of Natural Language Processing (NLP) through data science and machine learning. Explore tools like NLTK, spaCy, and TensorFlow to unlock the power of language data for innovative applications and technological advancements.",
    },
  ];

  return (
    <>
      <section className="bg-[#003366] py-[50px]">
        <ContentLessons lessonsArray={DSDemoContent} />
      </section>
    </>
  );
};

export default DSContentLesson;

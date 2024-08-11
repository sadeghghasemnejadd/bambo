import collaboration from "../../../assets/images/collaboration.jpg";
import student from "../../../assets/images/student.jpg";
import consultation from "../../../assets/images/consultation.jpg";

import Advise from "./Advise.js";
import Button from "../../UI/Button";

const AdviseSection = () => {
  const adviceData = [
    {
      id: 0,
      title: "مشاوره آنلاین",
      description: "مشاوران ما برای حل مشکلات شما آماده‌اند...",
      src: consultation,
      alt: "consultation",
      hasButton: true,
      ButtonText: "مشاوره",
    },
    {
      id: 1,
      title: "ارائه مدرک معتبر",
      description: "بهترین راه برای ساختن رزومه حرفه‌ای...",
      src: student,
      alt: "consultation",
    },
    {
      id: 2,
      title: "همکاری در آموزش",
      description: "به اساتید آموزشی ما در بامبو بپیوندید...",
      src: collaboration,
      alt: "consultation",
    },
  ];
  return (
    <div className="advise">
      {adviceData.map((advice) => (
        <Advise
          title={advice.title}
          description={advice.description}
          src={advice.src}
          alt={advice.alt}
          key={advice.id}
        >
          {advice.hasButton && (
            <Button color="secondary">{advice.ButtonText}</Button>
          )}
        </Advise>
      ))}
    </div>
  );
};

export default AdviseSection;

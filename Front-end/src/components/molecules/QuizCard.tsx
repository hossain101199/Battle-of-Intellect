import Link from "next/link";
import Card from "../atoms/Card";
import CategoryLabel from "../atoms/CategoryLabel";
import LParagraph from "../atoms/LParagraph";
import Paragraph from "../atoms/Paragraph";

const QuizCard = () => {
  return (
    <Card className="p-3 flex flex-col gap-4">
      <LParagraph className="font-semibold text-primary">Quiz Title</LParagraph>
      <Paragraph>Description </Paragraph>
      <div className="flex flex-wrap gap-2">
        <CategoryLabel>Category</CategoryLabel>
        <CategoryLabel>Category</CategoryLabel>
        <CategoryLabel>Category</CategoryLabel>
      </div>
      <div className="w-full flex justify-end">
        <Link
          href="/quizzes/1"
          className={`bg-primary rounded-lg text-accent font-semibold p-3 click-animation`}
        >
          Take Quiz
        </Link>
      </div>
    </Card>
  );
};

export default QuizCard;

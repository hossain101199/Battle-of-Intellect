import CategorySelect from "@/components/atoms/CategorySelect";
import Container from "@/components/atoms/Container";
import QuizCard from "@/components/molecules/QuizCard";

const Quizzes = () => {
  return (
    <main>
      <Container className="flex flex-col gap-5">
        <CategorySelect />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>
      </Container>
    </main>
  );
};

export default Quizzes;

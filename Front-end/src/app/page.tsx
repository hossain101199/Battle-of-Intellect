import Container from "@/components/atoms/Container";
import SParagraph from "@/components/atoms/SParagraph";
import QuizCard from "@/components/molecules/QuizCard";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <Container className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <QuizCard />
          <QuizCard />
          <QuizCard />
          <QuizCard />
        </div>

        <div className="flex justify-end">
          <Link href="/quizzes">
            <SParagraph className="font-bold text-primary">
              See more &#x290D;
            </SParagraph>
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default Home;

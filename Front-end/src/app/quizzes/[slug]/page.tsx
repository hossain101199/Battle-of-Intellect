import CancelButton from "@/components/atoms/CancelButton";
import Container from "@/components/atoms/Container";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <Container>
      <CancelButton />
    </Container>
  );
};

export default page;

import { useParams } from "react-router-dom";
import Randing from "../components/randing";

const RandingPage = () => {
  const { title } = useParams();

  return (
    <Randing title={title} />
  );
};

export default RandingPage;
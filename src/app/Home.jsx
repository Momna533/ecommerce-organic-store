import Header from "../components/Header";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Home");
  return <Header />;
};

export default Home;

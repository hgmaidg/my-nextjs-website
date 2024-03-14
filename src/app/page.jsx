const name = "HM"
const string = `Her name is ${name}`;
const Home = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <p>{string}</p>
    </main>
  );
};
export default Home;
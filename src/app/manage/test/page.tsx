const Page: React.FC = (props) => {
  return (
    <div>
      <h2 className="mb-8 font-semibold">Flutter Game test</h2>

      <div>
        <iframe
          src="https://bean-mind-demo.vercel.app"
          width={800}
          height={600}
          title="Game demo flutter"
        ></iframe>
      </div>
    </div>
  );
};

export default Page;

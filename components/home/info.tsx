import ReadMoreButton from "../common/readmore";

const Info: React.FC = () => {
  function handleButtonClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <h2>About Us Preview</h2>
      <ReadMoreButton
        onClick={handleButtonClick}
        text="Learn More"
        size="1em"
      />
    </div>
  );
};

export default Info;

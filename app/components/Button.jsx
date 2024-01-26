const Button = ({ text = "Learn more" }) => {
  return (
    <button className="cursor-default rounded-3xl bg-gradient-primary px-4 py-2 text-base font-medium text-black hover:scale-105 active:scale-110">
      {text}
    </button>
  );
};

export default Button;

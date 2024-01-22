interface EachNoteProps {
  label: string;
  ingredients: string[];
}

const EachNote = ({ label, ingredients }: EachNoteProps) => {
  return (
    <div className="flex justify-start items-start space-x-2">
      <span className="body2 font-medium text-acodegray-700 flex basis-[80px]">
        {label}
      </span>
      <div className="flex-1 shrink-0 flex items-center flex-wrap">
        {ingredients.map((ingredient, index) => (
          <>
            <span className="body2 font-medium text-acodeblack shrink-0">
              {ingredient}
            </span>
            {index < ingredients.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="13"
                viewBox="0 0 2 13"
                fill="none"
                className="mx-1 shrink-0"
              >
                <path d="M1 0V13" stroke="#D9D8D7" />
              </svg>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default EachNote;

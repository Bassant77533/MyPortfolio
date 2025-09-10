type TitleProps = {
  head1: string;
  head2: string;
};

const Title = ({ head1, head2 }: TitleProps) => {
  return (
    <h1 className="text-[30px] md:text-[35px] font-extrabold mb-10 relative inline-block text-blue-200">
      {/* Head1 */}
      <span className="inline-block mr-1 ">{head1}
      </span>

      {/* Head2 */}
      <span className="inline-block ">
        {head2}
        {/* Underline */}
        
      </span>

              <span className="absolute left-0 bottom-1 w-[50%] h-0.5 bg-blue-200 rounded-full"></span>

    </h1>
  );
};

export default Title;

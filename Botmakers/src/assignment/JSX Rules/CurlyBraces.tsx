export const CurlyBraces = () => {
  const str = `Inside curly braces we only use the expression not declairtion`;

  return (
    <div>
      {str}
      {/* { const y = 20}  this will throw an error */}
    </div>
  );
};

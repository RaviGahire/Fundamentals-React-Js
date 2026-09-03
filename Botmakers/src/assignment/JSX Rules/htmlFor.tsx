export const htmlFor = () => {
  return (
    <div>
      <h1>in vanilla html we use for to traget the actual label input but in react we can not use for becaue its used for (for) loop that why use HtmlFor </h1>
      <label htmlFor="userName">User Name</label>
      <input type="text" id="userName" placeholder="@username" />
    </div>
  );
};

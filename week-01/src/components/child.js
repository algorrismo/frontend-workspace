function Child({textColor, heading, headingColor}) {
  return (
    <div>
      <p className={textColor}>This is the child component</p>
      <h1 className ={headingColor}>{heading}</h1>
    </div>
  );
}

export default Child;
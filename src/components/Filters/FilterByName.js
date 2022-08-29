function FilterByName(props) {
  const handleInputName = (ev) => {
    props.handleInputName(ev.target.value);
  };

  const handleEnter = (ev) => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
    }
  };

  return (
    <>
      <label className="form__label" htmlFor="characterName">
        Escribe un personaje:
      </label>
      <input
        className="form__input"
        type="text"
        name="characterName"
        id="characterName"
        placeholder="Dobby"
        value={props.inputValue}
        onChange={handleInputName}
        onKeyDown={handleEnter}
      />
    </>
  );
}

export default FilterByName;

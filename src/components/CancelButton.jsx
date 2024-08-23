function handleClick(e) {
  console.log(e);
}

export default function SaveButton() {
  return (
    <button type="button" className="cancel" onClick={handleClick}>
      Cancel
    </button>
  );
}

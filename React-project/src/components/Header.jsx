export function Header(props) {
  return (
    <header className="  p-2.5 bg-gray-400 flex justify-between align-middle">
      <ul className="flex gap-10 text-lg w-2/6">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li className="text-blue-800">{props.name}</li>

        <input
          type="text"
          placeholder="    Search here..."
          className="border-1 border-gray-500 rounded-2xl w-600"
        />
      </ul>
    </header>
  );
}

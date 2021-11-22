function Record(props) {
  return (
    <tr className="text-base hover:bg-gray-300">
      <td className="px-6 py-4 whitespace-nowrap text-sm">{props.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        {props.firstReleaseDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        {props.lastReleaseDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">{props.author}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm">
        {props.paradigms.map((paradigm) => {
          return <div key={paradigm}>{paradigm}</div>;
        })}
      </td>
    </tr>
  );
}

export default Record;

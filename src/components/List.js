import Record from './Record';

function List(props) {
  return (
    <div className="w-full h-full md:ml-5 overflow-x-auto">
      <div className="shadow-lg border-b border-gray-200 rounded-md bg-white mt-4">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-6 py-3 text-left text-sm text-gray">Name</th>
              <th className="px-6 py-3 text-left text-sm text-gray">
                Initial Release Date
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray">
                Lastest Release Date
              </th>
              <th className="px-6 py-3 text-left text-sm text-gray">Author</th>
              <th className="px-6 py-3 text-left text-sm text-gray">
                Paradigms
              </th>
            </tr>
          </thead>
          <tbody>
            {props.programmingList.map((record) => {
              return (
                <Record
                  key={record.id}
                  id={record.id}
                  name={record.name}
                  firstReleaseDate={record.firstReleaseDate}
                  lastReleaseDate={record.LastReleaseDate}
                  author={record.author}
                  paradigms={record.paradigms}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;

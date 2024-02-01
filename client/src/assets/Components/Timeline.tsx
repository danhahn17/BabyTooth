export function Timeline() {
  return (
    <div className="w-full h-screen bg-main-bg bg-cover flex-column justify-center">
      <table>
        <thead>
          <tr>
            <th className="border-2 border-main w-32 bg-blue-900 text-white"></th>
            <th className="border-2 border-main w-48 bg-blue-900 text-white">
              Primary Dentition Eruption
            </th>
            <th className="border-2 border-main w-48 bg-blue-900 text-white">
              Primary Dentition Exfoliation
            </th>
            <th className="border-2 border-main w-48 bg-blue-900 text-white">
              Permanent Dentition Eruption
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-main w-32 bg-blue-900 text-white">
              Central Incisors
            </td>
            <td className="border-2 border-main w-32 bg-blue-300"></td>
            <td className="border-2 border-main w-32 bg-blue-300"></td>
            <td className="border-2 border-main w-32 bg-blue-300"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// kids start as early as 6 months for dentists - start latest at 12 months

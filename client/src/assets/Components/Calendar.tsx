// import { useState } from'react';

export function Calendar() {
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [selectedTime, setSelectedTime] = useState('');

  // const handleReserveClick = (time) => {
  //   setSelectedTime(time);
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <div className="w-full h-screen bg-main-bg bg-cover flex-column justify-center text-center font-bold">
      <div className="w-full mb-5 flex-column justify-center mt-10">
        Please select an available time slot to schedule your appointment.
        <div className="w-full flex-column justify-center">
          <form>
            <div>
              <label>Year:</label>
            </div>
            <select
              id="selectYear"
              name="Year"
              className="border-main border-2">
              <option value="n/a">Select a Year</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
            <div>
              <label>Month:</label>
            </div>
            <select
              id="selectMonth"
              name="Month"
              className="border-main border-2">
              <option value="n/a">Select a Month</option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
            <div>
              <label>Week:</label>
            </div>
            <select
              id="selectWeek"
              name="Week"
              className="border-main border-2">
              <option value="n/a">Select a Week</option>
              <option value="week1">Week 1</option>
              <option value="week2">Week 2</option>
              <option value="week3">Week 3</option>
              <option value="week4">Week 4</option>
              <option value="week5">Week 5</option>
            </select>
          </form>
        </div>
      </div>

      <div className="flex justify-center">
        <table className="h-1/2 border-2 border-main flex-column justify-center">
          <thead>
            <tr className="h-10">
              <th className="border-2 border-main w-32  bg-blue-900 text-white"></th>
              <th className="border-2 border-main w-32 bg-blue-900 text-white">
                Monday
              </th>
              <th className="border-2 border-main w-32 bg-blue-900 text-white">
                Tuesday
              </th>
              <th className="border-2 border-main w-32 bg-blue-900 text-white">
                Wednesday
              </th>
              <th className="border-2 border-main w-32 bg-blue-900 text-white">
                Thursday
              </th>
              <th className="border-2 border-main w-32 bg-blue-900 text-white">
                Friday
              </th>
              <th className="border-2 border-main w-32 bg-blue-900 text-white">
                Saturday
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 border-main">
              <td className="border-2 border-main h-7 bg-blue-900 text-white">
                09:00
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('monday @ 9')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('tuesday @ 9')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('wednesday @ 9')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('thursday @ 9')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('friday @ 9')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('saturday @ 9')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
            </tr>
            <tr className="border-2 border-main">
              <td className="border-2 border-main h-7 bg-blue-900 text-white">
                10:00
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('monday @ 10')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('tuesday @ 10')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('wednesday @ 10')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('thursday @ 10')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('friday @ 10')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('saturday @ 10')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
            </tr>
            <tr className="border-2 border-main">
              <td className="border-2 border-main h-7 bg-blue-900 text-white">
                11:00
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('monday @ 11')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('tuesday @ 11')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('wednesday @ 11')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('thursday @ 11')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('friday @ 11')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('saturday @ 11')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
            </tr>
            <tr className="border-2 border-main">
              <td className="border-2 border-main h-7 bg-blue-900 text-white">
                12:00
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('monday @ 12')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('tuesday @ 12')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('wednesday @ 12')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('thursday @ 12')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('friday @ 12')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('saturday @ 12')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
            </tr>
            <tr className="border-2 border-main">
              <td className="border-2 border-main h-7 bg-blue-900 text-white">
                01:00
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('monday @ 1')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('tuesday @ 1')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('wednesday @ 1')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('thursday @ 1')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('friday @ 1')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('saturday @ 1')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
            </tr>
            <tr className="border-2 border-main">
              <td className="border-2 border-main h-7 bg-blue-900 text-white">
                02:00
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('monday @ 2')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('tuesday @ 2')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('wednesday @ 2')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('thursday @ 2')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('friday @ 2')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('saturday @ 2')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
            </tr>
            <tr className="border-2 border-main">
              <td className="border-2 border-main h-7 bg-blue-900 text-white">
                03:00
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('monday @ 3')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('tuesday @ 3')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('wednesday @ 3')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('thursday @ 3')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('friday @ 3')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('saturday @ 3')}>
                X
              </td>
            </tr>
            <tr className="border-2 border-main">
              <td className="border-2 border-main h-7 bg-blue-900 text-white">
                04:00
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('monday @ 4')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('tuesday @ 4')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('wednesday @ 4')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('thursday @ 4')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('friday @ 4')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('saturday @ 4')}>
                X
              </td>
            </tr>
            <tr className="border-2 border-main">
              <td className="border-2 border-main h-7 bg-blue-900 text-white">
                05:00
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('monday @ 5')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('tuesday @ 5')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('wednesday @ 5')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('thursday @ 5')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('friday @ 5')}>
                <button className=" bg-blue-300 rounded-lg w-20">
                  Reserve
                </button>
              </td>
              <td
                className="border-2 border-main"
                onClick={() => console.log('saturday @ 5')}>
                X
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Reserve Time</h2>
            <p>You are about to reserve the time: {selectedTime}</p>
            <div className="mt-4">
              <button onClick={closeModal} className="bg-blue-300 rounded-lg px-4 py-2"> Cancel </button>
              <button
                onClick={() => {
                  console.log(`Time ${selectedTime} reserved`);
                  closeModal();
                }}
                className="bg-green-300 rounded-lg px-4 py-2 ml-4"> Confirm </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}

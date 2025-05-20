import React from 'react';

const ClassDetail = ({ classes }) => {
  const classDetail = [
    {
      id: 1,
      class: "1",
      subject: ["English", "Math", "Science"]
    },
    {
      id: 2,
      class: "2",
      subject: ["English", "Nepali", "Math", "Science"]
    },
    {
      id: 3,
      class: "3",
      subject: ["English", "Nepali", "Science"]
    },
  ];

  const data = classDetail[classes - 1];

  return (
    <div className="ml-20 mt-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl border border-gray-200 hover:cursor-pointer">
        {/* Header for Grade 11 or 12 */}
        {(classes === 11 || classes === 12) && (
          <h1 className="text-3xl font-bold font-serif text-blue-700 mb-6 text-center">
            Education
          </h1>
        )}

        {/* Grade Display */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Grade: <span className="text-blue-600">{data?.class || "N/A"}</span>
        </h2>

        {/* Subject List */}
        <div className="space-y-2">
          {data?.subject?.map((item, index) => (
            <p
              key={index}
              className="text-gray-700 text-lg border-b pb-1 border-dashed border-gray-300"
            >
              {index + 1}. {item}
            </p>
          ))}
        </div>

        <div className='flex flex-col mt-10'>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
           <span className="text-blue-600">Class Schedules</span>
        </h2>
{
    classes === 11 || classes === 12 ?  <p
              className="text-gray-700 text-lg border-b pb-1 border-dashed border-gray-300"
            >
                 6 a.m to 10 a.m (morning shift)
            </p>: <p
              className="text-gray-700 text-lg border-b pb-1 border-dashed border-gray-300"
            >
                10 a.m to 4 p.m (day shift)
            </p>
}
        </div>
      </div>
    </div>
  );
};

export default ClassDetail;

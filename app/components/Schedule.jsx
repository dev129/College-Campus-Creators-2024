// app/schedule/page.jsx

const TimelineItem = ({ date, title, description, latest, type }) => (
  <li className="mb-10 ms-6">
    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
      <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    </span>
    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
      {title}
      {latest && (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
          Latest
        </span>
      )}
      {type && (
        <span className={`text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3 ${
          type === 'Beginners' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
          'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
        }`}>
          {type}
        </span>
      )}
    </h3>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
    <p className="mb-4 text-base font-normal text-gray-200">{description}</p>
  </li>
);

const Schedule = () => {
  return (
    
    <div className="bg-gradient-to-r from-blue-600 to-blue-900 min-h-screen pt-10 px-4 sm:px-6 lg:px-8">
      
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-10 text-center">
        Timeline 
      </h1>
      <div className="mt-10 text-center mb-5">
        <p className="text-xl text-white mb-4">Two Tracks for Participants:</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
            Beginners: New to hackathons, receive guidance and mentorship
          </div>
          <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
            Advanced: Experienced in project development
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-50 rounded-lg shadow-xl p-6 sm:p-10">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <TimelineItem 
            date="August 22, 2024"
            title="Registration Opens"
            description="Start forming your amazing teams and register for the hackathon!"
            latest={true}
          />
          <TimelineItem 
            date="September 10, 2024"
            title="Registration Closes"
            description="Last day to register your team. Don't miss out!"
          />
          <TimelineItem 
            date="September 15, 2024"
            title="First Team Idea Presentation"
            description="Beginner teams present their initial ideas and receive guidance from mentors."
            type="Beginners"
          />
          <TimelineItem 
            date="September 25, 2024"
            title="Final Team Idea Presentation"
            description="All teams (Beginners and Advanced) present their refined ideas for final selection."
            type="All Teams"
          />
          <TimelineItem 
            date="September 30, 2024"
            title="Final Round (Offline Event)"
            description="Selected teams compete in the final round to showcase their projects. This is an offline event."
          />
        </ol>
      </div>
      
      
    </div>
  );
};

export default Schedule;
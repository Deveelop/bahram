import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const MyTagsComponent = () => {
  const [tags, setTags] = useState(['Sale', 'Revenue', 'Shipment', 'Dashboards', 'Users', 'Booking', 'Admin', 'Late', 'Values', 'Benefits', 'Bank', 'Master', 'Management']); // Initialize with an empty string

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value.trim()) {
      event.preventDefault(); // Prevent form submission
      setTags([...tags, event.target.value]); // Add tag to state
      event.target.value = ''; // Clear input
    }
  };

  const removeTag = (index) => {
    const newTags = [...tags]; // Make a copy
    newTags.splice(index, 1); // Remove tag at index
    setTags(newTags);
  };

  return (
    <div className="mb-4">
     
      <div className="flex flex-wrap mt-2">
        {tags.map((tag, index) => (
          <span key={index} className=" items-center mr-2 mt-2 bg-[#FFFFFF] hover:bg-[#9283E0] hover:text-white rounded-md px-2 py-1">
            {tag}
            <button
              className=" px-4"
              onClick={() => removeTag(index)}
            >
              <FaTimes />
            </button>
          </span>
        ))}

       <input
        type="text"
        placeholder="Press enter to add tags"
        onKeyDown={handleKeyDown}
        className="block w-full rounded px-4 py-2  border-gray-200 focus:outline-none"
      />
      </div>
    </div>
  );
};

export default MyTagsComponent;

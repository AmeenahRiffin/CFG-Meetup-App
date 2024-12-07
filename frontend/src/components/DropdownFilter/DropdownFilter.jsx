import React from "react";
import "./DropdownFilter.css"; // Assuming you have a CSS file for styling the dropdown

const DropdownFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="dropdownFilter">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="" disabled>
          Search posts by category
        </option>
        <option value="Schools & Education">Schools & Education</option>
        <option value="Real Estate & Housing">Real Estate & Housing</option>
        <option value="Local Services & Amenities">
          Local Services & Amenities
        </option>
        <option value="Safety & Security">Safety & Security</option>
        <option value="Local Activities & Volunteering">
          Local Activities & Volunteering
        </option>
        <option value="Lost & Found">Lost & Found</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default DropdownFilter;

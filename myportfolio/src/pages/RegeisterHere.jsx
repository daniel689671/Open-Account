import React from "react";
import logo from "../assets/Credit-Union-in-USA.webp";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import foto from "../assets/visibility.png";

const RegeisterHere = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    maritalStatus: "",
    username: "",
    countryCode: "",
    phone: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    streetAddress: "",
    annualIncome: "",
    accountType: "",
    dob: "",
    occupation: "",
    companyName: "",
    currency: "",
    idType: "",
    ssn: "",
    frontId: null,
    backId: null,
    profilePicture: null,
    files: null,
  };

  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "password",
    "confirmPassword",
    "ssn",
    "file",
  ];

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const isFieldFilled = (value) => value !== "" && value !== null;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const allFilled = requiredFields.every((key) =>
      isFieldFilled(formData[key])
    );
    if (!allFilled) {
      alert("Please fill all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Form successfully submitted!");
    setSuccess(true);

    // Flash green borders for 1.5s then reset everything
    setTimeout(() => {
      setFormData(initialFormData);
      setFormSubmitted(false);
      setSuccess(false);
      e.target.reset();
    }, 1500);
  };

  const getBorderColor = (fieldName) => {
    if (!formSubmitted) return "border-gray-300";
    if (success) return "border-green-500";
    return isFieldFilled(formData[fieldName])
      ? "border-green-500"
      : "border-red-500";
  };

  return (
    <div className="bg-white max-w-5xl sm:w-full sm:max-w-[600px] mx-auto">
      <div className="flex justify-between px-4 py-4">
        <img src={logo} alt="" className="w-20 h-15" />
        <Link to="/Login" className=" border text-white px-4 py-6 rounded-full">
          Login
        </Link>
      </div>

      <div className="text-center flex flex-col items-center justify-center">
        <h2 className="text-xl font-extrabold text-blue-700 mb-2">
          Account Opening
        </h2>
        <p className="text-sm text-[gray] mb-8">
          Fill the account opening form to get onboard with Express Banking at a
          go.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto px-4 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className={`w-full text-gray-700 p-2 border ${getBorderColor(
            "firstName"
          )} rounded`}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className={`w-full text-gray-700 p-2 border ${getBorderColor(
            "lastName"
          )} rounded`}
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "gender"
          )}`}
        >
          <option value="" className="text-white bg-blue-500">
            Select Gender
          </option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 text-gray-900 border ${getBorderColor(
            "email"
          )} rounded`}
        />
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "maritalStatus"
          )}`}
        >
          <option value="">Marital Status</option>
          <option>Single</option>
          <option>Married</option>
          <option>Divorced</option>
        </select>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="User Name"
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "username"
          )}`}
        />
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "countryCode"
          )}`}
        >
          <option value="">Country Code</option>
          <option>+234</option>
          <option>+1</option>
          <option>+44</option>
          <option>+91</option>
        </select>

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "phone"
          )}`}
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full text-gray-900 p-2 border ${getBorderColor(
              "password"
            )} rounded`}
          />
          <img
            src={foto}
            alt="toggle visibility"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>

        <div className="relative w-full">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full p-2  text-gray-900 border ${getBorderColor(
              "confirmPassword"
            )} rounded`}
          />
          <img
            src={foto}
            alt="toggle visibility"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "country"
          )}`}
        >
          <option value="">Select Country</option>
          <option>Canada</option>
          <option>United States</option>
          <option>India</option>
          <option>UK</option>
        </select>
        <input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "city"
          )}`}
        />
        <input
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="State"
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "state"
          )}`}
        />
        <input
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="Zip"
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "zip"
          )}`}
        />
        <textarea
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleChange}
          rows="3"
          placeholder="Street Address"
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "streetAddress"
          )}`}
        ></textarea>
        <input
          name="annualIncome"
          value={formData.annualIncome}
          onChange={handleChange}
          placeholder="Annual Income"
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "annualIncome"
          )}`}
        />
        <select
          name="accountType"
          value={formData.accountType}
          onChange={handleChange}
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "accountType"
          )}`}
        >
          <option value="">Select Account</option>
          <option>Savings</option>
          <option>Current</option>
          <option>Fixed Deposit</option>
        </select>

        {/* Horizontal Divider */}
        <div className="col-span-full border-t border-gray-200 my-2"></div>

        {/* Date of Birth */}

        <div className="col-span-full">
          <label className="block text-sm front-semibold text-purple-500 mb-2">
            Date of birth <span className="text-red-500">*</span>
          </label>
          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
              "dob"
            )}`}
          />
        </div>
        {/* Occupation & Company Name */}
        <input
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder=" Occupation"
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "occupation"
          )}`}
        />

        <input
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "companyName"
          )}`}
        />

        {/* Currency & Means of ID */}
        <select
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "currency"
          )}`}
        >
          <option value="">SELECT CURRENCY</option>
          <option>USD</option>
          <option>NGN</option>
          <option>EUR</option>
        </select>
        <select
          name="idType"
          value={formData.idType}
          onChange={handleChange}
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "idType"
          )}`}
        >
          <option value="">SELECT MEANS OF IDENTIFICATION</option>
          <option>National ID</option>
          <option>Driver's License</option>
          <option>International Passport</option>
        </select>

        <input
          name="ssn"
          value={formData.ssn}
          onChange={handleChange}
          placeholder="SSN"
          className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
            "ssn"
          )}`}
        />

        {/* Uploads */}
        <div className="grid grid-cols-2 gap-4 col-span-full">
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Front ID</label>
            <input
              name="frontId"
              type="file"
              onChange={handleChange}
              className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
                "frontId"
              )} rounded`}
            ></input>
          </div>
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Back ID</label>
            <input
              name="backId"
              type="file"
              onChange={handleChange}
              className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
                "backId"
              )} rounded`}
            />
          </div>
        </div>

        <div className="col-span-full ">
          <label className="text-sm text-gray-700 mb2 block">
            Upload Profile Picture
          </label>

          <input
            name="profilePicture"
            type="file"
            onChange={handleChange}
            className={`input text-gray-900  border rounded-md px-4 py-2 w-full text-sm ${getBorderColor(
              "profilePicture"
            )} rounded`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Create my account
        </button>

        <p className="text-black">
          {" "}
          Aleardy have an account{" "}
          <Link to="/Login" className="text-blue-700 underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegeisterHere;

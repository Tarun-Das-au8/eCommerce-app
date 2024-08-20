import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;

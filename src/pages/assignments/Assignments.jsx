import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

export default function Assignments() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const loaderAssignments = useLoaderData();
  const [allAssignments, setAllAssignments] = useState(loaderAssignments);
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleView = (id) => navigate(`/viewAssignment/${id}`);

  const handleUpdate = (id) => {
    const assignmentToUpdate = allAssignments.find((assignment) => assignment._id === id);
    if (user?.email !== assignmentToUpdate?.email) {
      toast.error("You cannot update others' assignments", { position: "top-center" });
      return;
    }
    navigate(`/updateAssignment/${id}`);
  };

  const handleDelete = (id) => {
    const assignmentToDelete = allAssignments.find((assignment) => assignment._id === id);
    if (user?.email !== assignmentToDelete?.email) {
      toast.error("You cannot delete others' assignments", { position: "top-center" });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://study-buddy-server-nu.vercel.app/assignment-delete/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({ title: "Deleted!", text: "Assignment has been deleted.", icon: "success" });
            }
            setAllAssignments(allAssignments.filter((assignment) => assignment._id !== id));
          });
      }
    });
  };

  const filteredAssignments = allAssignments.filter((assignment) => {
    return (
      (difficultyFilter === "" || assignment.difficulty === difficultyFilter) &&
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="w-11/12 md:w-4/5 my-10 mx-auto">
      <h2 className="text-3xl font-bold text-center pb-10">All Assignments</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-5 gap-4">
        <select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)}
          className="border rounded-lg p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
          <option value="">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title"
          className="border rounded-lg p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredAssignments.map((assignment) => (
          <div key={assignment._id} className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            {assignment.image && <img className="w-full h-40 object-cover" src={assignment.image} alt={assignment.title} />}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{assignment.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">Total marks: {assignment.marks}</p>
              <p className="text-gray-600 dark:text-gray-400">Difficulty: {assignment.difficulty}</p>
              <p className="text-gray-600 dark:text-gray-400">Due date: {new Date(assignment.date).toLocaleDateString("en-US")}</p>
              <p className="text-gray-600 dark:text-gray-400">Created by: {assignment.userName}</p>

              <div className="flex mt-5 gap-2">
                <button onClick={() => handleView(assignment._id)}
                  className="  font-bold btn btn-xs btn-success">View</button>
                <button onClick={() => handleUpdate(assignment._id)}
                  className={` font-bold btn btn-xs btn-success ${user?.email !== assignment?.email ? "opacity-50 cursor-not-allowed" : ""}`}>Update</button>
                <button onClick={() => handleDelete(assignment._id)}
                  className={` font-bold btn btn-xs btn-error ${user?.email !== assignment?.email ? "opacity-50 cursor-not-allowed" : ""}`}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

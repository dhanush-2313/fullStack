import { Appbar } from "../components/Appbar";
import { useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <Appbar />
            <div className="flex justify-center min-h-screen">
                <div className="flex flex-col justify-start w-full mt-4 max-w-screen-lg">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Title
                        </label>
                        <input
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            type="text"
                            id="helper-text"
                            aria-describedby="helper-text-explanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Content
                        </label>
                        <textarea
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                            id="message"
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Write your contents here..."
                        ></textarea>
                    </div>
                    <div className="w-full">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Publish post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Logged in successfully!");
            navigate("/blogs");
        }, 2000); // Simulate a login process
    };

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold text-center">
                            {type === "signup" ? "Create an account" : "Login"}
                        </div>
                        <div className="text-slate-400  text-center">
                            {type === "signin"
                                ? "Dont have an account? "
                                : "Already have an account?"}
                            <Link
                                className="pl-1 underline"
                                to={type === "signin" ? "/signup" : "/signin"}
                            >
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                    </div>
                    <div>
                        {type === "signup" ? (
                            <LabelledInput
                                label="Name"
                                type="text"
                                placeholder="enter name"
                                onChange={(e) => {
                                    setPostInputs((c) => ({
                                        ...c,
                                        name: e.target.value,
                                    }));
                                }}
                            />
                        ) : null}
                        <LabelledInput
                            label="Email"
                            type="email"
                            placeholder="enter email"
                            onChange={(e) => {
                                setPostInputs((c) => ({
                                    ...c,
                                    email: e.target.value,
                                }));
                            }}
                        />
                        <LabelledInput
                            label="Password"
                            type="password"
                            placeholder="enter password"
                            onChange={(e) => {
                                setPostInputs((c) => ({
                                    ...c,
                                    password: e.target.value,
                                }));
                            }}
                        />
                        {loading && (
                            <div className="flex justify-center items-center mt-2">
                                <div
                                    style={{
                                        border: "4px solid rgba(0, 0, 0, 0.1)",
                                        width: "24px",
                                        height: "24px",
                                        borderRadius: "50%",
                                        borderLeftColor: "#09f",
                                        animation: "spin 1s linear infinite",
                                    }}
                                ></div>
                            </div>
                        )}

                        <style>
                            {`
        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
    `}
                        </style>
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-4"
                        >
                            {type === "signup" ? "Sign Up" : "Sign in"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({
    label,
    placeholder,
    onChange,
    type,
}: LabelledInputType) {
    return (
        <div>
            <div>
                <label className="block mb-2 text-sm font-semibold text-black pt-2 ">
                    {label}
                </label>
                <input
                    onChange={onChange}
                    type={type}
                    id={type}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder={placeholder}
                    required
                />
            </div>
        </div>
    );
}

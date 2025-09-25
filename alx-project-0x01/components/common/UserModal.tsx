import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";


const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<Omit<UserData, "id">>({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name.startsWith("address.geo.")) {
            const key = name.split(".")[2];
            setUser((prev) => ({
                ...prev,
                address: {
                    ...prev.address,
                    geo: {
                        ...prev.address.geo,
                        [key]: value,
                    },
                },
            }));
        } else if (name.startsWith("address.")) {
            const key = name.split(".")[1];
            setUser((prev) => ({
                ...prev,
                address: {
                    ...prev.address,
                    [key]: value,
                },
            }));
        } else if (name.startsWith("company.")) {
            const key = name.split(".")[1];
            setUser((prev) => ({
                ...prev,
                company: {
                    ...prev.company,
                    [key]: value,
                },
            }));
        } else {
            setUser((prev) => ({ ...prev, [name]: value }));
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: UserData = { id: Date.now(), ...user }; // ✅ Add dummy ID
        onSubmit(newUser);
        onClose();
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New User</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Basic Info */}
                    {["name", "username", "email", "phone", "website"].map((field) => (
                        <div key={field}>
                            <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
                            <input
                                type="text"
                                name={field}
                                value={(user as any)[field]}
                                onChange={handleChange}
                                className="w-full border px-4 py-2 rounded-md"
                            />
                        </div>
                    ))}

                    {/* Address Fields */}
                    <fieldset>
                        <legend className="text-lg font-semibold text-gray-800 mt-4">Address</legend>
                        <div className="grid grid-cols-2 gap-4">
                            {["street", "city", "suite", "zipcode"].map((field) => (
                                <div key={field}>
                                    <label className="block text-sm text-gray-700 capitalize">{field}</label>
                                    <input
                                        name={`address.${field}`}
                                        value={(user.address as any)[field]}
                                        onChange={handleChange}
                                        className="w-full border px-4 py-2 rounded-md"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div>
                                <label className="block text-sm text-gray-700">Latitude</label>
                                <input
                                    name="address.geo.lat"
                                    value={user.address.geo.lat}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-2 rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700">Longitude</label>
                                <input
                                    name="address.geo.lng"
                                    value={user.address.geo.lng}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-2 rounded-md"
                                />
                            </div>
                        </div>
                    </fieldset>

                    {/* Company Fields */}
                    <fieldset>
                        <legend className="text-lg font-semibold text-gray-800 mt-4">Company</legend>
                        {["name", "catchPhrase", "bs"].map((field) => (
                            <div key={field}>
                                <label className="block text-sm text-gray-700 capitalize">{field}</label>
                                <input
                                    name={`company.${field}`}
                                    value={(user.company as any)[field]}
                                    onChange={handleChange}
                                    className="w-full border px-4 py-2 rounded-md"
                                />
                            </div>
                        ))}
                    </fieldset>

                    {/* Actions */}
                    <div className="flex justify-end space-x-4 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
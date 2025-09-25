// components/common/UserCard.tsx

import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
    return (
        // UserCard component to display user information
        <div className="max-w-xl max-h-xl mx-auto my-6 p-6 bg-white rounded-lg shodow-lg hover:shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-300">
            {/* Displaying user information Name, UserName and ID */}
            <div className="mt-4 flex items-center justify-between text-xl text-gray-800">
                {/* Displaying Name*/}
                <div className="group shadow-xl/30 rounded-xl">
                    <span>Name: </span>
                    <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">
                        {name}
                    </span>
                </div>
                {/* Displaying UserName */}
                <div className="group shadow-xl/30 rounded-xl">
                    <span>Username: </span>
                    <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">
                        {username}
                    </span>
                </div>
                {/* Displaying ID */}
                <div className="group shadow-xl/30 rounded-xl">
                    <span>ID: </span>
                    <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">
                        {id}
                    </span>
                </div>
            </div>

            {/* Displaying Contact Info Email, Phone and Website */}
            <div className="mt-4 text-xl text-gray-600 shadow-xl/30 rounded-xl">
                <span>Contact Info:</span>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    {/* Displaying Email */}
                    <div className="group shadow-xl/30 rounded-xl">
                        <span>Email: </span>
                        <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">
                            {email}
                        </span>
                    </div>
                    {/* Displaying Phone */}
                    <div className="group shadow-xl/30 rounded-xl">
                        <span>Phone: </span>
                        <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">
                            {phone}
                        </span>
                    </div>
                    {/* Displaying Website */}
                    <div className="group shadow-xl/30 rounded-xl">
                        <span>Website: </span>
                        <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">
                            {website}
                        </span>
                    </div>
                </div>
            </div>

            {/* Displaying Address : City, Street, Suite, and Zipcode */}
            <div className="text-gray-600">
                <h3 className="text-lg font-semibold mb-2">Address:</h3>
                {/* Display City and Street */ }
                <div className="flex gap-4 mb-2">
                    {/*Displaying City */}
                    <div className="group shadow-xl/30 rounded-xl p-2 cursor-default">
                        <span className="font-semibold">City:</span>
                        <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">
                            {address.city}
                        </span>
                    </div>
                    {/* Displaying Street */}
                    <div className="group shadow-xl/30 rounded-xl p-2 cursor-default">
                        <span className="font-semibold">Street:</span>
                        <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">
                            {address.street}
                        </span>
                    </div>
                </div>
                {/* Displaying Suite and Zipcode */}
                <div className="flex gap-4">
                    {/* Displaying Suite */}
                    <div className="group shadow-xl/30 rounded-xl p-2 cursor-default">
                        <span className="font-semibold">Suite:</span>
                        <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">
                            {address.suite}
                        </span>
                    </div>
                    {/* Displaying Zipcode */}
                    <div className="group shadow-xl/30 rounded-xl p-2 cursor-default">
                        <span className="font-semibold">ZipCode:</span>
                        <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">
                            {address.zipcode}
                        </span>
                    </div>
                </div>
            </div>

            {/* Displaying Company Information: Name, Catch Phrase, and BS */}
            <div className="text-gray-600 shadow-xl/30 rounded-xl">
                <h3 className="text-lg font-semibold">Company:</h3>
                {/* Displaying Company Name */}
                <div className="group">
                    <p className="text-sm">Name: <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">{company.name}</span></p>
                </div>
                {/* Displaying Company Catch Phrase */}
                <div className="group">
                    <p className="text-sm">Catch Phrase: <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">{company.catchPhrase}</span></p>
                </div>
                {/* Displaying Company BS */}
                <div className="group">
                    <p className="text-sm">BS: <span className="ml-1 transition duration-150 ease-in-out group-hover:scale-110 group-hover:text-black group-hover:font-bold inline-block">{company.bs}</span></p>
                </div>
            </div>

        </div>
    );
};

export default UserCard;
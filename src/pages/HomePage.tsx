import { useUsers } from '../context/UserContext';
import { UserPlus, Users as UsersIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { users } = useUsers();

  const MetricsSection = () => (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <UsersIcon className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Users</p>
              <p className="text-2xl font-semibold text-gray-900">{users.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="h-3 w-3 rounded-full bg-green-600"></span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Users</p>
              <p className="text-2xl font-semibold text-gray-900">
                {users.filter(user => user.status === 'Active').length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="h-3 w-3 rounded-full bg-gray-600"></span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Inactive Users</p>
              <p className="text-2xl font-semibold text-gray-900">
                {users.filter(user => user.status === 'Inactive').length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const UsersSection = () => {
    if (users.length === 0) {
      return (
        <div className="bg-white rounded-xl shadow-md">
          <div className="text-center py-12">
            <div className="flex justify-center">
              <UsersIcon className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No users yet</h3>
            <p className="mt-2 text-sm text-gray-500">
              Get started by adding your first user to the system.
            </p>
            <div className="mt-6">
              <Link
                to="/add-user"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <UserPlus className="mr-2 h-5 w-5" />
                Add User
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">User Profiles</h2>
          <Link
            to="/add-user"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <UserPlus className="mr-2 -ml-1 h-5 w-5" />
            Add User
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  };

  const UserCard = ({ user }: any) => {
    const [imageError, setImageError] = useState(false);
    const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user.name
    )}&background=random`;

    return (
      <div className="bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16">
              <img
                src={imageError ? fallbackAvatar : user.profilePhoto}
                alt={`${user.name}'s avatar`}
                onError={() => setImageError(true)}
                className="w-full h-full rounded-full object-cover border-2 border-gray-200"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-semibold text-gray-900 truncate">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500 truncate">{user.email}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm rounded-full bg-primary-100 text-primary-800">
              {user.role}
            </span>
            <span
              className={`px-3 py-1 text-sm rounded-full ${user.status === 'Active'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
                }`}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">User Dashboard</h1>
        <p className="mt-2 text-sm text-gray-600">
          Manage and monitor your user base from a central location.
        </p>
      </div>

      <MetricsSection />
      <UsersSection />
    </div>
  );
};

export default HomePage;
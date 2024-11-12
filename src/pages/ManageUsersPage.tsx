import { useState, useMemo } from 'react';
import { useUsers } from '../context/UserContext';
import {
  Search,
  Filter,
  Edit2,
  Trash2,
  Check,
  X
} from 'lucide-react';
import toast from 'react-hot-toast';

type SortField = 'name' | 'email' | 'role' | 'status';
type SortDirection = 'asc' | 'desc';

const ManageUsersPage = () => {
  const { users, deleteUser, updateUser } = useUsers();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortConfig] = useState<{
    field: SortField;
    direction: SortDirection;
  }>({ field: 'name', direction: 'asc' });
  const [editingUser, setEditingUser] = useState<string | null>(null);


  const filteredUsers = useMemo(() => {
    return users
      .filter(user => {
        const matchesSearch =
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase());
        const matchesRole = roleFilter === 'all' || user.role === roleFilter;
        const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
        return matchesSearch && matchesRole && matchesStatus;
      })
      .sort((a, b) => {
        const field = sortConfig.field;
        const direction = sortConfig.direction === 'asc' ? 1 : -1;
        return direction * a[field].localeCompare(b[field]);
      });
  }, [users, search, roleFilter, statusFilter, sortConfig]);

  const handleDelete = (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      deleteUser(userId);
      toast.success('User deleted successfully');
    }
  };

  const TableHeader = ({ label }: { label: string }) => (
    <th
      className="px-6 py-3 cursor-pointer hover:bg-gray-50"
    >
      <div className="flex items-center space-x-1">
        <span>{label}</span>
      </div>
    </th>
  );

  const EditableCell = ({
    user,
    field,
    options
  }: {
    user: any;
    field: string;
    options?: string[]
  }) => {
    const isEditing = editingUser === user.id;
    const [value, setValue] = useState(user[field]);

    const handleSave = () => {
      updateUser({ ...user, [field]: value });
      setEditingUser(null);
      toast.success('User updated successfully');
    };

    if (!isEditing) {
      return <span>{user[field]}</span>;
    }

    if (options) {
      return (
        <div className="flex items-center space-x-2">
          <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input-field py-1"
          >
            {options.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <button onClick={handleSave} className="text-green-600 hover:text-green-700">
            <Check className="w-4 h-4" />
          </button>
          <button onClick={() => setEditingUser(null)} className="text-red-600 hover:text-red-700">
            <X className="w-4 h-4" />
          </button>
        </div>
      );
    }

    return (
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-field py-1"
        />
        <button onClick={handleSave} className="text-green-600 hover:text-green-700">
          <Check className="w-4 h-4" />
        </button>
        <button onClick={() => setEditingUser(null)} className="text-red-600 hover:text-red-700">
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Manage Users</h1>

          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-10"
              />
            </div>

            <div className="flex space-x-4">
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="input-field"
              >
                <option value="all">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Guest">Guest</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="input-field"
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Photo
                  </th>
                  <TableHeader label="Name" />
                  <TableHeader label="Email" />
                  <TableHeader label="Role" />
                  <TableHeader label="Status" />
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={user.profilePhoto}
                        alt={user.name}
                        className="h-10 w-10 rounded-full"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <EditableCell user={user} field="name" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <EditableCell user={user} field="email" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <EditableCell
                        user={user}
                        field="role"
                        options={['Admin', 'User', 'Guest']}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <EditableCell
                        user={user}
                        field="status"
                        options={['Active', 'Inactive']}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => setEditingUser(user.id)}
                          className="text-blue-600 hover:text-blue-700"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredUsers.length === 0 && (
              <div className="text-center py-12">
                <Filter className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No users found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersPage;
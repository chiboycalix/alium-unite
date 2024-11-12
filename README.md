# AliumUnite User Management System

A modern, responsive user management dashboard built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Dashboard Overview
- Real-time user statistics and metrics
- Visual representation of active/inactive users
- Responsive grid layout for user cards
- Quick access to user management functions

### User Management
- Create new users with detailed profiles
- Upload and manage user profile photos
- Edit user information inline
- Delete users with confirmation
- Role-based user categorization (Admin, User, Guest)
- Active/Inactive status management

### Search and Filtering
- Real-time search across user data
- Filter users by role and status
- Sort users by multiple fields
- Responsive table view with inline editing

### UI/UX
- Modern, clean interface
- Responsive design for mobile and desktop
- Toast notifications for user feedback
- Loading states and animations
- Empty state handling
- Error handling with fallbacks

## 🛠 Tech Stack

- **React** (18.x) - Frontend framework
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** (v6) - Navigation and routing
- **React Hook Form** - Form handling with validation
- **Yup** - Schema validation
- **React Hot Toast** - Toast notifications
- **Lucide React** - Modern icon set

## 📦 Installation

1. Clone the repository
```bash
git clone <repository-url>
cd alium-unite
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

## 🔧 Environment Setup

Make sure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # Context providers
├── pages/         # Page components
│   ├── HomePage.tsx
│   ├── AddUserPage.tsx
│   └── ManageUsersPage.tsx
├── types/         # TypeScript interfaces
├── utils/         # Helper functions
├── App.tsx
└── index.tsx
```

## 💻 Usage

### Running the Application

1. Start the development server:
```bash
npm start
```

2. Build for production:
```bash
npm run build
```

### Key Features Usage

#### Adding a New User
1. Navigate to "Add User" page
2. Fill in required information:
   - Name
   - Email
   - Role (Admin/User/Guest)
   - Status (Active/Inactive)
   - Profile photo (optional)
3. Submit the form

#### Managing Users
1. Navigate to "Manage Users" page
2. Use the search bar to find specific users
3. Use filters to sort by role or status
4. Use inline editing to update user information

## 🔒 Security Considerations

- Form validation for all user inputs
- Image upload restrictions (5MB limit, image types only)
- Data sanitization for user inputs
- Confirmation dialogs for destructive actions

## ⚠️ Known Limitations

1. **Image Handling**
   - Maximum image size: 5MB
   - Supported formats: PNG, JPG, JPEG
   - No image cropping/editing capabilities

2. **Data Persistence**
   - Uses localStorage for data persistence
   - No backend integration
   - Data is lost when clearing browser data

3. **Performance**
   - Large datasets might affect performance
   - No pagination implemented
   - All filtering/sorting happens client-side

4. **Browser Support**
   - Modern browsers only (Chrome, Firefox, Safari, Edge)
   - Limited IE support

## 🔄 State Management

- Uses React Context for global state
- Local state for component-specific data
- Persistence through localStorage

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## 🧪 Testing

While testing is not implemented in the current version, the code is structured to accommodate:
- Unit tests for components
- Integration tests for user flows
- E2E testing for critical paths

## 🛣️ Future Improvements

1. Backend Integration
   - API integration
   - Real database storage
   - Authentication/Authorization

2. Enhanced Features
   - Bulk user actions
   - Export/Import functionality
   - Advanced filtering options
   - Pagination for large datasets

3. UI/UX Improvements
   - Dark mode support
   - Customizable themes
   - Advanced image editing
   - Drag-and-drop functionality

## 👥 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support, email [igwechinonso77@gmail.com] or open an issue in the repository.

---
Made with ❤️ by [Igwe Abraham Chinonso]
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import toast from 'react-hot-toast';

interface ImageUploadProps {
  setProfilePhoto: (url: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setProfilePhoto }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }

      if (!file.type.startsWith('image/')) {
        toast.error('Please upload an image file');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfilePhoto(result);
        setPreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        {preview && (
          <div className="mb-4 sm:mb-0 sm:mr-4">
            <img
              src={preview}
              alt="Profile Preview"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        )}
        <label className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
          <Upload className="mr-2 h-5 w-5 text-gray-500" />
          <span>Upload Photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="sr-only"
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
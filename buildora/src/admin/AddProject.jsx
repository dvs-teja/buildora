import React, { useState } from 'react';
import "./AddProject.css";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    features: '',
    price: '',
    coverImage: '',
    whatIncluded: '',
    demoLink: '',
    category: '',
    level: '',
    license: '',
    setupTime: '',
    videoDemo: '',
    sellerNotes: ''
  });
  const [screenshotFile, setScreenshotFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleScreenshotFileChange = (e) => {
    setScreenshotFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', formData.title);
    form.append('description', formData.description);
    form.append('techStack', formData.techStack);
    form.append('features', formData.features);
    form.append('price', formData.price);
    form.append('coverImage', formData.coverImage);
    form.append('whatIncluded', formData.whatIncluded);
    form.append('demoLink', formData.demoLink);
    form.append('category', formData.category);
    form.append('level', formData.level);
    form.append('license', formData.license);
    form.append('setupTime', formData.setupTime);
    form.append('videoDemo', formData.videoDemo);
    form.append('sellerNotes', formData.sellerNotes);
    if (screenshotFile) {
      form.append('screenshot', screenshotFile);
    }

    try {
      const response = await fetch('http://localhost:8080/api/projects', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        alert('Project submitted successfully!');
        // Reset form here
      } else {
        alert('Failed to submit project.');
      }
    } catch (err) {
      alert('Error submitting project.');
      console.error(err);
    }
  };

  return (
    <div className="add-project-container">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Project Title</label>
            <input name="title" type="text" className="input-style" value={formData.title} onChange={handleChange} required />
          </div>
          <div>
            <label className="block font-medium mb-1">Price (₹)</label>
            <input name="price" type="number" className="input-style" value={formData.price} onChange={handleChange} required />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea name="description" className="input-style h-24" value={formData.description} onChange={handleChange} required />
        </div>

        {/* Tech & Features */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Tech Stack</label>
            <input name="techStack" type="text" className="input-style" value={formData.techStack} onChange={handleChange} required />
          </div>
          <div>
            <label className="block font-medium mb-1">Key Features</label>
            <textarea name="features" className="input-style h-24" value={formData.features} onChange={handleChange} required />
          </div>
        </div>

        {/* Images & Demo */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Cover Image URL</label>
            <input name="coverImage" type="text" className="input-style" value={formData.coverImage} onChange={handleChange} required />
          </div>
          <div>
            <label className="block font-medium mb-1">Demo Link (optional)</label>
            <input name="demoLink" type="text" className="input-style" value={formData.demoLink} onChange={handleChange} />
          </div>
        </div>

        {/* What Included & Notes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">What's Included</label>
            <textarea name="whatIncluded" className="input-style h-24" value={formData.whatIncluded} onChange={handleChange} required />
          </div>
          <div>
            <label className="block font-medium mb-1">Seller Notes</label>
            <textarea name="sellerNotes" className="input-style h-24" value={formData.sellerNotes} onChange={handleChange} />
          </div>
        </div>

        {/* Dropdown Fields */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block font-medium mb-1">Category</label>
            <input name="category" type="text" className="input-style" value={formData.category} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium mb-1">Skill Level</label>
            <select name="level" className="input-style" value={formData.level} onChange={handleChange}>
              <option value="">Select</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">License</label>
            <select name="license" className="input-style" value={formData.license} onChange={handleChange}>
              <option value="">Select</option>
              <option>Personal</option>
              <option>Commercial</option>
              <option>Extended</option>
            </select>
          </div>
        </div>

        {/* Setup Time & Video */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Setup Time</label>
            <input name="setupTime" type="text" className="input-style" value={formData.setupTime} onChange={handleChange} />
          </div>
          <div>
            <label className="block font-medium mb-1">Video Demo (YouTube)</label>
            <input name="videoDemo" type="text" className="input-style" value={formData.videoDemo} onChange={handleChange} />
          </div>
        </div>

        {/* Screenshot Fields */}
        <div>
          <label className="block font-medium mb-1">Screenshot Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleScreenshotFileChange}
            className="input-style"
          />
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <button type="submit" className="px-6 py-2 bg-[#48CFCB] text-white rounded hover:bg-[#3bb1ae] transition">Submit Project</button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;

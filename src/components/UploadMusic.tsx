import React, { useState } from "react";
import { Music, Upload, CheckCircle, ArrowLeft, Image as ImageIcon, FileAudio } from "lucide-react";

function UploadMusic() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    cover: null,
    musicName: "",
    artistName: "",
    genre: "",
    musicFile: null,
  });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting Data:", formData);
    alert("Music uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-600 p-3 rounded-2xl shadow-lg">
              <Music className="text-white w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-green-500 mb-2">Upload Your Music</h1>
          <p className="text-white text-lg">Share your music with the world in a few simple steps</p>
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-100">
            <div 
              className="h-full bg-gradient-to-r from-green-600 to-blue-500 transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>

          <div className="p-8">
            {/* Step Indicator */}
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
              {["Cover Art", "Track Details", "Audio File", "Review"].map((label, index) => (
                <div key={index} className="flex flex-col items-center z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                      step > index + 1
                        ? "bg-green-500 border-green-500 text-white shadow-lg"
                        : step === index + 1
                        ? "bg-white border-green-600 text-green-600 shadow-lg"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {step > index + 1 ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span className={`text-sm mt-3 font-medium ${
                    step >= index + 1 ? "text-green-500" : "text-gray-400"
                  }`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="max-w-2xl mx-auto">
              {/* Step 1 - Upload Cover */}
              {step === 1 && (
                <div className="text-center">
                  <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ImageIcon className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Upload Cover Art</h3>
                  <p className="text-white mb-8">Add a professional cover image for your track</p>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      name="cover"
                      accept="image/*"
                      onChange={handleChange}
                      className="hidden"
                      id="cover-upload"
                    />
                    <label htmlFor="cover-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-white mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG, JPEG (Max. 10MB)</p>
                    </label>
                  </div>
                  
                  {formData.cover && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-green-700 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        {formData.cover.name} uploaded successfully
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2 - Music Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Track Information</h3>
                  <p className="text-white mb-8">Provide details about your music</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-3">
                        Music Name *
                      </label>
                      <input
                        type="text"
                        name="musicName"
                        value={formData.musicName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent transition-all"
                        placeholder="Enter track title"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-3">
                        Artist Name *
                      </label>
                      <input
                        type="text"
                        name="artistName"
                        value={formData.artistName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent transition-all"
                        placeholder="Enter artist name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-semibold mb-3">
                      Genre *
                    </label>
                    <select
                      name="genre"
                      value={formData.genre}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black focus:border-transparent transition-all appearance-none bg-white"
                    >
                      <option value="">Select Genre</option>
                      <option value="Pop">Pop</option>
                      <option value="Hip-Hop">Hip-Hop</option>
                      <option value="Rock">Rock</option>
                      <option value="Jazz">Jazz</option>
                      <option value="Gospel">Gospel</option>
                      <option value="Electronic">Electronic</option>
                      <option value="Classical">Classical</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3 - Upload Music File */}
              {step === 3 && (
                <div className="text-center">
                  <div className="bg-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FileAudio className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Upload Audio File</h3>
                  <p className="text-white mb-8">Upload your high-quality audio file</p>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 hover:border-purple-400 transition-colors">
                    <input
                      type="file"
                      name="musicFile"
                      accept="audio/*"
                      onChange={handleChange}
                      className="hidden"
                      id="music-upload"
                    />
                    <label htmlFor="music-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-white mb-2">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">MP3, WAV, FLAC (Max. 100MB)</p>
                    </label>
                  </div>
                  
                  {formData.musicFile && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-green-700 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        {formData.musicFile.name} uploaded successfully
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 4 - Review */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Review Submission</h3>
                  <p className="text-white mb-8">Please review your information before submitting</p>
                  
                  <div className="bg-black/50 rounded-2xl p-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-500">Music Name</label>
                        <p className="font-semibold text-green-500">{formData.musicName || "Not provided"}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Artist Name</label>
                        <p className="font-semibold text-green-500">{formData.artistName || "Not provided"}</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-500">Genre</label>
                      <p className="font-semibold text-green-500">{formData.genre || "Not provided"}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-500">Cover Art</label>
                        <p className="font-semibold text-green-500">
                          {formData.cover ? formData.cover.name : "Not uploaded"}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Audio File</label>
                        <p className="font-semibold text-green-500">
                          {formData.musicFile ? formData.musicFile.name : "Not uploaded"}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-blue-700 text-sm">
                      By submitting, you agree to our terms of service and confirm you have the rights to distribute this content.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-500">
              <button
                onClick={handleBack}
                className={`flex items-center px-6 py-3 rounded-xl transition-all ${
                  step > 1 
                    ? "bg-gray-100 text-black hover:bg-gray-200" 
                    : "invisible"
                }`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
              
              {step < 4 ? (
                <button
                  onClick={handleNext}
                  className="ml-auto px-8 py-3 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl font-semibold"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="ml-auto px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl hover:from-green-700 hover:to-green-600 transition-all shadow-lg hover:shadow-xl font-semibold"
                >
                  Submit Music
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadMusic;
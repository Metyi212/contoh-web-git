import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Image as ImageIcon, Upload, X, Calendar, Tag, Plus, Grid3x3, Grid2x2 } from "lucide-react";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadData, setUploadData] = useState({
    title: "",
    description: "",
    category: "School Events",
    event_date: "",
    featured: false
  });
  const [uploading, setUploading] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const queryClient = useQueryClient();

  const { data: galleryItems, isLoading } = useQuery({
    queryKey: ['gallery'],
    queryFn: () => base44.entities.Gallery.list('-created_date'),
    initialData: [],
  });

  const createMutation = useMutation({
    mutationFn: (data) => base44.entities.Gallery.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['gallery'] });
      setIsUploadOpen(false);
      setUploadData({
        title: "",
        description: "",
        category: "School Events",
        event_date: "",
        featured: false
      });
    },
  });

  const categories = ["All", "School Events", "Classroom Activities", "Graduation Ceremonies", "Sports & Recreation", "Islamic Celebrations", "Field Trips", "Arts & Crafts", "Other"];

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      setUploadData(prev => ({ ...prev, image_url: file_url }));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setUploading(false);
  };

  const handleSubmit = () => {
    if (!uploadData.image_url || !uploadData.title) return;
    createMutation.mutate(uploadData);
  };

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full clay-shadow text-sm font-medium text-purple-700 mb-4" style={{ background: 'rgba(196, 181, 253, 0.3)' }}>
            Photo Gallery
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Capturing Our Moments
          </h1>
          <p className="text-lg text-purple-700 max-w-3xl mx-auto mb-8">
            Browse through our collection of cherished memories, celebrating achievements, events, and everyday moments at Az-Zahrah.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
              <DialogTrigger asChild>
                <Button className="px-6 py-3 rounded-2xl font-semibold clay-shadow-hover transition-all duration-300" style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)', color: 'white' }}>
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Photo
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl clay-shadow rounded-3xl" style={{ background: 'rgba(250, 245, 255, 0.98)' }}>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-purple-900">Upload New Photo</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6 py-4">
                  {/* File Upload */}
                  <div>
                    <Label className="text-purple-900 mb-2 block">Photo</Label>
                    <div className="clay-shadow rounded-2xl p-8 text-center cursor-pointer hover:clay-inset transition-all" style={{ background: 'rgba(196, 181, 253, 0.2)' }}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        {uploadData.image_url ? (
                          <div className="relative">
                            <img src={uploadData.image_url} alt="Preview" className="max-h-48 mx-auto rounded-2xl" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute top-2 right-2 clay-shadow rounded-xl"
                              onClick={(e) => {
                                e.preventDefault();
                                setUploadData(prev => ({ ...prev, image_url: "" }));
                              }}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <Upload className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                            <p className="text-purple-700 font-medium">
                              {uploading ? "Uploading..." : "Click to upload photo"}
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <Label htmlFor="title" className="text-purple-900 mb-2 block">Title</Label>
                    <Input
                      id="title"
                      value={uploadData.title}
                      onChange={(e) => setUploadData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter photo title"
                      className="clay-shadow rounded-2xl"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="text-purple-900 mb-2 block">Description</Label>
                    <Textarea
                      id="description"
                      value={uploadData.description}
                      onChange={(e) => setUploadData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe the photo..."
                      className="clay-shadow rounded-2xl h-24"
                    />
                  </div>

                  {/* Category & Date */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category" className="text-purple-900 mb-2 block">Category</Label>
                      <Select
                        value={uploadData.category}
                        onValueChange={(value) => setUploadData(prev => ({ ...prev, category: value }))}
                      >
                        <SelectTrigger className="clay-shadow rounded-2xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.filter(c => c !== "All").map((category) => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="event_date" className="text-purple-900 mb-2 block">Event Date</Label>
                      <Input
                        id="event_date"
                        type="date"
                        value={uploadData.event_date}
                        onChange={(e) => setUploadData(prev => ({ ...prev, event_date: e.target.value }))}
                        className="clay-shadow rounded-2xl"
                      />
                    </div>
                  </div>
                </div>

                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsUploadOpen(false)}
                    className="rounded-2xl"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!uploadData.image_url || !uploadData.title || createMutation.isPending}
                    className="rounded-2xl"
                    style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%)', color: 'white' }}
                  >
                    Upload Photo
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <div className="flex gap-2 clay-shadow rounded-2xl p-1" style={{ background: 'rgba(250, 245, 255, 0.8)' }}>
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className={`rounded-xl ${viewMode === "grid" ? 'clay-inset' : ''}`}
              >
                <Grid3x3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "masonry" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("masonry")}
                className={`rounded-xl ${viewMode === "masonry" ? 'clay-inset' : ''}`}
              >
                <Grid2x2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 clay-shadow-hover ${
                  selectedCategory === category
                    ? 'clay-inset text-purple-900'
                    : 'text-purple-700 hover:text-purple-900'
                }`}
                style={{ background: 'rgba(250, 245, 255, 0.8)' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 clay-shadow rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
              <ImageIcon className="w-8 h-8 text-purple-900 animate-pulse" />
            </div>
            <p className="text-purple-700">Loading gallery...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 clay-shadow rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
              <ImageIcon className="w-10 h-10 text-purple-900" />
            </div>
            <h3 className="text-2xl font-bold text-purple-900 mb-2">No Photos Yet</h3>
            <p className="text-purple-700 mb-6">Be the first to upload a photo to the gallery!</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"}
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="clay-shadow rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
                  style={{ background: 'rgba(250, 245, 255, 0.8)', breakInside: 'avoid' }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden clay-soft" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-purple-900 flex-1">{item.title}</h3>
                      {item.featured && (
                        <div className="w-8 h-8 clay-shadow rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)' }}>
                          <span className="text-lg">⭐</span>
                        </div>
                      )}
                    </div>
                    
                    {item.description && (
                      <p className="text-sm text-purple-700 line-clamp-2">{item.description}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl clay-soft text-xs font-medium text-purple-700">
                        <Tag className="w-3 h-3" />
                        {item.category}
                      </div>
                      {item.event_date && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl clay-soft text-xs font-medium text-purple-700">
                          <Calendar className="w-3 h-3" />
                          {format(new Date(item.event_date), "MMM d, yyyy")}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl clay-shadow rounded-3xl p-0" style={{ background: 'rgba(250, 245, 255, 0.98)' }}>
            {selectedImage && (
              <div>
                <div className="relative clay-soft rounded-t-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #C4B5FD 0%, #A5F3FC 100%)' }}>
                  <img
                    src={selectedImage.image_url}
                    alt={selectedImage.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-purple-900 mb-2">{selectedImage.title}</h2>
                      {selectedImage.description && (
                        <p className="text-lg text-purple-700 leading-relaxed">{selectedImage.description}</p>
                      )}
                    </div>
                    {selectedImage.featured && (
                      <div className="w-12 h-12 clay-shadow rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)' }}>
                        <span className="text-2xl">⭐</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-purple-200">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl clay-shadow text-sm font-medium text-purple-700">
                      <Tag className="w-4 h-4" />
                      {selectedImage.category}
                    </div>
                    {selectedImage.event_date && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl clay-shadow text-sm font-medium text-purple-700">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(selectedImage.event_date), "MMMM d, yyyy")}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
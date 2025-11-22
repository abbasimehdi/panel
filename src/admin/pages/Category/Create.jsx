import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
  const [formData, setFormData] = useState({
    name: '',
    icon: 'fas fa-list',
    parent_id: null
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  // Search states for parent category
  const [parentSearch, setParentSearch] = useState("");
  const [parentResults, setParentResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value === '' ? null : value
    }));
  };

  // Fetch categories from API while typing
  const handleParentSearch = async (value) => {
    setParentSearch(value);
    if (value.trim() === "") {
      setParentResults([]);
      return;
    }

    setSearchLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8000/api/getCategories?search=${value}`
      );
      setParentResults(response.data);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost:8000/api/categories', formData);
      
      if (response.data.message === 'Category created successfully') {
        setSuccess('دسته‌بندی با موفقیت ایجاد شد!');
        setFormData({
          name: '',
          icon: 'fas fa-list',
          parent_id: null
        });
        
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'خطا در ایجاد دسته‌بندی');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  // Icon options
  const iconOptions = [
    'fas fa-list',
    'fas fa-folder',
    'fas fa-tags',
    'fas fa-box',
    'fas fa-shopping-cart',
    'fas fa-utensils',
    'fas fa-t-shirt',
    'fas fa-laptop',
    'fas fa-mobile-alt',
    'fas fa-book',
    'fas fa-gamepad',
    'fas fa-home',
    'fas fa-heart',
    'fas fa-star'
  ];

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-12 col-lg-12">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-primary text-white py-3">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="mb-0">
                <i className="fas fa-plus-circle ms-2"></i>
                ایجاد دسته‌بندی جدید
              </h4>
              <button 
                className="btn btn-light btn-sm"
                onClick={handleCancel}
                disabled={loading}
              >
                <i className="fas fa-arrow-right me-1"></i>
                بازگشت
              </button>
            </div>
          </div>

          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>

              {/* Category Name */}
              <div className="mb-4">
                <label htmlFor="name" className="form-label fw-semibold">
                  <i className="fas fa-heading me-2 text-primary"></i>
                  نام دسته‌بندی *
                </label>
                <div className="input-group input-group-lg">
                  <span className="input-group-text bg-light">
                    <i className="fas fa-font text-muted"></i>
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="مثال: الکترونیک، پوشاک، غذا..."
                    disabled={loading}
                    className="form-control"
                  />
                </div>
              </div>

              {/* Icon Selector */}
              <div className="mb-4">
                <label className="form-label fw-semibold">
                  <i className="fas fa-icons me-2 text-warning"></i>
                  انتخاب آیکون
                </label>
                <div className="mb-3">
                  <div className="row g-2">
                    {iconOptions.map((icon, index) => (
                      <div key={index} className="col-3 col-sm-2">
                        <div 
                          className={`card h-100 text-center p-2 cursor-pointer ${
                            formData.icon === icon 
                              ? 'border-primary bg-primary text-white' 
                              : 'border-light'
                          }`}
                          onClick={() => setFormData({...formData, icon})}
                        >
                          <div className="card-body p-2">
                            <i className={`${icon} fa-lg mb-2 d-block`}></i>
                            <small className="d-block text-truncate">
                              {icon.split(' ')[2]?.replace('fa-', '')}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <label htmlFor="icon" className="form-label small text-muted">
                    یا آیکون دلخواه وارد کنید:
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <i className="fas fa-pencil-alt text-muted"></i>
                    </span>
                    <input
                      type="text"
                      id="icon"
                      name="icon"
                      value={formData.icon}
                      onChange={handleChange}
                      placeholder="fas fa-your-icon"
                      disabled={loading}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              {/* Searchable Parent Category */}
              <div className="mb-4">
                <label className="form-label fw-semibold">
                  <i className="fas fa-sitemap me-2 text-success"></i>
                  دسته‌بندی والد (قابل جستجو)
                </label>

                <div className="input-group">
                  <span className="input-group-text bg-light">
                    <i className="fas fa-search text-muted"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="جستجو در دسته‌بندی‌ها..."
                    value={parentSearch}
                    onChange={(e) => handleParentSearch(e.target.value)}
                  />
                </div>

                {parentSearch.length > 0 && (
                  <div className="mt-2 border rounded bg-white" 
                    style={{ maxHeight: "200px", overflowY: "auto" }}>
                    
                    {searchLoading && (
                      <div className="p-2 text-muted">در حال جستجو...</div>
                    )}

                    {!searchLoading && parentResults.length === 0 && (
                      <div className="p-2 text-muted">نتیجه‌ای یافت نشد</div>
                    )}

                    {parentResults.map((cat) => (
                      <div
                        key={cat.id}
                        onClick={() => {
                          setFormData({ ...formData, parent_id: cat.id });
                          setParentSearch(cat.name);
                          setParentResults([]);
                        }}
                        className="p-2 border-bottom"
                        style={{ cursor: "pointer" }}
                      >
                        <i className={`${cat.icon} me-2`}></i>
                        {cat.name}
                      </div>
                    ))}
                  </div>
                )}

                {formData.parent_id && (
                  <div className="mt-2 text-success">
                    <i className="fas fa-check-circle me-1"></i>
                    والد انتخاب شده: {parentSearch}
                  </div>
                )}
              </div>

              {/* Preview */}
              <div className="mb-4">
                <div className="card border-info">
                  <div className="card-header bg-info text-white py-2">
                    <i className="fas fa-eye me-2"></i>
                    پیش‌نمایش
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className={`${formData.icon} fa-2x text-primary me-3`}></div>
                      <div>
                        <h6 className="mb-1 fw-bold">
                          {formData.name || 'نام دسته‌بندی'}
                        </h6>

                        <span className={`badge ${
                          formData.parent_id ? 'bg-warning text-dark' : 'bg-success'
                        }`}>
                          {formData.parent_id ? 'زیردسته' : 'دسته‌بندی اصلی'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="row g-3 mt-4 pt-3 border-top">
                <div className="col-6">
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-2"
                    disabled={loading || !formData.name.trim()}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm ms-2"></span>
                        در حال ایجاد...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-check me-2"></i>
                        ایجاد دسته‌بندی
                      </>
                    )}
                  </button>
                </div>
                <div className="col-6">
                  <button 
                    type="button"
                    className="btn btn-outline-secondary w-100 py-2"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    <i className="fas fa-times me-2"></i>
                    انصراف
                  </button>
                </div>
              </div>
            </form>

            {/* Alerts */}
            {success && (
              <div className="alert alert-success mt-4 d-flex align-items-center">
                <i className="fas fa-check-circle me-2"></i>
                {success}
              </div>
            )}

            {error && (
              <div className="alert alert-danger mt-4 d-flex align-items-center">
                <i className="fas fa-exclamation-triangle me-2"></i>
                {error}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;

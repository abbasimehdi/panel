import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "./auth/Auth.jsx";
import axios from "axios";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getCategories');
        setCategories(response.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Function to render category icon
  const renderCategoryIcon = (category) => {
    if (category.icon) {
      // If icon is provided in API, use it
      return <i className={`${category.icon} me-2`}></i>;
    } else {
      // Default icons based on whether category has children
      const hasChildren = category.children_recursive && category.children_recursive.length > 0;
      return hasChildren ? 
        <i className="fas fa-folder me-2"></i> : 
        <i className="fas fa-file me-2 text-muted"></i>;
    }
  };

  // Recursive function to render multi-level categories
  const renderCategoryItem = (category, level = 0) => {
    const hasChildren = category.children_recursive && category.children_recursive.length > 0;
    const isTopLevel = level === 0;

    // Calculate padding for visual hierarchy
    const paddingRight = 15 + (level * 20);

    if (hasChildren) {
      return (
        <li key={category.id} className={isTopLevel ? "nav-item dropdown" : "dropdown-submenu"}>
          {/* Dropdown toggle */}
          <a
            className={isTopLevel ? "nav-link dropdown-toggle" : "dropdown-item dropdown-toggle"}
            href="#"
            id={`category-${category.id}`}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={!isTopLevel ? { paddingRight: `${paddingRight}px` } : {}}
          >
            {renderCategoryIcon(category)}
            {category.name}
            {!isTopLevel && <span className="dropdown-arrow">›</span>}
          </a>

          {/* Dropdown menu */}
          <ul 
            className={`dropdown-menu ${!isTopLevel ? 'dropdown-submenu' : ''}`}
            aria-labelledby={`category-${category.id}`}
          >
            {/* Parent category link */}
            <li>
              <Link 
                className="dropdown-item fw-bold text-primary border-bottom mb-2"
                to={`/category/${category.id}`}
                style={{ paddingRight: `${paddingRight}px` }}
              >
                <i className="fas fa-list me-2"></i>
                همه {category.name}
              </Link>
            </li>

            {/* Render children recursively */}
            {category.children_recursive.map(child => 
              renderCategoryItem(child, level + 1)
            )}
          </ul>
        </li>
      );
    }

    // Simple category link without children
    return (
      <li key={category.id} className={isTopLevel ? "nav-item" : ""}>
        <Link
          className={isTopLevel ? "nav-link" : "dropdown-item"}
          to={`/category/${category.id}`}
          style={!isTopLevel ? { paddingRight: `${paddingRight}px` } : {}}
        >
          {renderCategoryIcon(category)}
          {category.name}
        </Link>
      </li>
    );
  };

  // Get only top-level categories (parent_id is null)
  const getTopLevelCategories = () => {
    return categories.filter(category => category.parent_id === null);
  };

  // Render all categories in the navigation
  const renderCategoriesNavigation = () => {
    const topLevelCategories = getTopLevelCategories();

    if (loading) {
      return (
        <li className="nav-item">
          <a className="nav-link" href="#" style={{ cursor: 'not-allowed' }}>
            <span className="spinner-border spinner-border-sm me-2"></span>
            در حال بارگذاری...
          </a>
        </li>
      );
    }

    if (error) {
      return (
        <li className="nav-item">
          <a className="nav-link text-warning" href="#" title={error}>
            <i className="fas fa-exclamation-triangle me-2"></i>
            خطا در بارگذاری
          </a>
        </li>
      );
    }

    if (topLevelCategories.length === 0) {
      return (
        <li className="nav-item">
          <a className="nav-link text-muted" href="#">
            <i className="fas fa-inbox me-2"></i>
            هیچ دسته‌بندی‌ای وجود ندارد
          </a>
        </li>
      );
    }

    return topLevelCategories.map(category => 
      renderCategoryItem(category, 0)
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" dir="rtl">
      <div className="container position-relative">

        {/* Auth buttons on visual left */}
        <div className="position-absolute start-0">
          <Auth />
        </div>

        {/* Centered brand */}
        <Link className="navbar-brand mx-auto fw-bold" to="/">
          <i className="fas fa-layer-group me-2"></i>
          مای اپ
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="تغییر ناوبری"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Main menu - Only Home and Categories */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {/* HOME */}
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <i className="fas fa-home me-2"></i>
                خانه
              </Link>
            </li>

            {/* INDIVIDUAL CATEGORY MENUS */}
            {renderCategoriesNavigation()}
          </ul>
        </div>
      </div>

      {/* Custom CSS for multi-level dropdowns */}
      <style jsx>{`
        .dropdown-submenu {
          position: relative;
        }
        
        .dropdown-submenu .dropdown-menu {
          top: 0;
          right: 100%;
          margin-top: -6px;
          margin-right: -1px;
          border-radius: 0.375rem;
        }
        
        .dropdown-submenu:hover .dropdown-menu {
          display: block;
        }
        
        .dropdown-arrow {
          float: left;
          margin-left: 5px;
          transform: rotate(180deg);
        }
        
        @media (max-width: 991.98px) {
          .dropdown-submenu .dropdown-menu {
            position: static;
            margin: 0;
            border: none;
            box-shadow: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Menu;
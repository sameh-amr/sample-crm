import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <img src="/images/img_proserv_logo_thought_bubble_1.png" alt="ProServ Logo" className="h-10" />
      </div>
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          <li>
            <Link 
              to="/" 
              className={`sidebar-item ${isActive('/') ? 'active' : ''}`}
            >
              <img src="/images/img_vector.svg" alt="" className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/clients" 
              className={`sidebar-item ${isActive('/clients') ? 'active' : ''}`}
            >
              <img src="/images/img_vector_16x20.svg" alt="" className="w-4 h-5" />
              <span>Clients</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={`sidebar-item ${isActive('/services') ? 'active' : ''}`}
            >
              <img src="/images/img_frame.svg" alt="" className="w-4 h-4" />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/templates" 
              className={`sidebar-item ${isActive('/templates') ? 'active' : ''}`}
            >
              <img src="/images/img_vector_16x12.svg" alt="" className="w-4 h-3" />
              <span>Templates</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/jobs" 
              className={`sidebar-item ${isActive('/jobs') ? 'active' : ''}`}
            >
              <img src="/images/img_frame_16x16.svg" alt="" className="w-4 h-4" />
              <span>Jobs</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/automations" 
              className={`sidebar-item ${isActive('/automations') ? 'active' : ''}`}
            >
              <img src="/images/img_vector_1.svg" alt="" className="w-4 h-5" />
              <span>Automations</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/billing" 
              className={`sidebar-item ${isActive('/billing') ? 'active' : ''}`}
            >
              <img src="/images/img_vector_2.svg" alt="" className="w-4 h-3" />
              <span>Billing</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/reports" 
              className={`sidebar-item ${isActive('/reports') ? 'active' : ''}`}
            >
              <img src="/images/img_frame_16x18.svg" alt="" className="w-4 h-4.5" />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link 
              to="/settings" 
              className={`sidebar-item ${isActive('/settings') ? 'active' : ''}`}
            >
              <img src="/images/img_frame_1.svg" alt="" className="w-4 h-4" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
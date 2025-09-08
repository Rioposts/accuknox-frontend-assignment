import React, { useState, useMemo } from 'react';
import useDashboardStore from '../store/dashboardStore';
import './AddWidgetModal.css';

const AddWidgetModal = ({ categoryId, onClose }) => {
  // Get what we need from the store
  const { addWidget, availableWidgets, searchTerm, setSearchTerm } = useDashboardStore();

  // Get the widgets already in the current category to disable them in the list
  const currentCategoryWidgets = useDashboardStore(
    (state) => state.categories.find((c) => c.id === categoryId)?.widgets || []
  );

  // Filter the list of available widgets based on the search term
  const filteredWidgets = useMemo(() => {
    return availableWidgets.filter((widget) =>
      widget.widgetTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [availableWidgets, searchTerm]);

  const handleAddWidget = (widget) => {
    addWidget(categoryId, widget);
    onClose(); // Close the modal after adding
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add Widget</h2>
        <p>Personalize your dashboard by adding the following widgets.</p>

        {/* Search Input */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search widgets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* List of Widgets */}
        <div className="widget-list">
          {filteredWidgets.length > 0 ? (
            filteredWidgets.map((widget) => {
              const isAlreadyAdded = currentCategoryWidgets.some(
                (w) => w.id === widget.id
              );
              return (
                <div
                  key={widget.id}
                  className={`widget-list-item ${isAlreadyAdded ? 'disabled' : ''}`}
                  onClick={() => !isAlreadyAdded && handleAddWidget(widget)}
                >
                  <span>{widget.widgetTitle}</span>
                  {isAlreadyAdded && <span className="added-tag">Added</span>}
                </div>
              );
            })
          ) : (
            <p className="no-results">No widgets found.</p>
          )}
        </div>

        <div className="form-actions">
          <button type="button" onClick={onClose} className="btn-cancel">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
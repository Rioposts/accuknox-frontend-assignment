import React, { useState } from 'react';
import useDashboardStore from '../store/dashboardStore';
import './AddWidgetModal.css';

const AddWidgetModal = ({ categoryId, onClose }) => {
  const addWidget = useDashboardStore((state) => state.addWidget);
  const [widgetTitle, setWidgetTitle] = useState('');
  const [widgetContent, setWidgetContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!widgetTitle || !widgetContent) return; // Basic validation

    const newWidget = {
      widgetTitle,
      content: widgetContent,
    };

    addWidget(categoryId, newWidget);
    onClose(); // Close the modal after adding
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add New Widget</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="widgetTitle">Widget Title</label>
            <input
              type="text"
              id="widgetTitle"
              value={widgetTitle}
              onChange={(e) => setWidgetTitle(e.target.value)}
              placeholder="e.g., New Alerts"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="widgetContent">Widget Content</label>
            <textarea
              id="widgetContent"
              value={widgetContent}
              onChange={(e) => setWidgetContent(e.target.value)}
              placeholder="Enter some text for the widget body..."
              required
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-confirm">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;
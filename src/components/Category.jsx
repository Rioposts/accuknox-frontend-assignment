import React from 'react';
import Widget from './Widget';
import useDashboardStore from '../store/dashboardStore';
import './Category.css';

const Category = ({ id: categoryId, title, widgets, onAddWidget }) => {
  const removeWidget = useDashboardStore((state) => state.removeWidget);

  return (
    <section className="category">
      <h2 className="category-title">{title}</h2>
      <div className="widgets-grid">
        {widgets.map((widget) => (
          <Widget
            key={widget.id}
            categoryId={categoryId}
            widgetId={widget.id}
            title={widget.widgetTitle}
            content={widget.content}
            onRemove={() => removeWidget(categoryId, widget.id)}
          />
        ))}
        {/* This button will now open our modal! */}
        <div className="add-widget-placeholder" onClick={onAddWidget}>
          + Add Widget
        </div>
      </div>
    </section>
  );
};

export default Category;
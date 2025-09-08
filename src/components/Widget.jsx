import React from 'react';
import CloudAccountChart from './charts/CloudAccountChart';
import ImageRiskChart from './charts/ImageRiskChart';
import './Widget.css';

// This is our "smart" content renderer
const renderWidgetContent = (widget) => {
  // If the widget has chartData, decide which chart to show
  if (widget.chartData) {
    switch (widget.id) {
      case 'cloud-accounts':
        return <CloudAccountChart data={widget.chartData} />;
      case 'image-risk':
        return <ImageRiskChart data={widget.chartData} />;
      default:
        // Fallback for other potential charts
        return <p>{JSON.stringify(widget.chartData)}</p>;
    }
  }
  // Otherwise, just show the plain text content
  return <p>{widget.content}</p>;
};

const Widget = ({ widget, onRemove }) => {
  return (
    <div className="widget">
      <div className="widget-header">
        <h3 className="widget-title">{widget.widgetTitle}</h3>
        <button onClick={onRemove} className="remove-widget-btn">×</button>
      </div>
      <div className="widget-content">
        {renderWidgetContent(widget)}
      </div>
    </div>
  );
};

export default Widget;
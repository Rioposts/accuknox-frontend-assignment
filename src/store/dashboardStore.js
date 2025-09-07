import { create } from 'zustand';
import { produce } from 'immer';
import initialData from '../dashboardData.json'; 

const useDashboardStore = create((set) => ({
  // 1. THE STATE: Our initial data comes from the JSON file
  categories: initialData,

  // 2. THE ACTIONS: Functions that will change the state
  addWidget: (categoryId, newWidget) =>
    set(
      produce((state) => {
        const category = state.categories.find((c) => c.id === categoryId);
        if (category) {
          category.widgets.push({
            id: `widget-${Date.now()}`, 
            ...newWidget,
          });
        }
      })
    ),

  removeWidget: (categoryId, widgetId) =>
    set(
      produce((state) => {
        const category = state.categories.find((c) => c.id === categoryId);
        if (category) {
          category.widgets = category.widgets.filter((w) => w.id !== widgetId);
        }
      })
    ),
}));

export default useDashboardStore;
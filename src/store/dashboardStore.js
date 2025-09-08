import { create } from 'zustand';
import { produce } from 'immer';
import initialData from '../dashboardData.json';
import allWidgets from '../availableWidgets.json'; 

const useDashboardStore = create((set) => ({
  
  categories: initialData,
  availableWidgets: allWidgets,
  searchTerm: '', 

  
  setSearchTerm: (term) => set({ searchTerm: term }), 

  addWidget: (categoryId, widget) =>
    set(
      produce((state) => {
        const category = state.categories.find((c) => c.id === categoryId);
        if (category) {
          
          const widgetExists = category.widgets.some((w) => w.id === widget.id);
          if (!widgetExists) {
            category.widgets.push(widget);
          }
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
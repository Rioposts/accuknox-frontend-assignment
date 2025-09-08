import { create } from 'zustand';
import { produce } from 'immer';
import initialData from '../dashboardData.json';
import allWidgets from '../availableWidgets.json'; // Import the master list

const useDashboardStore = create((set) => ({
  // STATE
  categories: initialData,
  availableWidgets: allWidgets,
  searchTerm: '', // New state for the search term

  // ACTIONS
  setSearchTerm: (term) => set({ searchTerm: term }), // New action to update the search term

  addWidget: (categoryId, widget) =>
    set(
      produce((state) => {
        const category = state.categories.find((c) => c.id === categoryId);
        if (category) {
          // Check to prevent adding the same widget twice
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

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openItem: ['dashboard'],
  defaultId: 'dashboard',
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true,
  is_activeLoading: false,
  isAutoPeople: true,
};


const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeLoading(state) {
      state.is_activeLoading = !state.is_activeLoading;
    },

    activeAuth(state) {
      state.isAutoPeople = false
    },

    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    },
  }
});

export default menu.reducer;

export const { activeItem, activeComponent, openDrawer, openComponentDrawer, activeLoading, activeAuth } = menu.actions;

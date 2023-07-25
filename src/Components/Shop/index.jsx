import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../routes/CategoriesPreview';
import Category from '../../routes/Category';

import "./shop.scss";

export default function Shop() {

  return (
      <Routes>
        <Route index element={<CategoriesPreview />}/>
        <Route path=":category" element={<Category />}/>
      </Routes>
  );
}

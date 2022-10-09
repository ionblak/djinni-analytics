import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { NotFound } from './pages/notFound'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

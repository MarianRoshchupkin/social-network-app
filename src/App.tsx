import React, { useEffect, useState } from 'react';
import './main.global.css';
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { Sprite } from "./shared/Icons/Sprite";
import { Authentication } from "./shared/Authentication";
import { UserPage } from "./shared/UserPage";
import { useUser } from "./hooks/useUser";
import { Provider } from 'react-redux';
import { rootReducer} from "./store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import {EditPage} from "./shared/UserPage/EditPage";
import {DownloadModal} from "./shared/DownloadModal";
import {PostsList} from "./shared/PostsList";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  const [mounted, setMounted] = useState(false);
  const [user] = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted && (user.loginError
    || user.signupError
    || user.signupSuccess
    || Object.keys(user).length === 0)
  ) {
    return <Authentication user={user} />
  }

  return (
    <div>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <Sprite />
              <Routes>
                {Object.keys(user).length === 0 && (
                  <Route path='/signup' element={<Navigate to='/posts' replace />} />
                ) || (
                  <Route path='/login' element={<Navigate to='/posts' replace />} />
                )}
                <Route path='/' element={<Navigate to='/posts' replace />} />
                <Route path='/posts' element={<PostsList />} />
                <Route path='/user/:username' element={<UserPage />} />
                <Route path='/user/:username/modal' element={<DownloadModal />} />
                <Route path='/updateUserData' element={<Navigate to='/edit' replace />} />
                <Route path='/edit' element={<EditPage />} />
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </div>
  );
}

export const App = () =>
  <Provider store={store}>
    <AppComponent />
  </Provider>
;

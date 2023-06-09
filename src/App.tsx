import React from "react"
import './main.global.css'
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout'
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";


// import { UserContextProvider } from "./shared/context/userContext";
import { BestPostContextProvider } from "./shared/context/bestPostContext";

import { Provider } from 'react-redux'
import { setToken, store, } from "./store/store";
import { saveToken } from "./store/token/actions";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Post } from "./shared/Post";
import { NotFound } from "./shared/NotFound";





function AppComponent() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, [])

    React.useEffect(() => {
        //@ts-ignore
        store.dispatch(saveToken())
    }, [])
    return (
        <Provider store={store}>
            {mounted && (<BrowserRouter>
                <BestPostContextProvider>
                    <Layout>
                        <Header />
                        <Content>
                            {/* <CardsList /> */}
                            <Routes>
                                <Route path="/" element={<CardsList />}/>
                                <Route path="posts/*" element={<CardsList />}/>
                                <Route path="/auth" element={<Navigate to="/posts"/>}/>
                                <Route path="*" element={<NotFound />}/>
                            </Routes>

                        </Content>
                    </Layout>
                </BestPostContextProvider>
            </BrowserRouter>)}
        </Provider>
    )
}

export const App = hot(() => <AppComponent />);




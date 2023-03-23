import '@/styles/globals.css';
import {Provider} from "react-redux";
import createWrapper from '@/app/lib/store/createStore';
import {useEffect} from "react";
import {checkAuth} from "@/app/lib/controllers/authController";
import HFLayout from "@/processes/Layouts/MainLayout/HFLayout";

const wrapper = createWrapper({});
function App({ Component, pageProps }) {
    const {store} = wrapper.useWrappedStore(pageProps);

    return (
        <Provider store={store}>
            <HFLayout>
                <Component {...pageProps} />
            </HFLayout>
        </Provider>
    )
}

export default App;

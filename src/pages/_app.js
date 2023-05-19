import '@/styles/globals.css';
import {Provider} from "react-redux";
import createWrapper from '@/app/lib/store/createStore';
import HFLayout from "@/processes/Layouts/MainLayout/HFLayout";
import {SessionProvider} from "next-auth/react"

const wrapper = createWrapper({});
function App({ Component, pageProps}) {
    const {store} = wrapper.useWrappedStore(pageProps);
    return (
        <SessionProvider session={pageProps.session}>
            <Provider store={store}>
                <HFLayout>
                    <Component {...pageProps} />
                </HFLayout>
            </Provider>
        </SessionProvider>
    )
}


export default App;

import { Suspense } from "react";
import { lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";


const RenderLoading = () => <div>Loading.......</div>
const LazyComponent = lazy(() => import("./LazyComponent"));
export default () => {
    return (
        <div>
            <h1>Home page</h1>
            <ErrorBoundary>
            <Suspense fallback={RenderLoading} >
            <LazyComponent />
                </Suspense>
                </ErrorBoundary>
        </div>
    )
}
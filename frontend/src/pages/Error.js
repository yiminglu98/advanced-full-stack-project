import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent"
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'An error occured';
    let message = 'Something went wrong!';

    if(error.status === 500){
        message = JSON.parse(error.data) .message;
    };

    if(error.status === 404){
        title = '404 NOT FOUND';
        message = 'Could not find resources';
    }

    return <>
    <MainNavigation/>
    <PageContent title={title}>
        <p>{message}</p>
    </PageContent>;
    </>

};

export default ErrorPage;
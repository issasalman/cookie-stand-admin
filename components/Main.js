import Form from './Form';
import ReportTable from './ReportTable';


function Main({ cookiesData,sumOfSums ,deleteHandler}) {

    return (
        <main className="flex flex-col items-center ">
            {cookiesData.length > 0 ? <ReportTable deleteHandler={deleteHandler} sumOfSums={sumOfSums} cookiesData={cookiesData} /> : <p className="pt-8 text-xl  text-center">No Cookie Stands Available</p>}

        </main>
    );
}
export default Main;

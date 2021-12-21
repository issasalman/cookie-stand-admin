import Form from './Form';
import ReportTable from './ReportTable';


function Main({ cookiesData,sumOfSums }) {

    return (
        <main className="flex flex-col items-center ">
            {cookiesData.length > 0 ? <ReportTable sumOfSums={sumOfSums} cookiesData={cookiesData} /> : <p className="pt-8 text-xl  text-center">No Cookie Stands Available</p>}

        </main>
    );
}
export default Main;

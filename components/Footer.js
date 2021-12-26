import Overview from "../pages/overview";

const Footer = (props) => {
  console.log(props);
  return (
    <div className="mt-8 p-4 text-gray-900 bg-emerald-500">
      {props.flags ? (
       <></>
      ) : (
        <p className="text-l text-center">{`${props.standCounter} Locations World Wide`}</p>
      )}
    </div>
  );
};
export default Footer;

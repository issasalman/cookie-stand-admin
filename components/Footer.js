import Overview from "../pages/overview";

const Footer = (props) => {
  console.log(props);
  return (
    <div className="flex justify-between mt-8 p-4 text-gray-900 bg-emerald-500">
      {props.flags ? (
       <></>
      ) : (
        <p className="text-l">{`${props.standCounter} Locations World Wide`}</p>
      )}
    </div>
  );
};
export default Footer;

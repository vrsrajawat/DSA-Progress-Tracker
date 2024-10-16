import { ClipLoader } from 'react-spinners';

function Loader() {
  return (
    <div>
      <ClipLoader loading={true} size={50} />
    </div>
  );
}

export default Loader; // Exporting the component for use in other files.
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Alerts({ redirectUrl }) {

    console.log('Alertprops', redirectUrl);

    const MySwal = withReactContent(Swal)
    const navigate = useNavigate();

    MySwal.fire({
        title: <p>Success</p>,
        text: 'Records created successfully.',

    }).then(result => {

        if (result) navigate(redirectUrl)

    }).catch(error => {
        console.log('AlertError', error)  // when promise rejected...
    });

    return (
        <>
            {MySwal}
        </>

    )
}

export default Alerts


import swal from 'sweetalert';
import Title from '../../../components/Title';
import useAxiosPrivet from '../../../hooks/useAxiosPrivet';


const AddPublisher = () => {
    
  const axiosPrivet = useAxiosPrivet()  

  const handleAddPublisher = (e) =>{
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const photo = form.photo.value
    const userInfo = {name, photo}
    axiosPrivet.post('/publisher', userInfo)
    .then(res => {
     console.log(res);
        if (res.data.insertedId) {
            e.target.reset()
            swal("Great", "A Publisher Added Successfully", "success");
        }
    })
  }



    

    return (
        <>
            <div className="publisherForm mt-8">
                <Title>Add Publisher</Title><br />
                <form onSubmit={handleAddPublisher}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-green-600">Publisher Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Publisher Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-green-600">Publisher Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Publisher Photo" className="input input-bordered w-full" />
                        </label>
                    </div> <br />
                    <input type="submit" value="Add Article" className="btn btn-block btn-secondary bg-fuchsia-600 w-full border border-0" />   
                </form>  
            </div>
        </>
    );
};

export default AddPublisher;